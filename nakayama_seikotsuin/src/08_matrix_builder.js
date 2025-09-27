// 互換API名（フロントが旧関数名でも動く）
function getMatrixFromAnchor(anchorYmd, days){ return getWeeklyMatrixFromAnchor(anchorYmd, days); }
function getWeeklyMatrixUnified(anchorYmd, days){ return getWeeklyMatrixFromAnchor(anchorYmd, days); }

function getWeeklyMatrixFromAnchor(anchorYmd, days){
  var start = anchorYmd || toYmd(new Date());
  var dcnt = Number(days || 7);
  var ymdList = [];
  var base = dateFromYmd(start);
  for (var i=0;i<dcnt;i++){
    ymdList.push(toYmd(new Date(base.getTime()+i*86400000)));
  }
  return buildWeeklyMatrix_(ymdList);
}

/** v1.0の合成順序を踏襲し、DTOも互換 */
function buildWeeklyMatrix_(ymdList){
  var settings = getReservationSettings_();
  var unitMin = Number(settings['予約の最小単位（分）'] || 15);
  var deadlineMs = deadlineMsFromSettings_(settings);
  var concurrentMax = Number(settings['同時予約可能数（人）'] || 1);

  // v1.0同様：日付ごと解決済みの営業時間マップを先に作る
  var hourMap = getBusinessHourMap_(ymdList[0]); // ←startYmd基準の1週間分

  // 付随データ
  var holidays = getHolidayRanges_(); // 店都合の時間帯休業があるなら利用
  var services = getServiceList_();
  var serviceStaff = getServiceStaffMap_();
  var staff = getStaffList_();

  var days = ymdList.map(function(ymd){
    // A: 開店ウィンドウ → unitMinに刻む（祝日休業はgetBusinessHourMap_で解決済み）
    var slots = buildTimeGridFromMap_(ymd, unitMin, hourMap, holidays);

    // B: スタッフ予定（休暇等）で不可を反映（v1.0相当）
    var scheduleOfDay = (getScheduleMap_(ymd)[ymd] || []);
    slots = applySchedules_(slots, staff, scheduleOfDay);

    // C: サービス×担当スタッフ交差
    slots = crossServiceStaff_(slots, services, serviceStaff);

    // D: 予約で埋まる（同時枠）
    var year = Number(ymd.slice(0,4));
    var reservationMap = getReservationMap_(year);
    var reservations = reservationMap[ymd] || [];
    slots = applyReservations_(slots, reservations, concurrentMax);

    // E: 締切を full に合成（v1.0互換：受付不可=full扱い）
    slots = applyDeadlineAsFull_(slots, ymd, deadlineMs);

    return toDtoDay_(ymd, slots);
  });

  var meta = { unitMin: unitMin, reservationSettings: settings, deadlineMs: deadlineMs, categories: [] };
  return { meta: meta, services: services, serviceStaff: serviceStaff, staff: staff, days: days };
}

/** v1.0: 営業時間ウィンドウを unitMin で刻む */
function buildTimeGridFromMap_(ymd, unitMin, hourMap, holidays){
  var windows = (hourMap[ymd] || []); // [{start,end,startMin,endMin}]
  var slots = [];
  windows.forEach(function(w){
    for (var t=w.startMin; t<w.endMin; t+=unitMin) {
      slots.push({ tStart:t, tEnd:t+unitMin, closed:false });
    }
  });
  // 店都合の時間帯休業がある場合のみ適用（無ければスルー）
  (holidays||[]).forEach(function(h){
    var y = toYmd(h.startDate||h['開始日']||'');
    var y2= toYmd(h.endDate||h['終了日']||'') || y;
    if (!y || ymd < y || ymd > y2) return;
    var hs = toMinutes(h.startTime||h['開始時間']||'00:00');
    var he = toMinutes(h.endTime||h['終了時間']||'24:00');
    slots.forEach(function(s){ if (s.tStart < he && hs < s.tEnd) s.closed = true; });
  });
  return slots.filter(function(s){ return !s.closed; });
}

/** 休暇等の予定で時間帯×スタッフを不可化（v1.0相当の最小） */
function applySchedules_(slots, staffList, scheduleOfDay){
  return slots.map(function(s){
    var blocked = {};
    (scheduleOfDay||[]).forEach(function(row){
      var stf = String(row['スタッフID']||row['ID']||'');
      var hs = toMinutes(row['開始時間']||row['開始時刻']||'00:00');
      var he = toMinutes(row['終了時間']||row['終了時刻']||'24:00');
      if (s.tStart < he && hs < s.tEnd){ blocked[stf] = true; }
    });
    var availableStaff = (staffList||[]).map(function(st){ return st.id; })
      .filter(function(id){ return !blocked[id]; });
    return Object.assign({}, s, { staff: availableStaff });
  });
}

/** サービス×担当スタッフの交差（v1.0同等） */
function crossServiceStaff_(slots, services, serviceStaffMap){
  return slots.map(function(s){
    var svc = {};
    (services||[]).forEach(function(sv){
      var allowed = (serviceStaffMap[sv.id] || []).filter(function(stid){ return (s.staff||[]).indexOf(stid) >= 0; });
      if (allowed.length) svc[sv.id] = allowed;
    });
    return Object.assign({}, s, { svcStaff: svc });
  });
}

/** 予約の重なりで満枠判定（同時枠適用） */
function applyReservations_(slots, reservations, concurrentMax){
  var occ = new Array(slots.length).fill(0);
  (reservations||[]).forEach(function(r){
    var rs = toMinutes(r['開始時間']||r['開始時刻']||r['Start']||r['開始']||'');
    var re = toMinutes(r['終了時間']||r['終了時刻']||r['End']||r['終了']||'');
    for (var i=0;i<slots.length;i++){
      if (slots[i].tStart < re && rs < slots[i].tEnd) occ[i]++;
    }
  });
  return slots.map(function(s,i){ return Object.assign({}, s, { full: occ[i] >= (concurrentMax||1) }); });
}

/** 締切は v1.0互換で full に合成（受付不可=full扱い） */
function applyDeadlineAsFull_(slots, anchorYmd, deadlineMs){
  if (!deadlineMs) return slots;
  var now = Date.now();
  var base = dateFromYmd(anchorYmd).getTime();
  return slots.map(function(s){
    var slotStartMs = base + s.tStart * 60 * 1000;
    var closedByDeadline = (slotStartMs - now) < deadlineMs;
    return Object.assign({}, s, { full: !!(s.full || closedByDeadline) });
  });
}

/** DTO（日次） */
function toDtoDay_(ymd, slots){
  return {
    ymd: ymd,
    slots: (slots||[]).map(function(s){
      return { start: fromMinutes(s.tStart), end: fromMinutes(s.tEnd), full: !!s.full, svcStaff: s.svcStaff || {} };
    })
  };
}

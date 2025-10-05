# misemaru_cloud
みせまるクラウド（予約システム）

■ 概要
- Google Apps Script（Web アプリ）とスプレッドシートで動作する予約管理。
- 顧客向け予約、スタッフ/管理向け画面、メール通知、各種マスタ設定を提供。

■ フォルダ構成（主要）
- `clasp/00_constants.js` … 列名やシート名、各種定数の集中管理
- `clasp/01_utils.js` … 共通ユーティリティ（日付/時刻・シートI/O 等）
- `clasp/02_routerCode.js` … ルーティング、認可（ID トークン検証）
- `clasp/03_01_*` … 予約ドメインの共通ロジック
- `clasp/03_02_*` … 管理側の予約処理
- `clasp/03_03_*` … 顧客側の予約処理
- `clasp/03_04_*` … 通知メール（顧客向け/管理向け）
- `clasp/04_0*_matrix_*` … 予約カレンダー用のAPI・ビルダ
- `clasp/06_*.js` … 顧客マスタ関連
- `clasp/07_settings.js` … 設定（基本/営業/休業/サービス/キャンセルポリシー）
- `clasp/09_cache_utils.js` … CacheService キーと無効化ユーティリティ
- `clasp/3*.html, 4*.html, 6*.html` … 各画面のHTML（Bootstrap ベース）

■ デプロイ手順（clasp）
1. `clasp login`（未ログインの場合）
2. `clasp push` で `clasp/` 配下を Apps Script に反映
3. スクリプト プロパティを設定
   - `RESERVATION_SS_ID` … 予約スプレッドシートID
   - `MASTER_SS_ID` … マスタスプレッドシートID
   - `CLIENT_ID` … 親サイト側の Google Identity Services の Client ID
4. 「デプロイ > 新しいデプロイ > 種類: ウェブアプリ」
   - 実行権限: 適宜（本構成では `USER_DEPLOYING`）
   - アクセス権: 運用要件に合わせる（匿名アクセスの場合はフロントでトークン検証）

■ セキュリティ/認可
- 親サイト側で取得した ID トークンを埋め込み先（GAS）へ postMessage。GAS 側で `verifyAndGetRole` により検証。
- 画面ロードはトークン検証結果で制御。
- 設定系の書き込みAPIには簡易サーバガード（管理/スタッフ）を実装（`07_settings.js`）。
  - 匿名実行時はフロント側の検証/画面制御を前提に通過（ActiveUser が空の場合）。

■ 主要機能
- ヘッダ駆動のシートI/O（列名の別名対応で将来の変更に強い）
- キャッシュ設計（週単位無効化、各マスタのキー管理）
- 予約の容量/時間重複チェック（所要時間×単位×容量の積算）
- 通知メール（顧客/管理宛、差分表示、TO/CC ルール）
- 予約カレンダーの週表示、サービスタブ、締切・上限日表現

## ポートフォリオ向け概要

- 代表画面
  - 顧客: 予約カレンダー（`clasp/32_reservation.html`）
  - 顧客: 予約確認・キャンセル（`clasp/33_confirm.html`）
  - 管理: スタッフ空き状況（`clasp/31_availability_staff.html`）

- こだわりポイント
  - UI/UX: 固定ヘッダ・スティッキー表・モーダル、モバイル最適化（行高/最小幅調整）
  - 設計: ルーティングの抽象化（`PAGES`/`PAGE_ROUTES`）、postMessage による親子連携、トークン検証
  - 表現: 受付締切/上限日のセル状態（要TEL・締切越え・当日/過去）とレジェンド、重複検知モーダル
  - スタイル: 共通CSSと顧客CSSを分離しトークン化（カスタムプロパティ）

- 技術スタック
  - Google Apps Script（HTML Service）
  - Bootstrap 5
  - Google Sheets（データ永続化）

- スクリーンショット（任意）
  - docs/images 以下に配置して README から参照予定
    - docs/images/reservation.png
    - docs/images/confirm.png
    - docs/images/availability.png

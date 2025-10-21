const SUPPORTED_LANGS = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "zh-CN", label: "中文" },
  { code: "es", label: "Español" },
  { code: "ko", label: "한국어" },
];

const DICT = {
  ja: {
      languageStepTitle: "ご利用の言語を選択してください",
      languageStepDescription: "みせまるクラウドの店舗ポータルをお好みの言語で表示します。",
      languageStepHint: "選択内容はブラウザに保存され、次回から自動で適用されます。",
      languageLabel: "言語",
      startButton: "開始する",
      heroTitle: "みせまるクラウド",
      heroLead: "Googleサービスを利用して無料でオリジナルの予約サイトを作成できます。",
      storeAccessTitle: "店舗にアクセス",
      storeAccessDescription: "みせまるクラウド認証済みの Google Web App URL を入力して、店舗の予約サイトを表示します。",
      gasIdLabel: "Web App URL",
      gasIdPlaceholder: "例: https://script.google.com/macros/s/AKfycbwXXXXXXXXXXXXXXX/exec",
      verifyButton: "店舗を確認",
      verifyingMessage: "店舗情報を確認しています…",
      notFoundMessage: "該当する店舗が見つかりませんでした。",
      unverifiedMessage: "この店舗はまだ認証プロセスが完了していません。",
      errorMessage: "店舗情報の取得中に問題が発生しました。しばらくしてから再度お試しください。",
      verifiedBadge: "認証済み店舗",
      countryLabel: "国",
      servicesLabel: "提供サービス",
      servicesUnknown: "店舗から共有されたサービス情報がここに表示されます。",
      unknownCountry: "国情報なし",
      openStoreButton: "新しいタブで店舗を開く",
      embedToggleShow: "ページを表示",
      embedToggleHide: "埋め込みを閉じる",
      createStoreTitle: "店舗を開設する",
      createStoreDescription: "予約サイトの立ち上げと、みせまるクラウドへの登録認証を行います。",
      createStoreButton: "店舗開設ガイドへ",
      browseStoresTitle: "認証済み店舗を探す",
      browseStoresDescription: "国・サービスカテゴリから公開中の店舗一覧を参照できます。",
      browseStoresButton: "店舗一覧を見る",
      featuresTitle: "今後追加予定の機能",
      featureMap: "世界地図での店舗検索（Google Maps API 連携）",
      featureReviews: "お客様レビューの公開・翻訳表示",
      featureDonate: "みせまるクラウドを支える寄付プログラム",
      featureLanguageAuto: "ブラウザ言語の自動判定と候補提示",
      featureAdmin: "管理者向けの認証ワークフローとダッシュボード",
      registryMissingMessage: "レジストリ API が設定されていないため、モックデータで動作しています。",
      mockWarning: "デモモードで表示しています。実際の店舗情報とは異なる場合があります。",
      gasIdRequired: "店舗の WebアプリURL を入力してください。",
      statusSuccess: "認証済み店舗が見つかりました。下の操作から続きを行ってください。",
      verifiedOnLabel: "最終認証日",
      loadingStoreStage1: "店舗情報確認中…",
      loadingStoreStage2: "店舗表示準備中…",
      loadingStoreMessage: "店舗情報確認中…",
      createPageTitle: "店舗開設ガイド",
      createPageLead: "みせまるクラウドに店舗を登録するための準備〜公開手順をまとめました。",
      createSectionBasicsTitle: "準備：基本設定",
      createStepAccount: "Google Workspace または Google アカウントを用意し、必要な権限を確認します。",
      createStepSpreadsheet: "テンプレートスプレッドシートをコピーし、スクリプトプロパティ（シート ID / Client ID など）を設定します。",
      createStepBranding: "店舗ロゴやカラーテーマ、対応言語、連絡先情報を整理します。",
      createSectionDeploymentTitle: "デプロイ＆検証",
      createStepDeploy: "GAS をウェブアプリとしてデプロイし、最新の実行 URL を控えます。",
      createStepWhitelist: "Google Identity Services の Client ID を設定し、必要に応じてアクセスユーザーをホワイトリスト登録します。",
      createStepRegistry: "公認ストアレジストリに GAS ID と店舗情報を登録し、検証をリクエストします。",
      createContactTitle: "サポート",
      createContactBody: "不明点は管理者コミュニティまたはサポート窓口 support@misemaru.cloud までお問い合わせください。",
      backToPortal: "ポータルに戻る",
      storesPageTitle: "認証済み店舗一覧",
      storesPageLead: "みせまるクラウド認定店舗を国やサービスカテゴリで検索できます。",
      storesFilterLabel: "国で絞り込む",
      storesFilterAll: "すべて",
      storesTableHeaderName: "店舗名",
      storesTableHeaderCountry: "国",
      storesTableHeaderServices: "サービス",
      storesTableHeaderStatus: "ステータス",
      storesStatusVerified: "認証済み",
      storesStatusPending: "審査中",
      storesStatusUnverified: "未認証",
      storesActionOpen: "開く",
      storesEmpty: "現在、公開されている店舗はありません。",
      storesUpdatedAt: "最終更新",
      storesLoading: "一覧を読み込んでいます…",
      storesError: "店舗リストの取得に失敗しました。時間を置いて再度お試しください。",
      storesCountryUnknown: "国指定なし",
    },
  en: {
      languageStepTitle: "Choose your language",
      languageStepDescription: "Pick the language you'd like to use across the Misemaru Cloud portal.",
      languageStepHint: "Your choice is saved in this browser for next time.",
      languageLabel: "Language",
      startButton: "Start",
      heroTitle: "Misemaru Cloud",
      heroLead: "Use Google tools to build your own booking site for free.",
      storeAccessTitle: "Access a store",
      storeAccessDescription: "Enter the verified Misemaru Cloud Google Web App URL to open the store booking page.",
      gasIdLabel: "Store Web App URL",
      gasIdPlaceholder: "Example: https://script.google.com/macros/s/AKfycbwXXXXXXXXXXXXXXX/exec",
      verifyButton: "Check store",
      verifyingMessage: "Checking store registry…",
      notFoundMessage: "No matching store was found.",
      unverifiedMessage: "This store has not completed the verification process yet.",
      errorMessage: "We ran into an issue while fetching the store information. Please try again later.",
      verifiedBadge: "Verified Store",
      countryLabel: "Country",
      servicesLabel: "Services",
      servicesUnknown: "The service catalog will appear here once the store shares it.",
      unknownCountry: "Country not specified",
      openStoreButton: "Open in new tab",
      embedToggleShow: "Show this page",
      embedToggleHide: "Hide embedded view",
      createStoreTitle: "Create a store",
      createStoreDescription: "Launch your booking site and complete Misemaru Cloud registration.",
      createStoreButton: "Open setup guide",
      browseStoresTitle: "Explore verified stores",
      browseStoresDescription: "Browse the public directory by country or service category.",
      browseStoresButton: "View directory",
      featuresTitle: "Roadmap highlights",
      featureMap: "Interactive map with Google Maps integration",
      featureReviews: "Translated customer reviews for verified stores",
      featureDonate: "Global “Support Misemaru Cloud” donation link",
      featureLanguageAuto: "Automatic language detection with smart suggestions",
      featureAdmin: "Lightweight admin dashboard for store verification",
      registryMissingMessage: "Registry API is not configured, using mock data for preview.",
      mockWarning: "Demo mode: the information shown may differ from production.",
      gasIdRequired: "Please enter the store Web App URL.",
      statusSuccess: "Verified store found. Opening options below.",
      verifiedOnLabel: "Verified on",
      loadingStoreStage1: "Confirming store details…",
      loadingStoreStage2: "Preparing store view…",
      loadingStoreMessage: "Confirming store details…",
      createPageTitle: "Store Onboarding Guide",
      createPageLead: "Follow this checklist to prepare, deploy, and verify your Misemaru Cloud store.",
      createSectionBasicsTitle: "Preparation: essentials",
      createStepAccount: "Ensure you have a Google Workspace or Google account with the required permissions.",
      createStepSpreadsheet: "Copy the template spreadsheet and configure script properties (Sheet IDs, Client ID, etc.).",
      createStepBranding: "Collect your branding assets, theme colors, supported languages, and contact details.",
      createSectionDeploymentTitle: "Deploy & verify",
      createStepDeploy: "Deploy the GAS web app and note the latest execution URL.",
      createStepWhitelist: "Configure your Google Identity Services client ID and whitelist authorized accounts if needed.",
      createStepRegistry: "Submit your GAS ID and store data to the official registry to request verification.",
      createContactTitle: "Need help?",
      createContactBody: "Reach the admin community or support@misemaru.cloud for assistance.",
      backToPortal: "Back to portal",
      storesPageTitle: "Verified Store Directory",
      storesPageLead: "Browse public Misemaru Cloud stores by country or service category.",
      storesFilterLabel: "Filter by country",
      storesFilterAll: "All",
      storesTableHeaderName: "Store",
      storesTableHeaderCountry: "Country",
      storesTableHeaderServices: "Services",
      storesTableHeaderStatus: "Status",
      storesStatusVerified: "Verified",
      storesStatusPending: "Reviewing",
      storesStatusUnverified: "Unverified",
      storesActionOpen: "Open",
      storesEmpty: "No public stores are listed yet.",
      storesUpdatedAt: "Last update",
      storesLoading: "Loading directory…",
      storesError: "We could not load the directory. Please try again later.",
    storesCountryUnknown: "Not specified",
  },
  "zh-CN": {
      languageStepTitle: "选择使用语言",
      languageStepDescription: "请选择在 Misemaru Cloud 门户中使用的语言。",
      languageStepHint: "系统会记住您的选择，下次访问会自动应用。",
      languageLabel: "语言",
      startButton: "开始",
      heroTitle: "Misemaru Cloud",
      heroLead: "使用 Google 服务免费创建专属预约网站。",
      storeAccessTitle: "访问门店",
      storeAccessDescription: "输入已通过 Misemaru Cloud 认证的 Google Web App URL，打开门店预约页面。",
      gasIdLabel: "门店 Web 应用 URL",
      gasIdPlaceholder: "示例: https://script.google.com/macros/s/AKfycbwXXXXXXXXXXXXXXX/exec",
      verifyButton: "查看门店",
      verifyingMessage: "正在检查门店注册信息…",
      notFoundMessage: "未找到匹配的门店。",
      unverifiedMessage: "该门店尚未完成认证流程。",
      errorMessage: "获取门店信息时发生错误，请稍后再试。",
      verifiedBadge: "已认证门店",
      countryLabel: "国家/地区",
      servicesLabel: "提供服务",
      servicesUnknown: "门店分享的服务项目将在此显示。",
      unknownCountry: "未提供国家/地区",
      openStoreButton: "在新标签页打开",
      embedToggleShow: "显示此页面",
      embedToggleHide: "关闭嵌入视图",
      createStoreTitle: "创建门店",
      createStoreDescription: "上线预约网站并完成 Misemaru Cloud 注册认证。",
      createStoreButton: "查看上线指引",
      browseStoresTitle: "浏览已认证门店",
      browseStoresDescription: "按国家或服务类别查看公开的门店列表。",
      browseStoresButton: "查看门店列表",
      featuresTitle: "即将上线的功能",
      featureMap: "结合 Google Maps 的全球门店地图",
      featureReviews: "已认证门店的客户评价与翻译",
      featureDonate: "“支持 Misemaru Cloud” 全球捐赠入口",
      featureLanguageAuto: "自动检测浏览器语言并推荐候选项",
      featureAdmin: "简易的门店认证管理控制台",
      registryMissingMessage: "尚未配置注册 API，当前使用演示数据。",
      mockWarning: "演示模式：显示的信息可能与正式环境不同。",
      gasIdRequired: "请输入门店的 Web 应用 URL。",
      statusSuccess: "已找到认证门店。请使用下方选项继续。",
      verifiedOnLabel: "认证日期",
      loadingStoreStage1: "正在确认门店信息…",
      loadingStoreStage2: "正在准备门店页面…",
      loadingStoreMessage: "正在确认门店信息…",
      createPageTitle: "门店上线指南",
      createPageLead: "按照下面的步骤准备、部署并完成 Misemaru Cloud 门店的认证。",
      createSectionBasicsTitle: "准备：基础信息",
      createStepAccount: "确保您拥有具备必要权限的 Google Workspace 或 Google 帐号。",
      createStepSpreadsheet: "复制模板表格并配置脚本属性（表格 ID、Client ID 等）。",
      createStepBranding: "整理门店品牌素材、主题颜色、支持语言和联系方式。",
      createSectionDeploymentTitle: "部署与认证",
      createStepDeploy: "将 GAS 部署为网络应用，并记录最新的执行 URL。",
      createStepWhitelist: "配置 Google Identity Services 的 Client ID，并在需要时设置白名单。",
      createStepRegistry: "向官方注册表提交 GAS ID 和门店信息，请求审核。",
      createContactTitle: "需要帮助？",
      createContactBody: "欢迎联系管理员社区或发送邮件至 support@misemaru.cloud。",
      backToPortal: "返回门户",
      storesPageTitle: "认证门店目录",
      storesPageLead: "按国家或服务类别浏览公开的 Misemaru Cloud 门店。",
      storesFilterLabel: "按国家筛选",
      storesFilterAll: "全部",
      storesTableHeaderName: "门店名称",
      storesTableHeaderCountry: "国家/地区",
      storesTableHeaderServices: "服务",
      storesTableHeaderStatus: "状态",
      storesStatusVerified: "已认证",
      storesStatusPending: "审核中",
      storesStatusUnverified: "未认证",
      storesActionOpen: "打开",
      storesEmpty: "当前没有公开的门店。",
      storesUpdatedAt: "最近更新",
      storesLoading: "正在载入门店列表…",
      storesError: "获取门店列表失败，请稍后再试。",
      storesCountryUnknown: "未指定",
    },
  es: {
      languageStepTitle: "Elige tu idioma",
      languageStepDescription: "Selecciona el idioma que quieres usar en el portal de Misemaru Cloud.",
      languageStepHint: "Guardaremos tu elección en este navegador para futuras visitas.",
      languageLabel: "Idioma",
      startButton: "Comenzar",
      heroTitle: "Misemaru Cloud",
      heroLead: "Crea tu propio sitio de reservas gratis con los servicios de Google.",
      storeAccessTitle: "Acceder a una tienda",
      storeAccessDescription: "Introduce la URL de Google Web App verificada por Misemaru Cloud para abrir la página de reservas.",
      gasIdLabel: "URL de la aplicación web de la tienda",
      gasIdPlaceholder: "Ejemplo: https://script.google.com/macros/s/AKfycbwXXXXXXXXXXXXXXX/exec",
      verifyButton: "Ver tienda",
      verifyingMessage: "Comprobando el registro de la tienda…",
      notFoundMessage: "No se encontró ninguna tienda con ese identificador.",
      unverifiedMessage: "Esta tienda aún no ha completado el proceso de verificación.",
      errorMessage: "Se produjo un problema al obtener la información de la tienda. Inténtalo de nuevo más tarde.",
      verifiedBadge: "Tienda verificada",
      countryLabel: "País",
      servicesLabel: "Servicios",
      servicesUnknown: "El catálogo de servicios aparecerá aquí cuando la tienda lo comparta.",
      unknownCountry: "País no especificado",
      openStoreButton: "Abrir en una nueva pestaña",
      embedToggleShow: "Mostrar en esta página",
      embedToggleHide: "Ocultar vista incrustada",
      createStoreTitle: "Crear una tienda",
      createStoreDescription: "Lanza tu sitio de reservas y completa la verificación de Misemaru Cloud.",
      createStoreButton: "Ir a la guía",
      browseStoresTitle: "Explorar tiendas verificadas",
      browseStoresDescription: "Consulta el directorio público por país o categoría de servicio.",
      browseStoresButton: "Ver directorio",
      featuresTitle: "Funciones en el roadmap",
      featureMap: "Mapa interactivo con integración de Google Maps",
      featureReviews: "Reseñas de clientes traducidas para tiendas verificadas",
      featureDonate: "Botón global “Apoyar Misemaru Cloud”",
      featureLanguageAuto: "Detección automática de idioma con sugerencias inteligentes",
      featureAdmin: "Panel ligero para verificar nuevas tiendas",
      registryMissingMessage: "La API del registro no está configurada; se muestran datos de demostración.",
      mockWarning: "Modo demo: la información mostrada puede diferir de la versión oficial.",
      gasIdRequired: "Introduce la URL de la aplicación web de la tienda.",
      statusSuccess: "Tienda verificada encontrada. Usa las opciones siguientes para continuar.",
      verifiedOnLabel: "Verificada el",
      loadingStoreStage1: "Confirmando la información de la tienda…",
      loadingStoreStage2: "Preparando la vista de la tienda…",
      loadingStoreMessage: "Confirmando la información de la tienda…",
      createPageTitle: "Guía de incorporación de tiendas",
      createPageLead: "Sigue estos pasos para preparar, desplegar y verificar tu tienda Misemaru Cloud.",
      createSectionBasicsTitle: "Preparación: elementos clave",
      createStepAccount: "Asegúrate de contar con una cuenta de Google Workspace o Google con los permisos necesarios.",
      createStepSpreadsheet: "Copia la hoja de cálculo plantilla y configura las propiedades del script (IDs, Client ID, etc.).",
      createStepBranding: "Reúne tus recursos de marca, colores, idiomas disponibles y datos de contacto.",
      createSectionDeploymentTitle: "Despliegue y verificación",
      createStepDeploy: "Despliega la app web de GAS y guarda la URL de ejecución más reciente.",
      createStepWhitelist: "Configura el Client ID de Google Identity Services y, si hace falta, define las cuentas autorizadas.",
      createStepRegistry: "Envía tu GAS ID y los datos de la tienda al registro oficial para solicitar la verificación.",
      createContactTitle: "¿Necesitas ayuda?",
      createContactBody: "Contacta con la comunidad de administradores o escribe a support@misemaru.cloud.",
      backToPortal: "Volver al portal",
      storesPageTitle: "Directorio de tiendas verificadas",
      storesPageLead: "Consulta las tiendas públicas de Misemaru Cloud por país o categoría de servicio.",
      storesFilterLabel: "Filtrar por país",
      storesFilterAll: "Todos",
      storesTableHeaderName: "Tienda",
      storesTableHeaderCountry: "País",
      storesTableHeaderServices: "Servicios",
      storesTableHeaderStatus: "Estado",
      storesStatusVerified: "Verificada",
      storesStatusPending: "En revisión",
      storesStatusUnverified: "Sin verificar",
      storesActionOpen: "Abrir",
      storesEmpty: "Todavía no hay tiendas públicas.",
      storesUpdatedAt: "Última actualización",
      storesLoading: "Cargando directorio…",
      storesError: "No se pudo cargar la lista. Inténtalo de nuevo más tarde.",
      storesCountryUnknown: "No especificado",
    },
  ko: {
      languageStepTitle: "사용할 언어를 선택하세요",
      languageStepDescription: "Misemaru Cloud 포털에서 사용할 언어를 선택합니다.",
      languageStepHint: "선택한 언어는 브라우저에 저장되어 다음 방문 시 자동으로 적용됩니다.",
      languageLabel: "언어",
      startButton: "시작하기",
      heroTitle: "Misemaru Cloud",
      heroLead: "Google 서비스를 활용해 무료로 나만의 예약 사이트를 만들 수 있습니다.",
      storeAccessTitle: "매장 접속",
      storeAccessDescription: "Misemaru Cloud 인증 Google Web App URL을 입력해 매장 예약 페이지를 확인하세요.",
      gasIdLabel: "매장 Web 앱 URL",
      gasIdPlaceholder: "예: https://script.google.com/macros/s/AKfycbwXXXXXXXXXXXXXXX/exec",
      verifyButton: "매장 확인",
      verifyingMessage: "매장 등록 정보를 확인하는 중…",
      notFoundMessage: "해당하는 매장을 찾을 수 없습니다.",
      unverifiedMessage: "이 매장은 아직 인증 절차를 완료하지 않았습니다.",
      errorMessage: "매장 정보를 가져오는 동안 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.",
      verifiedBadge: "인증된 매장",
      countryLabel: "국가",
      servicesLabel: "제공 서비스",
      servicesUnknown: "매장에서 공유한 서비스 정보가 여기에 표시됩니다.",
      unknownCountry: "국가 정보 없음",
      openStoreButton: "새 탭에서 열기",
      embedToggleShow: "페이지에서 보기",
      embedToggleHide: "임베드 숨기기",
      createStoreTitle: "매장 개설하기",
      createStoreDescription: "예약 사이트를 열고 Misemaru Cloud 등록 인증을 진행합니다.",
      createStoreButton: "개설 가이드 보기",
      browseStoresTitle: "인증된 매장 둘러보기",
      browseStoresDescription: "국가 또는 서비스 카테고리별로 공개 매장을 확인하세요.",
      browseStoresButton: "매장 목록 보기",
      featuresTitle: "향후 제공 예정 기능",
      featureMap: "Google Maps 연동 글로벌 매장 지도",
      featureReviews: "인증 매장 고객 리뷰 및 번역 표시",
      featureDonate: "“Misemaru Cloud 지원” 글로벌 후원 버튼",
      featureLanguageAuto: "브라우저 언어 자동 감지 및 추천",
      featureAdmin: "매장 인증용 경량 관리자 대시보드",
      registryMissingMessage: "등록 API가 설정되지 않아 데모 데이터로 동작합니다.",
      mockWarning: "데모 모드: 표시되는 정보는 실제와 다를 수 있습니다.",
      gasIdRequired: "매장의 Web 앱 URL을 입력하세요.",
      statusSuccess: "인증된 매장을 찾았습니다. 아래 옵션으로 계속 진행하세요.",
      verifiedOnLabel: "인증 날짜",
      loadingStoreStage1: "매장 정보를 확인하는 중…",
      loadingStoreStage2: "매장 화면을 준비하는 중…",
      loadingStoreMessage: "매장 정보를 확인하는 중…",
      createPageTitle: "매장 개설 가이드",
      createPageLead: "다음 체크리스트를 따라 Misemaru Cloud 매장을 준비, 배포, 인증하세요.",
      createSectionBasicsTitle: "준비: 기본 항목",
      createStepAccount: "필요한 권한이 있는 Google Workspace 또는 Google 계정을 준비합니다.",
      createStepSpreadsheet: "템플릿 스프레드시트를 복사하고 스크립트 속성(시트 ID, Client ID 등)을 설정합니다.",
      createStepBranding: "매장 브랜드 자산, 테마 색상, 지원 언어, 연락처 정보를 정리합니다.",
      createSectionDeploymentTitle: "배포 및 검증",
      createStepDeploy: "GAS를 웹 앱으로 배포하고 최신 실행 URL을 기록합니다.",
      createStepWhitelist: "Google Identity Services Client ID를 설정하고 필요 시 승인 계정을 화이트리스트에 등록합니다.",
      createStepRegistry: "공식 레지스트리에 GAS ID와 매장 정보를 제출하여 검증을 요청합니다.",
      createContactTitle: "도움이 필요하신가요?",
      createContactBody: "관리자 커뮤니티 또는 support@misemaru.cloud 로 문의해 주세요.",
      backToPortal: "포털로 돌아가기",
      storesPageTitle: "인증된 매장 디렉터리",
      storesPageLead: "국가 및 서비스 카테고리별로 공개된 Misemaru Cloud 매장을 확인하세요.",
      storesFilterLabel: "국가 필터",
      storesFilterAll: "전체",
      storesTableHeaderName: "매장명",
      storesTableHeaderCountry: "국가",
      storesTableHeaderServices: "서비스",
      storesTableHeaderStatus: "상태",
      storesStatusVerified: "인증됨",
      storesStatusPending: "검토 중",
      storesStatusUnverified: "미인증",
      storesActionOpen: "열기",
      storesEmpty: "공개된 매장이 아직 없습니다.",
      storesUpdatedAt: "업데이트",
      storesLoading: "매장 목록을 불러오는 중…",
      storesError: "매장 목록을 가져오지 못했습니다. 잠시 후 다시 시도해 주세요.",
      storesCountryUnknown: "국가 정보 없음",
    },
};

const DEFAULT_PRELOADER_MESSAGE_KEY = "loadingStoreStage1";
const DEFAULT_INLINE_PRELOADER_MESSAGE_KEY = "loadingStoreStage2";

const LS_KEY = "misemaru_lang";
const LANG_PARAM = "lang";
const GAS_PARAM = "gasId";

const state = {
  lang: "en",
  store: null,
  statusKey: null,
  statusTone: "info",
  preloaderMessageKey: DEFAULT_PRELOADER_MESSAGE_KEY,
  inlinePreloaderMessageKey: DEFAULT_INLINE_PRELOADER_MESSAGE_KEY,
  inlinePreloaderTimer: null,
  usedMock: false,
  autoOpenTargetId: "",
  autoOpenActive: false,
  activeFriendlyId: "",
  pendingFriendlyId: "",
  friendlyRetryCount: 0,
  lastFriendlyRequested: "",
  directoryStores: [],
  directoryFilter: "",
  directoryCountries: [],
  directoryUpdatedAt: null,
  directorySource: "",
  directoryLoading: false,
  directoryError: false,
  activePage: "",
  activePageParams: {},
  pendingPage: "",
  pendingPageParams: {},
};

let portalOverlayTimer = null;
let currentChildWindow = null;
let forceShowSigninOnce = false;

// Portal-side navigation overlay for history-driven transitions
function showPortalOverlay() {
  const body = document.body;
  if (!body) return;
  if (portalOverlayTimer) {
    clearTimeout(portalOverlayTimer);
    portalOverlayTimer = null;
  }
  const existing = document.getElementById("portalNavOverlay");
  if (existing) existing.remove();

  if (!document.getElementById("portalNavOverlayStyles")) {
    const styleEl = document.createElement("style");
    styleEl.id = "portalNavOverlayStyles";
    styleEl.textContent = `
@keyframes portal-nav-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
#portalNavOverlay .portal-mini-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top-color: #38bdf8;
  border-radius: 50%;
  animation: portal-nav-spin 1s linear infinite;
  margin: 0 auto 12px;
}
#portalNavOverlay .portal-nav-message {
  font-weight: 600;
  color: #0f172a;
}`;
    (document.head || body).appendChild(styleEl);
  }

  const overlay = document.createElement("div");
  overlay.id = "portalNavOverlay";
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.zIndex = "9999";
  overlay.style.backdropFilter = "blur(4px)";
  overlay.style.background = "rgba(255,255,255,0.55)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.innerHTML = `
    <div style="text-align:center; font-size:15px;">
      <div class="portal-mini-spinner" aria-hidden="true"></div>
      <div class="portal-nav-message">読み込み中…</div>
    </div>`;
  body.appendChild(overlay);
  portalOverlayTimer = window.setTimeout(() => {
    portalOverlayTimer = null;
    hidePortalOverlay();
  }, 10000);
}

function hidePortalOverlay() {
  if (portalOverlayTimer) {
    clearTimeout(portalOverlayTimer);
    portalOverlayTimer = null;
  }
  const overlay = document.getElementById("portalNavOverlay");
  if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
}

function flushForceShowSignin() {
  if (!forceShowSigninOnce) return;
  forceShowSigninOnce = false;
  try {
    showSigninLayer();
  } catch (_) {}
}

const SIGNIN_BUTTON_PAGES = new Set(["31_index", "32_index_admin"]);
const FORCE_SHOW_SIGNIN_PAGES = new Set(["31_index", "32_index_admin"]);

const signinState = {
  layer: null,
  button: null,
  clientId: (window.MISEMARU && window.MISEMARU.GSI_CLIENT_ID) || "",
  initialized: false,
  buttonRendered: false,
  visible: false,
  signedIn: false,
  lastCredential: "",
  googleReady: false,
  pendingCredential: false,
  lastSigninEligiblePage: "",
};

function getSigninElements() {
  if (!signinState.layer) {
    signinState.layer = document.getElementById("google-signin-layer");
  }
  if (!signinState.button) {
    signinState.button = document.getElementById("google-signin-button");
  }
  return { layer: signinState.layer, button: signinState.button };
}

function whenGoogleReady(cb) {
  if (signinState.googleReady && window.google?.accounts?.id) {
    try { cb(); } catch (err) { console.warn("[portal:gsi] callback error", err); }
    return;
  }
  if (window.google?.accounts?.id) {
    signinState.googleReady = true;
    try { cb(); } catch (err) { console.warn("[portal:gsi] callback error", err); }
    return;
  }
  let waited = 0;
  const step = 100;
  const limit = 5000;
  const timer = setInterval(() => {
    waited += step;
    if (window.google?.accounts?.id) {
      clearInterval(timer);
      signinState.googleReady = true;
      try { cb(); } catch (err) { console.warn("[portal:gsi] callback error", err); }
      return;
    }
    if (waited >= limit) {
      clearInterval(timer);
      console.warn("[portal:gsi] google.accounts.id not available (timeout)");
    }
  }, step);
}

function hideSigninLayer() {
  const { layer } = getSigninElements();
  if (!layer) return;
  layer.style.display = "none";
  signinState.visible = false;
}

function renderSigninButton() {
  const { layer, button } = getSigninElements();
  if (!layer || !button) return;
  if (!signinState.clientId) {
    hideSigninLayer();
    console.warn("[portal:gsi] client_id missing; cannot render button");
    return;
  }

  whenGoogleReady(() => {
    try {
      if (!signinState.initialized) {
        if (!google?.accounts?.id) {
          console.warn("[portal:gsi] google.accounts.id unavailable during init");
          return;
        }
        google.accounts.id.initialize({
          client_id: signinState.clientId,
          callback: handleGsiCredential,
          ux_mode: "popup",
        });
        signinState.initialized = true;
      }
      button.innerHTML = "";
      google.accounts.id.renderButton(button, {
        theme: "outline",
        size: "large",
        text: "signin_with",
        shape: "rectangular",
        logo_alignment: "right",
      });
      signinState.buttonRendered = true;
    } catch (err) {
      console.error("[portal:gsi] renderButton failed", err);
    }
  });
}

function showSigninLayer() {
  const { layer } = getSigninElements();
  if (!layer) return;
  if (!signinState.clientId) {
    hideSigninLayer();
    return;
  }
  layer.style.display = "block";
  signinState.visible = true;
  renderSigninButton();
}

window.debugSignin = () => {
  try {
    const { layer } = getSigninElements();
    const storeView = !!(document.body && document.body.classList && document.body.classList.contains("store-view"));
    console.log("[debugSignin]", {
      visible: signinState.visible,
      display: layer ? layer.style.display : "(missing layer)",
      hasLayer: !!layer,
      storeView,
      signedIn: signinState.signedIn,
      page: state.activePage || state.pendingPage,
      lastSigninEligiblePage: signinState.lastSigninEligiblePage,
    });
  } catch (err) {
    console.warn("[debugSignin] failed", err);
  }
};

function deliverCredentialToIframe(credential, targetWindow, targetOrigin) {
  if (!credential) return false;
  const { iframe } = getStoreIframeElements();
  const win = targetWindow || iframe?.contentWindow;
  if (!win) return false;
  const origin = targetOrigin || "*";
  const lang = state.lang || safeLocalStorageGet(LS_KEY) || "ja";
  let page = state.activePage || "";
  if (!page && iframe) {
    try {
      const src = iframe.dataset?.src || iframe.getAttribute("src") || "";
      if (src) {
        page = new URL(src, window.location.href).searchParams.get(PAGE_QUERY_KEY) || "";
      }
    } catch (err) {
      console.warn("[portal:gsi] failed to resolve page for credential delivery", err);
    }
  }
  const payload = { type: "misemaru:gsi-login", credential };
  if (page) payload.page = page;
  if (lang) payload.lang = lang;
  try {
    win.postMessage(payload, origin);
    return true;
  } catch (err) {
    console.warn("[portal:gsi] failed to deliver credential", err);
    return false;
  }
}

function handleGsiCredential(response) {
  const credential = response?.credential || "";
  if (!credential) {
    console.warn("[portal:gsi] received empty credential");
    signinState.signedIn = false;
    signinState.lastCredential = "";
    signinState.pendingCredential = false;
    renderSigninButton();
    return;
  }
  signinState.lastCredential = credential;
  const delivered = deliverCredentialToIframe(credential);
  signinState.pendingCredential = !delivered;
  signinState.signedIn = delivered;
  if (delivered) {
    hideSigninLayer();
  }
  updateSigninButtonVisibility();
}

function updateSigninButtonVisibility(pageOrUrl) {
  const { layer } = getSigninElements();
  if (!layer) return;

  if (signinState.pendingCredential && signinState.lastCredential) {
    const deliveredNow = deliverCredentialToIframe(signinState.lastCredential);
    if (deliveredNow) {
      signinState.pendingCredential = false;
      signinState.signedIn = true;
      hideSigninLayer();
    }
  }

  const candidatePages = [];
  const pushCandidate = (value) => {
    if (!value && value !== 0) return;
    const page = String(value).trim();
    if (!page) return;
    if (!candidatePages.includes(page)) candidatePages.push(page);
  };

  if (typeof pageOrUrl === "string" && pageOrUrl.length) {
    try {
      if (pageOrUrl.includes("://")) {
        const parsed = new URL(pageOrUrl, window.location.href).searchParams.get(PAGE_QUERY_KEY) || "";
        pushCandidate(parsed);
      } else {
        pushCandidate(pageOrUrl);
      }
    } catch (err) {
      console.warn("[portal:gsi] failed to parse page from input", pageOrUrl, err);
    }
  }
  pushCandidate(state.pendingPage);
  pushCandidate(state.activePage);

  const { iframe } = getStoreIframeElements();
  if (iframe) {
    try {
      const src = iframe.dataset?.src || iframe.getAttribute("src") || "";
      if (src) {
        const iframePage = new URL(src, window.location.href).searchParams.get(PAGE_QUERY_KEY) || "";
        pushCandidate(iframePage);
      }
    } catch (err) {
      console.warn("[portal:gsi] failed to resolve page from iframe", err);
    }
  }

  let resolvedPage = candidatePages.find((page) => page) || "";
  if (!resolvedPage && signinState.lastSigninEligiblePage) {
    resolvedPage = signinState.lastSigninEligiblePage;
  }
  let signinPage = candidatePages.find((page) => SIGNIN_BUTTON_PAGES.has(page)) || "";
  if (!signinPage && resolvedPage && SIGNIN_BUTTON_PAGES.has(resolvedPage)) {
    signinPage = resolvedPage;
  }
  if (signinPage) {
    signinState.lastSigninEligiblePage = signinPage;
    try { window.__MIS_LAST_TOP_PAGE = signinState.lastSigninEligiblePage; } catch (_) {}
  }
  try {
    console.log("[portal] updateSigninButtonVisibility", {
      pageOrUrl,
      candidates: candidatePages,
      resolved: resolvedPage,
      signinPage,
      lastSigninEligiblePage: signinState.lastSigninEligiblePage,
      signedIn: signinState.signedIn,
      storeView: !!(document.body && document.body.classList && document.body.classList.contains("store-view"))
    });
  } catch (_) {}

  const body = document.body;
  const storeActive = !!(body && body.classList && body.classList.contains("store-view"));
  if (forceShowSigninOnce) {
    showSigninLayer();
    return;
  }
  const shouldShow =
    Boolean(signinPage) &&
    storeActive &&
    Boolean(signinState.clientId);

  if (shouldShow) showSigninLayer();
  else hideSigninLayer();
}

const registryApi = (window.MISEMARU && window.MISEMARU.REGISTRY_API) || "";

// 現在 iframe に読み込んでいる GAS 実行 URL（?page なしのベース）
let currentStoreExecUrl = window.currentStoreExecUrl || "";
window.currentStoreExecUrl = currentStoreExecUrl;

// --- 子(GAS) → 親(ポータル) 通信ハンドラ ---
const CHILD_ORIGINS = (() => {
  const origins = new Set([
    "https://script.google.com",
    "https://script.googleusercontent.com",
  ]);
  try {
    const cfg = window.MISEMARU && window.MISEMARU.CHILD_ORIGINS;
    if (Array.isArray(cfg)) {
      cfg.forEach((origin) => {
        const val = origin && String(origin).trim();
        if (val) origins.add(val);
      });
    } else if (typeof cfg === "string") {
      const val = cfg.trim();
      if (val) origins.add(val);
    }
  } catch (_) {}
  return origins;
})();

const PAGE_QUERY_KEY = "page";
const RESERVED_PARENT_QUERY_KEYS = new Set([LANG_PARAM.toLowerCase(), GAS_PARAM.toLowerCase(), "id"]);

function sanitizeChildParams(rawParams) {
  if (!rawParams || typeof rawParams !== "object") return {};
  const sanitized = {};
  Object.entries(rawParams).forEach(([key, value]) => {
    if (!key) return;
    const normalizedKey = String(key);
    if (normalizedKey.toLowerCase() === PAGE_QUERY_KEY) return;
    if (value == null || value === "") return;
    sanitized[normalizedKey] = String(value);
  });
  return sanitized;
}

function collectChildParams(searchParams) {
  if (!searchParams) return {};
  const params = {};
  searchParams.forEach((value, key) => {
    if (!key) return;
    const lowerKey = String(key).toLowerCase();
    if (lowerKey === PAGE_QUERY_KEY) return;
    if (value == null || value === "") return;
    params[key] = String(value);
  });
  return params;
}

function setActivePage(page, params) {
  state.activePage = page ? String(page) : "";
  state.activePageParams = Object.assign({}, params || {});
  updateSigninButtonVisibility();
}

function setPendingPage(page, params) {
  state.pendingPage = page ? String(page) : "";
  state.pendingPageParams = Object.assign({}, params || {});
  updateSigninButtonVisibility();
}

function buildChildUrl(baseUrl, page, params) {
  if (!baseUrl) return "";
  try {
    const url = new URL(baseUrl, window.location.href);
    if (page) url.searchParams.set(PAGE_QUERY_KEY, String(page));
    else url.searchParams.delete(PAGE_QUERY_KEY);
    const sanitized = sanitizeChildParams(params);
    Object.keys(state.activePageParams || {}).forEach((key) => {
      if (RESERVED_PARENT_QUERY_KEYS.has(String(key).toLowerCase())) return;
      if (!Object.prototype.hasOwnProperty.call(sanitized, key)) {
        url.searchParams.delete(key);
      }
    });
    Object.entries(sanitized).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    return url.toString();
  } catch (err) {
    console.warn("[portal] failed to build child URL", err);
    return "";
  }
}

function setFrameUrlReplace(url) {
  if (!url) {
    hidePortalOverlay();
    return;
  }
  try {
    console.log("[portal] setFrameUrlReplace", { url });
  } catch (_) {}
  rememberCurrentStoreExecUrl(url);
  const iframe = document.getElementById("storeIframe");
  if (!iframe) {
    hidePortalOverlay();
    return;
  }
  const iframeWindow = (() => {
    try { return iframe.contentWindow || null; } catch (_) { return null; }
  })();
  const attrSrc = (() => {
    try { return iframe.getAttribute("src") || ""; } catch (_) { return ""; }
  })();
  const dataSrc = iframe.dataset?.src || "";
  let current = attrSrc || dataSrc;
  if (attrSrc && attrSrc !== dataSrc) {
    try { iframe.dataset.src = attrSrc; } catch (_) {}
    current = attrSrc;
  }
  try {
    console.log("[portal] setFrameUrlReplace current", { attrSrc, dataSrc, current });
  } catch (_) {}
  if (current === url) {
    currentChildWindow = null;
    try {
      iframeWindow?.postMessage({ type: "misemaru:ping" }, "*");
      iframeWindow?.postMessage({ type: "misemaru:request-child-ready" }, "*");
    } catch (_) {}
    hidePortalOverlay();
    return;
  }
  currentChildWindow = null;
  iframe.dataset.src = url;
  try {
    if (iframe.contentWindow && iframe.contentWindow.location) {
      iframe.contentWindow.location.replace(url);
      return;
    }
  } catch (_) {
    /* ignore read errors, fallback to direct src set */
  }
  iframe.setAttribute("src", url);
}

function syncParentHistory(page, params, mode) {
  const historyMode = mode === "replace" ? "replace" : "push";
  const sanitized = sanitizeChildParams(params);
  try {
    const url = new URL(window.location.href);
    if (page) url.searchParams.set(PAGE_QUERY_KEY, String(page));
    else deleteParamCaseInsensitive(url.searchParams, PAGE_QUERY_KEY);
    Object.keys(state.activePageParams || {}).forEach((key) => {
      if (RESERVED_PARENT_QUERY_KEYS.has(String(key).toLowerCase())) return;
      if (!Object.prototype.hasOwnProperty.call(sanitized, key)) {
        url.searchParams.delete(key);
      }
    });
    Object.entries(sanitized).forEach(([key, value]) => {
      if (RESERVED_PARENT_QUERY_KEYS.has(String(key).toLowerCase())) return;
      url.searchParams.set(key, value);
    });
    const statePayload = { page: page ? String(page) : "", params: sanitized };
    if (historyMode === "replace") {
      window.history.replaceState(statePayload, "", url.toString());
    } else {
      window.history.pushState(statePayload, "", url.toString());
    }
    setActivePage(statePayload.page, statePayload.params);
  } catch (err) {
    console.warn("[portal] failed to sync history", err);
    setActivePage(page, sanitized);
  }
}

function applyChildNavigation(page, params, options) {
  const opts = Object.assign({ historyMode: "push", skipHistory: false, absoluteUrl: "" }, options || {});
  const sanitized = sanitizeChildParams(params);
  const historyMode = opts.historyMode === "replace" ? "replace" : "push";
  try {
    console.log("[portal] applyChildNavigation", {
      page,
      params: sanitized,
      opts,
      activePage: state.activePage,
      pendingPage: state.pendingPage
    });
  } catch (_) {}
  if (!page) {
    if (!opts.skipHistory) {
      syncParentHistory("", {}, "replace");
    } else {
      setActivePage("", {});
    }
    setPendingPage("", {});
    resetStoreIframe({ preserveBase: true });
    hidePortalOverlay();
    return;
  }

  const markForceShowSignin = () => {
    if (!FORCE_SHOW_SIGNIN_PAGES.has(page)) return;
    forceShowSigninOnce = true;
  };

  if (opts.absoluteUrl) {
    setFrameUrlReplace(opts.absoluteUrl);
    setPendingPage("", {});
    if (!opts.skipHistory) syncParentHistory(page, sanitized, historyMode);
    else setActivePage(page, sanitized);
    markForceShowSignin();
    return;
  }

  const iframe = document.getElementById("storeIframe");
  const base =
    opts.base ||
    currentStoreExecUrl ||
    (iframe && (iframe.dataset?.base || iframe.dataset?.src)) ||
    "";
  try {
    console.log("[portal] applyChildNavigation base", {
      base,
      iframeSrc: iframe ? iframe.getAttribute("src") : null,
      datasetSrc: iframe?.dataset?.src || null,
      currentStoreExecUrl
    });
  } catch (_) {}
  if (!base) {
    setPendingPage(page, sanitized);
    if (!opts.skipHistory) syncParentHistory(page, sanitized, historyMode);
    else setActivePage(page, sanitized);
    hidePortalOverlay();
    return;
  }
  const nextUrl = buildChildUrl(base, page, sanitized);
  if (!nextUrl) {
    hidePortalOverlay();
    return;
  }
  setFrameUrlReplace(nextUrl);
  setPendingPage("", {});
  if (!opts.skipHistory) syncParentHistory(page, sanitized, historyMode);
  else setActivePage(page, sanitized);
  markForceShowSignin();
}

function initializeHistoryFromLocation(url) {
  if (!url) return;
  try {
    const page = getParamCaseInsensitive(url.searchParams, PAGE_QUERY_KEY);
    if (page) {
      const params = collectChildParams(url.searchParams);
      const statePayload = { page, params };
      window.history.replaceState(statePayload, "", url.toString());
      setActivePage(page, params);
      setPendingPage(page, params);
    } else {
      const currentState = window.history.state;
      if (!currentState || typeof currentState !== "object" || !Object.prototype.hasOwnProperty.call(currentState, "page")) {
        window.history.replaceState({ page: "", params: {} }, "", url.toString());
      }
      setActivePage("", {});
      setPendingPage("", {});
    }
  } catch (err) {
    console.warn("[portal] failed to initialize history", err);
  }
}

function isAllowedChildOrigin(origin) {
  try {
    if (!window.__MIS_DEBUG_CHILD_ORIGINS_LOGGED) {
      console.log("[portal] CHILD_ORIGINS =", Array.from(CHILD_ORIGINS));
      window.__MIS_DEBUG_CHILD_ORIGINS_LOGGED = true;
    }
  } catch (_) {}

  if (!origin) return false;

  // 登録済み許可リスト
  if (CHILD_ORIGINS.has(origin)) return true;

  try {
    const hostname = new URL(origin).hostname;

    // ★ 追加: GitHub Pages → GAS間の通信を許可
    if (hostname.endsWith(".github.io")) return true;

    // ★ 既存: GAS (googleusercontent.com) の通信を許可
    if (hostname.endsWith(".googleusercontent.com")) return true;

    return false;
  } catch (_) {
    return false;
  }
}

function normalizePageId(p) {
  const v = String(p ?? "").trim();
  if (!v || v === "undefined" || v === "null") return "31_index";
  return v;
}

try {
  window.addEventListener(
    "message",
    (ev) => {
      console.debug("[portal] received from", ev.origin, "allowed?", isAllowedChildOrigin(ev.origin));
      const iframe = document.getElementById("storeIframe");
      try {
        console.log("[portal] message received", {
          origin: ev.origin,
          type: ev.data && ev.data.type,
          hasIframe: !!iframe,
          fromIframe: iframe ? ev.source === iframe.contentWindow : false,
          currentSrc: iframe && (iframe.dataset?.src || iframe.getAttribute("src") || ""),
        });
      } catch (_) {}
      if (!iframe) {
        console.warn("[portal] message received but iframe not found");
      }

      const d = ev.data || {};
      if (!d.type || !d.type.startsWith("misemaru:")) return;

      ev.stopImmediatePropagation();

      const originAllowed = isAllowedChildOrigin(ev.origin);
      if (!originAllowed) {
        console.warn("[portal] ignoring message from unexpected origin:", ev.origin, {
          allowedOrigins: Array.from(CHILD_ORIGINS),
        });
        return;
      }

      switch (d.type) {
        case "misemaru:height": {
          const h = Number(d.height) || 0;
          if (!h || !iframe) break;
          iframe.style.height = `${h}px`;
          break;
        }

        case "misemaru:navigate": {
          if (!iframe) {
            console.warn("[portal] navigate requested but iframe missing");
            break;
          }

          // 既存の currentChildWindow バインド処理は維持
          if (!currentChildWindow) {
            console.log("[portal] binding currentChildWindow from navigate", { matchesIframe: ev.source === iframe.contentWindow });
            currentChildWindow = ev.source;
          } else if (ev.source !== currentChildWindow) {
            const iframeWindow = (() => { try { return iframe.contentWindow || null; } catch (_) { return null; } })();
            if (iframeWindow && ev.source === iframeWindow) {
              console.log("[portal] re-binding currentChildWindow to iframe.contentWindow");
              currentChildWindow = ev.source;
            } else {
              console.warn("[portal] ignoring navigate from non-current child window", {
                hasPointer: !!currentChildWindow,
                matchesIframe: iframeWindow ? ev.source === iframeWindow : "unknown"
              });
              break;
            }
          }

          const historyMode = d.replace ? "replace" : "push";

          // ★ ここがポイント：page が空でも normalize で '31_index' に補正して処理する
          if (typeof d.page === "string") {
            const page = normalizePageId(d.page);
            const params = (d.params && typeof d.params === "object") ? d.params : {};
            try { showPortalOverlay?.(); } catch (_) {}
            try {
              console.log("[portal] navigate request", { page, params, mode: historyMode });
              applyChildNavigation(page, params, { historyMode });
            } catch (err) {
              console.warn("[portal] applyChildNavigation failed, fallback to 31_index", err);
              try { applyChildNavigation("31_index", {}, { historyMode: "replace" }); } catch (_) {}
            }
            break;
          }

          // 既存：URL 指定での遷移もそのまま活かす
          if (typeof d.url === "string" && d.url) {
            try {
              const baseCandidate = currentStoreExecUrl || iframe.dataset?.base || window.location.href;
              const absolute = new URL(d.url, baseCandidate);
              const page = normalizePageId(absolute.searchParams.get(PAGE_QUERY_KEY) || "");
              const params = collectChildParams(absolute.searchParams);
              console.log("[portal] navigate request", {
                page, params, mode: historyMode, absoluteUrl: absolute.toString(),
              });
              applyChildNavigation(page, params, {
                historyMode, absoluteUrl: absolute.toString(),
              });
            } catch (err) {
              console.warn("[portal] navigate request had invalid URL", d.url, err);
            }
            break;
          }

          console.warn("[portal] navigate request missing page/url", d);
          break;
        }

        case "misemaru:child-ready": {
          const iframeWindow = (() => { try { return iframe?.contentWindow || null; } catch (_) { return null; } })();
          console.log("[portal] child ready source check", {
            fromIframe: iframeWindow ? ev.source === iframeWindow : "unknown",
            previousBound: !!currentChildWindow
          });
          const fromIframe = iframeWindow ? ev.source === iframeWindow : true;
          if (!currentChildWindow) {
            currentChildWindow = ev.source;
          } else if (!fromIframe && ev.source !== currentChildWindow) {
            console.warn("[portal] ignoring child-ready from stale window", {
              hasPointer: !!currentChildWindow,
              fromIframe
            });
            break;
          } else {
            currentChildWindow = ev.source;
          }
          console.log("[portal] child ready");
          hidePortalOverlay();
          const lang = state.lang || safeLocalStorageGet(LS_KEY) || "ja";
          let page = "";
          try {
            const src = iframe?.dataset?.src || iframe?.getAttribute("src") || "";
            if (src) {
              page = new URL(src, window.location.href).searchParams.get("page") || "";
            }
          } catch (err) {
            console.warn("[portal] failed to resolve current page for child-ready", err);
          }
          updateSigninButtonVisibility(page);
          if (signinState.lastCredential) {
            const delivered = deliverCredentialToIframe(signinState.lastCredential, ev.source, ev.origin);
            signinState.pendingCredential = !delivered;
            signinState.signedIn = delivered;
            if (!delivered) {
              console.warn("[portal:gsi] queued credential delivery for later");
            }
          } else {
            signinState.signedIn = false;
            const msg = { type: "misemaru:email", guest: true, lang, page };
            try {
              console.log("[portal] responding to child-ready (guest)", {
                msg,
                targetOrigin: ev.origin,
              });
              ev.source.postMessage(msg, ev.origin);
            } catch (err) {
              console.warn("[portal] failed to respond to child-ready", err);
            }
          }
          updateSigninButtonVisibility(page);
          break;
        }

        case "misemaru:guest-login": {
          console.log("[portal] guest login requested by child");
          signinState.signedIn = false;
          signinState.lastCredential = "";
          signinState.pendingCredential = false;
          updateSigninButtonVisibility();
          showSigninLayer();
          break;
        }

        case "misemaru:token-expired": {
          console.log("[portal] token expired reported by child");
          signinState.signedIn = false;
          signinState.lastCredential = "";
          signinState.pendingCredential = false;
          hideSigninLayer();
          updateSigninButtonVisibility();
          showSigninLayer();
          break;
        }

        default:
          break;
      }
    },
    true
  );
} catch (err) {
  console.error("[portal] failed to attach message listener:", err);
}

function handlePortalPopState(ev) {
  try {
    showPortalOverlay();

    const url = new URL(window.location.href);
    updateSigninButtonVisibility(url.toString());
    let page = getParamCaseInsensitive(url.searchParams, PAGE_QUERY_KEY);
    let params = collectChildParams(url.searchParams);
    const friendlyId = getParamCaseInsensitive(url.searchParams, "id");
    const gasIdParam = getParamCaseInsensitive(url.searchParams, GAS_PARAM);
    if (ev && ev.state && typeof ev.state === "object") {
      if (typeof ev.state.page === "string" && ev.state.page) {
        page = ev.state.page;
      }
      if (ev.state.params && typeof ev.state.params === "object") {
        params = sanitizeChildParams(ev.state.params);
      }
    }
    if (page) {
      if (FORCE_SHOW_SIGNIN_PAGES.has(page)) {
        forceShowSigninOnce = true;
      }
      try { document.getElementById('storeIframe')?.contentWindow?.postMessage({ type: "misemaru:ping" }, "*"); } catch (_) {}
      document.body.classList.add('store-view');
      updateSigninButtonVisibility(page);
      try {
        const iframeWin = document.getElementById('storeIframe')?.contentWindow || null;
        currentChildWindow = null;
        iframeWin?.postMessage({ type: "misemaru:request-child-ready" }, "*");
      } catch (_) {}
      const iframe = document.getElementById('storeIframe');
      iframe && iframe.addEventListener('load', () => {
        hidePortalOverlay();
        updateSigninButtonVisibility(page);
      }, { once: true });
      const statePayload = { page, params };
      window.history.replaceState(statePayload, "", url.toString());
      applyChildNavigation(page, params, { historyMode: "replace", skipHistory: true });
      return;
    }

    if (friendlyId || gasIdParam) {
      const statePayload = { page: "", params: {} };
      window.history.replaceState(statePayload, "", url.toString());
      setActivePage("", {});
      setPendingPage("", {});
      const reopened = (() => {
        if (state.store && resolveEmbedUrl(state.store)) {
          openStoreInline();
          return true;
        }
        if (friendlyId) {
          launchFriendlyId(friendlyId);
          return true;
        }
        if (gasIdParam) {
          scheduleAutoLookup(gasIdParam);
          return true;
        }
        return false;
      })();
      if (!reopened) {
        resetStoreIframe({ preserveBase: true });
        hidePortalOverlay();
      }
      return;
    }

    window.history.replaceState({ page: "", params: {} }, "", url.toString());
    resetStoreIframe();
    hidePortalOverlay();
  } catch (err) {
    console.warn("[portal] popstate handling failed", err);
    hidePortalOverlay();
  }
}

window.addEventListener("popstate", handlePortalPopState);

function jsonpRequest(urlInput, options) {
  const opts = Object.assign({ timeout: 10000 }, options || {});
  const url = urlInput instanceof URL ? urlInput : new URL(urlInput);
  return new Promise((resolve, reject) => {
    const callbackName = `__misemaru_jsonp_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
    let script;
    let timer;

    const cleanup = () => {
      if (timer) clearTimeout(timer);
      if (script && script.parentNode) script.parentNode.removeChild(script);
      try { delete window[callbackName]; } catch (_) { /* ignore */ }
    };

    window[callbackName] = (data) => {
      cleanup();
      resolve(data);
    };

    script = document.createElement("script");
    script.async = true;
    url.searchParams.set(opts.callbackParam || "callback", callbackName);
    script.src = url.toString();
    script.onerror = () => {
      cleanup();
      reject(new Error("JSONP request failed"));
    };
    document.head.appendChild(script);

    if (opts.timeout > 0) {
      timer = setTimeout(() => {
        cleanup();
        reject(new Error("JSONP request timed out"));
      }, opts.timeout);
    }
  });
}

async function fetchRegistryJson(url) {
  const target = url instanceof URL ? new URL(url.toString()) : new URL(url);
  try {
    const resp = await fetch(target.toString(), {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (resp.ok) {
      return await resp.json();
    }
  } catch (err) {
    /* fall back to JSONP */
  }
  return jsonpRequest(target);
}

function getParamCaseInsensitive(searchParams, name) {
  if (!searchParams || !name) return "";
  const target = String(name).toLowerCase();
  let result = "";
  searchParams.forEach((value, key) => {
    if (!result && String(key).toLowerCase() === target) {
      result = value;
    }
  });
  return result;
}

function deleteParamCaseInsensitive(searchParams, name) {
  if (!searchParams || !name) return;
  const target = String(name).toLowerCase();
  const keysToDelete = [];
  searchParams.forEach((_, key) => {
    if (String(key).toLowerCase() === target) keysToDelete.push(key);
  });
  keysToDelete.forEach((key) => searchParams.delete(key));
}

function resolveLang(input) {
  if (!input) return null;
  const lower = String(input).toLowerCase();
  const direct = SUPPORTED_LANGS.find((l) => l.code.toLowerCase() === lower);
  if (direct) return direct.code;
  const prefix = lower.split("-")[0];
  const prefMatch = SUPPORTED_LANGS.find((l) => l.code.toLowerCase().startsWith(prefix));
  return prefMatch ? prefMatch.code : null;
}

function getDict(lang) {
  return DICT[lang] || DICT.en;
}

function t(key, lang) {
  const targetLang = lang || state.lang;
  const dict = getDict(targetLang);
  if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
  const fallback = (DICT.en && DICT.en[key]) || key;
  return fallback;
}

function safeLocalStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (_) {
    return null;
  }
}

function safeLocalStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_) {
    /* ignore */
  }
}

function updateUrlParam(lang, gasId, options) {
  const opts = Object.assign({ friendlyId: "" }, options || {});
  try {
    const url = new URL(window.location.href);
    const sanitizedGasId = sanitizeGasId(gasId);
    if (lang) url.searchParams.set(LANG_PARAM, lang);
    else deleteParamCaseInsensitive(url.searchParams, LANG_PARAM);
    const friendly = String(opts.friendlyId || "").trim();
    deleteParamCaseInsensitive(url.searchParams, "Id");
    deleteParamCaseInsensitive(url.searchParams, "id");
    deleteParamCaseInsensitive(url.searchParams, GAS_PARAM);
    if (friendly) {
      url.searchParams.set("id", friendly);
    } else if (sanitizedGasId) {
      url.searchParams.set(GAS_PARAM, sanitizedGasId);
    } else {
      deleteParamCaseInsensitive(url.searchParams, GAS_PARAM);
    }
    const prev = window.history.state;
    const safePrev =
      prev && typeof prev === "object" && Object.prototype.hasOwnProperty.call(prev, "page")
        ? prev
        : {
            page: state.activePage || "",
            params: Object.assign({}, state.activePageParams || {}),
          };
    window.history.replaceState(safePrev, "", url.toString());
  } catch (_) {
    /* ignore */
  }
}

function populateLanguageSelects() {
  const selects = document.querySelectorAll('[data-role="language-select"]');
  selects.forEach((select) => {
    if (select.dataset.populated === "1") return;
    SUPPORTED_LANGS.forEach((entry) => {
      const option = document.createElement("option");
      option.value = entry.code;
      option.textContent = entry.label;
      select.appendChild(option);
    });
    select.dataset.populated = "1";
  });
  return selects;
}

function syncSelects(lang) {
  const selects = document.querySelectorAll('[data-role="language-select"]');
  selects.forEach((select) => {
    if (select.value !== lang) select.value = lang;
  });
}

function updateDocumentTitle(lang) {
  const dict = getDict(lang);
  const hero = dict.heroTitle || DICT.en.heroTitle || "Misemaru Cloud";
  document.title = `${hero} | Misemaru Cloud`;
  document.documentElement.lang = lang;
}

function refreshStoreTranslations() {
  if (!state.store) return;
  const store = state.store;
  const servicesEl = document.getElementById("storeServices");
  if (servicesEl) {
    const summary = formatServices(store);
    servicesEl.textContent = summary;
  }
  const badge = document.getElementById("verifiedBadge");
  if (badge) badge.textContent = t("verifiedBadge");
  const countryEl = document.getElementById("storeCountry");
  if (countryEl) {
    countryEl.textContent = formatCountry(store.country);
  }
  const verifiedDateEl = document.getElementById("verifiedDate");
  if (verifiedDateEl) {
    const text = formatVerifiedDate(store.verifiedAt);
    verifiedDateEl.textContent = text;
  }
}

function applyTranslations(lang) {
  const dict = getDict(lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    el.textContent = t(key, lang);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (!key) return;
    el.setAttribute("placeholder", t(key, lang));
  });
  refreshGlobalPreloaderMessage();
  refreshInlinePreloaderMessage();
  updateDocumentTitle(lang);
  if (state.statusKey) {
    setStatus(state.statusKey, state.statusTone, { reapply: true });
  }
  refreshStoreTranslations();
  refreshDirectoryTranslations();
}

function setLanguage(lang, options) {
  const opts = Object.assign({ persist: true, updateParam: false }, options || {});
  const resolved = resolveLang(lang) || "en";
  state.lang = resolved;
  if (opts.persist) safeLocalStorageSet(LS_KEY, resolved);
  if (opts.updateParam) {
    const gasId = document.getElementById("gasIdInput")?.value || null;
    updateUrlParam(resolved, gasId, { friendlyId: state.activeFriendlyId });
  }
  syncSelects(resolved);
  applyTranslations(resolved);
}

function showLanguageStep() {
  const step = document.getElementById("language-step");
  const portal = document.getElementById("portal-step");
  if (step) step.classList.remove("d-none");
  if (portal) portal.classList.add("d-none");
}

function showPortalStep() {
  const step = document.getElementById("language-step");
  const portal = document.getElementById("portal-step");
  if (step) step.classList.add("d-none");
  if (portal) portal.classList.remove("d-none");
}

function setStatus(key, tone, options) {
  const el = document.getElementById("storeStatus");
  if (!el) return;
  const opts = Object.assign({ reapply: false }, options || {});
  if (!key) {
    state.statusKey = null;
    state.statusTone = "info";
    el.className = "status-message d-none";
    el.textContent = "";
    return;
  }
  if (!opts.reapply) {
    state.statusKey = key;
    state.statusTone = tone || "info";
  }
  const klass = tone === "success"
    ? "alert alert-success"
    : tone === "warning"
      ? "alert alert-warning"
      : tone === "error"
        ? "alert alert-danger"
        : "alert alert-info";
  el.className = `status-message ${klass}`;
  el.textContent = t(key);
}

function setMockNoticeVisible(visible) {
  const el = document.getElementById("mockNotice");
  if (!el) return;
  if (visible) el.classList.remove("d-none");
  else el.classList.add("d-none");
}

function setLoading(isLoading) {
  const submit = document.getElementById("lookupSubmit");
  const input = document.getElementById("gasIdInput");
  if (submit) {
    submit.disabled = !!isLoading;
    const spinner = submit.querySelector(".spinner-border");
    if (spinner) spinner.classList.toggle("d-none", !isLoading);
  }
  if (input) input.disabled = !!isLoading;
}

function updateGlobalPreloaderMessage(key) {
  const normalized = (() => {
    if (typeof key !== "string") return DEFAULT_PRELOADER_MESSAGE_KEY;
    const trimmed = key.trim();
    return trimmed ? trimmed : DEFAULT_PRELOADER_MESSAGE_KEY;
  })();
  state.preloaderMessageKey = normalized;
  const el = document.querySelector('[data-role="preloader-message"]');
  if (!el) return;
  let message = t(normalized);
  if (message === normalized && normalized !== "loadingStoreMessage") {
    message = t("loadingStoreMessage");
  }
  el.textContent = message;
  if (el.dataset) el.dataset.i18n = normalized;
}

function refreshGlobalPreloaderMessage() {
  updateGlobalPreloaderMessage(state.preloaderMessageKey);
}

function updateInlinePreloaderMessage(key) {
  const normalized = (() => {
    if (typeof key !== "string") return DEFAULT_INLINE_PRELOADER_MESSAGE_KEY;
    const trimmed = key.trim();
    return trimmed ? trimmed : DEFAULT_INLINE_PRELOADER_MESSAGE_KEY;
  })();
  state.inlinePreloaderMessageKey = normalized;
  const el = document.querySelector('[data-role="inline-preloader-message"]');
  if (!el) return;
  let message = t(normalized);
  if (message === normalized && normalized !== "loadingStoreMessage") {
    message = t("loadingStoreMessage");
  }
  el.textContent = message;
  if (el.dataset) el.dataset.i18n = normalized;
}

function refreshInlinePreloaderMessage() {
  updateInlinePreloaderMessage(state.inlinePreloaderMessageKey);
}

function showInlinePreloader(messageKey) {
  updateInlinePreloaderMessage(messageKey || DEFAULT_INLINE_PRELOADER_MESSAGE_KEY);
  const el = document.getElementById("inlinePreloader");
  if (!el) return;
  el.classList.add("active");
  el.setAttribute("aria-busy", "true");
  if (document.body) document.body.classList.add("store-preloading-manual");
}

function hideInlinePreloader() {
  const el = document.getElementById("inlinePreloader");
  if (el) {
    el.classList.remove("active");
    el.setAttribute("aria-busy", "false");
  }
  if (document.body) document.body.classList.remove("store-preloading-manual");
}

function scheduleInlinePreloaderFallback(callback) {
  if (state.inlinePreloaderTimer) {
    clearTimeout(state.inlinePreloaderTimer);
    state.inlinePreloaderTimer = null;
  }
  state.inlinePreloaderTimer = setTimeout(() => {
    state.inlinePreloaderTimer = null;
    callback();
  }, 8000);
}

function clearInlinePreloaderFallback() {
  if (state.inlinePreloaderTimer) {
    clearTimeout(state.inlinePreloaderTimer);
    state.inlinePreloaderTimer = null;
  }
}

function setStoreOverlayMode(mode) {
  if (typeof document === "undefined" || !document.body) return;
  const classAuto = "store-preloading-auto";
  document.body.classList.remove(classAuto);
  if (mode === "auto") {
    document.body.classList.add(classAuto);
  }
}

function showGlobalPreloader() {
  const overlay = document.getElementById("globalPreloader");
  if (!overlay) return;
  updateGlobalPreloaderMessage(DEFAULT_PRELOADER_MESSAGE_KEY);
  overlay.classList.add("active");
  overlay.setAttribute("aria-busy", "true");
}

function hideGlobalPreloader() {
  const overlay = document.getElementById("globalPreloader");
  if (!overlay) return;
  overlay.classList.remove("active");
  overlay.setAttribute("aria-busy", "false");
}

function beginAutoOpen(gasId) {
  const normalized = String(gasId || "").trim().toLowerCase();
  if (!normalized) return;
  state.autoOpenTargetId = normalized;
  state.autoOpenActive = true;
  showGlobalPreloader();
}

function cancelAutoOpen() {
  state.autoOpenTargetId = "";
  if (state.autoOpenActive) {
    state.autoOpenActive = false;
    hideGlobalPreloader();
  }
  updateGlobalPreloaderMessage(DEFAULT_PRELOADER_MESSAGE_KEY);
  updateInlinePreloaderMessage(DEFAULT_INLINE_PRELOADER_MESSAGE_KEY);
  hideInlinePreloader();
  clearInlinePreloaderFallback();
  setStoreOverlayMode(null);
}

function getStoreIframeElements() {
  // 埋め込み iframe とその付随要素をまとめて取得する
  const wrap = document.getElementById("storeApp");
  const iframe = document.getElementById("storeIframe");
  return { wrap, iframe };
}

function resetStoreIframe(options) {
  currentChildWindow = null;
  const opts = Object.assign({ preserveBase: false }, options || {});
  const { wrap, iframe } = getStoreIframeElements();
  if (iframe) {
    iframe.removeAttribute("src");
    iframe.dataset.src = "";
    if (!opts.preserveBase) {
      delete iframe.dataset.base;
    }
  }
  if (wrap) {
    wrap.classList.remove("active");
    wrap.setAttribute("aria-hidden", "true");
    wrap.classList.remove("preloading-inline");
  }
  updateInlinePreloaderMessage(DEFAULT_INLINE_PRELOADER_MESSAGE_KEY);
  hideInlinePreloader();
  clearInlinePreloaderFallback();
  updateGlobalPreloaderMessage(DEFAULT_PRELOADER_MESSAGE_KEY);
  setStoreOverlayMode(null);
  document.body.classList.remove("store-view");
  signinState.lastSigninEligiblePage = "";
  if (!opts.preserveBase) {
    currentStoreExecUrl = "";
    window.currentStoreExecUrl = "";
  }
  setActivePage("", {});
  hideSigninLayer();
}

function rememberCurrentStoreExecUrl(rawUrl) {
  if (!rawUrl) {
    currentStoreExecUrl = "";
    window.currentStoreExecUrl = "";
    const iframe = document.getElementById("storeIframe");
    if (iframe) delete iframe.dataset.base;
    setActivePage("", {});
    return "";
  }
  let page = "";
  let params = {};
  try {
    const url = new URL(rawUrl, window.location.href);
    page = url.searchParams.get(PAGE_QUERY_KEY) || "";
    params = collectChildParams(url.searchParams);
    const base = new URL(url.toString());
    base.searchParams.delete(PAGE_QUERY_KEY);
    Object.keys(params).forEach((key) => {
      if (RESERVED_PARENT_QUERY_KEYS.has(String(key).toLowerCase())) return;
      base.searchParams.delete(key);
    });
    currentStoreExecUrl = base.toString();
  } catch (err) {
    currentStoreExecUrl = rawUrl;
    page = "";
    params = {};
  }
  setActivePage(page, params);
  window.currentStoreExecUrl = currentStoreExecUrl;
  const iframe = document.getElementById("storeIframe");
  if (iframe) iframe.dataset.base = currentStoreExecUrl;
  return currentStoreExecUrl;
}

function loadStoreIframe(url) {
  // GAS 側のページを iframe に読み込み、ロード中はオーバーレイを表示する
  const { wrap, iframe } = getStoreIframeElements();
  try {
    console.log("[portal] loadStoreIframe invoked", { url, hasIframe: !!iframe });
  } catch (_) {}
  if (!iframe || !wrap) return;
  if (!url) {
    resetStoreIframe();
    return;
  }

  let targetUrl = url;
  if (state.pendingPage) {
    const pending = buildChildUrl(url, state.pendingPage, state.pendingPageParams);
    if (pending) {
      targetUrl = pending;
      setPendingPage("", {});
    }
  }

  const isAutoOpen = !!state.autoOpenActive;
  const current = iframe.getAttribute("src") || "";

  if (document.body) document.body.classList.remove("store-view");
  updateSigninButtonVisibility();

  if (isAutoOpen) {
    hideInlinePreloader();
    setStoreOverlayMode("auto");
    wrap.classList.add("active");
    wrap.classList.remove("preloading-inline");
    wrap.setAttribute("aria-hidden", "false");
    updateGlobalPreloaderMessage("loadingStoreStage2");
  } else {
    setStoreOverlayMode(null);
    wrap.classList.add("active");
    wrap.classList.add("preloading-inline");
    wrap.setAttribute("aria-hidden", "false");
    showInlinePreloader("loadingStoreStage2");
    scheduleInlinePreloaderFallback(() => {
      wrap.classList.remove("preloading-inline");
      hideInlinePreloader();
      wrap.classList.add("active");
      wrap.setAttribute("aria-hidden", "false");
      if (document.body) document.body.classList.add("store-view");
      updateSigninButtonVisibility();
      flushForceShowSignin();
    });
  }

  if (current === targetUrl) {
    if (!isAutoOpen) {
      clearInlinePreloaderFallback();
      hideInlinePreloader();
      wrap.classList.add("active");
      wrap.classList.remove("preloading-inline");
      wrap.setAttribute("aria-hidden", "false");
      if (document.body) document.body.classList.add("store-view");
      updateSigninButtonVisibility();
      flushForceShowSignin();
    }
    setStoreOverlayMode(null);
    return;
  }

  const cleanup = () => {
    iframe.removeEventListener("load", handleLoad);
    iframe.removeEventListener("error", handleError);
  };

  function handleError() {
    cleanup();
    clearInlinePreloaderFallback();
    if (!isAutoOpen) hideInlinePreloader();
    wrap.classList.remove("preloading-inline");
    resetStoreIframe();
    setStatus("errorMessage", "error");
    cancelAutoOpen();
    hidePortalOverlay();
  }

  function handleLoad() {
    cleanup();
    clearInlinePreloaderFallback();
    if (isAutoOpen) {
      setStoreOverlayMode(null);
      if (document.body) document.body.classList.add("store-view");
    } else {
      hideInlinePreloader();
      wrap.classList.remove("preloading-inline");
      wrap.classList.add("active");
      wrap.setAttribute("aria-hidden", "false");
      if (document.body) document.body.classList.add("store-view");
    }
    cancelAutoOpen();
    updateSigninButtonVisibility();
    flushForceShowSignin();
    hidePortalOverlay();
  }

  iframe.addEventListener("load", handleLoad);
  iframe.addEventListener("error", handleError, { once: true });
  rememberCurrentStoreExecUrl(targetUrl);
  iframe.dataset.src = targetUrl;
  iframe.setAttribute("src", targetUrl);
}

function openStoreInline() {
  if (!state.store) return;
  const url = resolveEmbedUrl(state.store);
  if (!url) return;
  loadStoreIframe(url);
}

function clearStoreDisplay() {
  state.store = null;
  state.usedMock = false;
  const card = document.getElementById("storeCard");
  if (card) card.classList.add("d-none");
  resetStoreIframe();
  setMockNoticeVisible(false);
}

function getServicesArray(store) {
  if (Array.isArray(store?.services)) {
    return store.services.map((item) => String(item || "").trim()).filter(Boolean);
  }
  if (typeof store?.services === "string") {
    return store.services
      .split(/[,/]/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (Array.isArray(store?.serviceList)) {
    return store.serviceList.map((item) => String(item || "").trim()).filter(Boolean);
  }
  return [];
}

function formatCountry(countryCode) {
  if (!countryCode) return t("unknownCountry");
  try {
    const formatter = new Intl.DisplayNames([state.lang], { type: "region" });
    const label = formatter.of(countryCode.toUpperCase());
    return label || countryCode.toUpperCase();
  } catch (_) {
    return countryCode.toUpperCase();
  }
}

function formatServices(store) {
  const services = getServicesArray(store);
  if (services.length === 0) return t("servicesUnknown");
  return `${t("servicesLabel")}: ${services.join(" / ")}`;
}

function servicesListString(store) {
  const services = getServicesArray(store);
  if (services.length === 0) return t("servicesUnknown");
  return services.join(" / ");
}

function formatVerifiedDate(dateIso) {
  if (!dateIso) return "";
  try {
    const date = new Date(dateIso);
    if (Number.isNaN(date.getTime())) return "";
    const formatted = new Intl.DateTimeFormat(state.lang, { dateStyle: "medium" }).format(date);
    return `${t("verifiedOnLabel")}: ${formatted}`;
  } catch (_) {
    return "";
  }
}

function resolveEmbedUrl(store) {
  if (!store) return "";
  return (
    store.iframeUrl ||
    store.embedUrl ||
    store.publicUrl ||
    store.portalUrl ||
    store.url ||
    ""
  );
}

function resolveStoreAlias(store) {
  if (!store || typeof store !== "object") return "";
  if (typeof store.alias === "string" && store.alias.trim()) return store.alias.trim();
  if (typeof store.friendlyId === "string" && store.friendlyId.trim()) return store.friendlyId.trim();
  if (typeof store.friendlyID === "string" && store.friendlyID.trim()) return store.friendlyID.trim();
  if (typeof store.ID === "string" && store.ID.trim()) return store.ID.trim();
  if (typeof store.Id === "string" && store.Id.trim()) return store.Id.trim();
  return extractFriendlyId(store);
}

function normalizeAlias(alias) {
  if (alias == null) return "";
  const trimmed = String(alias).trim();
  if (!trimmed) return "";
  if (looksLikeGasId(trimmed)) return "";
  return trimmed;
}

function findAliasInDirectoryByGasId(gasId) {
  const norm = String(gasId || "").toLowerCase();
  if (!norm) return "";
  const match = state.directoryStores.find((item) => String(item.gasId || "").toLowerCase() === norm);
  if (match && match.alias) return normalizeAlias(match.alias);
  return "";
}

function findAliasInDirectoryByAlias(alias) {
  const norm = String(alias || "").toLowerCase();
  if (!norm) return null;
  return state.directoryStores.find((item) => String(item.alias || "").toLowerCase() === norm) || null;
}

function resolveAliasFromConfigByGasId(gasId) {
  const map = (window.MISEMARU && window.MISEMARU.FRIENDLY_IDS) || null;
  if (!map || typeof map !== "object") return "";
  const norm = String(gasId || "").toLowerCase();
  if (!norm) return "";
  for (const [alias, mapped] of Object.entries(map)) {
    if (String(mapped || "").toLowerCase() === norm) return normalizeAlias(alias);
  }
  return "";
}

function waitForDirectoryData(timeoutMs = 3000) {
  if (state.directoryStores.length) return Promise.resolve();
  if (!state.directoryLoading) return Promise.resolve();
  return new Promise((resolve) => {
    const start = Date.now();
    const interval = setInterval(() => {
      if (state.directoryStores.length || !state.directoryLoading || Date.now() - start > timeoutMs) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
}

async function resolveAliasForGasId(gasId) {
  const norm = String(gasId || "").toLowerCase();
  if (!norm) return "";
  let alias = findAliasInDirectoryByGasId(gasId);
  if (alias) return alias;
  alias = resolveAliasFromConfigByGasId(gasId);
  if (alias) return alias;
  await waitForDirectoryData();
  alias = findAliasInDirectoryByGasId(gasId);
  if (alias) return alias;
  return "";
}

function updateUrlForStore(gasId, options) {
  const opts = Object.assign({ alias: "", autoOpen: false }, options || {});
  let alias = normalizeAlias(opts.alias);
  const fallbackAlias = normalizeAlias(state.activeFriendlyId);
  if (!alias) alias = findAliasInDirectoryByGasId(gasId);
  if (!alias) alias = resolveAliasFromConfigByGasId(gasId);
  if (!alias && opts.autoOpen && fallbackAlias) alias = fallbackAlias;
  if (!alias && opts.autoOpen) alias = normalizeAlias(state.pendingFriendlyId);
  if (alias && looksLikeGasId(alias)) alias = "";
  updateUrlParam(state.lang, gasId, { friendlyId: alias });
  state.activeFriendlyId = alias;
}

function renderStore(store, options) {
  const opts = Object.assign({ fromMock: false }, options || {});
  const card = document.getElementById("storeCard");
  if (!card) return;
  state.store = store;
  state.usedMock = !!opts.fromMock;

  const name = store.storeName || store.name || store.title || store.gasId || "";
  const country = formatCountry(store.country);
  const servicesSummary = formatServices(store);
  const verifiedDateText = formatVerifiedDate(store.verifiedAt);
  const embedUrl = resolveEmbedUrl(store);

  const nameEl = document.getElementById("storeName");
  const countryEl = document.getElementById("storeCountry");
  const servicesEl = document.getElementById("storeServices");
  const dateEl = document.getElementById("verifiedDate");
  const verifiedBadge = document.getElementById("verifiedBadge");
  const openHereBtn = document.getElementById("storeOpenHere");

  if (nameEl) nameEl.textContent = name;
  if (countryEl) countryEl.textContent = country;
  if (servicesEl) servicesEl.textContent = servicesSummary;
  if (dateEl) dateEl.textContent = verifiedDateText;
  if (verifiedBadge) {
    if (store.verified === false) verifiedBadge.classList.add("d-none");
    else verifiedBadge.classList.remove("d-none");
    verifiedBadge.textContent = t("verifiedBadge");
  }

  if (openHereBtn) {
    if (embedUrl) {
      openHereBtn.disabled = false;
    } else {
      openHereBtn.disabled = true;
    }
  }

  const shouldAutoOpen = Boolean(opts.autoOpen) && Boolean(embedUrl);
  if (shouldAutoOpen) {
    updateGlobalPreloaderMessage("loadingStoreStage2");
    openStoreInline();
  } else {
    resetStoreIframe();
    if (opts.autoOpen) cancelAutoOpen();
  }

  card.classList.remove("d-none");
  setMockNoticeVisible(state.usedMock);
}

async function lookupRegistry(query) {
  if (!registryApi) {
    return { ok: false, error: "registry_missing" };
  }
  let gasId = "";
  let friendlyId = "";
  if (typeof query === "string") {
    gasId = query;
  } else if (query && typeof query === "object") {
    gasId = query.gasId || query.GasId || "";
    friendlyId = query.friendlyId || query.id || query.ID || "";
  }
  if (!gasId && !friendlyId) {
    return { ok: false, error: "missing_identifier" };
  }
  const url = new URL(registryApi);
  url.searchParams.set("action", "lookup");
  if (gasId) url.searchParams.set("gasId", gasId);
  if (friendlyId) url.searchParams.set("id", friendlyId);
  let data;
  try {
    data = await jsonpRequest(url);
  } catch (err) {
    return { ok: false, error: "jsonp_error", detail: String(err || "") };
  }
  const store = data?.store || data?.result || null;
  if (!data?.ok || !store) {
    return { ok: false, error: "not_found" };
  }
  return { ok: true, store };
}

function lookupMock(gasId) {
  const list = (window.MISEMARU && window.MISEMARU.MOCK_REGISTRY) || [];
  if (!Array.isArray(list)) return null;
  const norm = String(gasId || "").toLowerCase();
  const target = list.find((item) => {
    const id = extractGasId(item);
    return id && id.toLowerCase() === norm;
  });
  return target || null;
}

function lookupMockByFriendlyId(friendlyId) {
  const list = (window.MISEMARU && window.MISEMARU.MOCK_REGISTRY) || [];
  if (!Array.isArray(list)) return null;
  const norm = String(friendlyId || "").toLowerCase();
  const target = list.find((item) => {
    const alias = extractFriendlyId(item);
    return alias && alias.toLowerCase() === norm;
  });
  return target || null;
}

function resolveFriendlyIdFromConfig(friendlyId) {
  const map = (window.MISEMARU && window.MISEMARU.FRIENDLY_IDS) || null;
  if (!map) return "";
  if (typeof map === "object" && map !== null) {
    const direct = map[friendlyId];
    if (direct) return String(direct);
    const norm = friendlyId.toLowerCase();
    for (const [key, value] of Object.entries(map)) {
      if (String(key).toLowerCase() === norm && value) return String(value);
    }
  }
  return "";
}

async function resolveFriendlyId(friendlyId) {
  const trimmed = String(friendlyId || "").trim();
  if (!trimmed) return "";
  if (looksLikeGasId(trimmed)) return sanitizeGasId(trimmed);
  const directoryMatch = findAliasInDirectoryByAlias(trimmed);
  if (directoryMatch) {
    const gas = extractGasId(directoryMatch);
    if (gas) return gas;
    if (directoryMatch.gasId) return directoryMatch.gasId;
  }
  const configMatch = resolveFriendlyIdFromConfig(trimmed);
  if (configMatch) return configMatch;

  const mockMatch = lookupMock(trimmed) || lookupMockByFriendlyId(trimmed);
  if (mockMatch) {
    const mockGasId = extractGasId(mockMatch);
    if (mockGasId) return mockGasId;
  }

  if (registryApi) {
    try {
      const attempt = await lookupRegistry({ friendlyId: trimmed });
      if (attempt.ok && attempt.store) {
        const store = attempt.store;
        const gasId = extractGasId(store) || store.gasId || store.GAS_ID || "";
        if (gasId && looksLikeGasId(gasId)) return gasId;
      }
    } catch (err) {
      /* ignore */
    }
    try {
      const url = new URL(registryApi);
      url.searchParams.set("action", "lookup");
      url.searchParams.set("friendlyId", trimmed);
      const resp = await fetch(url.toString(), {
        method: "GET",
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      if (resp.ok) {
        const data = await resp.json();
        const store = data?.store || data?.result || null;
        const gasId = extractGasId(store);
        if (gasId) return gasId;
      }
    } catch (err) {
      console.warn("[portal] friendly lookup (direct) failed", err);
    }
    const listResp = await fetchRegistryList();
    if (listResp.ok && Array.isArray(listResp.stores)) {
      const norm = trimmed.toLowerCase();
      const matchedRaw = listResp.stores.find((item) => {
        const alias = extractFriendlyId(item);
        return alias && alias.toLowerCase() === norm;
      });
      if (matchedRaw) {
        const gasId = extractGasId(matchedRaw);
        if (gasId) return gasId;
      }
    }
  }

  return "";
}

async function handleLookup(event) {
  event.preventDefault();
  const input = document.getElementById("gasIdInput");
  if (!input) return;
  const raw = input.value.trim();
  if (!raw) {
    setStatus("gasIdRequired", "warning");
    cancelAutoOpen();
    return;
  }
  const gasId = sanitizeGasId(raw);
  const normalizedId = gasId.toLowerCase();
  const autoOpenThisLookup = state.autoOpenActive && state.autoOpenTargetId === normalizedId;
  if (autoOpenThisLookup) state.autoOpenTargetId = "";
  else state.activeFriendlyId = "";
  setStatus("verifyingMessage", "info");
  clearStoreDisplay();
  setLoading(true);
  state.usedMock = false;
  try {
    let response = await lookupRegistry({ gasId });
    if (!response.ok) {
      if (response.error === "registry_missing") {
        setStatus("registryMissingMessage", "warning");
        const store = lookupMock(gasId);
        if (store && store.verified !== false) {
          renderStore(store, { fromMock: true, autoOpen: autoOpenThisLookup });
          const alias = resolveStoreAlias(store);
          updateUrlForStore(gasId, { alias, autoOpen: autoOpenThisLookup });
          if (!alias) {
            resolveAliasForGasId(gasId).then((resolved) => {
              if (resolved) updateUrlForStore(gasId, { alias: resolved, autoOpen: autoOpenThisLookup });
            });
          }
          setStatus("statusSuccess", "success");
        } else if (store && store.verified === false) {
          setStatus("unverifiedMessage", "warning");
          if (autoOpenThisLookup) cancelAutoOpen();
        } else {
          setStatus("notFoundMessage", "warning");
          if (autoOpenThisLookup) cancelAutoOpen();
        }
        setMockNoticeVisible(true);
        return;
      }
      if (response.error === "not_found") {
        const mock = lookupMock(gasId);
        if (mock && mock.verified !== false) {
          renderStore(mock, { fromMock: true, autoOpen: autoOpenThisLookup });
          const alias = resolveStoreAlias(mock);
          updateUrlForStore(gasId, { alias, autoOpen: autoOpenThisLookup });
          if (!alias) {
            resolveAliasForGasId(gasId).then((resolved) => {
              if (resolved) updateUrlForStore(gasId, { alias: resolved, autoOpen: autoOpenThisLookup });
            });
          }
          setStatus("statusSuccess", "success");
          setMockNoticeVisible(true);
        } else if (mock && mock.verified === false) {
          setStatus("unverifiedMessage", "warning");
          if (autoOpenThisLookup) cancelAutoOpen();
        } else {
          setStatus("notFoundMessage", "warning");
          if (autoOpenThisLookup) cancelAutoOpen();
        }
        return;
      }
      throw new Error(response.error || "lookup_failed");
    }
    const store = response.store;
    if (!store) {
      setStatus("notFoundMessage", "warning");
      if (autoOpenThisLookup) cancelAutoOpen();
      return;
    }
    if (store.verified === false) {
      setStatus("unverifiedMessage", "warning");
      if (autoOpenThisLookup) cancelAutoOpen();
      return;
    }
    renderStore(store, { fromMock: false, autoOpen: autoOpenThisLookup });
    const alias = resolveStoreAlias(store);
    updateUrlForStore(gasId, { alias, autoOpen: autoOpenThisLookup });
    if (!alias) {
      resolveAliasForGasId(gasId).then((resolved) => {
        if (resolved) updateUrlForStore(gasId, { alias: resolved, autoOpen: autoOpenThisLookup });
      });
    }
    setStatus("statusSuccess", "success");
    setMockNoticeVisible(false);
  } catch (err) {
    console.warn("[portal] lookup error", err);
    const mock = lookupMock(raw);
    if (mock) {
      renderStore(mock, { fromMock: true, autoOpen: autoOpenThisLookup });
      const gasIdFromMock = extractGasId(mock) || raw;
      const alias = resolveStoreAlias(mock);
      updateUrlForStore(gasIdFromMock, { alias, autoOpen: autoOpenThisLookup });
      if (!alias) {
        resolveAliasForGasId(gasIdFromMock).then((resolved) => {
          if (resolved) updateUrlForStore(gasIdFromMock, { alias: resolved, autoOpen: autoOpenThisLookup });
        });
      }
      setStatus("statusSuccess", "success");
      setMockNoticeVisible(true);
    } else {
      setStatus("errorMessage", "error");
      if (autoOpenThisLookup) cancelAutoOpen();
    }
  } finally {
    if (!autoOpenThisLookup) cancelAutoOpen();
    setLoading(false);
  }
}
function formatDirectoryStatus(store) {
  const status = String(store.status || "").toLowerCase();
  if (status === "pending" || status === "review" || status === "reviewing") return t("storesStatusPending");
  if (status === "unverified" || status === "draft" || store.verified === false) return t("storesStatusUnverified");
  return t("storesStatusVerified");
}

function sanitizeGasId(value) {
  const str = String(value || "").trim();
  if (!str) return "";
  const directMatch = str.match(/^(AK[A-Za-z0-9_-]{10,})$/i);
  if (directMatch) return directMatch[1];
  const urlMatch = str.match(/\/s\/(AK[A-Za-z0-9_-]{10,})/i);
  if (urlMatch) return urlMatch[1];
  return str;
}

function looksLikeGasId(value) {
  const str = sanitizeGasId(value);
  return /^AK[A-Za-z0-9_-]{10,}$/i.test(str);
}

function extractGasId(raw) {
  let candidate = "";
  const seen = new Set();
  const add = (value) => {
    if (candidate) return;
    if (value == null) return;
    const str = String(value).trim();
    if (!str) return;
    const sanitized = sanitizeGasId(str);
    if (!looksLikeGasId(sanitized) || seen.has(sanitized)) return;
    seen.add(sanitized);
    candidate = sanitized;
  };
  const fields = [
    raw?.gasId,
    raw?.gasid,
    raw?.GasId,
    raw?.GAS_ID,
    raw?.scriptId,
    raw?.executionId,
    raw?.deploymentId,
    raw?.scriptUrl,
    raw?.iframeUrl,
    raw?.portalUrl,
    raw?.publicUrl,
    raw?.url,
    raw?.id,
    raw?.ID,
  ];
  fields.forEach(add);
  if (!candidate && raw && typeof raw === "object") {
    Object.values(raw).forEach(add);
  }
  if (!candidate && Array.isArray(raw)) {
    raw.forEach(add);
  }
  return candidate;
}

function extractFriendlyId(raw) {
  if (!raw) return "";
  const candidates = [
    raw.alias,
    raw.Alias,
    raw.friendlyId,
    raw.FriendlyId,
    raw.friendlyID,
    raw.storeId,
    raw.storeID,
    raw.storeAlias,
    raw.storeSlug,
    raw.slug,
    raw.customId,
    raw.shortId,
    raw.shortID,
    raw.id,
    raw.ID,
  ];
  for (const candidate of candidates) {
    const str = String(candidate || "").trim();
    if (!str) continue;
    if (looksLikeGasId(str)) continue;
    return str;
  }
  return "";
}

function normalizeStoreRecord(raw) {
  const servicesArray = getServicesArray(raw);
  const countryCode = String(raw.country || raw.region || "").trim().toUpperCase();
  let status = String(raw.status || "").toLowerCase();
  if (!status) {
    if (raw.verified === false) status = "unverified";
    else if (raw.verified === true) status = "verified";
    else status = "pending";
  }
  const gasId = extractGasId(raw);
  const alias = extractFriendlyId(raw);
  return {
    gasId,
    alias,
    storeName: raw.storeName || raw.name || raw.title || raw.label || gasId || "",
    country: countryCode,
    servicesArray,
    verified: raw.verified === undefined ? status === "verified" : !!raw.verified,
    status,
    verifiedAt: raw.verifiedAt || raw.approvedAt || raw.publishedAt || "",
    publicUrl: raw.publicUrl || raw.portalUrl || raw.url || raw.iframeUrl || "",
  };
}

function getMockDirectory() {
  const list = (window.MISEMARU && window.MISEMARU.MOCK_REGISTRY) || [];
  if (!Array.isArray(list)) return [];
  return list;
}

async function fetchRegistryList() {
  if (!registryApi) return { ok: false, error: "registry_missing" };
  const url = new URL(registryApi);
  url.searchParams.set("action", "list");
  try {
    const data = await fetchRegistryJson(url);
    const stores = data?.stores || data?.results || data?.list || [];
    const updatedAt = data?.updatedAt || data?.timestamp || data?.generatedAt || null;
    return { ok: true, stores, updatedAt };
  } catch (err) {
    return { ok: false, error: "registry_fetch_failed", detail: String(err || "") };
  }
}

function populateCountryFilterOptions(stores) {
  const filter = document.getElementById("storesCountryFilter");
  if (!filter) return;
  const previous = state.directoryFilter || "";
  const countryCodes = Array.from(
    new Set((stores || []).map((s) => String(s.country || "").toUpperCase()).filter(Boolean))
  ).sort();
  state.directoryCountries = countryCodes;
  filter.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.dataset.i18n = "storesFilterAll";
  allOption.textContent = t("storesFilterAll");
  filter.appendChild(allOption);
  countryCodes.forEach((code) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = formatCountry(code);
    filter.appendChild(option);
  });
  if (previous && countryCodes.includes(previous)) {
    filter.value = previous;
  } else {
    filter.value = "";
    state.directoryFilter = "";
  }
}

function setDirectoryLoading(isLoading) {
  state.directoryLoading = !!isLoading;
  const loadingEl = document.getElementById("storesLoadingState");
  if (loadingEl) loadingEl.classList.toggle("d-none", !isLoading);
}

function setDirectoryError() {
  state.directoryError = true;
  const tbody = document.getElementById("storesTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.colSpan = 4;
  cell.className = "text-muted py-4";
  cell.textContent = t("storesError");
  row.appendChild(cell);
  tbody.appendChild(row);
}

function renderDirectory(stores) {
  const tbody = document.getElementById("storesTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  if (!stores.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.className = "text-muted py-4";
    cell.textContent = t("storesEmpty");
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }
  stores.forEach((store) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.className = "fw-semibold";
    if (store.publicUrl) {
      const link = document.createElement("a");
      link.href = store.publicUrl;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = store.storeName;
      link.className = "text-decoration-none";
      link.setAttribute("aria-label", `${store.storeName} - ${t("storesActionOpen")}`);
      nameCell.appendChild(link);
    } else {
      nameCell.textContent = store.storeName;
    }
    const countryCell = document.createElement("td");
    countryCell.textContent = store.country ? formatCountry(store.country) : t("storesCountryUnknown");
    const servicesCell = document.createElement("td");
    servicesCell.textContent = store.servicesArray.length ? store.servicesArray.join(" / ") : t("servicesUnknown");
    const statusCell = document.createElement("td");
    statusCell.textContent = formatDirectoryStatus(store);
    row.appendChild(nameCell);
    row.appendChild(countryCell);
    row.appendChild(servicesCell);
    row.appendChild(statusCell);
    tbody.appendChild(row);
  });
}

function updateDirectoryMeta() {
  const meta = document.getElementById("storesUpdatedAt");
  if (!meta) return;
  if (state.directoryUpdatedAt) {
    try {
      const date = new Date(state.directoryUpdatedAt);
      const formatted = new Intl.DateTimeFormat(state.lang, { dateStyle: "medium", timeStyle: "short" }).format(date);
      meta.textContent = `${t("storesUpdatedAt")}: ${formatted}`;
      meta.classList.remove("d-none");
    } catch (_) {
      meta.textContent = "";
      meta.classList.add("d-none");
    }
  } else {
    meta.textContent = "";
    meta.classList.add("d-none");
  }
}

function refreshDirectory() {
  const stores = state.directoryFilter
    ? state.directoryStores.filter((store) => String(store.country || "").toUpperCase() === state.directoryFilter)
    : state.directoryStores.slice();
  renderDirectory(stores);
  updateDirectoryMeta();
}

function refreshDirectoryTranslations() {
  if (!document.getElementById("storesTableBody")) return;
  if (state.directoryError) {
    setDirectoryError();
    return;
  }
  populateCountryFilterOptions(state.directoryStores);
  refreshDirectory();
  const notice = document.getElementById("storesNotice");
  if (notice && state.directorySource === "mock") {
    notice.textContent = t("registryMissingMessage");
  }
}

async function loadDirectoryData() {
  if (!document.getElementById("storesTableBody")) return;
  state.directoryError = false;
  setDirectoryLoading(true);
  const notice = document.getElementById("storesNotice");
  if (notice) notice.classList.add("d-none");
  try {
    const res = await fetchRegistryList();
    let rawStores = [];
    if (res.ok) {
      rawStores = res.stores || [];
      state.directorySource = "registry";
      state.directoryUpdatedAt = res.updatedAt || null;
    } else {
      rawStores = getMockDirectory();
      state.directorySource = "mock";
      state.directoryUpdatedAt = null;
      if (notice) {
        notice.textContent = t("registryMissingMessage");
        notice.classList.remove("d-none");
      }
    }
    state.directoryStores = (rawStores || [])
      .map(normalizeStoreRecord)
      .filter((item) => {
        if (!item) return false;
        if (item.gasId && looksLikeGasId(item.gasId)) return true;
        if (item.alias && !looksLikeGasId(item.alias)) return true;
        return false;
      });
    if (state.store) {
      const currentGasId = state.store.gasId || extractGasId(state.store);
      const aliasFromDirectory = findAliasInDirectoryByGasId(currentGasId);
      if (aliasFromDirectory && aliasFromDirectory !== state.activeFriendlyId) {
        updateUrlForStore(currentGasId, { alias: aliasFromDirectory, autoOpen: false });
      }
    }
    populateCountryFilterOptions(state.directoryStores);
    refreshDirectory();
    if (state.pendingFriendlyId) {
      const pending = state.pendingFriendlyId;
      state.pendingFriendlyId = "";
      state.friendlyRetryCount = (state.friendlyRetryCount || 0) + 1;
      if (state.friendlyRetryCount <= 3) {
        setTimeout(() => launchFriendlyId(pending), 50);
      } else {
        cancelAutoOpen();
        setStatus("notFoundMessage", "warning");
      }
    } else {
      state.friendlyRetryCount = 0;
    }
  } catch (error) {
    console.warn("[portal] directory load error", error);
    setDirectoryError();
    if (state.pendingFriendlyId) {
      cancelAutoOpen();
      setStatus("errorMessage", "error");
      state.pendingFriendlyId = "";
      state.friendlyRetryCount = 0;
    }
  } finally {
    setDirectoryLoading(false);
  }
}

function initStoresDirectory() {
  if (!document.getElementById("storesTableBody")) return;
  const filter = document.getElementById("storesCountryFilter");
  if (filter) {
    filter.addEventListener("change", (event) => {
      state.directoryFilter = String(event.target.value || "").toUpperCase();
      refreshDirectory();
    });
  }
  loadDirectoryData();
}

function scheduleAutoLookup(gasId) {
  const sanitized = sanitizeGasId(gasId);
  if (!sanitized) return;
  beginAutoOpen(sanitized);
  const input = document.getElementById("gasIdInput");
  if (input) input.value = sanitized;
  setTimeout(() => {
    const form = document.getElementById("storeLookupForm");
    if (form) handleLookup(new Event("submit", { cancelable: true, bubbles: true }));
  }, 200);
}

async function launchFriendlyId(friendlyId) {
  const trimmed = String(friendlyId || "").trim();
  if (!trimmed) return;
  const alreadyActive = state.autoOpenActive;
  if (state.lastFriendlyRequested !== trimmed) {
    state.friendlyRetryCount = 0;
  }
  state.lastFriendlyRequested = trimmed;
  state.activeFriendlyId = trimmed;
  state.pendingFriendlyId = "";
  if (!alreadyActive) beginAutoOpen(trimmed);
  try {
    const gasId = await resolveFriendlyId(trimmed);
    if (!gasId) {
      if (state.directoryLoading) {
        state.pendingFriendlyId = trimmed;
        return;
      }
      cancelAutoOpen();
      setStatus("notFoundMessage", "warning");
      return;
    }
    state.pendingFriendlyId = "";
    state.friendlyRetryCount = 0;
    state.autoOpenTargetId = String(gasId).toLowerCase();
    state.autoOpenActive = true;
    const input = document.getElementById("gasIdInput");
    if (input) input.value = gasId;
    setTimeout(() => {
      const form = document.getElementById("storeLookupForm");
      if (form) handleLookup(new Event("submit", { cancelable: true, bubbles: true }));
    }, 120);
    updateUrlForStore(gasId, { alias: trimmed, autoOpen: true });
  } catch (err) {
    console.warn("[portal] friendly launch failed", err);
    cancelAutoOpen();
    setStatus("errorMessage", "error");
  }
}

function init() {
  populateLanguageSelects();
  const url = new URL(window.location.href);
  initializeHistoryFromLocation(url);
  const langParam = getParamCaseInsensitive(url.searchParams, LANG_PARAM);
  const friendlyIdParamRaw = getParamCaseInsensitive(url.searchParams, "id") || getParamCaseInsensitive(url.searchParams, "Id");
  const urlLang = resolveLang(langParam);
  const storedLang = resolveLang(safeLocalStorageGet(LS_KEY));
  const browserLang = resolveLang(navigator.language);
  const friendlyIdParam = (friendlyIdParamRaw || "").trim();
  const initialLang = urlLang || storedLang || browserLang || "en";
  const skipLanguageStep = Boolean(urlLang || storedLang || friendlyIdParam);
  if (friendlyIdParam) {
    state.activeFriendlyId = friendlyIdParam;
  }

  setLanguage(initialLang, { persist: Boolean(urlLang || storedLang), updateParam: Boolean(urlLang) });

  const selects = document.querySelectorAll('[data-role="language-select"]');
  selects.forEach((select) => {
    select.addEventListener("change", (ev) => {
      const next = resolveLang(ev.target.value) || state.lang;
      const persist = !document.getElementById("language-step")?.classList.contains("d-none");
      setLanguage(next, { persist, updateParam: true });
    });
  });

  const startButton = document.getElementById("startButton");
  if (startButton) {
    startButton.addEventListener("click", () => {
      const primarySelect = document.querySelector('#language-step [data-role="language-select"]');
      const selected = resolveLang(primarySelect?.value) || state.lang || "en";
      setLanguage(selected, { persist: true, updateParam: true });
      showPortalStep();
    });
  }

  const form = document.getElementById("storeLookupForm");
  if (form) form.addEventListener("submit", handleLookup);
  const openHereBtn = document.getElementById("storeOpenHere");
  if (openHereBtn) openHereBtn.addEventListener("click", openStoreInline);

  initStoresDirectory();

  if (skipLanguageStep) {
    showPortalStep();
  } else {
    showLanguageStep();
  }

  const gasIdParam = getParamCaseInsensitive(url.searchParams, GAS_PARAM);
  if (gasIdParam && skipLanguageStep) {
    scheduleAutoLookup(gasIdParam);
  } else if (friendlyIdParam) {
    launchFriendlyId(friendlyIdParam);
  }

  updateSigninButtonVisibility();
}

document.addEventListener("DOMContentLoaded", init);

import { Project, Experiment, ResearchTopic, NowBuilding } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "screenshot-stitcher",
    title: "Screenshot Stitcher",
    titleJa: "Screenshot Stitcher (スクリーンショット連結ツール)",
    description: "A tool that automatically stitches long screenshots.",
    descriptionJa: "縦長のスクリーンショットを、ズレなく自動で一枚の画像に連結するユーティリティ。",
    longDescription: "An advanced, fully client-side utility that automatically detects overlapping pixel sequences in vertical screenshots and merges them into a single, high-fidelity long image. Ideal for archiving chat logs, long web articles, or mobile user experience flow streams without uploading sensitive data to any server.",
    longDescriptionJa: "完全にクライアントサイド（ブラウザ上）で動作する、高度な画像連結ユーティリティです。縦長スクリーンショットの重なり合うピクセルパターンを自動検出してアライメントを調整し、極めて高精度なロング画像へシームレスに結合します。チャットの会話ログ、長文のWeb記事、モバイルアプリの遷移画面などを、外部サーバーに機密データをアップロードすることなく、プライバシー重視で安全にアーカイブできます。",
    iconName: "Scissors",
    tags: ["Open-Source", "Utility", "HTML5 Canvas", "WebAssembly"],
    tagsJa: ["オープンソース", "ユーティリティ", "HTML5 Canvas", "WebAssembly"],
    githubUrl: "https://github.com/bellbullet/screenshot-stitcher",
    demoUrl: "https://stitcher.bellbullet.io",
    status: "Released",
    statusJa: "リリース済",
    features: [
      "Automated vertical overlap alignment",
      "No-server privacy-first pixel analysis",
      "High-resolution canvas rendering & image export",
      "Seamless drag-and-drop user interface",
      "Manual adjustment sliders for tricky offsets"
    ],
    featuresJa: [
      "自動縦方向オーバーラップ整列とパターン認識",
      "サーバーアップロード不要の、完全クライアントサイドでのプライバシー重視ピクセル解析",
      "高解像度Canvasレンダリングと画像エクスポート",
      "シームレスなドラッグ＆ドロップ対応のモダンユーザーインターフェース",
      "特殊なUI要素用の、手動でのピクセルオフセット微調整スライダー"
    ],
    techStack: ["React", "TypeScript", "WebAssembly", "Tailwind CSS", "HTML5 Canvas"]
  },
  {
    id: "ai-shared-memory",
    title: "AI Shared Memory",
    titleJa: "AI Shared Memory (AI共有長期記憶)",
    description: "Knowledge management for AI assistants.",
    descriptionJa: "AIアシスタントやエージェントのコンテキスト情報を一元管理する、ベクトル対応の長期記憶エンジン。",
    longDescription: "A high-performance memory bridge and vector-powered knowledge base designed for local or cloud LLMs. It enables persistent, long-term memory of past interactions, custom facts, and project structures, allowing AI agents to continuously build context across multiple isolated sessions.",
    longDescriptionJa: "ローカルまたはクラウド上のLLM（大規模言語モデル）向けに開発された、高性能な記憶蓄積架け橋およびベクトル駆動型ナレッジベースです。過去の対話履歴、固有の設定情報、プロジェクト構成などの長期的な記憶保持を可能にし、異なるセッションや対話チャネルをまたいでもAIエージェントが持続的に学習・高度な文脈を維持できるように設計されています。",
    iconName: "Brain",
    tags: ["AI", "Developer Tool", "Vector DB", "LLM Integration"],
    tagsJa: ["人工知能", "開発者ツール", "ベクトルデータベース", "LLM連携"],
    githubUrl: "https://github.com/bellbullet/ai-shared-memory",
    demoUrl: "https://memory.bellbullet.io",
    status: "Beta",
    statusJa: "ベータ版",
    features: [
      "Hierarchical semantic vector embedding extraction",
      "Automatic summarization of historical context windows",
      "TTL (Time-To-Live) storage tiering for ephemeral vs core memory",
      "Clean REST & GraphQL API connectors for LangChain, LlamaIndex, and custom agents",
      "Local-first SQLite backup storage options"
    ],
    featuresJa: [
      "階層構造化されたセマンティックベクトル埋め込み（Embeddings）抽出",
      "長大な歴史対話コンテキストウィンドウの自動重要情報要約・圧縮",
      "一時記憶と不揮発コア記憶を整理するTTL（有効期限）ストレージ層の構築",
      "LangChain、LlamaIndex、カスタムAIに容易に繋がるクリーンなREST & GraphQLコネクタ",
      "オフライン/ローカルでの安全な動作を保証するSQLiteバックアップ機構"
    ],
    techStack: ["Node.js", "Gemini API", "Drizzle ORM", "SQLite / PGVector", "Fastify"]
  },
  {
    id: "game-freeze-sentinel",
    title: "GameFreezeSentinel",
    titleJa: "GameFreezeSentinel (ゲームフリーズ診断機)",
    description: "GPU/game freeze analysis tool.",
    descriptionJa: "Direct3D / Vulkanフリーズ時のスレッドログやVRAM診断を可能にする低負荷ロギングツール。",
    longDescription: "A lightweight, low-overhead system debugging daemon and overlay that monitors game frame times, hardware clock rates, and graphics driver responses. When a Direct3D or Vulkan graphics engine freezes, the sentinel intercepts the exception, logs active VRAM/CPU threads, and exports readable diagnostics.",
    longDescriptionJa: "ゲームのフレーム時間、ハードウェアクロック周波数、GPUドライバーの応答時間をミリ秒単位で監視する、軽量かつシステム負荷の極めて低いデバッグ用バックグラウンドサービスおよびHUDです。Direct3DまたはVulkanグラフィックエンジンがフリーズ、あるいはクラッシュした瞬間に、その例外処理を傍受してアクティブなVRAMダンプおよびCPU呼び出しスタックを安全にロギングし、開発者やゲーマーが読みやすいクリーンなバグ診断レポートを生成します。",
    iconName: "ShieldAlert",
    tags: ["Game Dev", "GPU Debugging", "Telemetry", "Rust"],
    tagsJa: ["ゲーム開発", "GPUデバッグ", "テレメトリ", "Rust / システム"],
    githubUrl: "https://github.com/bellbullet/game-freeze-sentinel",
    demoUrl: "https://sentinel.bellbullet.io",
    status: "Released",
    statusJa: "リリース済",
    features: [
      "Low-impact kernel hooking & Direct3D hook architecture",
      "Instant crash diagnostics & VRAM state logging",
      "Real-time FPS and driver heat telemetry overlay",
      "Discord & Slack webhook crash notification integration",
      "Interactive local analytics dashboard"
    ],
    featuresJa: [
      "システムに極めて影響の少ない、Direct3D/Vulkan用レンダリングパイプラインフック",
      "フリーズを検知した瞬間の、即時クラッシュ診断ログおよびVRAM使用構造のシリアライズ",
      "ゲームプレイの邪魔をしない、超軽量フレームレート・GPU温度情報リアルタイムオーバーレイ",
      "DiscordやSlackウェブフックを介した、リモートでの自動クラッシュアラート通知機能",
      "蓄積されたログを時系列で比較・可視化できるローカル分析Webダッシュボード"
    ],
    techStack: ["Rust", "Windows API", "WebAssembly", "Tauri", "Recharts"]
  },
  {
    id: "image-grid-tool",
    title: "Image Grid Tool",
    titleJa: "Image Grid Tool (画像レイアウト・コラージュ)",
    description: "Image layout utility.",
    descriptionJa: "アスペクト比を維持しながら複数の画像を最適なグリッド配置に構成するビジュアルツール。",
    longDescription: "A smart, responsive collage and layout generator designed for UI designers, presentation authors, and social media creators. Input various images and the tool will calculate the optimal layout grid while maintaining individual aspect ratios and producing neat CSS code.",
    longDescriptionJa: "UIデザイナー、プレゼンテーション作家、SNSコンテンツクリエイター向けに作られた、スマートなインテリジェント画像レイアウト・コラージュツールです。解像度やアスペクト比が異なる複数の画像を放り込むだけで、空間効率が最大となる最適なグリッド（ベントーグリッド等）を瞬時に計算。そのままコピー＆ペーストで使用可能な綺麗なCSSグリッドコードやWebP高解像度アセンブリ画像を書き出します。",
    iconName: "LayoutGrid",
    tags: ["Utility", "Design Tool", "Responsive", "Framer Motion"],
    tagsJa: ["ユーティリティ", "デザインツール", "レスポンシブ", "Framer Motion"],
    githubUrl: "https://github.com/bellbullet/image-grid-tool",
    demoUrl: "https://grid.bellbullet.io",
    status: "Released",
    statusJa: "リリース済",
    features: [
      "Dynamic bento-grid and polaroid layout presets",
      "Intelligent aspect ratio constraint solvers",
      "High-speed client-side image cropping and spacing presets",
      "Instant copy-to-clipboard CSS/HTML grid declarations",
      "PNG, WebP, and SVG canvas exporting options"
    ],
    featuresJa: [
      "近年トレンドのベントーグリッド風レイアウトやレトロポラロイド等、多彩なプリセット",
      "比率の崩れを自動的に解消する、高度なアスペクト比追従幾何学ソルバー",
      "ブラウザ上で軽快にプレビューしながら設定できる、画像クロップ、余白、境界の角丸操作",
      "ワンクリックでWeb開発に使えるクリーンなCSS Grid / HTMLコード自動生成",
      "高圧縮率なWebPや可逆圧縮PNG、ベクター構成を保つSVGなどへの柔軟なエクスポート"
    ],
    techStack: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "File System Access API"]
  }
];

export const EXPERIMENTS: Experiment[] = [
  {
    id: "exp-1",
    title: "ai-shared-memory",
    titleJa: "ai-shared-memory 組み込みキャッシュ最適化",
    version: "v1.1",
    date: "2026-06-28",
    description: "Introduced a memory caching & consolidation layer using local embeddings, cutting token usage down by 40% while preserving retrieval accuracy.",
    descriptionJa: "ローカル環境での埋め込み表現を用いたメモリキャッシュと統合レイヤーを構築。検索精度を維持したままLLMへのトークン消費量を約40%節約することに成功。",
    type: "update",
    icon: "🔬",
    tags: ["Local Embedding", "Context Compression", "Caching"],
    tagsJa: ["ローカル埋め込み", "コンテキスト圧縮", "キャッシュ層"]
  },
  {
    id: "exp-2",
    title: "Screenshot Stitcher",
    titleJa: "Screenshot Stitcher 正式リリース",
    version: "v1.0",
    date: "2026-06-15",
    description: "Successfully rolled out web client featuring automatic GPU-accelerated canvas stitching for raw screenshots. Reached 1.2k stargazers on GitHub.",
    descriptionJa: "GPUアクセラレーションを応用した、Webブラウザ内自動キャンバス連結機能を搭載した本ツールを一般公開。GitHubにて累計スター数1,200個を突破。",
    type: "release",
    icon: "🚀",
    tags: ["Open-Source", "Canvas API", "WebGPU"],
    tagsJa: ["オープンソース", "Canvas API", "WebGPU"]
  },
  {
    id: "exp-3",
    title: "GameFreezeSentinel",
    titleJa: "GameFreezeSentinel 描画割り込みフック",
    version: "v0.9-alpha",
    date: "2026-05-30",
    description: "Shipped dynamic Direct3D rendering hooks for diagnostics recording. Reduced system footprint below 1.5% CPU overhead.",
    descriptionJa: "クラッシュ診断記録用に動的なDirect3Dレンダリング割り込みフック機能を実装。常時監視中のシステムリソース消費をCPU使用率1.5%以下に徹底削減。",
    type: "update",
    icon: "🤖",
    tags: ["Direct3D Hook", "Diagnostics", "Tauri"],
    tagsJa: ["Direct3Dフック", "システム診断", "Tauri"]
  },
  {
    id: "exp-4",
    title: "WebGPU Image Transformations",
    titleJa: "WebGPUによる画像高速処理の研究",
    version: "r-2026-05-10",
    date: "2026-05-10",
    description: "Researched WebGPU-based parallel compute shaders to handle heavy high-res image manipulation pipelines natively on the browser.",
    descriptionJa: "ブラウザ上で非常に重い高解像度の画像編集フィルタ処理や連結を行うため、WebGPUベースの並列演算コンピューティングシェーダー技術を導入・検証。",
    type: "research",
    icon: "🧪",
    tags: ["WebGPU", "Compute Shaders", "Image Processing"],
    tagsJa: ["WebGPU", "コンピュートシェーダ", "画像処理"]
  },
  {
    id: "exp-5",
    title: "Multi-Agent Collaboration protocol",
    titleJa: "複数自律エージェント協調プロトコルの策定",
    version: "v0.1-poc",
    date: "2026-04-18",
    description: "Designed a lightweight JSON-RPC coordination standard enabling separate local AI agents to exchange tool call definitions and negotiate sub-tasks.",
    descriptionJa: "それぞれ独立して動作するローカルAIエージェント同士が、得意とするツール呼び出し定義を相互に登録・伝達し、タスクを分割して自動交渉・実行する、軽量なJSON-RPC標準規格を試作開発。",
    type: "research",
    icon: "📡",
    tags: ["Multi-Agent", "JSON-RPC", "Protocol Design"],
    tagsJa: ["マルチエージェント", "JSON-RPC", "通信規格設計"]
  }
];

export const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    id: "res-ai-coding",
    title: "AI Coding",
    titleJa: "AIコーディング自律生成",
    description: "Developing next-generation code generation engines, custom lint integrations, and autonomous debug loops.",
    descriptionJa: "次世代のコード生成AIモデル最適化、自動リンター連携、テスト結果の自動修復デバッグループの構築技術。",
    iconName: "Code",
    status: "Active Research",
    statusJa: "現在注力研究中",
    progress: 75,
    details: [
      "Semantic AST-level difference analysis for code injection",
      "Dynamic error loop fixing based on terminal stream monitoring",
      "Fine-tuned localized code completion models for custom SDKs"
    ],
    detailsJa: [
      "コードをインジェクションする際の、抽象構文木（AST）レベルの高度な差分・構造解析",
      "テストスイートや開発サーバーの端末ストリーム監視に基づいた、動的なエラー検出・自動コード修正ループの試作",
      "特定のプライベートAPIや独自SDKにおける高速サジェスト用に最適化した、軽量LLMコード補完モデルの調整"
    ]
  },
  {
    id: "res-multi-agent",
    title: "Multi-Agent Swarms",
    titleJa: "マルチエージェント群制御",
    description: "Orchestration protocols for collaborative agent nodes, dividing tasks, and managing state across asynchronous loops.",
    descriptionJa: "協調動作する自律エージェント群が、高度に作業を自律分散・決定しながら非同期ループで全体の進捗状態を管理するプロトコル。",
    iconName: "Users",
    status: "Active Research",
    statusJa: "現在注力研究中",
    progress: 60,
    details: [
      "Distributed consensus models for agent networks",
      "Dynamic role generation and teardown in response to complex user queries",
      "Conflict resolution mechanisms in concurrent agent-tool executions"
    ],
    detailsJa: [
      "エージェント間の通信トラフィックと競合を防ぐ、分散型分散コンセンサス決定スキーム",
      "難解で複雑なユーザーの要望を受けて、一時的な役割を持つサブエージェントを動的に生成しタスク完了後に自己消滅させる仕組み",
      "複数のエージェントが同一のリソースやツールを同時に叩いたときの競合調停ロジック"
    ]
  },
  {
    id: "res-webassembly",
    title: "WebAssembly Runtimes",
    titleJa: "WebAssemblyクライアント実行",
    description: "Porting high-performance server libraries, computer vision architectures, and heavy system utilities directly to the client browser.",
    descriptionJa: "サーバーサイドで行っていた重たいコンピュータビジョンアルゴリズムや高速診断処理を、すべてブラウザ側で実行できるように移植する技術。",
    iconName: "Cpu",
    status: "Exploration Phase",
    statusJa: "要素検証フェーズ",
    progress: 45,
    details: [
      "Compiling C++ and Rust diagnostic libraries to WASM",
      "Inter-thread communication optimizations between Web Workers and WASM linear memory",
      "Running serverless edge compute workloads directly in sandbox frames"
    ],
    detailsJa: [
      "歴史的に培われたC++や超高速なRust製クラッシュデバッグパーサーライブラリをWASMとしてビルド",
      "バックグラウンドを支えるWeb Workersと、WASM線形メモリ空間との間で行われる並列スレッド間ゼロコピー転送",
      "完全に安全にサンドボックス化されたiframe内での軽量なエッジ・コンピューティング駆動"
    ]
  },
  {
    id: "res-local-ai",
    title: "Local AI & WebGPU",
    titleJa: "ローカルAI & WebGPU高速化",
    description: "Enabling complete offline execution of quantized neural networks in-browser using WebGPU and hardware acceleration.",
    descriptionJa: "WebGPUとグラフィックアクセラレータによる、Webブラウザ完全オフライン環境での軽量量子化AIモデルの超高速実行。",
    iconName: "HardDrive",
    status: "Active Prototyping",
    statusJa: "活発な試作フェーズ",
    progress: 80,
    details: [
      "In-browser token streaming on quantized LLMs (e.g., Llama 3 8B, Phi-3)",
      "WebGPU-accelerated vector embedding generation for custom indexers",
      "Zero-latency edge voice synthesis models"
    ],
    detailsJa: [
      "ブラウザ内で量子化されたLlama 3 (8B)やPhi-3等のローカルLLMを起動し、高速トークンストリーミングを実現する検証",
      "WebGPUを使用した、入力文字から一瞬で多次元ナレッジベクトル（埋め込み）を生成するオンデバイス計算",
      "インターネットが不通でも、完全な機密性を維持したまま動作するWeb edgeベースの音声認識・音声合成"
    ]
  },
  {
    id: "res-robotics",
    title: "Robotics & Visual SLAM",
    titleJa: "ロボティクス & 自己位置推定 (SLAM)",
    description: "Integrating simulated visual-SLAM tracking, ROS2 metrics visualizers, and edge telemetry tools for autonomous navigation.",
    descriptionJa: "自律走行ロボット向けの、シミュレートされたSLAM追跡軌道可視化、ROS2連携メーター、エッジ診断表示技術。",
    iconName: "Compass",
    status: "Long-term R&D",
    statusJa: "中長期開発フェーズ",
    progress: 30,
    details: [
      "Direct WebSocket visualizer for real-time laser scanner telemetry",
      "WebAssembly visual odometry simulations",
      "Micro-ROS telemetry monitors for custom microcontrollers"
    ],
    detailsJa: [
      "ロボット側のLiDARレーザースキャナが捉えた膨大な三次元点群データを、リアルタイムでWebSocket経由にて滑らかに描画する技術",
      "WASM化されたオドメトリ幾何学シミュレータを用いてブラウザ上で挙動追従を行う機構",
      "ESP32などの安価なIoTマイクロコントローラで稼働するMicro-ROSからのテレメトリをブラウザが直接パースするダッシュボード"
    ]
  }
];

export const NOW_BUILDING: NowBuilding[] = [
  {
    id: "nb-1",
    title: "ai-shared-memory v1.1",
    titleJa: "ai-shared-memory v1.1",
    status: "Consolidating vector cache & memory consolidation protocols",
    statusJa: "ベクトル記憶キャッシュの最適化、および長期・短期記憶整理プロトコルの設計・検証",
    progress: 85,
    icon: "🔬",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: "nb-2",
    title: "Screenshot Stitcher v1.2",
    titleJa: "Screenshot Stitcher v1.2",
    status: "Implementing multi-direction horizontal canvas stitch matrices",
    statusJa: "縦方向のみならず、マルチディレクション（左右横方向）のスクリーンショット連続キャンバス縫合エンジンの構築",
    progress: 45,
    icon: "🚀",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20"
  },
  {
    id: "nb-3",
    title: "GameFreezeSentinel Vulkan Core",
    titleJa: "GameFreezeSentinel Vulkanコア",
    status: "Prototyping Vulkan layer intercept hooks for Linux debuggers",
    statusJa: "LinuxおよびPCゲーマーのデバッグを補助する、VulkanグラフィックスレイヤーへのフックインターセプターのRust試作",
    progress: 20,
    icon: "🤖",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  }
];

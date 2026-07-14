import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Scissors,
  Brain,
  ShieldAlert,
  LayoutGrid,
  Code,
  Users,
  Cpu,
  HardDrive,
  Compass,
  Github,
  Twitter,
  Mail,
  ArrowUpRight,
  ExternalLink,
  Search,
  Terminal,
  Sparkles,
  Check,
  Globe,
  Plus,
  ArrowRight,
  Sliders,
  Send,
  Calendar,
  Layers,
  Wrench,
  BookOpen,
  GitBranch,
  X,
  Info,
  Layers3,
  Flame,
  Star,
  Activity
} from "lucide-react";
import { PROJECTS, EXPERIMENTS, RESEARCH_TOPICS, NOW_BUILDING } from "./data";
import { Project, Experiment, ResearchTopic } from "./types";

// Dynamic Lucide Icon Mapper Component
interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function LucideIcon({ name, className, size = 20 }: LucideIconProps) {
  const iconMap: Record<string, React.ComponentType<any>> = {
    Scissors,
    Brain,
    ShieldAlert,
    LayoutGrid,
    Code,
    Users,
    Cpu,
    HardDrive,
    Compass,
    Github,
    Twitter,
    Mail,
    ArrowUpRight,
    ExternalLink,
    Search,
    Terminal,
    Sparkles,
    Check,
    Globe,
    Layers,
    Wrench,
    BookOpen,
    Star,
    Activity
  };

  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return <Sparkles className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}

const TRANSLATIONS = {
  en: {
    tagline: "Empowering Assistants through Intelligent Utilities",
    heroTitle_1: "Bellbullet",
    heroTitle_2: "AI Labs",
    heroSubtitle: "AI experiments, open-source tools, and interactive demos designed to supercharge developer workflows and agent memory.",
    searchPlaceholder: "Search projects, research, or technology...",
    nowBuildingTitle: "Now Building",
    nowBuildingSub: "Current active developmental focus in Bellbullet labs",
    liveStatusBoard: "Live Status Board",
    progressLabel: "Development Progress",
    inDev: "In Dev",
    selectedWorks: "Selected Works",
    featuredProjectsTitle: "Featured Projects",
    featuredProjectsSub: "Ready-to-use developer extensions and automation pipelines built around user simplicity.",
    timelineLogs: "Timeline Logs",
    latestExperimentsTitle: "Latest Experiments",
    filterAll: "all",
    filterRelease: "release",
    filterUpdate: "update",
    filterResearch: "research",
    deepResearch: "Deep Research & Exploration",
    researchTopicsTitle: "Research Topics",
    researchTopicsSub: "Long-term research trajectories laying foundations for future applications.",
    aboutLabel: "About Bellbullet",
    aboutTitle: "Simplifying Assistant Interactions & Workflows",
    aboutPara1: "Bellbullet AI Labs focuses on open-source toolkits, computer automation frameworks, and advanced context memory layers designed specifically for AI models and modern developers.",
    aboutPara2: "By building small, performant, edge-optimized utilities (such as canvas-stitching algorithms, local client embedding decoders, and custom diagnostic monitors), we enable seamless execution, ensuring complete client privacy and rapid automation cycles.",
    pillarOpenSourceTitle: "Open-Source",
    pillarOpenSourceDesc: "Collaborative and transparent",
    pillarAiIntegrationTitle: "AI Integration",
    pillarAiIntegrationDesc: "Smarter workflows",
    pillarAutomationTitle: "Automation",
    pillarAutomationDesc: "Minimal effort layout",
    pillarDevToolsTitle: "Dev Tools",
    pillarDevToolsDesc: "Optimized performance",
    footerCopyright: "Bellbullet AI Labs © 2026",
    footerTagline: "Engineered for high performance and sandboxed privacy.",
    projectSpec: "Project Specification",
    keyFeatures: "Key Features",
    techStackLabel: "Technology Stack",
    launchApp: "Launch App",
    viewCode: "Code",
    close: "Close",
    contactTitle: "Contact Bellbullet Labs",
    contactSub: "Send a message, idea, or inquiry",
    contactName: "Name",
    contactNamePl: "Your Name",
    contactEmail: "Email Address",
    contactEmailPl: "name@example.com",
    contactMessage: "Message",
    contactMessagePl: "Describe your project, ideas, or questions for Bellbullet AI Labs...",
    sendMessage: "Send Message",
    toastSuccess: "Message sent! (Demo)",
    toastInputRequired: "Please fill in all fields.",
    maturityTimeline: "Maturity Timeline",
    maturityCurve: "Maturity Curve",
    reachOut: "Reach out to Bellbullet",
    statusText: "Status",
    openDetails: "Open Details",
    escLabel: "ESC",
    filteringLabel: "Filtering results for...",
    noProjectsMatch: "No projects match the query.",
    noLogsFound: "No logs found matching your filters.",
    statsHeader: "bellbullet-stats.sh",
  },
  ja: {
    tagline: "インテリジェントなユーティリティでAIアシスタントを強化",
    heroTitle_1: "Bellbullet",
    heroTitle_2: "AI Labs",
    heroSubtitle: "開発者ワークフローとAIエージェントのコンテキスト長期記憶を強化するために設計された、AI実験、オープンソースツール、インタラクティブデモ。",
    searchPlaceholder: "プロジェクト、研究、または使用技術を検索...",
    nowBuildingTitle: "Now Building (開発中)",
    nowBuildingSub: "Bellbullet Labs が現在最も注力して開発しているプロダクト",
    liveStatusBoard: "開発進行ステータス",
    progressLabel: "開発進捗率",
    inDev: "開発中",
    selectedWorks: "厳選プロジェクト",
    featuredProjectsTitle: "Featured Projects (主要開発ツール)",
    featuredProjectsSub: "ユーザーの使いやすさと実用性を第一に構築された、即座に導入できる開発者向け拡張機能群。",
    timelineLogs: "開発タイムラインログ",
    latestExperimentsTitle: "Latest Experiments (直近の活動実績)",
    filterAll: "すべて",
    filterRelease: "リリース",
    filterUpdate: "アップデート",
    filterResearch: "研究実績",
    deepResearch: "長期R&D・先端科学技術調査",
    researchTopicsTitle: "Research Topics (研究テーマ)",
    researchTopicsSub: "次世代のブレイクスルーアプリを支える、中長期的な技術研究および基礎開発指標。",
    aboutLabel: "Bellbulletについて",
    aboutTitle: "アシスタント連携と自動化ワークフローの簡素化",
    aboutPara1: "Bellbullet AI Labsは、AIモデルおよび現代の開発者向けに特化して設計された、オープンソースのツールキット、コンピューター自動化フレームワーク、および高度なコンテキスト記憶連携レイヤーの開発に焦点を当てています。",
    aboutPara2: "縦長スクリーンショット自動結合アルゴリズム、ブラウザ上でのローカル埋め込み表現デコーダ、軽量システム診断モニタなどの、エッジに最適化された高性能ユーティリティを構築することで、完全なプライバシーと高速な自動化サイクルを約束します。",
    pillarOpenSourceTitle: "オープンソース",
    pillarOpenSourceDesc: "透明性の高い共同開発",
    pillarAiIntegrationTitle: "AIとの密な融合",
    pillarAiIntegrationDesc: "知的なワークフロー",
    pillarAutomationTitle: "徹底した自動化",
    pillarAutomationDesc: "操作コストを極限まで削減",
    pillarDevToolsTitle: "極めて低負荷",
    pillarDevToolsDesc: "エッジ最適化・高速動作",
    footerCopyright: "Bellbullet AI Labs © 2026",
    footerTagline: "優れたパフォーマンスとローカルファーストの機密保護を追求。",
    projectSpec: "プロジェクト詳細仕様",
    keyFeatures: "主要な機能と特徴",
    techStackLabel: "使用テクノロジースタック",
    launchApp: "アプリを起動",
    viewCode: "コードを閲覧",
    close: "閉じる",
    contactTitle: "Bellbullet Labs へのお問い合わせ",
    contactSub: "アイデア、コラボレーション、ご質問などを送信",
    contactName: "お名前",
    contactNamePl: "お名前を入力してください",
    contactEmail: "メールアドレス",
    contactEmailPl: "name@example.com",
    contactMessage: "お問い合わせ内容",
    contactMessagePl: "Bellbullet AI Labs へ提案するプロジェクトの構想、開発アイデア、ご質問を記述してください...",
    sendMessage: "メッセージを送信する",
    toastSuccess: "メッセージが送信されました！(デモ)",
    toastInputRequired: "全ての項目を入力してください。",
    maturityTimeline: "研究進捗タイムライン",
    maturityCurve: "研究成熟度カーブ",
    reachOut: "Bellbullet にメッセージを送る",
    statusText: "ステータス",
    openDetails: "詳細を表示",
    escLabel: "クリア",
    filteringLabel: "次のクエリでフィルタ中：",
    noProjectsMatch: "検索条件に一致するプロジェクトが見つかりません。",
    noLogsFound: "選択されたカテゴリのログは見つかりません。",
    statsHeader: "bellbullet-stats.sh",
  }
};

export default function App() {
  // --- States ---
  const [lang, setLang] = useState<"en" | "ja">(() => {
    const saved = localStorage.getItem("bellbullet-lang");
    return saved === "en" || saved === "ja" ? saved : "ja";
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedResearch, setSelectedResearch] = useState<ResearchTopic | null>(null);
  const [timelineFilter, setTimelineFilter] = useState<string>("all");
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" } | null>(null);
  const [activeSection, setActiveSection] = useState("hero");

  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // --- Sync Nav Language preference ---
  useEffect(() => {
    localStorage.setItem("bellbullet-lang", lang);
  }, [lang]);

  // Translate helper
  const t = (key: keyof typeof TRANSLATIONS["en"]): string => {
    return TRANSLATIONS[lang][key] || TRANSLATIONS["en"][key];
  };

  // --- Sync Navigation highlighting on Scroll ---
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "featured", "experiments", "research", "now-building", "about"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showToast = (message: string, type: "success" | "info" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      showToast(t("toastInputRequired"), "info");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setContactModalOpen(false);
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      showToast(t("toastSuccess"), "success");
    }, 1200);
  };

  // --- Filtering Data ---
  const filteredProjects = PROJECTS.filter(p => {
    const titleText = (lang === "ja" && p.titleJa) ? p.titleJa : p.title;
    const descText = (lang === "ja" && p.descriptionJa) ? p.descriptionJa : p.description;
    const matchStr = searchQuery.toLowerCase();
    
    return titleText.toLowerCase().includes(matchStr) ||
      descText.toLowerCase().includes(matchStr) ||
      p.tags.some(t => t.toLowerCase().includes(matchStr)) ||
      (p.tagsJa && p.tagsJa.some(t => t.toLowerCase().includes(matchStr))) ||
      p.techStack?.some(s => s.toLowerCase().includes(matchStr));
  });

  const filteredExperiments = EXPERIMENTS.filter(e => {
    const titleText = (lang === "ja" && e.titleJa) ? e.titleJa : e.title;
    const descText = (lang === "ja" && e.descriptionJa) ? e.descriptionJa : e.description;
    const matchStr = searchQuery.toLowerCase();

    const matchesSearch = titleText.toLowerCase().includes(matchStr) ||
      descText.toLowerCase().includes(matchStr) ||
      e.tags.some(t => t.toLowerCase().includes(matchStr)) ||
      (e.tagsJa && e.tagsJa.some(t => t.toLowerCase().includes(matchStr)));

    const matchesFilter = timelineFilter === "all" || e.type === timelineFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredResearch = RESEARCH_TOPICS.filter(r => {
    const titleText = (lang === "ja" && r.titleJa) ? r.titleJa : r.title;
    const descText = (lang === "ja" && r.descriptionJa) ? r.descriptionJa : r.description;
    const matchStr = searchQuery.toLowerCase();

    return titleText.toLowerCase().includes(matchStr) ||
      descText.toLowerCase().includes(matchStr) ||
      r.details.some(d => d.toLowerCase().includes(matchStr)) ||
      (r.detailsJa && r.detailsJa.some(d => d.toLowerCase().includes(matchStr)));
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-violet-500 selection:text-white">
      
      {/* 🌌 Cyber Ambient Animated Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft rotating grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />
        
        {/* Glowing Orbs floating smoothly */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -100, 60, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 left-10 sm:left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full bg-violet-600/10 blur-[80px] sm:blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 90, 0],
            y: [0, 80, -90, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-10 sm:right-1/4 w-[200px] sm:w-[450px] h-[200px] sm:h-[450px] rounded-full bg-sky-600/10 blur-[80px] sm:blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/3 w-[300px] h-[300px] rounded-full bg-emerald-600/5 blur-[120px]"
        />
      </div>

      {/* 📌 Header & Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-900/80 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 shadow-[0_0_15px_rgba(124,58,237,0.4)]">
              <Terminal className="w-4.5 h-4.5 text-white" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-base font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Bellbullet
                </span>
                <span className="text-[10px] bg-violet-500/10 text-violet-400 font-bold px-1.5 py-0.5 rounded border border-violet-500/10 font-mono">
                  Labs
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { id: "featured", label: lang === "ja" ? "主要プロダクト" : "Featured" },
              { id: "experiments", label: lang === "ja" ? "実験実績" : "Experiments" },
              { id: "research", label: lang === "ja" ? "研究テーマ" : "Research" },
              { id: "now-building", label: lang === "ja" ? "開発中" : "Now Building" },
              { id: "about", label: lang === "ja" ? "アバウト" : "About" }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeSection === item.id
                    ? "text-violet-400 bg-violet-500/5 font-bold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons & Language Toggle */}
          <div className="flex items-center gap-3">
            {/* Bilingual Switch Switcher */}
            <div className="flex bg-slate-900/80 p-0.5 rounded-lg border border-slate-800/80">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md uppercase tracking-wider transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm font-black"
                    : "text-slate-500 hover:text-slate-300 font-bold"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ja")}
                className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md uppercase tracking-wider transition-all cursor-pointer ${
                  lang === "ja"
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm font-black"
                    : "text-slate-500 hover:text-slate-300 font-bold"
                }`}
              >
                日本語
              </button>
            </div>

            <a
              href="https://github.com/bellbullet"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-900/60 hover:bg-slate-900 text-slate-400 hover:text-white rounded-lg border border-slate-800 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={() => setContactModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold rounded-lg shadow-md shadow-violet-900/20 cursor-pointer transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{lang === "ja" ? "お問い合わせ" : "Contact"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 🚀 Main Layout */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-24">
        
        {/* 🌠 HERO SECTION */}
        <section id="hero" className="relative pt-12 md:pt-20 pb-8 flex flex-col items-center text-center">
          {/* Top tag badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-semibold text-slate-400 mb-6 font-mono shadow-inner shadow-slate-950/50"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
            <span>{t("tagline")}</span>
          </motion.div>

          {/* Hero Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4 max-w-4xl"
          >
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-white">
              {t("heroTitle_1")}{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">
                {t("heroTitle_2")}
              </span>
            </h1>
            <p className="text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              {t("heroSubtitle")}
            </p>
          </motion.div>

          {/* Search Bar Widget (Landing page search indexer) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mt-10 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl blur-lg opacity-25 group-focus-within:opacity-40 transition-all duration-300" />
            <div className="relative flex items-center bg-slate-900/90 border border-slate-800 focus-within:border-violet-500/80 rounded-xl px-3.5 py-2.5 transition-all">
              <Search className="w-4 h-4 text-slate-500 mr-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full bg-transparent text-xs text-slate-200 outline-none placeholder:text-slate-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[10px] text-slate-500 hover:text-slate-300 bg-slate-950 px-1.5 py-0.5 rounded font-mono font-bold"
                >
                  {t("escLabel")}
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="absolute left-1 -bottom-6 text-[10px] text-slate-500 font-semibold">
                {t("filteringLabel")} &quot;{searchQuery}&quot;...
              </p>
            )}
          </motion.div>

          {/* Hero Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mt-10"
          >
            <a
              href="https://github.com/bellbullet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white font-bold text-xs rounded-xl border border-slate-800 hover:border-slate-700 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <button
              onClick={() => scrollToSection("featured")}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-700 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-violet-900/20 cursor-pointer transition-all"
            >
              <span>{lang === "ja" ? "主要プロダクト" : "Latest Apps"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setContactModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-950/60 hover:bg-slate-900/60 text-slate-400 hover:text-slate-200 font-bold text-xs rounded-xl border border-slate-900 hover:border-slate-800 cursor-pointer transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === "ja" ? "お問い合わせ" : "Inquire"}</span>
            </button>
          </motion.div>
        </section>

        {/* 🚀 NOW BUILDING SECTION */}
        <section id="now-building" className="scroll-mt-20">
          <div className="bg-slate-900/25 border border-slate-900/80 rounded-2xl p-5 md:p-6 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/5 to-transparent pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-900 pb-4 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/10">
                  <Flame className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <h2 className="font-display text-base font-extrabold tracking-tight text-white flex items-center gap-2">
                    {t("nowBuildingTitle")}
                  </h2>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider font-mono">
                    {t("nowBuildingSub")}
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-center text-[10px] bg-slate-950 px-2.5 py-1 rounded border border-slate-900 text-slate-400 font-bold font-mono uppercase tracking-wide">
                {t("liveStatusBoard")}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {NOW_BUILDING.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-950/50 border border-slate-900/60 p-4 rounded-xl flex flex-col justify-between hover:border-slate-800 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-base">{item.icon}</span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide font-mono ${item.badgeColor}`}>
                        {t("inDev")}
                      </span>
                    </div>
                    <h3 className="text-xs font-bold text-slate-200 group-hover:text-violet-400 transition-colors">
                      {lang === "ja" && item.titleJa ? item.titleJa : item.title}
                    </h3>
                    <p className="text-[10px] leading-relaxed text-slate-500 font-medium">
                      {lang === "ja" && item.statusJa ? item.statusJa : item.status}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-900/80 space-y-1.5">
                    <div className="flex justify-between text-[9px] font-mono font-semibold text-slate-400">
                      <span>{t("progressLabel")}</span>
                      <span className="text-violet-400">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1.2, delay: 0.1 }}
                        className="bg-gradient-to-r from-violet-500 to-indigo-500 h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🚀 FEATURED PROJECTS */}
        <section id="featured" className="scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-violet-400 font-mono font-semibold uppercase tracking-wider">
                <Layers3 className="w-4 h-4" />
                <span>{t("selectedWorks")}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white">
                {t("featuredProjectsTitle")}
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-medium max-w-sm">
              {t("featuredProjectsSub")}
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layoutId={`project-card-${project.id}`}
                  className="bg-slate-900/40 border border-slate-900/90 rounded-2xl p-5 sm:p-6 hover:border-slate-800 transition-all duration-300 flex flex-col justify-between relative group backdrop-blur-sm"
                >
                  <div className="space-y-4">
                    {/* Card Header Info */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-violet-400 group-hover:text-white group-hover:bg-violet-600/10 group-hover:border-violet-500/20 transition-all">
                        <LucideIcon name={project.iconName} size={20} />
                      </div>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wide ${
                        project.status === "Released"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      }`}>
                        {lang === "ja" && project.statusJa ? project.statusJa : project.status}
                      </span>
                    </div>

                    {/* Content text */}
                    <div className="space-y-1.5">
                      <h3 className="font-display text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                        {lang === "ja" && project.titleJa ? project.titleJa : project.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-medium">
                        {lang === "ja" && project.descriptionJa ? project.descriptionJa : project.description}
                      </p>
                    </div>

                    {/* Tags list */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {(lang === "ja" && project.tagsJa ? project.tagsJa : project.tags).map((tag) => (
                        <span
                          key={`${project.id}-${tag}`}
                          className="text-[9px] bg-slate-950 text-slate-500 border border-slate-900 font-semibold px-2 py-0.5 rounded font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="mt-6 pt-4 border-t border-slate-900/80 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-slate-950 hover:bg-slate-900 text-slate-500 hover:text-slate-300 rounded-lg border border-slate-900 transition-all"
                          title="View GitHub Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-slate-950 hover:bg-slate-900 text-slate-500 hover:text-slate-300 rounded-lg border border-slate-900 transition-all"
                          title="Live Playground"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-violet-400 hover:text-violet-300 bg-violet-500/5 hover:bg-violet-500/10 border border-violet-500/10 px-3 py-1.5 rounded-lg cursor-pointer transition-all"
                    >
                      <span>{t("openDetails")}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-slate-900 rounded-2xl">
              <Info className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="text-xs text-slate-500">{t("noProjectsMatch")}</p>
            </div>
          )}
        </section>

        {/* 🧪 LATEST EXPERIMENTS TIMELINE */}
        <section id="experiments" className="scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-violet-400 font-mono font-semibold uppercase tracking-wider">
                <Activity className="w-4 h-4" />
                <span>{t("timelineLogs")}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white">
                {t("latestExperimentsTitle")}
              </h2>
            </div>

            {/* Timeline type filter */}
            <div className="flex bg-slate-950 p-0.5 rounded-lg border border-slate-900">
              {["all", "release", "update", "research"].map((type) => (
                <button
                  key={type}
                  onClick={() => setTimelineFilter(type)}
                  className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md uppercase tracking-wider transition-all cursor-pointer ${
                    timelineFilter === type
                      ? "bg-violet-600 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {type === "all" ? t("filterAll") : type === "release" ? t("filterRelease") : type === "update" ? t("filterUpdate") : t("filterResearch")}
                </button>
              ))}
            </div>
          </div>

          <div className="relative border-l border-slate-900 pl-4 sm:pl-6 ml-2 space-y-8 max-w-4xl">
            <AnimatePresence mode="popLayout">
              {filteredExperiments.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative group"
                >
                  {/* Bullet indicator icon */}
                  <span className="absolute -left-[29px] sm:-left-[37px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border border-slate-900 text-xs shadow-md">
                    {exp.icon}
                  </span>

                  <div className="bg-slate-900/25 border border-slate-950 hover:border-slate-900 p-4 rounded-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-slate-200">
                          {lang === "ja" && exp.titleJa ? exp.titleJa : exp.title}
                        </span>
                        <span className="text-[10px] bg-slate-900 text-slate-400 font-bold px-1.5 py-0.5 rounded border border-slate-900 font-mono">
                          {exp.version}
                        </span>
                        <span className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                          exp.type === "release"
                            ? "bg-emerald-500/5 text-emerald-400 border border-emerald-500/10"
                            : exp.type === "update"
                            ? "bg-sky-500/5 text-sky-400 border border-sky-500/10"
                            : "bg-purple-500/5 text-purple-400 border border-purple-500/10"
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-semibold font-mono flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.date}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 mt-2.5 leading-relaxed font-medium">
                      {lang === "ja" && exp.descriptionJa ? exp.descriptionJa : exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {(lang === "ja" && exp.tagsJa ? exp.tagsJa : exp.tags).map((tag) => (
                        <span
                          key={`${exp.id}-${tag}`}
                          className="text-[9px] bg-slate-950/60 text-slate-500 border border-slate-900/80 px-2 py-0.5 rounded font-semibold font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredExperiments.length === 0 && (
              <div className="text-center py-6">
                <p className="text-xs text-slate-600">{t("noLogsFound")}</p>
              </div>
            )}
          </div>
        </section>

        {/* 📚 RESEARCH TOPICS */}
        <section id="research" className="scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-violet-400 font-mono font-semibold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>{t("deepResearch")}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white">
                {t("researchTopicsTitle")}
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-medium max-w-sm">
              {t("researchTopicsSub")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredResearch.map((topic) => (
              <div
                key={topic.id}
                onClick={() => setSelectedResearch(topic)}
                className="bg-slate-900/30 hover:bg-slate-900/40 border border-slate-900/80 hover:border-slate-800 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 relative group cursor-pointer"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-violet-400 group-hover:text-violet-300 transition-colors">
                      <LucideIcon name={topic.iconName} size={18} />
                    </div>
                    <span className="text-[9px] font-bold text-slate-500 font-mono uppercase tracking-wider text-right">
                      {lang === "ja" && topic.statusJa ? topic.statusJa : topic.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display text-sm font-bold text-slate-200 group-hover:text-white transition-colors flex items-center gap-1">
                      <span>{lang === "ja" && topic.titleJa ? topic.titleJa : topic.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500" />
                    </h3>
                    <p className="text-[11px] leading-relaxed text-slate-400 font-medium">
                      {lang === "ja" && topic.descriptionJa ? topic.descriptionJa : topic.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-900/60 space-y-1.5">
                  <div className="flex justify-between text-[9px] font-mono font-semibold text-slate-500">
                    <span>{t("maturityCurve")}</span>
                    <span>{topic.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${topic.progress}%` }}
                      className="bg-violet-500 h-full rounded-full transition-all duration-1000"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 📚 ABOUT SECTION */}
        <section id="about" className="scroll-mt-20">
          <div className="bg-slate-900/10 border border-slate-900/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-radial from-violet-900/10 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1 text-[10px] bg-violet-500/10 text-violet-400 font-bold px-2 py-0.5 rounded border border-violet-500/10 font-mono uppercase tracking-widest">
                  {t("aboutLabel")}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight">
                  {t("aboutTitle")}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  {t("aboutPara1")}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  {t("aboutPara2")}
                </p>

                {/* Core Pillars Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                  {[
                    { title: t("pillarOpenSourceTitle"), desc: t("pillarOpenSourceDesc"), color: "text-emerald-400" },
                    { title: t("pillarAiIntegrationTitle"), desc: t("pillarAiIntegrationDesc"), color: "text-violet-400" },
                    { title: t("pillarAutomationTitle"), desc: t("pillarAutomationDesc"), color: "text-sky-400" },
                    { title: t("pillarDevToolsTitle"), desc: t("pillarDevToolsDesc"), color: "text-amber-400" }
                  ].map((pillar, idx) => (
                    <div key={idx} className="bg-slate-950/40 border border-slate-900 p-3 rounded-xl space-y-1">
                      <span className={`text-[11px] font-extrabold ${pillar.color}`}>{pillar.title}</span>
                      <p className="text-[9px] text-slate-500 font-medium leading-tight">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphical illustration card */}
              <div className="lg:col-span-5 bg-slate-950/60 border border-slate-900 p-5 rounded-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <span className="text-[10px] font-mono text-slate-500 font-bold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-violet-400" />
                    {t("statsHeader")}
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-800" />
                    <span className="w-2 h-2 rounded-full bg-slate-800" />
                  </div>
                </div>

                <div className="space-y-2.5 font-mono text-[10px] text-slate-400">
                  <div className="flex justify-between">
                    <span>STARS_COUNT</span>
                    <span className="text-white font-semibold">2,480+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ACTIVE_REPOS</span>
                    <span className="text-white font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PRIMARY_LANG</span>
                    <span className="text-violet-400 font-semibold">TypeScript / Rust</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SANDBOX_RUNTIME</span>
                    <span className="text-sky-400 font-semibold">WebAssembly / Edge</span>
                  </div>
                  <div className="flex justify-between">
                    <span>BUILD_STATUS</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping" />
                      STABLE
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-4 bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white font-bold text-xs rounded-xl border border-slate-800 cursor-pointer transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-violet-400" />
                  <span>{t("reachOut")}</span>
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 🌐 FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 relative z-10 mt-16 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-violet-400">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-display font-bold text-slate-300">{t("footerCopyright")}</span>
          </div>

          {/* Social Links Footer */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/bellbullet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://x.com/bellbullet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Twitter className="w-3.5 h-3.5" />
              <span>X (Twitter)</span>
            </a>
            <button
              onClick={() => setContactModalOpen(true)}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{lang === "ja" ? "メール" : "Email"}</span>
            </button>
          </div>

          <span className="text-[10px] font-mono text-slate-600">
            {t("footerTagline")}
          </span>
        </div>
      </footer>

      {/* --- MODALS & OVERLAYS --- */}

      {/* 1. PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Top gradient strip */}
              <div className="h-1.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500" />
              
              {/* Header */}
              <div className="p-5 border-b border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-violet-400">
                    <LucideIcon name={selectedProject.iconName} size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-extrabold text-white">
                      {lang === "ja" && selectedProject.titleJa ? selectedProject.titleJa : selectedProject.title}
                    </h3>
                    <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest font-mono">
                      {t("projectSpec")}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 bg-slate-950 hover:bg-slate-850 rounded-lg text-slate-400 hover:text-white border border-slate-900 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-400 flex-1">
                {/* Long description */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono block">
                    Overview
                  </span>
                  <p className="leading-relaxed font-medium text-slate-300 text-justify">
                    {lang === "ja" && selectedProject.longDescriptionJa ? selectedProject.longDescriptionJa : selectedProject.longDescription}
                  </p>
                </div>

                {/* Features (Checklist) */}
                {(lang === "ja" && selectedProject.featuresJa ? selectedProject.featuresJa : selectedProject.features) && (
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono block">
                      {t("keyFeatures")}
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-medium text-slate-300">
                      {(lang === "ja" && selectedProject.featuresJa ? selectedProject.featuresJa : selectedProject.features)!.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-950">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                {selectedProject.techStack && (
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono block">
                      {t("techStackLabel")}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] bg-slate-950 text-slate-400 border border-slate-900/80 font-bold px-2.5 py-1 rounded-md font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="p-4 border-t border-slate-900 bg-slate-950/40 flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded border uppercase tracking-wide ${
                  selectedProject.status === "Released"
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                }`}>
                  {t("statusText")}: {lang === "ja" && selectedProject.statusJa ? selectedProject.statusJa : selectedProject.status}
                </span>

                <div className="flex items-center gap-2">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold rounded-lg border border-slate-800 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{t("viewCode")}</span>
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-lg shadow-md hover:from-violet-500 hover:to-indigo-500 transition-all"
                    >
                      <span>{t("launchApp")}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. RESEARCH DETAILS MODAL */}
      <AnimatePresence>
        {selectedResearch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResearch(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="p-5 border-b border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-violet-400">
                    <LucideIcon name={selectedResearch.iconName} size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white">
                      {lang === "ja" && selectedResearch.titleJa ? selectedResearch.titleJa : selectedResearch.title}
                    </h3>
                    <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest font-mono">
                      Research Investigation
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedResearch(null)}
                  className="p-1.5 bg-slate-950 hover:bg-slate-850 rounded-lg text-slate-400 hover:text-white border border-slate-900 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 text-xs text-slate-400">
                <p className="leading-relaxed font-medium text-slate-300">
                  {lang === "ja" && selectedResearch.descriptionJa ? selectedResearch.descriptionJa : selectedResearch.description}
                </p>

                <div className="space-y-2.5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono block">
                    Key Investigation Pillars
                  </span>
                  <ul className="space-y-1.5">
                    {(lang === "ja" && selectedResearch.detailsJa ? selectedResearch.detailsJa : selectedResearch.details).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-950 text-slate-300 font-medium">
                        <span className="inline-flex h-4.5 w-4.5 items-center justify-center rounded bg-violet-500/10 text-violet-400 text-[10px] font-bold font-mono">
                          {idx + 1}
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Progress bar info */}
                <div className="pt-3 border-t border-slate-900 space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono font-semibold text-slate-500">
                    <span>{t("maturityTimeline")}</span>
                    <span className="text-violet-400">{selectedResearch.progress}% Completeness</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${selectedResearch.progress}%` }}
                      className="bg-violet-500 h-full rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-slate-900 bg-slate-950/40 flex justify-between items-center text-[10px] text-slate-500 font-mono font-bold uppercase">
                <span>{t("statusText")}: {lang === "ja" && selectedResearch.statusJa ? selectedResearch.statusJa : selectedResearch.status}</span>
                <button
                  onClick={() => setSelectedResearch(null)}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-lg text-slate-300 transition-colors cursor-pointer font-extrabold"
                >
                  {t("close")}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. CONTACT FORM MODAL */}
      <AnimatePresence>
        {contactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setContactModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="p-5 border-b border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600/10 text-violet-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white">
                      {t("contactTitle")}
                    </h3>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider font-mono">
                      {t("contactSub")}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setContactModalOpen(false)}
                  className="p-1.5 bg-slate-950 hover:bg-slate-850 rounded-lg text-slate-400 hover:text-white border border-slate-900 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleContactSubmit} className="p-5 space-y-4 text-xs">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider font-mono">
                    {t("contactName")}
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder={t("contactNamePl")}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-850 focus:border-violet-500 rounded-xl outline-none transition-all placeholder:text-slate-600 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider font-mono">
                    {t("contactEmail")}
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder={t("contactEmailPl")}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-850 focus:border-violet-500 rounded-xl outline-none transition-all placeholder:text-slate-600 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider font-mono">
                    {t("contactMessage")}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder={t("contactMessagePl")}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-850 focus:border-violet-500 rounded-xl outline-none resize-none transition-all placeholder:text-slate-600 font-semibold leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-extrabold rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-4.5 h-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{t("sendMessage")}</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Toast Notification Indicator */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 shadow-xl"
          >
            {toast.type === "success" ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Info className="w-4 h-4 text-violet-400" />
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

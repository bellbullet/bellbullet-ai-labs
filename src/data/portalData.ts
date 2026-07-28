export const siteLinks = {
  portal: "https://bellbullet.ai.studio/",
  knowledgeBase: "https://bellbullet.github.io/ai-shared-memory",
  githubProfile: "https://github.com/bellbullet",
  xProfile: "https://x.com/bellbullet",
  screenshotStitcher: "https://screenshot-stitcher-cm3u.vercel.app",
} as const;

export type PortalIconName = "hub" | "projects" | "knowledge" | "apps" | "experiments";

export type PortalLink = {
  icon: PortalIconName;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  accent: string;
};

export type HubProject = {
  name: string;
  status: "Published" | "Active" | "In Development" | "Research";
  builtWith: string;
  nextAction: string;
  site?: string;
  github?: string;
  docs?: string;
};

export type Project = {
  name: string;
  description: string;
  status: "Live" | "Coming Soon";
  iconClass: string;
  demo?: string;
  github?: string;
  docs?: string;
};

export type AITool = {
  name: string;
  role: string;
  href?: string;
};

export type AIApp = {
  name: string;
  status: "Live" | "Soon";
  href?: string;
};

export type WorkspaceLauncherIcon =
  | "projects"
  | "tools"
  | "apps"
  | "knowledge"
  | "trials"
  | "notes"
  | "github"
  | "stitcher"
  | "memory";

export type WorkspaceLauncher = {
  label: string;
  detail: string;
  href: string;
  icon: WorkspaceLauncherIcon;
  tone: "violet" | "cyan" | "blue" | "emerald" | "amber" | "fuchsia";
};

export type WorkspaceDockItem = {
  label: string;
  href: string;
  icon: WorkspaceLauncherIcon;
};

export const portalLinks: PortalLink[] = [
  {
    icon: "hub",
    eyebrow: "CONTROL",
    title: "AI Hub",
    description: "AI作業とプロジェクトの管制室",
    href: "#ai-hub",
    accent: "from-indigo-500/20 to-indigo-500/0 text-indigo-300",
  },
  {
    icon: "projects",
    eyebrow: "BUILD",
    title: "Projects",
    description: "公開中・開発中のプロジェクト",
    href: "#projects",
    accent: "from-violet-500/20 to-violet-500/0 text-violet-300",
  },
  {
    icon: "knowledge",
    eyebrow: "LEARN",
    title: "Knowledge Base",
    description: "AIと人が育てる共有知識",
    href: "#knowledge",
    accent: "from-sky-500/20 to-sky-500/0 text-sky-300",
  },
  {
    icon: "apps",
    eyebrow: "USE",
    title: "AI Apps",
    description: "AI Studioで作ったアプリ",
    href: "#apps",
    accent: "from-fuchsia-500/20 to-fuchsia-500/0 text-fuchsia-300",
  },
  {
    icon: "experiments",
    eyebrow: "EXPLORE",
    title: "Experiments",
    description: "試作・検証中のアイデア",
    href: "#experiments",
    accent: "from-emerald-500/20 to-emerald-500/0 text-emerald-300",
  },
];

export const hubProjects: HubProject[] = [
  {
    name: "bellbullet-ai-labs",
    status: "Published",
    builtWith: "Google AI Studio + Codex",
    nextAction: "公開後の更新負荷を観察",
    site: siteLinks.portal,
    github: "https://github.com/bellbullet/bellbullet-ai-labs",
  },
  {
    name: "Screenshot Stitcher",
    status: "Published",
    builtWith: "Codex",
    nextAction: "画像追加20枚上限を実装・検証",
    site: siteLinks.screenshotStitcher,
    github: "https://github.com/bellbullet/screenshot-stitcher",
    docs: `${siteLinks.knowledgeBase}/PROJECTS/ScreenshotStitcher`,
  },
  {
    name: "AI Shared Memory",
    status: "Active",
    builtWith: "GitHub + Multi-AI",
    nextAction: "検証済みの知識とTrial記録を更新",
    github: "https://github.com/bellbullet/ai-shared-memory",
    docs: siteLinks.knowledgeBase,
  },
  {
    name: "GameFreezeSentinel",
    status: "In Development",
    builtWith: "Codex",
    nextAction: "次の公開可能な作業を整理",
    docs: `${siteLinks.knowledgeBase}/PROJECTS/GameFreezeSentinel`,
  },
  {
    name: "AIRI",
    status: "Research",
    builtWith: "AI Shared Memory",
    nextAction: "依存関係を再構築し、連携の検証範囲を確認",
    docs: `${siteLinks.knowledgeBase}/PROJECTS/AIRI`,
  },
];

export const aiTools: AITool[] = [
  { name: "ChatGPT", role: "企画・整理", href: "https://chatgpt.com/" },
  { name: "Codex", role: "実装・検証" },
  { name: "Google AI Studio", role: "試作・生成", href: "https://aistudio.google.com/" },
  { name: "Claude", role: "レビュー・比較", href: "https://claude.ai/" },
  { name: "GitHub", role: "原本・公開", href: siteLinks.githubProfile },
];

export const projects: Project[] = [
  {
    name: "Screenshot Stitcher",
    description: "複数のスクリーンショットを、ブラウザ内で一枚の縦長画像へつなげる。",
    status: "Live",
    iconClass: "border-violet-400/20 bg-violet-500/10 text-violet-300",
    demo: siteLinks.screenshotStitcher,
    github: "https://github.com/bellbullet/screenshot-stitcher",
    docs: `${siteLinks.knowledgeBase}/PROJECTS/ScreenshotStitcher`,
  },
  {
    name: "OpenLive",
    description: "ライブ体験をもっと開かれた形にする、新しいプロジェクト。",
    status: "Coming Soon",
    iconClass: "border-sky-400/20 bg-sky-500/10 text-sky-300",
  },
  {
    name: "AIRI",
    description: "Web・Desktop・Minecraft連携を安全に検証するAIアバター研究プロジェクト。",
    status: "Coming Soon",
    iconClass: "border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-300",
    docs: `${siteLinks.knowledgeBase}/PROJECTS/AIRI`,
  },
  {
    name: "GameFreezeSentinel",
    description: "ゲーム中のフリーズや異常終了を記録・診断するWindows向けツール。",
    status: "Coming Soon",
    iconClass: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
    docs: `${siteLinks.knowledgeBase}/PROJECTS/GameFreezeSentinel`,
  },
];

export const knowledgeItems = [
  { label: "AI_DRAWERS", description: "技術レーダー", href: `${siteLinks.knowledgeBase}/AI_DRAWERS` },
  { label: "PROJECTS", description: "プロジェクトの現在地", href: `${siteLinks.knowledgeBase}/AI_INDEX#projects` },
  { label: "NOTES", description: "横断的な知識", href: `${siteLinks.knowledgeBase}/AI_INDEX#notes` },
  { label: "TRIALS", description: "試用結果と判断", href: `${siteLinks.knowledgeBase}/TRIALS` },
] as const;

export const updates = [
  { date: "2026-07-29", title: "Refreshed AI Shared Memory", kind: "KNOWLEDGE" },
  { date: "2026-07-29", title: "Recorded project trials and workspace status", kind: "TRIALS" },
  { date: "2026-07-17", title: "Published Bellbullet Workspace MVP", kind: "PORTAL" },
  { date: "2026-07-16", title: "Prepared Screenshot Stitcher 20-image trial", kind: "TRIALS" },
] as const;

export const apps: AIApp[] = [
  { name: "Hello", status: "Live", href: siteLinks.portal },
  { name: "Weather", status: "Soon" },
  { name: "Prompt Tool", status: "Soon" },
  { name: "Image Tool", status: "Soon" },
];

export const experiments = [
  { number: "01", title: "AI Workspace Portal", description: "活動、知識、アプリを一つの入口へ集約する。" },
  { number: "02", title: "AI Shared Memory", description: "公開知識と検証済みのTrialを、複数のAIと人で育てる。" },
  { number: "03", title: "Screenshot Stitcher 20-image limit", description: "画像追加上限と、実装・レビュー・再検証の流れを検証中。" },
  { number: "04", title: "Claude Code Desktop session title refresh", description: "公開安全な環境で、セッションタイトル更新の有効性と副作用を確認予定。" },
] as const;

export const currentFocus = {
  title: "Bellbullet Workspace MVP",
  summary: "公開済みWorkspaceを観察しながら、AI Shared Memoryの検証済み状態を静的Hubへ同期。",
  updated: "2026-07-29",
  source: "AI Shared Memory",
  publish: "Static portal update",
  status: "Public / Observing",
  recentUpdate: "Shared Memory sync",
  nextAction: "更新負荷を観察し、必要時のみPhase 02を検討",
  docs: `${siteLinks.knowledgeBase}/PROJECTS/AIHub`,
} as const;

export const workspaceLaunchers: WorkspaceLauncher[] = [
  { label: "Projects", detail: "Active work", href: "#workspace-projects", icon: "projects", tone: "violet" },
  { label: "AI Tools", detail: "Tool map", href: "#workspace-tools", icon: "tools", tone: "cyan" },
  { label: "AI Apps", detail: "Studio apps", href: "#workspace-apps", icon: "apps", tone: "fuchsia" },
  { label: "Knowledge", detail: "Public notes", href: siteLinks.knowledgeBase, icon: "knowledge", tone: "blue" },
  { label: "Trials", detail: "Test records", href: `${siteLinks.knowledgeBase}/TRIALS`, icon: "trials", tone: "emerald" },
  { label: "Notes", detail: "Shared notes", href: `${siteLinks.knowledgeBase}/AI_INDEX#notes`, icon: "notes", tone: "amber" },
  { label: "GitHub", detail: "Source hub", href: siteLinks.githubProfile, icon: "github", tone: "cyan" },
  { label: "Stitcher", detail: "Live tool", href: siteLinks.screenshotStitcher, icon: "stitcher", tone: "violet" },
  { label: "Memory", detail: "AI Shared", href: siteLinks.knowledgeBase, icon: "memory", tone: "blue" },
];

export const workspaceDockItems: WorkspaceDockItem[] = [
  { label: "Projects", href: "#workspace-projects", icon: "projects" },
  { label: "AI Tools", href: "#workspace-tools", icon: "tools" },
  { label: "Memory", href: siteLinks.knowledgeBase, icon: "memory" },
  { label: "Apps", href: "#workspace-apps", icon: "apps" },
  { label: "Updates", href: "#workspace-whats-new", icon: "notes" },
  { label: "GitHub", href: siteLinks.githubProfile, icon: "github" },
];

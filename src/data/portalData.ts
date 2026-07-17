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
    nextAction: "実画像で操作性を継続確認",
    site: siteLinks.screenshotStitcher,
    github: "https://github.com/bellbullet/screenshot-stitcher",
    docs: `${siteLinks.knowledgeBase}/PROJECTS/ScreenshotStitcher`,
  },
  {
    name: "AI Shared Memory",
    status: "Active",
    builtWith: "GitHub + Multi-AI",
    nextAction: "登録候補の試用結果を蓄積",
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
    nextAction: "Goal・Stack・検証範囲を定義",
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
    description: "AIアバターとエージェント体験をつなぐ研究プロジェクト。",
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
  { date: "2026-07-15", title: "AI Workspace Portal started", kind: "PORTAL" },
  { date: "2026-07-15", title: "Added AI_DRAWERS", kind: "KNOWLEDGE" },
  { date: "2026-07-14", title: "Released Screenshot Stitcher", kind: "RELEASE" },
] as const;

export const apps: AIApp[] = [
  { name: "Hello", status: "Live", href: siteLinks.portal },
  { name: "Weather", status: "Soon" },
  { name: "Prompt Tool", status: "Soon" },
  { name: "Image Tool", status: "Soon" },
];

export const experiments = [
  { number: "01", title: "AI Workspace Portal", description: "活動、知識、アプリを一つの入口へ集約する。" },
  { number: "02", title: "AI Shared Memory", description: "複数のAIが同じ文脈を読み、育てられる仕組み。" },
  { number: "03", title: "Screenshot Stitcher vNext", description: "横方向を含むマルチ方向の画像連結を検証中。" },
] as const;

export const currentFocus = {
  title: "AI Hub Lite MVP",
  summary: "AI作業とプロジェクトの現在地を一か所で確認する静的Hub。",
  updated: "2026-07-16",
  source: "Static data",
  publish: "Portal update",
  status: "Public / Observing",
  recentUpdate: "Phase 01 published",
  nextAction: "公開後の更新負荷を観察",
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

import { motion } from "motion/react";
import {
  ArrowRight,
  Beaker,
  BookOpen,
  Bot,
  ExternalLink,
  Github,
  Layers3,
  Newspaper,
  Rocket,
  Sparkles,
  Terminal,
  Twitter,
  UserRound,
} from "lucide-react";

const KNOWLEDGE_BASE = "https://bellbullet.github.io/ai-shared-memory";
const GITHUB_PROFILE = "https://github.com/bellbullet";
const X_PROFILE = "https://x.com/bellbullet";

type Project = {
  name: string;
  description: string;
  status: "Live" | "Coming Soon";
  iconClass: string;
  demo?: string;
  github?: string;
  docs?: string;
};

type HubProject = {
  name: string;
  status: "Published" | "Active" | "In Development" | "Research";
  builtWith: string;
  nextAction: string;
  site?: string;
  github?: string;
  docs?: string;
};

const portalLinks = [
  {
    icon: Bot,
    eyebrow: "CONTROL",
    title: "AI Hub",
    description: "AI作業とプロジェクトの管制室",
    href: "#ai-hub",
    accent: "from-indigo-500/20 to-indigo-500/0 text-indigo-300",
  },
  {
    icon: Rocket,
    eyebrow: "BUILD",
    title: "Projects",
    description: "公開中・開発中のプロジェクト",
    href: "#projects",
    accent: "from-violet-500/20 to-violet-500/0 text-violet-300",
  },
  {
    icon: BookOpen,
    eyebrow: "LEARN",
    title: "Knowledge Base",
    description: "AIと人が育てる共有知識",
    href: "#knowledge",
    accent: "from-sky-500/20 to-sky-500/0 text-sky-300",
  },
  {
    icon: Bot,
    eyebrow: "USE",
    title: "AI Apps",
    description: "AI Studioで作ったアプリ",
    href: "#apps",
    accent: "from-fuchsia-500/20 to-fuchsia-500/0 text-fuchsia-300",
  },
  {
    icon: Beaker,
    eyebrow: "EXPLORE",
    title: "Experiments",
    description: "試作・検証中のアイデア",
    href: "#experiments",
    accent: "from-emerald-500/20 to-emerald-500/0 text-emerald-300",
  },
];

const hubProjects: HubProject[] = [
  {
    name: "bellbullet-ai-labs",
    status: "Published",
    builtWith: "Google AI Studio + Codex",
    nextAction: "公開後の更新負荷を観察",
    site: "https://bellbullet.ai.studio/",
    github: "https://github.com/bellbullet/bellbullet-ai-labs",
  },
  {
    name: "Screenshot Stitcher",
    status: "Published",
    builtWith: "Codex",
    nextAction: "実画像で操作性を継続確認",
    site: "https://screenshot-stitcher-cm3u.vercel.app",
    github: "https://github.com/bellbullet/screenshot-stitcher",
    docs: `${KNOWLEDGE_BASE}/PROJECTS/ScreenshotStitcher`,
  },
  {
    name: "AI Shared Memory",
    status: "Active",
    builtWith: "GitHub + Multi-AI",
    nextAction: "登録候補の試用結果を蓄積",
    github: "https://github.com/bellbullet/ai-shared-memory",
    docs: KNOWLEDGE_BASE,
  },
  {
    name: "GameFreezeSentinel",
    status: "In Development",
    builtWith: "Codex",
    nextAction: "次の公開可能な作業を整理",
    docs: `${KNOWLEDGE_BASE}/PROJECTS/GameFreezeSentinel`,
  },
  {
    name: "AIRI",
    status: "Research",
    builtWith: "AI Shared Memory",
    nextAction: "Goal・Stack・検証範囲を定義",
    docs: `${KNOWLEDGE_BASE}/PROJECTS/AIRI`,
  },
];

const aiTools = [
  { name: "ChatGPT", role: "企画・整理", href: "https://chatgpt.com/" },
  { name: "Codex", role: "実装・検証" },
  { name: "Google AI Studio", role: "試作・生成", href: "https://aistudio.google.com/" },
  { name: "Claude", role: "レビュー・比較", href: "https://claude.ai/" },
  { name: "GitHub", role: "原本・公開", href: GITHUB_PROFILE },
];

const projects: Project[] = [
  {
    name: "Screenshot Stitcher",
    description: "複数のスクリーンショットを、ブラウザ内で一枚の縦長画像へつなげる。",
    status: "Live",
    iconClass: "border-violet-400/20 bg-violet-500/10 text-violet-300",
    demo: "https://screenshot-stitcher-cm3u.vercel.app",
    github: "https://github.com/bellbullet/screenshot-stitcher",
    docs: `${KNOWLEDGE_BASE}/PROJECTS/ScreenshotStitcher`,
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
    docs: `${KNOWLEDGE_BASE}/PROJECTS/AIRI`,
  },
  {
    name: "GameFreezeSentinel",
    description: "ゲーム中のフリーズや異常終了を記録・診断するWindows向けツール。",
    status: "Coming Soon",
    iconClass: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
    docs: `${KNOWLEDGE_BASE}/PROJECTS/GameFreezeSentinel`,
  },
];

const knowledgeItems = [
  { label: "AI_DRAWERS", description: "技術レーダー", href: `${KNOWLEDGE_BASE}/AI_DRAWERS` },
  { label: "PROJECTS", description: "プロジェクトの現在地", href: `${KNOWLEDGE_BASE}/AI_INDEX#projects` },
  { label: "NOTES", description: "横断的な知識", href: `${KNOWLEDGE_BASE}/AI_INDEX#notes` },
  { label: "TRIALS", description: "試用結果と判断", href: `${KNOWLEDGE_BASE}/TRIALS` },
];

const updates = [
  { date: "2026-07-15", title: "AI Workspace Portal started", kind: "PORTAL" },
  { date: "2026-07-15", title: "Added AI_DRAWERS", kind: "KNOWLEDGE" },
  { date: "2026-07-14", title: "Released Screenshot Stitcher", kind: "RELEASE" },
];

const apps = [
  { name: "Hello", status: "Live", href: "https://bellbullet.ai.studio/" },
  { name: "Weather", status: "Soon" },
  { name: "Prompt Tool", status: "Soon" },
  { name: "Image Tool", status: "Soon" },
];

const experiments = [
  { number: "01", title: "AI Workspace Portal", description: "活動、知識、アプリを一つの入口へ集約する。" },
  { number: "02", title: "AI Shared Memory", description: "複数のAIが同じ文脈を読み、育てられる仕組み。" },
  { number: "03", title: "Screenshot Stitcher vNext", description: "横方向を含むマルチ方向の画像連結を検証中。" },
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 font-mono text-[11px] font-bold tracking-[0.24em] text-violet-300">{label}</p>
      <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">{description}</p>
    </div>
  );
}

function ProjectAction({ href, label }: { href?: string; label: string }) {
  if (!href) {
    return <span className="cursor-not-allowed text-slate-700">{label}</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-white"
    >
      {label}
      <ExternalLink className="h-3 w-3" aria-hidden="true" />
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-slate-100 selection:bg-violet-500 selection:text-white">
      <a
        href="#top"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-950 transition-transform focus:translate-y-0"
      >
        メインコンテンツへ
      </a>

      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#11182c_1px,transparent_1px),linear-gradient(to_bottom,#11182c_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
        <div className="absolute -left-32 -top-48 h-[520px] w-[520px] rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="absolute -right-40 top-[30rem] h-[480px] w-[480px] rounded-full bg-sky-500/10 blur-[140px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="BellBullet AI Workspace トップへ">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-700 shadow-[0_0_24px_rgba(124,58,237,0.35)]">
              <Terminal className="h-4 w-4" aria-hidden="true" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#050816] bg-emerald-400" />
            </span>
            <span>
              <span className="block font-display text-sm font-black tracking-tight text-white">BellBullet</span>
              <span className="block font-mono text-[8px] tracking-[0.24em] text-slate-500">AI WORKSPACE</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="メインナビゲーション">
            {[
              ["Projects", "#projects"],
              ["AI Hub", "#ai-hub"],
              ["Apps", "#apps"],
              ["Knowledge", "#knowledge"],
              ["Experiments", "#experiments"],
              ["What's New", "#whats-new"],
              ["About", "#about"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="rounded-lg px-3 py-2 text-xs font-bold text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#workspace"
            className="inline-flex items-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/10 px-3.5 py-2 text-xs font-bold text-violet-200 transition-colors hover:bg-violet-500/20"
          >
            Enter
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto flex min-h-[680px] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.2em] text-slate-400">
              <Sparkles className="h-3.5 w-3.5 text-violet-300" aria-hidden="true" />
              PORTAL MVP · PHASE 01
            </div>
            <p className="mb-5 font-mono text-xs font-bold tracking-[0.28em] text-violet-300 sm:text-sm">BELLBULLET AI WORKSPACE</p>
            <h1 className="font-display text-5xl font-black leading-[1.08] tracking-[-0.045em] text-white sm:text-7xl lg:text-[5.8rem]">
              AIで考え、AIで作り、
              <span className="block bg-gradient-to-r from-violet-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent">AIで育てる。</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              プロジェクト、AIアプリ、共有知識、実験記録を一つにつなぐ、BellBulletの入口。
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#workspace"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_16px_50px_rgba(99,102,241,0.24)] transition-transform hover:-translate-y-0.5"
              >
                Enter Workspace
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={KNOWLEDGE_BASE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-slate-400 hover:text-white">
                Knowledge Base
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </section>

        <section id="workspace" className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
            {portalLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.title} href={item.href} className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#090d1d]/80 p-5 transition-all hover:-translate-y-1 hover:border-white/15">
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-70 ${item.accent}`} />
                  <div className="relative">
                    <div className="mb-8 flex items-start justify-between">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      <span className="font-mono text-[9px] tracking-[0.22em] text-slate-600">{item.eyebrow}</span>
                    </div>
                    <h2 className="font-display text-xl font-black text-white">{item.title}</h2>
                    <p className="mt-2 text-xs leading-6 text-slate-400">{item.description}</p>
                    <ArrowRight className="mt-6 h-4 w-4 text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-white" aria-hidden="true" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section id="ai-hub" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            label="AI HUB LITE / PHASE 01"
            title="AI開発の管制室"
            description="どのAIで、どのプロジェクトを、どこまで進めたか。認証やAPI接続を増やさず、まず作業の現在地を一か所に集めます。"
          />

          <div className="grid gap-4 lg:grid-cols-[1.5fr_0.75fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {hubProjects.map((project) => (
                <article key={project.name} className="rounded-2xl border border-indigo-400/10 bg-[#090d1d]/80 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-lg font-black text-white">{project.name}</p>
                      <p className="mt-1 font-mono text-[9px] tracking-[0.12em] text-slate-500">{project.builtWith}</p>
                    </div>
                    <span className="rounded-full bg-indigo-500/10 px-2.5 py-1 font-mono text-[8px] font-bold tracking-[0.1em] text-indigo-200">
                      {project.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="mt-5 border-t border-white/[0.06] pt-4">
                    <p className="font-mono text-[9px] font-bold tracking-[0.14em] text-slate-600">NEXT ACTION</p>
                    <p className="mt-2 text-xs leading-5 text-slate-300">{project.nextAction}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 font-mono text-[9px] font-bold tracking-[0.1em]">
                    <ProjectAction href={project.site} label="SITE" />
                    <ProjectAction href={project.github} label="GITHUB" />
                    <ProjectAction href={project.docs} label="DOCS" />
                  </div>
                </article>
              ))}
            </div>

            <div className="grid content-start gap-4">
              <aside className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                <p className="font-mono text-[10px] font-bold tracking-[0.18em] text-fuchsia-300">AI TOOLS</p>
                <div className="mt-4 divide-y divide-white/[0.06]">
                  {aiTools.map((tool) => {
                    const content = (
                      <>
                        <span className="text-sm font-bold text-slate-200">{tool.name}</span>
                        <span className="text-[10px] text-slate-500">{tool.role}</span>
                      </>
                    );

                    return tool.href ? (
                      <a key={tool.name} href={tool.href} target="_blank" rel="noreferrer" className="flex items-center justify-between py-3 hover:text-white">
                        {content}
                      </a>
                    ) : (
                      <div key={tool.name} className="flex items-center justify-between py-3">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </aside>

              <aside className="rounded-2xl border border-emerald-400/10 bg-emerald-500/[0.04] p-5">
                <p className="font-mono text-[10px] font-bold tracking-[0.18em] text-emerald-300">CURRENT WORK</p>
                <h3 className="mt-4 font-display text-xl font-black text-white">AI Hub Lite MVP</h3>
                <dl className="mt-5 grid gap-3 text-xs">
                  <div className="flex justify-between gap-4"><dt className="text-slate-500">Updated</dt><dd className="text-slate-300">2026-07-16</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-slate-500">Source</dt><dd className="text-slate-300">Static data</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-slate-500">Publish</dt><dd className="text-emerald-300">Portal update</dd></div>
                </dl>
                <a href={`${KNOWLEDGE_BASE}/PROJECTS/AIHub`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-white">
                  Open Documentation
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading label="01 / PROJECTS" title="Projects" description="公開中のプロジェクトと、次に形にしていくもの。" />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="group rounded-2xl border border-white/[0.07] bg-[#090d1d]/70 p-6 transition-colors hover:border-white/15">
                <div className="flex items-start justify-between gap-4">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${project.iconClass}`}>
                    <Layers3 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className={`rounded-full px-2.5 py-1 font-mono text-[9px] font-bold tracking-[0.12em] ${project.status === "Live" ? "bg-emerald-500/10 text-emerald-300" : "bg-white/5 text-slate-500"}`}>
                    {project.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-black text-white">{project.name}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-6 flex gap-5 border-t border-white/[0.06] pt-4 font-mono text-[10px] font-bold tracking-[0.12em]">
                  <ProjectAction href={project.demo} label="DEMO" />
                  <ProjectAction href={project.github} label="GITHUB" />
                  <ProjectAction href={project.docs} label="DOCS" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="knowledge" className="scroll-mt-24 border-y border-white/[0.06] bg-[#080c1a]/80">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <SectionHeading label="02 / KNOWLEDGE" title="Knowledge Base" description="読むものはすべてGitHub Pagesへ。AIと人が同じ知識へ戻れる場所です。" />
            <a href={KNOWLEDGE_BASE} target="_blank" rel="noreferrer" className="group mb-4 flex flex-col justify-between gap-8 rounded-3xl border border-sky-400/15 bg-gradient-to-br from-sky-500/10 via-[#0a1023] to-violet-500/10 p-7 sm:flex-row sm:items-end sm:p-9">
              <div>
                <BookOpen className="mb-8 h-7 w-7 text-sky-300" aria-hidden="true" />
                <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-sky-300">PUBLIC KNOWLEDGE</p>
                <h3 className="mt-3 font-display text-3xl font-black text-white">AI Shared Memory</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">複数のAIと人が共有する、公開可能なMarkdown知識ベース。</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-white">
                Open Knowledge Base
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </a>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {knowledgeItems.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-sky-400/20 hover:bg-sky-500/5">
                  <p className="font-mono text-xs font-bold text-white">{item.label}</p>
                  <p className="mt-2 text-xs text-slate-500">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="apps" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading label="03 / AI APPS" title="AI Apps" description="AI Studioで作った小さなアプリを、ここへ少しずつ追加していきます。" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {apps.map((app) => {
              const content = (
                <>
                  <div className="flex items-center justify-between">
                    <Bot className="h-5 w-5 text-fuchsia-300" aria-hidden="true" />
                    <span className="font-mono text-[9px] font-bold tracking-[0.12em] text-slate-600">{app.status.toUpperCase()}</span>
                  </div>
                  <h3 className="mt-10 font-display text-xl font-black text-white">{app.name}</h3>
                  <p className="mt-2 text-xs text-slate-500">AI Studio App</p>
                </>
              );

              return app.href ? (
                <a key={app.name} href={app.href} className="rounded-2xl border border-fuchsia-400/15 bg-fuchsia-500/[0.06] p-5 transition-transform hover:-translate-y-1">
                  {content}
                </a>
              ) : (
                <article key={app.name} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 opacity-70">
                  {content}
                </article>
              );
            })}
          </div>
        </section>

        <section id="experiments" className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <SectionHeading label="04 / EXPERIMENTS" title="Experiments" description="完成前のアイデアも、試しながら育てるために記録します。" />
            <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {experiments.map((experiment) => (
                <article key={experiment.number} className="grid gap-4 py-6 sm:grid-cols-[80px_1fr] sm:items-center">
                  <span className="font-mono text-xs font-bold text-emerald-300">EXP.{experiment.number}</span>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h3 className="font-display text-lg font-black text-white">{experiment.title}</h3>
                    <p className="max-w-xl text-sm leading-6 text-slate-500">{experiment.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="whats-new" className="scroll-mt-24 mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading label="05 / CHANGELOG" title="What’s New" description="BellBullet Workspaceの最新更新。最初は手動で、確実に残していきます。" />
          <div className="rounded-2xl border border-white/[0.07] bg-[#090d1d]/70">
            {updates.map((update, index) => (
              <article key={`${update.date}-${update.title}`} className={`grid gap-3 p-5 sm:grid-cols-[110px_1fr_auto] sm:items-center ${index !== updates.length - 1 ? "border-b border-white/[0.06]" : ""}`}>
                <time className="font-mono text-[10px] text-slate-500">{update.date}</time>
                <h3 className="text-sm font-bold text-slate-200">{update.title}</h3>
                <span className="font-mono text-[9px] font-bold tracking-[0.12em] text-violet-300">{update.kind}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-t border-white/[0.06] bg-gradient-to-b from-transparent to-violet-950/15">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <UserRound className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="font-mono text-[10px] font-bold tracking-[0.22em] text-violet-300">ABOUT BELLBULLET</p>
              <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-5xl">AIと一緒に、作りながら考える。</h2>
              <p className="mt-6 text-base leading-8 text-slate-400">
                BellBullet AI Workspaceは、AIを使って作ったプロジェクト、知識、実験を公開し、次の制作へつなげるためのポータルです。
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 BellBullet AI Workspace</p>
          <div className="flex items-center gap-5">
            <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub
            </a>
            <a href={X_PROFILE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <Twitter className="h-4 w-4" aria-hidden="true" /> X
            </a>
            <a href="#whats-new" className="inline-flex items-center gap-2 hover:text-white">
              <Newspaper className="h-4 w-4" aria-hidden="true" /> Updates
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

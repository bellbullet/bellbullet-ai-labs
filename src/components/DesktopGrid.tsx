import type { LucideIcon } from "lucide-react";
import {
  Beaker,
  BookOpen,
  Bot,
  Database,
  ExternalLink,
  FileText,
  Github,
  Image as ImageIcon,
  Layers3,
  Wrench,
} from "lucide-react";
import { workspaceLaunchers, type WorkspaceLauncherIcon } from "../data/portalData";

const launcherIconMap: Record<WorkspaceLauncherIcon, LucideIcon> = {
  projects: Layers3,
  tools: Wrench,
  apps: Bot,
  knowledge: BookOpen,
  trials: Beaker,
  notes: FileText,
  github: Github,
  stitcher: ImageIcon,
  memory: Database,
};

export function DesktopGrid() {
  return (
    <section className="workspace-launcher-panel" aria-labelledby="desktop-launchers-title">
      <div className="workspace-panel-label">
        <span>DESKTOP / 01</span>
        <span>LAUNCHERS</span>
      </div>
      <h2 id="desktop-launchers-title">Workspace Map</h2>
      <p className="workspace-panel-intro">作る・使う・読む場所へ、ここから移動できます。</p>

      <div className="workspace-launcher-grid">
        {workspaceLaunchers.map((launcher) => {
          const Icon = launcherIconMap[launcher.icon];
          const isExternal = launcher.href.startsWith("http");

          return (
            <a
              key={`${launcher.label}-${launcher.href}`}
              className={`workspace-launcher workspace-launcher-${launcher.tone}`}
              href={launcher.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
            >
              <span className="workspace-launcher-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="workspace-launcher-copy">
                <strong>{launcher.label}</strong>
                <small>{launcher.detail}</small>
              </span>
              {isExternal ? <ExternalLink className="workspace-launcher-external" aria-hidden="true" /> : null}
            </a>
          );
        })}
      </div>
    </section>
  );
}

import type { LucideIcon } from "lucide-react";
import { BookOpen, Bot, FileText, Github, Layers3, Wrench } from "lucide-react";
import { workspaceDockItems, type WorkspaceLauncherIcon } from "../data/portalData";

const dockIconMap: Partial<Record<WorkspaceLauncherIcon, LucideIcon>> = {
  projects: Layers3,
  tools: Wrench,
  memory: BookOpen,
  apps: Bot,
  notes: FileText,
  github: Github,
};

export function WorkspaceDock() {
  return (
    <nav className="workspace-dock" aria-label="Workspace Dock">
      <span className="workspace-dock-label">QUICK DOCK</span>
      <div className="workspace-dock-items">
        {workspaceDockItems.map((item) => {
          const Icon = dockIconMap[item.icon];
          const isExternal = item.href.startsWith("http");

          if (!Icon) {
            return null;
          }

          return (
            <a
              key={`${item.label}-${item.href}`}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="workspace-dock-link"
            >
              <Icon aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

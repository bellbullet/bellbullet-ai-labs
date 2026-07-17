import { Activity, Terminal } from "lucide-react";

type WorkspaceMenuBarProps = {
  updated: string;
};

export function WorkspaceMenuBar({ updated }: WorkspaceMenuBarProps) {
  return (
    <header className="workspace-menu-bar">
      <a className="workspace-brand" href="#workspace-top" aria-label="Bellbullet Workspace トップへ">
        <span className="workspace-brand-mark" aria-hidden="true">
          <Terminal />
        </span>
        <span>
          <h1>Bellbullet Workspace</h1>
          <span className="workspace-brand-subtitle">AI WORKSPACE OS</span>
        </span>
      </a>

      <div className="workspace-menu-context" aria-label="現在のワークスペース">
        <Activity aria-hidden="true" />
        <span>AI Portal / Public</span>
      </div>

      <div className="workspace-menu-status">
        <span className="workspace-status-pulse" aria-hidden="true" />
        <span>STATUS: OBSERVING</span>
        <time dateTime={updated}>UPDATED: {updated}</time>
      </div>
    </header>
  );
}

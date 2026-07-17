import { ArrowRight, Bot, ExternalLink, Layers3, Newspaper, Sparkles } from "lucide-react";
import { aiTools, apps, currentFocus, hubProjects, updates } from "../data/portalData";
import { DesktopGrid } from "./DesktopGrid";
import { StatusWidgets } from "./StatusWidgets";
import { WorkspaceDock } from "./WorkspaceDock";
import { WorkspaceMenuBar } from "./WorkspaceMenuBar";
import { WorkspaceWindow } from "./WorkspaceWindow";

type WorkspaceProjectActionProps = {
  href?: string;
  label: string;
};

function WorkspaceProjectAction({ href, label }: WorkspaceProjectActionProps) {
  if (!href) {
    return null;
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {label}
      <ExternalLink aria-hidden="true" />
    </a>
  );
}

export function WorkspaceOS() {
  return (
    <div id="workspace-top" className="workspace-shell-root">
      <a className="workspace-skip-link" href="#workspace-focus">
        メインコンテンツへ
      </a>
      <div className="workspace-ambient workspace-ambient-one" aria-hidden="true" />
      <div className="workspace-ambient workspace-ambient-two" aria-hidden="true" />

      <WorkspaceMenuBar updated={currentFocus.updated} />

      <main className="workspace-desktop">
        <DesktopGrid />

        <div className="workspace-window-stack">
          <WorkspaceWindow id="workspace-focus" eyebrow="CURRENT FOCUS" title={currentFocus.title} icon={Sparkles} className="workspace-focus-window">
            <p className="workspace-focus-summary">{currentFocus.summary}</p>
            <dl className="workspace-focus-details">
              <div>
                <dt>STATUS</dt>
                <dd>{currentFocus.status}</dd>
              </div>
              <div>
                <dt>NEXT ACTION</dt>
                <dd>{currentFocus.nextAction}</dd>
              </div>
              <div>
                <dt>UPDATED</dt>
                <dd><time dateTime={currentFocus.updated}>{currentFocus.updated}</time></dd>
              </div>
            </dl>
            <a className="workspace-focus-link" href={currentFocus.docs} target="_blank" rel="noreferrer">
              Open Documentation
              <ArrowRight aria-hidden="true" />
            </a>
          </WorkspaceWindow>

          <WorkspaceWindow id="workspace-projects" eyebrow="ACTIVE PROJECTS" title="Projects" icon={Layers3}>
            <div className="workspace-project-list">
              {hubProjects.map((project) => {
                const statusKey = project.status.toLowerCase().replaceAll(" ", "-");

                return (
                  <article key={project.name} className="workspace-project-row">
                    <div className="workspace-project-copy">
                      <div className="workspace-project-status">
                        <span data-status={statusKey} aria-hidden="true" />
                        <strong>{project.status}</strong>
                        <small>{project.builtWith}</small>
                      </div>
                      <h3>{project.name}</h3>
                      <p>{project.nextAction}</p>
                    </div>
                    <div className="workspace-project-actions" aria-label={`${project.name} links`}>
                      <WorkspaceProjectAction href={project.site} label="SITE" />
                      <WorkspaceProjectAction href={project.github} label="GITHUB" />
                      <WorkspaceProjectAction href={project.docs} label="DOCS" />
                    </div>
                  </article>
                );
              })}
            </div>
          </WorkspaceWindow>

          <WorkspaceWindow id="workspace-whats-new" eyebrow="CHANGELOG" title="What’s New" icon={Newspaper}>
            <div className="workspace-updates-list">
              {updates.map((update) => (
                <article key={`${update.date}-${update.title}`}>
                  <time dateTime={update.date}>{update.date}</time>
                  <h3>{update.title}</h3>
                  <span>{update.kind}</span>
                </article>
              ))}
            </div>
          </WorkspaceWindow>
        </div>

        <aside className="workspace-sidebar" aria-label="Workspace status and tools">
          <StatusWidgets />

          <WorkspaceWindow id="workspace-tools" eyebrow="TOOL ROUTING" title="AI Tools" icon={Bot} className="workspace-compact-window">
            <div className="workspace-tool-list">
              {aiTools.map((tool) => {
                const content = (
                  <>
                    <strong>{tool.name}</strong>
                    <span>{tool.role}</span>
                  </>
                );

                return tool.href ? (
                  <a key={tool.name} href={tool.href} target="_blank" rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={tool.name}>{content}</div>
                );
              })}
            </div>
          </WorkspaceWindow>

          <WorkspaceWindow id="workspace-apps" eyebrow="AI STUDIO" title="AI Apps" icon={Bot} className="workspace-compact-window">
            <div className="workspace-app-list">
              {apps.map((app) =>
                app.href ? (
                  <a key={app.name} href={app.href}>
                    <span>{app.name}</span>
                    <small>{app.status}</small>
                  </a>
                ) : (
                  <div key={app.name}>
                    <span>{app.name}</span>
                    <small>{app.status}</small>
                  </div>
                ),
              )}
            </div>
          </WorkspaceWindow>
        </aside>
      </main>

      <WorkspaceDock />
    </div>
  );
}

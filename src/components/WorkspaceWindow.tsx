import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type WorkspaceWindowProps = {
  id: string;
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
};

export function WorkspaceWindow({ id, eyebrow, title, icon: Icon, children, className }: WorkspaceWindowProps) {
  const classes = ["workspace-window", className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes} aria-labelledby={`${id}-title`}>
      <header className="workspace-window-header">
        <span className="workspace-window-signal" aria-hidden="true" />
        <span className="workspace-window-icon" aria-hidden="true">
          <Icon />
        </span>
        <span className="workspace-window-heading">
          <small>{eyebrow}</small>
          <h2 id={`${id}-title`}>{title}</h2>
        </span>
        <span className="workspace-window-state">OPEN</span>
      </header>
      <div className="workspace-window-body">{children}</div>
    </section>
  );
}

import { currentFocus } from "../data/portalData";

const statusItems = [
  { label: "Current Focus", value: currentFocus.title, tone: "violet" },
  { label: "Recent Update", value: currentFocus.recentUpdate, tone: "cyan" },
  { label: "Status", value: currentFocus.status, tone: "emerald" },
  { label: "Last Updated", value: currentFocus.updated, tone: "blue" },
] as const;

export function StatusWidgets() {
  return (
    <section className="workspace-status-widgets" aria-labelledby="status-widgets-title">
      <div className="workspace-panel-label">
        <span>SYSTEM / LIVE</span>
        <span>STATUS</span>
      </div>
      <h2 id="status-widgets-title">Workspace Pulse</h2>

      <div className="workspace-status-grid">
        {statusItems.map((item) => (
          <article key={item.label} className={`workspace-status-card workspace-status-${item.tone}`}>
            <span className="workspace-status-card-line" aria-hidden="true" />
            <p>{item.label}</p>
            {item.label === "Last Updated" ? (
              <time dateTime={item.value}>{item.value}</time>
            ) : (
              <strong>{item.value}</strong>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

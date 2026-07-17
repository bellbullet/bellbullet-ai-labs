import { MobilePortal } from "./components/MobilePortal";
import { WorkspaceOS } from "./components/WorkspaceOS";

export default function App() {
  return (
    <>
      <div className="mobile-portal" data-layout="portal">
        <MobilePortal />
      </div>
      <div className="workspace-os" data-layout="workspace-os">
        <WorkspaceOS />
      </div>
    </>
  );
}

import { Logo } from "../common/core-sections/vps/Logo";
import { Link } from "../common/global/vps/Link";
import { Sidebar } from "../common/SideBar";
import "./layouts_common.scss";
export function Layout1({ children }: { children: React.ReactNode }) {

  return (
    <div className="layout layout-1">
      {/* className="sidebar" */}
      <Sidebar className="sidebar" tezt='myvalue!'>
        <Logo />
        <Link className="navitem" href="/">
          Home
        </Link>
        <Link className="navitem" href="/about">
          About
        </Link>
      </Sidebar>
      {children}
    </div>
  );
}

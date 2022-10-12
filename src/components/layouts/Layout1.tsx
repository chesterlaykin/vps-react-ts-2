import { Logo } from "@@/common/core-sections/vps/Logo";
import { Link } from "@@/common/global/vps/Link";
import { Sidebar } from "@@/common/SideBar";
import "./layouts_common.scss";
export function Layout1({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="grid layout layout-1">
        <div className="g-col-sm-4 g-col-md-3 g-col-12 order-1 order-sm-0">
          <Sidebar className="sidebar">
              <Logo />
              <Link className="navitem" href="/">
                Home
              </Link>
              <Link className="navitem" href="/about">
                About
              </Link>
              <Link className="navitem" href="/timer">
                Timer (Mobx)
              </Link>
              <Link className="navitem" href="/redux">
                Redux tests
              </Link>
            </Sidebar>
        </div>
        <div className="g-col-sm-8 g-col-md-9 g-col-12">{children}</div>
      </div>
    </div>
  );
}

import { Logo } from "@@/common/core-sections/vps/Logo";
import { Link } from "@@/common/global/vps/Link";
import { Sidebar } from "@@/common/SideBar";
import { menuItems } from '~/content-data';

import "./layouts_common.scss";
export function Layout1(pr: JSX.Props) {
  const {children} = pr;

  return (
    <div className="container layout-1">
      <div className="grid">
        <div className="g-col-sm-4 g-col-md-3 g-col-12 order-1 order-sm-0">
          <Sidebar className="sidebar">
            <Logo/>
            <div>
            {menuItems.map((item, index) => (
              <Link className={item.className} href={item.href} key={`menuitem_${index}`}>
              {item.text}
            </Link>
            ))}
            </div>
          </Sidebar>
        </div>
        <div className="g-col-sm-8 g-col-md-9 g-col-12">
          <div className="page-content">{children}</div>
        </div>
      </div>
    </div>
  );
}

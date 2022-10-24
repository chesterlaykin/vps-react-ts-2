import { Logo } from "@@/common/core-sections/vps/Logo";
import { Link } from "@@/common/global/vps/Link";
import { Sidebar } from "@@/common/SideBar";
import { menuItems } from '~/content-data';

import "./layouts_common.scss";
export function Layout2(pr: JSX.Props) {
  const {children} = pr;

  return (
    <div className="container layout layout-2">
      <p>layout 2</p>
      {children}
    </div>
  );
}

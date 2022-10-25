import { Logo } from "@@/common/core-sections/vps/Logo";
import { Link } from "@@/common/global/vps/Link";
import { Sidebar } from "@@/common/SideBar";
import { Header } from "../common/core-sections/Header";
import { menuItems } from "~/content-data";

import "./layouts_common.scss";
export function Layout2(pr: JSX.Props) {
  const {children} = pr;

  return (
    <div className="container layout-2">
      <Header menuItems={menuItems} />
      <div className="page-content">{children}</div>
      
    </div>
  );
}

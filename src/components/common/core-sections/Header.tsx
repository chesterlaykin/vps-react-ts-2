import s from "./header.module.scss";
import { IMenuItem } from '@/types/content';

type IProps = {
    menuItems: IMenuItem[];
};
export const Header = (pr: IProps) => {
  return (
    <div id="header" className={s["header flex flex-center"]}>
      <div
        className={[s["header__inner"], "container flex align-center"].join(
          " "
        )}
      >
        <div className={s["flex-1"]}>
          <a className={s["logo"]} href="/">
            Logo
          </a>
        </div>
        <div className={[s["search-bar"], "flex-1 d-block-sm"].join(" ")}>
          <form action="">
            <input type="text" />
          </form>
        </div>
        <nav className={"flex justify-end"}>
          <ul className={"flex flex-center"}>
            {pr.menuItems.map((item, index) => (
              <li key={`menuitem_${index}`}>
                <a
                  className={item.className}
                  href={item.href}
                >
                  {item.text}
                </a>
              </li>
            ))}
            {/* <li>
              <a href="/flugger-test">FluggerTest</a>
            </li>
            <li>
              <a href="/test2">Test 2</a>
            </li>
            <li>
              <a href="/links">Links</a>
            </li>
            <li>
              <a href="/sb-tutorial">SBTutorial</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

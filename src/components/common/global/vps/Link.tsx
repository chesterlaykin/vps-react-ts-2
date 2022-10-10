import React from "react";
import { usePageContext } from "../../../../../renderer/usePageContext";
// import { usePageContext } from "/renderer/usePageContext";
import { SomeType } from 'renderer/sometype';
export { Link };
const thing: SomeType = {
  data: ['ff']
}
type IProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};
// props: IProps
function Link(props: IProps) {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");

  return <div>
    {/* <span>Msg:{ thing.data[0]}</span> */}
    <a {...props} className={className} />
  </div>
}

import React from "react";
import { usePageContext } from "renderer/usePageContext";

export { Link };

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

  return <a {...props} className={className} />;
}

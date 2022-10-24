import React from "react";
import logo from "@/assets/svg/logo.svg";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";
import { Wrapper } from "@/components/common/utilitary/Wrapper";
import { Layout1 } from "../src/components/layouts/Layout1";
// import { Layout2 } from "../src/components/layouts/Layout2";

export { PageShell };

type layoutToPathname = {
  [layoutName: string]: {
    pathNames: string[];
    component: React.FC;
  };
};
// function getLayoutByUrlPathName(
//   urlPathName: string,
//   children: React.ReactNode
// ) {
//   let layoutName = "";
//   let LayoutElement: React.ElementType | null = null;
//   const layoutToPathNames: layoutToPathname = {
//     Layout1: {
//       pathNames: ["/", "/about", "/about", "/timer", "/redux"],
//       component: Layout1,
//     },
//     Layout2: {
//       pathNames: ["/product"],
//       component: Layout2,
//     },
//   };
//   //match pathname to layout
//   for (let [layout, obj] of Object.entries(layoutToPathNames)) {
//     const { pathNames, component } = obj;
//     if (Array.isArray(pathNames) && pathNames.includes(urlPathName)) {
//       layoutName = layout;
//       LayoutElement = component;
//       break;
//     }
//   }
// console.log('layoutName',layoutName)
// console.log('Layout2',Layout2)
//   if (!LayoutElement) {
//     //fallback
//     console.log(`no matching route for ${urlPathName}, using fallback Layout1`);
//     LayoutElement = Layout1;
//   }
//   return (
//     <LayoutElement>
//       <p>Wrapper: {layoutName}</p>
//       {children}
//     </LayoutElement>
//   );
// }
{/* <Wrapper
wrapper={(children) =>
  getLayoutByUrlPathName(pageContext.urlPathname, children)
}
>
{children}
</Wrapper> */}
function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout1>
        {children}
        </Layout1>
      </PageContextProvider>
    </React.StrictMode>
  );
}
  //babel test related to MobX
  // if (
  //   !new (class {
  //     x: any;
  //   })().hasOwnProperty("x")
  // ){
  //   throw new Error("Transpiler is not configured correctly");
  // }
   
function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}

import React from "react";
import logo from '@/assets/svg/logo.svg';
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";
// import { Link } from "./Link";
import { Layout1 } from "../src/components/layouts/Layout1";

export { PageShell };

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
          <Content>{children}</Content>
        </Layout1>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Content({ children }: { children: React.ReactNode }) {

  //babel test related to MobX
  if (!new class { x: any }().hasOwnProperty('x')) throw new Error('Transpiler is not configured correctly');
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

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

import ReactDOMServer from "react-dom/server";
import { PageShell } from "./PageShell";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import logoUrl from "@/assets/svg/logo.svg";
import type { PageContextServer } from "./types";

export { render };

export { onBeforeRender, passToClient };

// async function onBeforeRender(pageContext: PageContextServer) {
async function onBeforeRender(pageContext: PageContextServer) {
  console.log("onBeforeRender!");

  // Our `query` export values are available at `pageContext.exports.query`
  const { query } = pageContext.exports;
  const pageProps = {};

  /* ------------- Redux SSR -------------
    Get html and initial state:
      html: render Page wrapped with Provider and store  
  */
  const { Page } = pageContext;

  const pageHtml = ReactDOMServer.renderToString(
    <Page />
  );
  // -------------------------------------

  return {
    pageContext: {
      pageProps,
      pageHtml,
    },
  };
}

// See https://vite-plugin-ssr.com/data-fetching
// const passToClient = ["pageProps", "urlPathname", "PRELOADED_STATE"];
const passToClient = ["pageProps", "urlPathname"];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Vite SSR app";
  const desc =
    (documentProps && documentProps.description) ||
    "App using Vite + vite-plugin-ssr";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}

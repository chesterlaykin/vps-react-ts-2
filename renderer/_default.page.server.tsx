import ReactDOMServer from "react-dom/server";
import { PageShell } from "./PageShell";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import logoUrl from "@/assets/svg/logo.svg";
import type { PageContextServer } from "./types";

//Redux
import { Provider } from "react-redux";
import { setupStore } from "../src/redux/store";

export { render };

export { onBeforeRender, passToClient };

async function onBeforeRender(pageContext: PageContextServer) {

  // Our `query` export values are available at `pageContext.exports.query`
  const { query } = pageContext.exports;
  const pageProps = {};

  /* ------------- Redux SSR -------------
    NOTE! Hydration match: What is rendered here needs to match what is rendered
    on the client (_default.page.client.tsx)
  */
  const { Page } = pageContext;

  const store = setupStore();
  const pageHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </Provider>
  );

  return {
    pageContext: {
      pageProps,
      pageHtml,
    },
  };
}

// See https://vite-plugin-ssr.com/data-fetching

const passToClient = ["pageProps", "urlPathname"];

async function render(pageContext: PageContextServer) {
  const { pageHtml } = pageContext;

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

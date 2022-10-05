import ReactDOMServer from "react-dom/server";
import { PageShell } from "./PageShell";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import logoUrl from "@/assets/svg/logo.svg";
import type { PageContextServer } from "./types";

//Redux
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { storeConfiguration } from '@/redux/store';

export { render };

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextServer) {
  console.log("onBeforeRender!");

  // Our `query` export values are available at `pageContext.exports.query`
  const { query } = pageContext.exports;
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 50);
  });
  const pageProps = { data };

  /* ------------- Redux SSR -------------
    Get html and initial state:
      html: render Page wrapped with Provider and store  
  */
  const { Page } = pageContext;
  const store = configureStore(storeConfiguration);
  const pageHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Page />
    </Provider>
  );
  //  state: get initial state
  const PRELOADED_STORE_CONFIGURATION = storeConfiguration; //store.getState()

  // -------------------------------------

  return { pageContext: { 
    pageProps,
    PRELOADED_STORE_CONFIGURATION,
    pageHtml
  }};
}

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname", "PRELOADED_STORE_CONFIGURATION"];

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

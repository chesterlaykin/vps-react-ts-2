import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";
import type { PageContextClient } from "./types";

//redux
// import { configureStore } from "@reduxjs/toolkit";
import { getStore } from '@/redux/store';
import { Provider } from "react-redux";

export { render };

async function render(pageContext: PageContextClient) {
  const { Page, pageProps, PRELOADED_STATE } = pageContext;
  const store = getStore(PRELOADED_STATE );


  console.log('store w PRELOADED_STATE',store)
  hydrateRoot(
    document.getElementById("page-view")!,
    <Provider store={store}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </Provider>
  );
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */

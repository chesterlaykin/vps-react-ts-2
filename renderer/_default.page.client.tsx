import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";
import type { PageContextClient } from "./types";
import '@/assets/scss/start-files/index.scss';

//redux
// import {setupStore, rootReducer} from '@/redux/store';
// import { configureStore } from "@reduxjs/toolkit";
import { setupStore } from '@/redux/store';
import { Provider } from "react-redux";

export { render };

async function render(pageContext: PageContextClient) {
  // const { Page, pageProps, PRELOADED_STATE } = pageContext; 
  const { Page, pageProps } = pageContext; 
  const store = setupStore();
  hydrateRoot(
    document.getElementById("page-view")!,
    <Provider store={store}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
      </Provider>
  );
  // <Provider store={store}></Provider>
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */

import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";
import type { PageContextClient } from "./types";

//redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export { render };

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const store = configureStore(pageContext.PRELOADED_STORE_CONFIGURATION);
  
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

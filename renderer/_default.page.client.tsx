import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";
import type { PageContextClient } from "./types";
import '@/assets/scss/start-files/index.scss';


export { render };

async function render(pageContext: PageContextClient) {

  const { Page, pageProps } = pageContext; 

  hydrateRoot(
    document.getElementById("page-view")!,
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
  );

}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */

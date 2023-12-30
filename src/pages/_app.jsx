import { Analytics } from '@vercel/analytics/react';
import '@/src/styles/index.scss'
import { SpeedInsights } from '@vercel/speed-insights/next';


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
<Analytics />;
<SpeedInsights />
}



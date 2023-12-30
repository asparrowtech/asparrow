import { Analytics } from '@vercel/analytics/react';
import '@/src/styles/index.scss'

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
<Analytics />
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

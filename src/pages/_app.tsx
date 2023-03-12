import { AppProps } from "next/app";
import { SavedProvider } from "@/components/context/savedContext";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SavedProvider>
      <Component {...pageProps} />
    </SavedProvider>
  );
}

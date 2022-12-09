import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { AuthProvider } from "../lib/AuthContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider themes={["yellow-dark", "yellow-light"]}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

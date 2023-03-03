import "../styles/globals.css";
import localFont from "next/font/local";
import type { AppProps } from "next/app";

const myFont = localFont({
  src: "../public/Urbanist/Urbanist-VariableFont_wght.ttf",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

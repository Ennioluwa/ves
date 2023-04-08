import "../styles/globals.css";
import localFont from "next/font/local";
import type { AppProps } from "next/app";
import Head from "next/head";

const myFont = localFont({
  src: "../public/Urbanist/Urbanist-VariableFont_wght.ttf",
});

// TODO - ADD LOGO AS THE FAVICON

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Head>
        <title>Veee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hello Again Venture Studio</title>
        <meta name="description" content="Hello Again Venture Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>

      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}
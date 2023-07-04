import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer/footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tomomi Inoue Frontend Web Developer</title>
        <meta name="description" content="Tomomi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>

      <main>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

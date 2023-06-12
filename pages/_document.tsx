import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="og:url"
          content="https://portfolio-tomomi-inoue.vercel.app/"
        />
        <meta
          property="og:title"
          content="Tomomi Inoue -Frontend Web Developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="Tomomi Inoue Portfolio" />
        <meta property="og:image" content="/images/og-image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

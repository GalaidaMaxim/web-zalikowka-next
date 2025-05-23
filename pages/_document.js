import { Html, Head, Main, NextScript } from "next/document";
import { Header } from "@/components/Header/Header";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Web заліковка</title>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

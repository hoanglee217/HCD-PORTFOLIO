import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Portfolio — HoangCodeDao</title>
        <meta name="title" content="Portfolio — HoangCodeDao" />
        <link rel="icon" type="image/x-icon" href="/images/hoangcodedao-logo.png"/>
        <meta
          name="description"
          content="Programming and web development are my passions. I like to watch movies online, listen to music, and drink coffee. My goal is to make a contribution and impart my acquired knowledge to the community. Thank you for visiting my website. I hope you have a nice day!"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio.hoangcodedao.io.vn/"
        />
        <meta property="og:title" content="Portfolio — HoangCodeDao" />
        <meta
          property="og:description"
          content="Programming and web development are my passions. I like to watch movies online, listen to music, and drink coffee. My goal is to make a contribution and impart my acquired knowledge to the community. Thank you for visiting my website. I hope you have a nice day!"
        />
        <meta property="og:image" content="/images/metaBackground.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://portfolio.hoangcodedao.io.vn/"
        />
        <meta property="twitter:title" content="Portfolio — HoangCodeDao" />
        <meta
          property="twitter:description"
          content="Programming and web development are my passions. I like to watch movies online, listen to music, and drink coffee. My goal is to make a contribution and impart my acquired knowledge to the community. Thank you for visiting my website. I hope you have a nice day!"
        />
        <meta property="twitter:image" content="/images/metaBackground.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

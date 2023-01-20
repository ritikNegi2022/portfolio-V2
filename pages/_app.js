import '../styles/globals.css'
import Head from "next/head";
import Images from '../ImageProvider/Images';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        \<title>Portfolio-v2</title>
        <meta
          name="description"
          content="This is a project website to practice on Next.js"
        />
        {/* <link rel="icon" type="image/ico" sizes="32x32" href="../public/favicon.ico"></link> */}
        <link
          rel="icon"
          type="images/x-icon"
          href={Images.icon}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

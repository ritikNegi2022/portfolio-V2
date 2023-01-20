import '../styles/globals.css'
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        \<title>Portfolio-v2</title>
        <meta
          name="description"
          content="This is a project website to practice on Next.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

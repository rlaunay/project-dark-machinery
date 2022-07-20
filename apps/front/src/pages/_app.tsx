import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Project Dark Machinery</title>
      <meta name="description" content="Projet JDR dans un univers cyberpunk" />
      <meta property="og:image" content="/logo.png" />
      <link rel="icon" type="image/png" href="/logo.png" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp

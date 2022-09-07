import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../layouts'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRef } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { usePageProgressBar } from 'hooks/usePageProgressBar'

function MyApp({ Component, pageProps: { dehydratedState, ...pageProps } }: AppProps) {
  const queryClientRef = useRef(new QueryClient());
  usePageProgressBar();

  return <>
    <Head>
      <title>Project Dark Machinery</title>
      <meta name="description" content="Projet JDR dans un univers cyberpunk" />
      <meta property="og:image" content="/logo.png" />
      <link rel="icon" type="image/png" href="/logo.png" />
    </Head>
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
       {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </Hydrate>
    </QueryClientProvider>
  </>
}

export default MyApp

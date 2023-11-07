import React from 'react'
import type { AppProps } from 'next/app'
import { Inter as Font } from 'next/font/google'
import Head from 'next/head'
import Layout from '@/layouts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@/styles/globals.css'

import { ToastProvider } from '@/components/toast'

const font = Font({
  subsets: ['latin'],
})

// Create a client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>My Awesome App</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ToastProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp

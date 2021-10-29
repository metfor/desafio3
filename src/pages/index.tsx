import type { NextPage } from 'next'
import Head from 'next/head'
import { Body } from '../components/Body'

import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
   <Body/>
    </div>
  )
}

export default Home

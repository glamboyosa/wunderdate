import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useWunderGraph, withWunderGraph } from '../generated/nextjs'
const Home: NextPage = () => {
  const { user } = useWunderGraph()
  const { push } = useRouter()
  useEffect(() => {
    if (!user) {
      push('/login')
    } else {
      push('/admin/applications')
    }
  }, [user])
  return (
    <>
      <Head>
        <title>Wunderdate - Home</title>
      </Head>
    </>
  )
}

export default withWunderGraph(Home, {})

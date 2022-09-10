import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  useWunderGraph,
  withWunderGraph,
  AuthProviders,
} from '../generated/nextjs'
import { useLoggedInStore, useUsernameStore } from '../utils/store'

const Login: NextPage = () => {
  const { login, user } = useWunderGraph()
  const { push } = useRouter()
  const setLoggedIn = useLoggedInStore((state) => state.setLoggedIn)
  const setUsername = useUsernameStore((state) => state.setUsername)
  useEffect(() => {
    if (user) {
      setLoggedIn(true)
      setUsername(user.name!)
      push('/admin/applications')
    }
  }, [user])
  return (
    <>
      <Head>
        <title>Wunderdate - Login</title>
      </Head>
      <div className="container bg-white p-3 w-1/2 h-72 rounded shadow-lg flex justify-center flex-col items-center md:w-1/3">
        <h1 className="text-4xl mt-3 mb-3 md:text-6xl">Login</h1>
        <button
          onClick={() => login(AuthProviders.github)}
          className="bg-darkBlue rounded-sm py-2 px-3 mb-2 text-base text-white md:text-2xl"
        >
          Login with{' '}
          <span>
            <GitHubLogoIcon className="inline-block" width={25} height={25} />
          </span>
        </button>
      </div>
    </>
  )
}
export default withWunderGraph(Login)

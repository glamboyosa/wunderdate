import type { NextPage } from 'next'
import Head from 'next/head'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import PositionCard from '../components/positionCard'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wunderdate - Home</title>
      </Head>
      <PositionCard
        name="Full Stack Engineer – Core"
        description="We are looking for a full stack software engineer to join the core team. You will collaborate with designers and other engineers to work on our core suite of products"
        count={3}
      />
      {/* <div className="container bg-white p-3 w-1/2 h-72 rounded shadow-lg flex justify-center flex-col items-center md:w-1/3">
        <h1 className="text-4xl mt-3 mb-3 md:text-6xl">Login</h1>
        <button className="bg-darkBlue rounded-sm py-2 px-3 mb-2 text-base text-white md:text-2xl">
          Login with{' '}
          <span>
            <GitHubLogoIcon className="inline-block" width={25} height={25} />
          </span>
        </button>
      </div> */}
    </>
  )
}

export default Home

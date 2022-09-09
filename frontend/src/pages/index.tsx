import type { NextPage } from 'next'
import Head from 'next/head'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wunderdate - Home</title>
      </Head>

      <div className="container bg-white p-3 w-1/2 h-72 rounded shadow-lg flex justify-center flex-col items-center md:w-1/3">
        <h1 className="text-4xl mt-3 mb-3 md:text-6xl">Login</h1>
        <button className="bg-darkBlue rounded-sm py-2 px-3 mb-2 text-base text-white md:text-2xl">
          Login with{' '}
          <span>
            <GitHubLogoIcon className="inline-block" width={25} height={25} />
          </span>
        </button>
      </div>
    </>
  )
}

export default Home

type TechnologyCardProps = {
  name: string
  description: string
  documentation: string
}

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  )
}

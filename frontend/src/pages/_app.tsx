import type { AppType } from 'next/dist/shared/lib/utils'
import Nav from '../components/nav'
import '../styles/globals.css'
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="font-Rampart">
      <Nav isLoggedIn={false} name="" />
      <main className="mx-auto flex flex-col items-center justify-center min-h-screen p-4 bg-lightGray">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp

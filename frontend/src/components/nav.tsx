import { useRouter } from 'next/router'
import { useWunderGraph, withWunderGraph } from '../generated/nextjs'
import { useLoggedInStore, useUsernameStore } from '../utils/store'
type TNavProps = {
  isLoggedIn: boolean
  name: string
}
const Nav = () => {
  const { logout } = useWunderGraph()
  const { push } = useRouter()
  const isLoggedIn = useLoggedInStore((state) => state.isLoggedIn)
  const name = useUsernameStore((state) => state.username)
  return (
    <nav className="bg-white w-full cursor-pointer px-6 py-4 border-solid border-veryDarkBlue border-b-4 flex items-center justify-between">
      <h2 className="text-3xl ml-auto md:text-4xl">WunderDate</h2>
      <h3
        className="text-2xl ml-auto md:text-3xl"
        onClick={() => {
          !isLoggedIn && push('/login')
        }}
      >
        {isLoggedIn ? name : 'Login'}
      </h3>
      {isLoggedIn && (
        <p className="ml-2" onClick={() => logout()}>
          Logout
        </p>
      )}
    </nav>
  )
}
export default withWunderGraph(Nav)

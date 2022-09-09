import { HamburgerMenuIcon } from '@radix-ui/react-icons'
type TNavProps = {
  isLoggedIn: boolean
  name: string
}
const Nav = ({ isLoggedIn, name }: TNavProps) => (
  <nav className="bg-white w-full px-6 py-4 border-solid border-veryDarkBlue border-b-4 flex items-center justify-between">
    <div className="md:hidden">
      <HamburgerMenuIcon width={20} height={20} />
    </div>
    <h2 className="text-3xl ml-auto md:text-4xl">WunderDate</h2>
    <h3 className="text-2xl ml-auto md:text-3xl">
      {isLoggedIn ? name : 'Login'}
    </h3>
  </nav>
)
export default Nav

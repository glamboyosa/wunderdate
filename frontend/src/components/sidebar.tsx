import { useRouter } from 'next/router'

const Sidebar = () => {
  const { pathname } = useRouter()
  return (
    <div className="flex flex-col  items-start cursor-pointer text-left">
      <div className=" w-full border-solid border-veryDarkBlue border-b-4 -mt-2 items-center mb-2">
        <h3 className="text-2xl">WunderDate</h3>
      </div>
      <h1 className="text-3xl mb-6">Hiring</h1>
      <span
        className={
          pathname === '/admin/applications'
            ? 'text-lg mb-3  p-3 rounded-md  bg-brightRedSupLight'
            : 'text-lg mb-3'
        }
      >
        Applications
      </span>
      <span
        className={
          pathname === '/admin/positions'
            ? 'text-lg p-3 rounded-md  bg-brightRedSupLight'
            : 'text-lg'
        }
      >
        Positions
      </span>
    </div>
  )
}
export default Sidebar

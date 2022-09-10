import { NextPage } from 'next'
import Head from 'next/head'
import {
  withWunderGraph,
  useQuery,
  useLiveQuery,
  useMutation,
} from '../../../generated/nextjs'
import ApplicationCard from '../../../components/applicationCard'
import Sidebar from '../../../components/sidebar'
import Main from '../../../components/main'
import { useRouter } from 'next/router'
import ApplicationDetailsCard from '../../../components/applicationDetails'
const Application: NextPage = () => {
  const { query } = useRouter()
  let { id, comment } = query
  id = id as string
  comment = comment as string
  const { result } = useQuery.ProtectedGetApplication({
    input: { id: Number(id) },
  })

  return (
    <>
      <Head>
        <title>Wunderdate - Application {id}</title>
      </Head>
      <div className=" p-5 shadow-lg bg-white rounded-md">
        <div className="grid grid-cols-rf gap-0.5 min-h-[600px] w-full">
          <Sidebar />
          <Main appPage>
            {result.status === 'ok' &&
              result.data.getApplication?.users?.map((user) => (
                <>
                  <h1 className="text-4xl mt-3 mb-3 md:text-6xl">
                    {user.user?.name}
                  </h1>
                  <h1 className="text-2xl mt-3 mb-4 text-gray-500 md:text-4xl">
                    {result.data.getApplication?.role?.name}
                  </h1>
                  <div className=" w-full border-solid flex gap-2 border-veryDarkBlue border-b-2 mb-5 items-center">
                    <h3
                      className={
                        !comment
                          ? 'p-3 rounded-md  bg-brightRedSupLight text-xl mb-2'
                          : 'text-xl mb-2'
                      }
                    >
                      job application
                    </h3>
                    <h3
                      className={
                        comment
                          ? 'p-3 rounded-md  bg-brightRedSupLight text-xl mb-2'
                          : 'text-xl mb-2'
                      }
                    >
                      comments
                    </h3>
                  </div>
                  <ApplicationDetailsCard
                    message={result.data.getApplication?.message}
                    name={user.user?.name!}
                    email={user.user?.email!}
                  />
                  <div className="flex  justify-center gap-2 mt-4 items-center">
                    <button className="bg-brightRedSupLight rounded-sm py-2 px-3 mb-2 text-base  md:text-2xl">
                      Accept
                    </button>
                    <button className="bg-veryLightGray border-black border-double border-2 rounded-sm py-2 px-3 mb-2 text-base  md:text-2xl">
                      Reject
                    </button>
                  </div>
                </>
              ))}
          </Main>
        </div>
      </div>
    </>
  )
}
export default withWunderGraph(Application)

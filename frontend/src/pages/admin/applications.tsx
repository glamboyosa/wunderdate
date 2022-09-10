import type { NextPage } from 'next'
import Head from 'next/head'
import {
  useWunderGraph,
  withWunderGraph,
  useQuery,
} from '../../generated/nextjs'
import ApplicationCard from '../../components/applicationCard'
import Sidebar from '../../components/sidebar'
import Main from '../../components/main'
import { useRouter } from 'next/router'
const Positions: NextPage = () => {
  const { query } = useRouter()
  const jid = query.jid as string
  let data: (JSX.Element[] | undefined)[] | undefined = undefined
  const { result } = useQuery.ProtectedGetApplications()
  const { result: res } = useQuery.ProtectedGetApplicationsWithQuery({
    input: { roleId: Number(jid) },
  })
  if (result.status === 'ok' && res.status !== 'ok') {
    console.log('Booyahh')
    data = result.data.getApplications?.map((application) => {
      return application.users?.map((user) => (
        <ApplicationCard
          key={application.id}
          name={user.user?.name!}
          position={application.role?.name}
        />
      ))
    })
  } else if (result.status === 'ok' && res.status === 'ok') {
    data = res.data.getApplicationsWithQuery?.map((application) => {
      return application.users?.map((user) => (
        <ApplicationCard
          key={application.id}
          name={user.user?.name!}
          position={application.role?.name}
        />
      ))
    })
  }
  return (
    <>
      <Head>
        <title>Wunderdate - Positions</title>
      </Head>
      <div className=" p-5 shadow-lg bg-white rounded-md">
        <div className="grid grid-cols-rf gap-0.5 min-h-[600px] w-full">
          <Sidebar />
          <Main>{data}</Main>
        </div>
      </div>
    </>
  )
}

export default withWunderGraph(Positions)

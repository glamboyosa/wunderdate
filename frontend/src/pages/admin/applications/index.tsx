import type { NextPage } from 'next'
import Head from 'next/head'
import { withWunderGraph, useQuery } from '../../../generated/nextjs'
import ApplicationCard from '../../../components/applicationCard'
import Sidebar from '../../../components/sidebar'
import Main from '../../../components/main'
import { useRouter } from 'next/router'
import Loader from '../../../components/loader'
import { useEffect } from 'react'
const Applications: NextPage = () => {
  const { query } = useRouter()
  const jid = query.jid as string
  let data:
    | React.ReactNode[]
    | JSX.Element
    | (Element[] | undefined)[]
    | undefined = <Loader />
  const { result, refetch } = useQuery.ProtectedGetApplications()
  const { result: res, refetch: refetchSecondQuery } =
    useQuery.ProtectedGetApplicationsWithQuery({
      input: { roleId: Number(jid) },
    })
  if (result.status === 'ok' && res.status !== 'ok') {
    data = result.data.getApplications?.map((application) => {
      return application.users?.map((user) => (
        <ApplicationCard
          key={application.id}
          id={application.id!}
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
          id={application.id!}
          name={user.user?.name!}
          position={application.role?.name}
        />
      ))
    })
  }
  // fetch client side to ensure we always have data
  useEffect(() => {
    refetch()
    refetchSecondQuery({
      input: { roleId: Number(jid) },
    })
  }, [])
  return (
    <>
      <Head>
        <title>Wunderdate - Applications</title>
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

export default withWunderGraph(Applications)

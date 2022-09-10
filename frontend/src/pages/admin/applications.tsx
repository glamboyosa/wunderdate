import type { NextPage } from 'next'
import Head from 'next/head'
import {
  useWunderGraph,
  withWunderGraph,
  useQuery,
} from '../../generated/nextjs'
import PositionCard from '../../components/positionCard'
import ApplicationCard from '../../components/applicationCard'
import Sidebar from '../../components/sidebar'
import Main from '../../components/main'
const Positions: NextPage = () => {
  const { user } = useWunderGraph()
  const { result } = useQuery.ProtectedGetApplications()

  if (result.status === 'ok') {
    result.data.getApplications
  }
  return (
    <>
      <Head>
        <title>Wunderdate - Positions</title>
      </Head>
      <div className=" p-5 shadow-lg bg-white rounded-md">
        <div className="grid grid-cols-rf gap-0.5 min-h-[600px] w-full">
          <Sidebar />

          <Main>
            {result.status === 'ok' &&
              result.data.getApplications?.map((application) => {
                return (
                  <ApplicationCard
                    key={application.id}
                    name={'Jim Jones II'}
                    position={application.role?.name}
                  />
                )
              })}

            {/* <ApplicationCard
              name="Jim Jones II"
              position="Full Stack Engineer – Core"
            />
            <ApplicationCard
              name="Jim Jones II"
              position="Full Stack Engineer – Core"
            />
            <ApplicationCard
              name="Jim Jones II"
              position="Full Stack Engineer – Core"
            />
            <ApplicationCard
              name="Jim Jones II"
              position="Full Stack Engineer – Core"
            />
            <ApplicationCard
              name="Jim Jones II"
              position="Full Stack Engineer – Core"
            /> */}
          </Main>
        </div>
      </div>
    </>
  )
}

export default withWunderGraph(Positions)

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
  const { result } = useQuery.ProtectedGetPositions()
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
              result.data.getPositions?.map((position) => {
                return (
                  <PositionCard
                    key={position.id}
                    jid={position.id!}
                    name={position.name!}
                    description={position.description!}
                    count={position.application?.length!}
                  />
                )
              })}
          </Main>
        </div>
      </div>
    </>
  )
}

export default withWunderGraph(Positions)

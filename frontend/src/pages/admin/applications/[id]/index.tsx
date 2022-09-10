import { NextPage } from 'next'
import Head from 'next/head'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import {
  withWunderGraph,
  useQuery,
  useLiveQuery,
  useMutation,
  useWunderGraph,
} from '../../../../generated/nextjs'
import Sidebar from '../../../../components/sidebar'
import Main from '../../../../components/main'
import { useRouter } from 'next/router'
import ApplicationDetailsCard from '../../../../components/applicationDetails'
import { useRef, useState } from 'react'
import Message from '../../../../components/message'
import { TInputRef } from '../../../../utils/types'
import Input from '../../../../components/input'
const Application: NextPage = () => {
  const { query, back } = useRouter()
  let { id } = query
  id = id as string
  const date = new Date(Date.now())
  let data: (JSX.Element[] | undefined) | undefined | React.ReactNode =
    undefined
  const { user } = useWunderGraph()
  const { result } = useQuery.ProtectedGetApplication({
    input: { id: Number(id) },
  })
  const { result: res } = useLiveQuery.ProtectedGetCommentsForApplication({
    input: { applicationId: Number(id) },
  })
  const { mutate } = useMutation.ProtectedCreateCommentMutation()
  const [commentSelected, setCommentSelected] = useState(false)
  const input = useRef<TInputRef>(undefined!)
  console.log(res)
  if (
    result.status === 'ok' &&
    res.status === 'ok' &&
    !res.data.getCommentsForApplication.length &&
    !commentSelected
  ) {
    data = result.data.getApplication?.users?.map((user) => (
      <>
        <h1 className="text-4xl mt-3 mb-3 md:text-6xl">{user.user?.name}</h1>
        <h1 className="text-2xl mt-3 mb-4 text-gray-500 md:text-4xl">
          {result.data.getApplication?.role?.name}
        </h1>
        <div className=" w-full border-solid cursor-pointer flex gap-2 border-veryDarkBlue border-b-2 mb-5 items-center">
          <h3
            onClick={() => setCommentSelected(false)}
            className={
              !commentSelected
                ? 'p-3 rounded-md   bg-brightRedSupLight text-xl mb-2'
                : 'text-xl mb-2'
            }
          >
            job application
          </h3>
          <h3
            onClick={() => setCommentSelected(true)}
            className={
              commentSelected
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
    ))
  } else if (result.status === 'ok' && res.status === 'ok') {
    data = (
      <div className="mt-3 overflow-y-scroll">
        <div className="text-xl mb-3 cursor-pointer">&larr;</div>
        {res.data.getCommentsForApplication.map((comment) => (
          <div key={comment.id}>
            <Message
              from={comment.from}
              message={comment.message}
              username={user?.name!}
            />
            <div
              className={`flex gap-2 align-center mb-2 overflow-x-hidden text-sm ${
                comment.from === user?.name && 'ml-[50%] md:ml-[50%]'
              }`}
            >
              <p>{comment.from}</p>
              <p>
                {new Intl.DateTimeFormat('en-GB').format(date) ===
                new Intl.DateTimeFormat('en-GB').format(
                  new Date(comment.createdAt),
                )
                  ? new Intl.DateTimeFormat('en-GB', {
                      timeStyle: 'short',
                    }).format(new Date(comment.createdAt))
                  : new Intl.DateTimeFormat('en-GB', {
                      dateStyle: 'short',
                      timeStyle: 'short',
                    }).format(new Date(comment.createdAt))}
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  const submitCommentHandler = async () => {
    try {
      console.log({
        applicationId: Number(id),
        commentInput: {
          message: input.current.value,
          application: {},
          from: user?.name!,
        },
      })
      const datum = await mutate({
        input: {
          applicationId: Number(id),
          commentInput: {
            message: input.current.value,
            application: {
              connect: {
                id: Number(id),
              },
            },
            from: user?.name!,
          },
        },
      })
      console.log(datum)
      input.current.value = ''
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <Head>
        <title>
          {commentSelected
            ? 'Wunderdate - Comments'
            : 'Wunderdate - Application'}
        </title>
      </Head>
      <div className=" p-5 shadow-lg bg-white rounded-md">
        <div className="grid grid-cols-rf gap-0.5 min-h-[600px] w-full">
          <Sidebar />
          <Main appPage>
            {data}
            <div className=" w-full flex gap-3 justify-center items-center md:left-[1%]">
              <Input ref={input} />
              <button
                onClick={submitCommentHandler}
                className="bg-green-600 flex gap-2 mt-2  rounded-md py-2 px-3 mb-2 text-base  md:text-2xl"
              >
                Send{' '}
                <span>
                  <PaperPlaneIcon
                    className="rotate-[-30deg]"
                    width={30}
                    height={30}
                  />
                </span>
              </button>
            </div>
          </Main>
        </div>
      </div>
    </>
  )
}
export default withWunderGraph(Application)

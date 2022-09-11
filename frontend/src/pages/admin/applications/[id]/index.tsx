import { NextPage } from 'next'
import Head from 'next/head'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import {
  withWunderGraph,
  useQuery,
  useLiveQuery,
  useMutation,
  useWunderGraph,
} from '../../../../generated/nextjs'
import Sidebar from '../../../../components/sidebar'
import Main from '../../../../components/main'
import ApplicationDetailsCard from '../../../../components/applicationDetails'
import { useEffect, useRef, useState } from 'react'
import Message from '../../../../components/message'
import { TInputRef } from '../../../../utils/types'
import Input from '../../../../components/input'
import { randomMesage, randomName } from '../../../../utils/randoms'
import Loader from '../../../../components/loader'
const Application: NextPage = () => {
  const { query } = useRouter()
  let { id } = query
  id = id as string
  const date = new Date(Date.now())
  let data:
    | React.ReactNode[]
    | JSX.Element
    | (Element[] | undefined)[]
    | undefined = <Loader appPage />
  const { user } = useWunderGraph()
  const { result } = useQuery.ProtectedGetApplication({
    input: { id: Number(id) },
  })
  const { result: res } = useLiveQuery.ProtectedGetCommentsForApplication({
    input: { applicationId: Number(id) },
  })
  const { mutate: createCommentMutation } =
    useMutation.ProtectedCreateCommentMutation()
  const { mutate: updateApplicationMutation } =
    useMutation.ProtectedUpdateApplicationMutation()
  const [commentSelected, setCommentSelected] = useState(false)
  const input = useRef<TInputRef>(undefined!)
  const seeded = useRef(false)
  if (result.status === 'ok' && res.status === 'ok' && !commentSelected) {
    data = result.data.getApplication?.users?.map((user) => (
      <div key={user.userId}>
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
          <button
            onClick={acceptHandler}
            className="bg-brightRedSupLight rounded-sm py-2 px-3 mb-2 text-base  md:text-2xl"
          >
            Accept
          </button>
          <button
            onClick={rejectHandler}
            className="bg-veryLightGray border-black border-double border-2 rounded-sm py-2 px-3 mb-2 text-base  md:text-2xl"
          >
            Reject
          </button>
        </div>
      </div>
    ))
  } else if (result.status === 'ok' && res.status === 'ok' && commentSelected) {
    data = (
      <div className="mt-3 overflow-y-scroll">
        <div
          onClick={() => setCommentSelected(false)}
          className="text-xl mb-3 cursor-pointer"
        >
          &larr;
        </div>
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
  async function submitCommentHandler() {
    try {
      await createCommentMutation({
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
      input.current.value = ''
    } catch (e) {
      console.error(e)
    }
  }
  async function acceptHandler() {
    const applicationId = id as string
    try {
      await updateApplicationMutation({
        input: {
          open: false,
          status: 'accepted',
          updateApplicationId: Number(applicationId),
        },
      })
      toast('Application accepted', {
        type: 'success',
        bodyClassName: 'font-Rampart',
      })
    } catch (e) {
      console.error(e)
    }
  }
  async function rejectHandler() {
    const applicationId = id as string
    try {
      await updateApplicationMutation({
        input: {
          open: true,
          status: 'rejected',
          updateApplicationId: Number(applicationId),
        },
      })
      toast('Application rejected', {
        type: 'warning',
        bodyClassName: 'font-Rampart',
      })
    } catch (e) {
      console.error(e)
    }
  }
  // useEffect for seeding our DB with some comments leveraging Wundergraph
  useEffect(() => {
    if (user && !seeded.current) {
      Promise.all([
        createCommentMutation({
          input: {
            applicationId: Number(id),
            commentInput: {
              message: randomMesage(),
              application: {
                connect: {
                  id: Number(id),
                },
              },
              from: randomName(),
            },
          },
        }),
        createCommentMutation({
          input: {
            applicationId: Number(id),
            commentInput: {
              message: randomMesage(),
              application: {
                connect: {
                  id: Number(id),
                },
              },
              from: randomName(),
            },
          },
        }),
      ])
        .then((el) => console.log('Seed', el))
        .catch((e) => console.error(e))
      seeded.current = true
    }
  }, [user])
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
            {commentSelected && (
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
            )}
          </Main>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
export default withWunderGraph(Application)

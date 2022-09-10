import { useRouter } from 'next/router'

type TPositionCardProps = {
  name: string
  description: string
  count: number
  jid: number
}

const PositionCard = ({
  name,
  description,
  count,
  jid,
}: TPositionCardProps) => {
  const applicationCount = count === 1 ? 'application' : 'applications'
  const { push } = useRouter()
  return (
    <section className="flex cursor-pointer flex-col justify-center p-6 bg-white rounded shadow-md w-auto">
      <h2 className="text-xl text-gray-700 mt-1.5 mb-1.5 md:text-3xl ">
        {name}
      </h2>

      <p className="text-lg text-gray-600 mt-1.5 mb-1.5 w-auto h-full md:text-xl">
        {description}
      </p>
      <span
        onClick={() => push(`/admin/applications?jid=${jid}`)}
        className="mt-3 text-sm underline text-brightRed underline-offset-2"
      >
        {count} {applicationCount} &rarr;
      </span>
    </section>
  )
}
export default PositionCard

import { useRouter } from 'next/router'

type TApplicationCardProps = {
  name: string
  position?: string
  id: number
}

const ApplicationCard = ({ name, position, id }: TApplicationCardProps) => {
  const { push } = useRouter()
  return (
    <section className="flex cursor-pointer flex-col justify-center p-6 bg-white rounded shadow-md w-auto">
      <h2 className="text-xl text-gray-700 mt-1.5 mb-1.5 md:text-3xl ">
        {name}
      </h2>
      <label>Position:</label>
      <p className="text-lg text-gray-600 mt-0.5 mb-1.5  md:text-xl">
        {position}
      </p>
      <span
        onClick={() => push(`/admin/applications/${id}`)}
        className="mt-3 text-sm underline text-brightRed underline-offset-2"
      >
        view application &rarr;
      </span>
    </section>
  )
}
export default ApplicationCard

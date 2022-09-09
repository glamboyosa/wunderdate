type TPositionCardProps = {
  name: string
  description: string
  count: number
}

const PositionCard = ({ name, description, count }: TPositionCardProps) => {
  return (
    <section className=" flex flex-col justify-center p-6 bg-white rounded shadow-md w-paragraph">
      <h2 className="text-xl text-gray-700 mt-1.5 mb-1.5 md:text-3xl ">
        {name}
      </h2>
      <p className="text-lg text-gray-600 mt-1.5 mb-1.5  md:text-xl">
        {description}
      </p>
      <span className="mt-3 text-sm underline text-violet-500 underline-offset-2">
        {count} applications &rarr;
      </span>
    </section>
  )
}
export default PositionCard

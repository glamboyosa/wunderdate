type TApplicationCardProps = {
  name: string
  position: string
}

const ApplicationCard = ({ name, position }: TApplicationCardProps) => {
  return (
    <section className="flex cursor-pointer flex-col justify-center p-6 bg-white rounded shadow-md w-auto">
      <h2 className="text-xl text-gray-700 mt-1.5 mb-1.5 md:text-3xl ">
        {name}
      </h2>
      <label>Position:</label>
      <p className="text-lg text-gray-600 mt-0.5 mb-1.5  md:text-xl">
        {position}
      </p>
      <span className="mt-3 text-sm underline text-brightRed underline-offset-2">
        view application &rarr;
      </span>
    </section>
  )
}
export default ApplicationCard

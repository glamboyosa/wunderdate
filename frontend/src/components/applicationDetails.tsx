type TApplicationDetails = {
  name: string
  email: string
  message?: string
}
const ApplicationDetailsCard = ({
  name,
  email,
  message,
}: TApplicationDetails) => {
  return (
    <div className="flex flex-col justify-center items-start p-8 bg-white rounded-md shadow-md  w-full cursor-pointer">
      <h1 className="text-xlmt-1.5 mb-2.5 md:text-3xl">About</h1>
      <div className="flex gap-4 items-center mb-2.5">
        <div>
          <label className=" text-gray-400 mb-1.5">Name</label>
          <p className="text-lg text-gray-600 mt-0.5 mb-1.5  md:text-xl">
            {name}
          </p>
        </div>
        <div>
          <label className=" text-gray-400 mb-1.5">Email</label>
          <p className="text-lg text-gray-600 mt-0.5 mb-1.5  md:text-xl">
            {email}
          </p>
        </div>
      </div>
      <div>
        <label className=" text-gray-400 mb-1.5">Message(Optional)</label>
        <p className="text-lg text-gray-600 mt-0.5 mb-1.5  md:text-xl">
          {message ? message : 'Not Provided'}
        </p>
      </div>
    </div>
  )
}
export default ApplicationDetailsCard

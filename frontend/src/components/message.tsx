type TMessageProps = {
  from: string
  username: string
  message: string
}
const Message = ({ from, username, message }: TMessageProps) => {
  return (
    <div
      className={`flex flex-col justify-center mb-2 items-start p-8  rounded-md shadow-md w-1/2 h-auto  max-w-full cursor-pointer ${
        from !== username ? 'pull-left bg-white' : 'ml-auto bg-blue-300'
      }`}
    >
      <p className="text-lg text-gray-600 mt-0.5  md:text-xl ">{message}</p>
    </div>
  )
}
export default Message

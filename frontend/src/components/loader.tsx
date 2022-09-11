type TLoaderProps = {
  appPage?: boolean
}
const Loader = ({ appPage = false }: TLoaderProps) => (
  <div className="flex justify-center items-center">
    <div
      className={`animate-spin text-3xl ${appPage ? 'ml-10' : 'ml-[120%]'} `}
    >
      ⏳
    </div>
  </div>
)
export default Loader

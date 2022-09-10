type TMainProps = {
  children: React.ReactNode
}
const Main = ({ children }: TMainProps) => (
  <main className="bg-veryLightGray p-2 min-w-[70vw] w-auto">
    <div className="mt-2 grid grid-cols-3  gap-2">{children}</div>
  </main>
)
export default Main

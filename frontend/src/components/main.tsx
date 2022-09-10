type TMainProps = {
  children: React.ReactNode
  appPage?: boolean
}
const Main = ({ children, appPage = false }: TMainProps) => (
  <main className="bg-veryLightGray p-2 min-w-[70vw] w-auto">
    <div className={appPage ? 'mt-2' : 'mt-2 grid grid-cols-3  gap-2'}>
      {children}
    </div>
  </main>
)
export default Main

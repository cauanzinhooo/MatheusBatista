type ProfileProps = {
  children: React.ReactNode
}
const ProfileRoot = ({ children }: ProfileProps) => {
  return (
    <section className="bg-gradient-to-b from-[#280c44] to-[#280c4c] py-20   text-white">
      <div className="mx-3">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[1000px] rounded-[40px] bg-[#1A1A1A] shadow-lg shadow-purple-700">
            <h2 className="bg-gradient-to-r from-[#984FFF] to-[#2C0F55] bg-clip-text pb-10 pt-10 text-center font-sans text-2xl font-extrabold text-transparent sm:text-[36px]">
              Quem será o seu gestor?
            </h2>
            <div className="flex flex-col gap-10 py-10 min-[768px]:flex-row min-[768px]:justify-between lg:justify-around">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProfileRoot

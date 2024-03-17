import React from 'react'

type SocialsProps = {
  children: React.ReactNode
}
const SocialsRoot = ({ children }: SocialsProps) => {
  return (
    <section className=" py-20">
      <div className="container relative mx-auto">
        <div className="mx-3">
          <h2 className="mx-auto max-w-[650px] text-center font-sans text-2xl font-semibold text-white sm:text-[40px]">
            Onde seu anúncio será exibido? <br />
            <span className="font-extralight text-gray-200">
              A sua empresa nas{' '}
              <span className="font-extrabold text-white">MAIORES</span>{' '}
              plataformas
            </span>
          </h2>
        </div>
      </div>
      <div className="relative mx-3 mt-[88px] flex flex-col  justify-center gap-5  text-white md:flex-row">
        {children}
      </div>
    </section>
  )
}
export default SocialsRoot

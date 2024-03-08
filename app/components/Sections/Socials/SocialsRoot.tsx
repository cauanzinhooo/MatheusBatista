import React from 'react'

type SocialsProps = {
  children: React.ReactNode
}
const SocialsRoot = ({ children }: SocialsProps) => {
  return (
    <section className="mt-[225px]">
      <div className="container mx-auto">
        <h2 className="mx-auto max-w-[650px] text-center font-sans text-[40px] font-semibold">
          Onde seu anúncio será exibido? <br />
          <span className="font-extralight text-gray-200">
            A sua empresa nas{' '}
            <span className="font-extrabold text-white">MAIORES</span>{' '}
            plataformas
          </span>
        </h2>
      </div>
      <div className="mt-[88px] flex justify-center gap-5">{children}</div>
    </section>
  )
}
export default SocialsRoot

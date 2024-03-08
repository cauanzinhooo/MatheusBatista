import React from 'react'

type SocialsProps = {
  children: React.ReactNode
}
const SocialsRoot = ({ children }: SocialsProps) => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="mx-auto max-w-[600px] text-center font-sans text-[38px] font-semibold">
          Onde seu anúncio será exibido? A sua empresa nas MAIORES plataformas
        </h2>
      </div>
      <div className="flex justify-center gap-5 bg-red-400">{children}</div>
    </section>
  )
}
export default SocialsRoot

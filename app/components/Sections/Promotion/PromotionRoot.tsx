import React from 'react'

type PromotionProps = {
  children: React.ReactNode
}

const PromotionRoot = ({ children }: PromotionProps) => {
  return (
    <section className="relative mt-[175px]">
      <div className="container mx-auto flex justify-center ">{children}</div>
    </section>
  )
}
export default PromotionRoot

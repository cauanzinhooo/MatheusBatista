import React from 'react'

type PromotionProps = {
  children: React.ReactNode
}

const PromotionRoot = ({ children }: PromotionProps) => {
  return (
    <section className="relative  py-10">
      <div className="container mx-auto flex justify-center ">{children}</div>
    </section>
  )
}
export default PromotionRoot

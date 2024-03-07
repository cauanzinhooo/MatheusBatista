import React from 'react'

type WhyRoot = {
  children: React.ReactNode
}
const WhyRoot = ({ children }: WhyRoot) => {
  return (
    <section className="bg-gradient-to-b from-[#180424]   to-black  to-80% pt-[200px]  ">
      <div className="container mx-auto">{children}</div>
    </section>
  )
}
export default WhyRoot

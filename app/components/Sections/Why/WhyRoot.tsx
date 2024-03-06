import React from 'react'

type WhyRoot = {
  children: React.ReactNode
}
const WhyRoot = ({ children }: WhyRoot) => {
  return (
    <section className="pt-[200px] bg-gradient-to-b from-[#180424]  to-80% to-black  ">
      <div className="mx-auto container">{children}</div>
    </section>
  )
}
export default WhyRoot

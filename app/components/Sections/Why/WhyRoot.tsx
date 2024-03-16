import React from 'react'

type WhyRoot = {
  children: React.ReactNode
}
const WhyRoot = ({ children }: WhyRoot) => {
  return (
    <section className="bg-gradient-to-b from-[#180424] via-black via-70% to-[#3D107B] pt-[100px]    ">
      <div className="container mx-auto">{children}</div>
    </section>
  )
}
export default WhyRoot

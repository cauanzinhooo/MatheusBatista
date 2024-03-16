import React from 'react'

type AboutProps = {
  children: React.ReactNode
}
const AboutRoot = ({ children }: AboutProps) => {
  return (
    <section>
      <div className="bg-gradient-to-b from-[#280c44] via-purple-900 via-80% to-[#180424]">
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          {children}
        </div>
      </div>
    </section>
  )
}
export default AboutRoot

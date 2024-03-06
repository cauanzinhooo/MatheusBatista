import React from 'react'
import LeftHand from '@/public/Mão esquerda.svg'
import RightHand from '@/public/Mão direita.svg'
import Image from 'next/image'

type AboutProps = {
  children: React.ReactNode
}
const AboutRoot = ({ children }: AboutProps) => {
  return (
    <section className="">
      <Image
        className=" hidden xl:absolute  left-[-140px]  "
        alt=""
        src={LeftHand}
      />
      <Image
        className="hidden xl:absolute right-[-120px] "
        alt=""
        src={RightHand}
      />
      <div className="bg-gradient-to-b from-[#280c44] via-purple-900 via-80% to-[#180424]">
        <div className="container justify-center items-center text-center flex flex-col mx-auto">
          {children}
        </div>
      </div>
    </section>
  )
}
export default AboutRoot

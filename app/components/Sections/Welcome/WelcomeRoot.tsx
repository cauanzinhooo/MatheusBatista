import Image from 'next/image'
import React from 'react'
import LeftHand from '@/public/Mão esquerda.svg'
import RightHand from '@/public/Mão direita.svg'
import Safari from '@/public/safari brower.png'

type WelcomeProps = {
  children: React.ReactNode
}
const WelcomeRoot = ({ children }: WelcomeProps) => {
  return (
    <section className=" h-[600px] bg-gradient-to-b from-black to-[#280c44] md:h-[902px]">
      <div className="container mx-auto bg-red-400 md:relative">
        <Image className=" absolute hidden md:block" alt="" src={Safari} />
        <Image
          className="lg:top-1/6 absolute left-0 top-72 w-[350px] sm:top-60 sm:w-[492px] md:left-6  "
          alt=""
          src={LeftHand}
        />
        <Image
          className="lg:top-1/6 absolute right-0 top-72  w-[350px] sm:top-60 sm:w-[492px] md:right-6"
          alt=""
          src={RightHand}
        />
      </div>
      <div className="absolute left-1/2 top-[50px] -translate-x-1/2 transform min-[340px]:top-[64px] lg:top-52">
        {children}
      </div>
    </section>
  )
}
export default WelcomeRoot

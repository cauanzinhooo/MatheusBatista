import Image from 'next/image'
import React from 'react'
import LeftHand from '@/public/Mão esquerda.svg'
import RightHand from '@/public/Mão direita.svg'
import Safari from '@/public/Safari Template (1).svg'

type WelcomeProps = {
  children: React.ReactNode
}
const WelcomeRoot = ({ children }: WelcomeProps) => {
  return (
    <section className=" h-[682px] bg-gradient-to-b from-black to-[#280c44]">
      <div className="container relative mx-auto">
        {}
        <Image className="hidden " alt="" src={Safari} />
        {/* <Image
          className="lg:top-1/6 absolute left-6 top-80 w-[350px] sm:top-60 sm:w-[492px]  "
          alt=""
          src={LeftHand}
        />
        <Image
          className="lg:top-1/6 absolute right-6  top-80 w-[350px] sm:top-60 sm:w-[492px]"
          alt=""
          src={RightHand}
        /> */}
        {/* <Image className="hidden  " alt="" src={Safari} /> */}
      </div>
      {/* <Image
        className="absolute left-0 top-80 w-[350px] sm:top-60 sm:w-[492px] lg:top-1/4  "
        alt=""
        src={LeftHand}
      />
      <Image
        className="absolute right-0 top-80  w-[350px] sm:top-60 sm:w-[492px] lg:top-1/4"
        alt=""
        src={RightHand}
      />

      <div className="container mx-auto ">
        <div className="flex flex-col">{children}</div>
      </div> */}
    </section>
  )
}
export default WelcomeRoot

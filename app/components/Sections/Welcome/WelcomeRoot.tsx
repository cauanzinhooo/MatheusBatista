import Image from 'next/image'
import React from 'react'
import LeftHand from '@/public/Mão esquerda.svg'
import RightHand from '@/public/Mão direita.svg'

type WelcomeProps = {
  children: React.ReactNode
}
const WelcomeRoot = ({ children }: WelcomeProps) => {
  return (
    <section className="mt-6 h-[520px] bg-gradient-to-b from-black to-[#280c44] min-[489px]:mt-28 sm:mt-32">
      <Image
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
      </div>
    </section>
  )
}
export default WelcomeRoot

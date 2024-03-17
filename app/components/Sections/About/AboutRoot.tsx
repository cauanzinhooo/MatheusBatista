import React from 'react'
import LeftHand from '@/public/Mão esquerda.svg'
import RightHand from '@/public/Mão direita.svg'
import Image from 'next/image'
type AboutProps = {
  children: React.ReactNode
}
const AboutRoot = ({ children }: AboutProps) => {
  return (
    <section className="relative">
      <div className="bg-gradient-to-b from-[#280c44] via-purple-900 via-80% to-[#180424] py-20">
        <div className="container mx-auto mt-20 flex flex-col items-center justify-center text-center">
          {children}
        </div>
      </div>
    </section>
  )
}
export default AboutRoot

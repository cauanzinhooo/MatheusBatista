import Image from 'next/image'
import React from 'react'
import LeftHand from '@/public/Mão esquerda.svg'
import RightHand from '@/public/Mão direita.svg'

type WelcomeProps = {
    children: React.ReactNode
}
const WelcomeRoot = ({children}:WelcomeProps) => {
    return (
        <section className=' h-[520px] mt-6 min-[489px]:mt-28 sm:mt-32'>
            <Image className='absolute w-[350px] sm:w-[492px] top-80 sm:top-60 lg:top-1/4 left-0  ' alt='' src={LeftHand}/>
            <Image className='absolute w-[350px] sm:w-[492px]  top-80 sm:top-60 lg:top-1/4 right-0' alt='' src={RightHand}/>
            <div className='container mx-auto '>
                <div className='flex flex-col'>
                    {children}
                </div>
            </div>
        </section>
    )
}
export default WelcomeRoot
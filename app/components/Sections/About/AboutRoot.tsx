import React from 'react'

type AboutProps = {
    children: React.ReactNode
}
const AboutRoot = ({children}:AboutProps) => {
    return (
        <section className='py-12'>
        <div className='bg-gradient-to-b from-black via-purple-900 via-80% to-black'>
          <div className='container justify-center items-center text-center flex flex-col mx-auto'>
            {children}
          </div>
        </div>
      </section>
      
    )
}
export default AboutRoot
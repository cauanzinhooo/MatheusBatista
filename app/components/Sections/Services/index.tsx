'use client'
import Carousel from 'nuka-carousel'
import { Servicesdata } from '@/app/utils/variables'

const Services = () => {
  const renderBottomCenterControls = ({ currentSlide }: any) => (
    <div className="absolute right-0 top-0 flex w-[400px] flex-col justify-around bg-red-400">
      <button style={{ color: currentSlide === 0 ? 'red' : 'black' }}>1</button>
      <button style={{ color: currentSlide === 1 ? 'red' : 'black' }}>2</button>
      <button style={{ color: currentSlide === 2 ? 'red' : 'black' }}>3</button>
    </div>
  )

  return (
    <section className="mt-[86px]">
      <h2 className="ext- bg-gradient-to-r from-[#984FFF] to-[#2C0F55] bg-clip-text text-center font-sans text-[40px] font-extrabold text-transparent">
        Quais serviços você encontrará aqui?
      </h2>
      <div className="mb-100 container mx-auto  py-20">
        <div className="mx-5">
          <Carousel
            renderBottomCenterControls={renderBottomCenterControls}
            className="shadow-[50px 0px 50px 20px] relative rounded-[40px] bg-[#1A1A1A] shadow-purple-700"
          >
            {Servicesdata.map((i) => (
              <div className="mx-5 flex flex-col " key={i.id}>
                <h2 className="max-w-96 font-sans text-4xl font-semibold">
                  {i.title}
                </h2>
                <p>{i.description}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Services

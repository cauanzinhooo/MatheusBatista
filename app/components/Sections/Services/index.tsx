'use client'
import Carousel from 'nuka-carousel'
import { Servicesdata, currentslide } from '@/app/utils/variables'
import Button from '../../Atoms/Button'

type CarouselProps = {
  currentSlide: number
}
const Services = () => {
  const unRenderControls = () => <div></div>

  const renderToggleButton = ({ currentSlide }: CarouselProps) => (
    <div className="absolute bottom-[-10px] flex -translate-x-1/2 -translate-y-1/2 transform gap-3 sm:right-20 sm:top-10  sm:block sm:-translate-x-0 sm:-translate-y-0">
      {currentslide.map((id) => (
        <label key={id.current} className=" cursor-pointer">
          <input
            type="checkbox"
            checked={currentSlide === id.current}
            className="peer hidden"
          />
          <div
            className={
              currentSlide === id.current
                ? " relative my-4 h-5 w-5 rounded-full border-gray-600 after:absolute after:start-[-1000px] after:top-[2px] after:rounded-full after:border  after:border-gray-300 after:transition-all after:content-[''] peer-checked:bg-[#6121BB] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 sm:h-6 sm:w-11 sm:after:start-[2px] sm:after:h-5  sm:after:w-5 sm:after:bg-white rtl:peer-checked:after:-translate-x-full "
                : " relative my-4 h-5 w-5 rounded-full border-gray-400 bg-gray-500 after:absolute after:start-[-1000px] after:top-[2px] after:rounded-full  after:border after:border-gray-300 after:transition-all after:content-[''] peer-checked:bg-[#6121BB] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 sm:h-6 sm:w-11 sm:after:start-[2px] sm:after:h-5 sm:after:w-5 sm:after:bg-white rtl:peer-checked:after:-translate-x-full "
            }
          ></div>
        </label>
      ))}
    </div>
  )

  return (
    <section className="relative mt-[86px] bg-gradient-to-b from-black   to-[#280c44]">
      <h2 className="mx-3 bg-gradient-to-r from-[#984FFF] to-[#2C0F55] bg-clip-text text-center font-sans text-2xl font-extrabold text-transparent sm:text-[40px]">
        Quais serviços você encontrará aqui?
      </h2>
      <div className="container mx-auto mb-[50px]  max-w-[886px]  py-20">
        <div
          className="relative mx-5 rounded-[40px]  before:absolute
          
  before:right-2
  before:top-3
  before:h-[569px]
  
  before:w-full
  before:rounded-[40px]
  before:bg-gradient-to-r
  
  before:from-[#2C0F55]
  before:to-[#6121BB]
  before:blur-[1px]
  min-[338px]:before:h-[520px]

  min-[378px]:before:h-[490px]
  min-[404px]:before:h-[470px]
  "
        >
          <Carousel
            autoplay
            autoplayInterval={10000}
            renderCenterRightControls={unRenderControls}
            renderCenterLeftControls={unRenderControls}
            renderBottomCenterControls={renderToggleButton}
            className={`before:hful before:-w-full relative rounded-[40px] bg-[#1A1A1A] pb-14 pt-24 before:absolute before:bottom-5  before:shadow-3xl  before:content-['']`}
          >
            {Servicesdata.map((i) => (
              <div
                className="mx-auto flex max-w-[387px] flex-col py-5  text-white  sm:ml-[60px]  sm:py-0"
                key={i.id}
              >
                <h2 className="mx-1 w-full  text-center font-sans  text-4xl font-semibold sm:text-left">
                  {i.title}
                </h2>
                <p className=" mx-3 mt-5 max-w-[392px] text-center font-sans text-base font-extralight text-gray-100 sm:text-left">
                  {i.description}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="mx-5 flex justify-center">
        <Button size="xl" color="gradientsecondary">
          <span className="mx-auto items-center text-center ">
            QUERO DIVULGAR MEU NEGÓCIO
          </span>
        </Button>
      </div>
    </section>
  )
}

export default Services

'use client'

import { useState } from 'react'
import { FaArrowCircleRight, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Faqdata } from '@/app/utils/variables'

const FacRoot = () => {
  const [expandedItems, setExpandedItems] = useState(
    Array(Faqdata.length).fill(false),
  )

  const handleShow = (index: number) => {
    const newExpandedItems = [...expandedItems]
    newExpandedItems[index] = !newExpandedItems[index]
    setExpandedItems(newExpandedItems)
  }

  return (
    <section className="bg-gradient-to-b from-[#280c44] via-[#280c3c] to-black to-60% py-20 ">
      <div className="mx-3 text-white ">
        {Faqdata.map((item, index) => (
          <>
            <div className="relative mx-auto  my-3 flex max-w-[1000px] flex-col justify-between rounded-[30px] border-[1px] border-[#646464] bg-black">
              <div
                key={index}
                className="relative my-3 flex items-center  py-1"
              >
                <FaArrowCircleRight className=" ml-5 mr-4  mt-[7px] items-center text-[70px] min-[380px]:text-[40px]" />
                <div className="mt-[11px]  w-[320px] items-center font-sans text-lg md:mt-[6px] md:w-[360px] ">
                  {item.title}
                </div>
                <div className="   mx-10   ml-10  min-[460px]:right-6 min-[500px]:absolute  md:mt-[5px] ">
                  <button onClick={() => handleShow(index)}>
                    {expandedItems[index] ? (
                      <FaChevronUp size={24} />
                    ) : (
                      <FaChevronDown size={24} />
                    )}
                  </button>
                </div>
              </div>
              {expandedItems[index] ? (
                <div className=" mx-3 ml-11 flex max-w-[900px] pb-3  text-base font-extralight   min-[500px]:ml-[72px] md:ml-16 ">
                  {item.desc}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </>
        ))}
      </div>
    </section>
  )
}

export default FacRoot

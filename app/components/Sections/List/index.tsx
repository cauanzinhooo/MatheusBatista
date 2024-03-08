import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import Blur from '@/public/FUNDO LP 3 2.svg'
import Image from 'next/image'
import Button from '../../Atoms/Button'
const ListBeneficts = [
  {
    id: 1,
    item: 'Alcance ilimitado',
    Announcement: <FaCheckCircle size={30} color="#50ac4c" />,
    Organic: <FaTimesCircle size={30} color="#e81c1c" />,
  },
  {
    id: 2,
    item: 'Garantia de entrega',
    Announcement: <FaCheckCircle size={30} color="#50ac4c" />,
    Organic: <FaTimesCircle size={30} color="#e81c1c" />,
  },
  {
    id: 3,
    item: 'Custo',
    Announcement: 'A Partir de R$6/Dia',
    Organic: 'A Partir de R$600',
  },
  {
    id: 4,
    item: 'Resultados',
    Announcement: 'Relatório Mensal',
    Organic: 'Difícil de medir',
  },
  {
    id: 5,
    item: 'Segmentação ilimitada',
    Announcement: <FaCheckCircle className="" size={30} color="#50ac4c" />,
    Organic: <FaTimesCircle size={30} color="#e81c1c" />,
  },
]

const List = () => {
  return (
    <>
      <Image className="absolute right-0 " src={Blur} alt="png" />
      <section className="container relative mx-auto">
        <div className="relative mx-3">
          <h2 className="mx-auto mb-[70px] mt-[120px]   max-w-[900px] text-center font-sans text-[38px] font-semibold">
            O tráfego pago permite que você alcance uma audiência muito maior do
            que a publicidade tradicional
          </h2>
        </div>
        <table className="relative mx-auto table-fixed ">
          <thead>
            <tr className="bg-gradient-to-r from-[#4F3FA1] to-[#1D173B] font-sans text-lg font-medium">
              <th className="rounded-bl-[16px] rounded-tl-[16px] py-3 pl-3 text-center sm:px-20 sm:text-left ">
                Tipo de anúncio
              </th>
              <th className="px-3 py-2  min-[440px]:pl-10">Anúncio Pago</th>
              <th className="rounded-br-[16px]  rounded-tr-[16px] py-3 pr-3 sm:pr-10">
                Orgânico
              </th>
            </tr>
          </thead>
          <tbody>
            {ListBeneficts.map((item) => (
              <tr
                className="border-b-[1px] border-white font-light "
                key={item.id}
              >
                <td className="rounded-bl-[16px] rounded-tl-[16px] py-3  pl-3 text-center sm:px-20 sm:text-left  ">
                  {item.item}
                </td>
                <td className="px-3 py-2  min-[440px]:pl-10">
                  <div className="mx-auto flex max-w-[160px] items-center justify-center text-center">
                    {item.Announcement}
                  </div>
                </td>
                <td className="max-w-[190px] py-2 pl-2 pr-10 text-center">
                  <div className="mx-auto flex max-w-[150px] items-center justify-center">
                    {item.Organic}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <div className="relative mx-5 mt-[54px] flex justify-center">
        <Button size="xl" color="gradientsecondary">
          <span className="mx-auto items-center text-center ">
            QUERO DIVULGAR MEU NEGÓCIO
          </span>
        </Button>
      </div>
    </>
  )
}
export default List

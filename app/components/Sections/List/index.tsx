import { FaCheck, FaTimes } from 'react-icons/fa'

const ListBeneficts = [
  {
    id: 1,
    item: 'Alcance ilimitado',
    Announcement: <FaCheck className="items-end" />,
    Organic: <FaTimes />,
  },
  {
    id: 2,
    item: 'Alcance ilimitado',
    Announcement: <FaCheck />,
    Organic: <FaTimes />,
  },
  {
    id: 3,
    item: 'Alcance ilimitado',
    Announcement: <FaCheck size={20} />,
    Organic: <FaTimes />,
  },
  {
    id: 4,
    item: 'Alcance ilimitado',
    Announcement: <FaCheck />,
    Organic: <FaTimes />,
  },
  {
    id: 5,
    item: 'Alcance ilimitado',
    Announcement: <FaCheck />,
    Organic: <FaTimes />,
  },
]

const List = () => {
  return (
    <section className="container mx-auto">
      <div className="mx-3">
        <h2 className="mx-auto mb-[70px] mt-[120px]   max-w-[900px] text-center font-sans text-[38px] font-semibold">
          O tráfego pago permite que você alcance uma audiência muito maior do
          que a publicidade tradicional
        </h2>
      </div>
      <div className=" mx-auto flex w-full max-w-[400px] flex-col rounded-[16px] bg-red-400 bg-gradient-to-r from-[#4F3FA1] to-[#1D173B] py-2 sm:max-w-[600px] sm:py-3 ">
        <ul className="mx-1 flex w-full list-none justify-between sm:px-5">
          <li className="text-center">Tipo de anúncio</li>
          <li className=" text-center sm:flex-1 sm:text-right">Anúncio Pago</li>
          <li className=" text-center sm:flex-1 sm:text-right">Orgânico</li>
        </ul>
      </div>

      {ListBeneficts.map((item) => (
        <div
          key={item.id}
          className="mx-auto flex max-w-[400px] flex-col border-b-[1px] border-white py-2 sm:max-w-[600px] sm:py-3"
        >
          <ul className="mx-1 flex w-full list-none  justify-end sm:px-5">
            <li className="text-center">{item.item}</li>
            <li className="items-end text-center sm:flex-1 sm:text-right">
              <span className="bg-red-400">{item.Announcement}</span>
            </li>
            <li className="text-center sm:flex-1 sm:text-right">
              {item.Organic}
            </li>
          </ul>
        </div>
      ))}
    </section>
  )
}
export default List

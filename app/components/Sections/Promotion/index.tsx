import Button from '../../Atoms/Button'

const Promotion = () => {
  return (
    <section className="relative mt-[200px]">
      <div className="container mx-auto flex justify-center">
        <div className="mx-3 max-w-[900px] rounded-2xl bg-gradient-to-b from-[#4F3FA1]  to-[#1D173B] py-7">
          <h2 className="mx-5 text-center font-sans text-3xl font-semibold text-white">
            Invista a partir de R$6 por dia e divulgue o seu negócio para
            milhares de pessoas da sua cidade
          </h2>
          <div className="mt-8 flex justify-center">
            <Button size="xl">APROVEITE A PROMOÇÃO!</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Promotion

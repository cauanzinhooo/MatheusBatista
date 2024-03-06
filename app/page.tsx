import Image from 'next/image'
import Button from './components/Atoms/Button'
import { About } from './components/Sections/About'
import { Welcome } from './components/Sections/Welcome'
import { Why } from './components/Sections/Why'
import Computer from '@/public/Computer.svg'
export default function Home() {
  return (
    <>
      <main>
        <Welcome.Root>
          <div className="text-center">
            <h1 className="text-white font-semibold font-sans text-[70px]">
              Matheus <span className="text-purple-700">Batista</span>
            </h1>
            <span className="text-gray-200 font-sans font-extralight text-[40px]">
              Gestor de Tráfego
            </span>
          </div>
        </Welcome.Root>
        <About.Root>
          <h2 className=" font-sans mx-3 font-bold text-[40px]">
            Matheus Batista l{' '}
            <span className="font-extralight font-sans text-gray-200">
              Gestor de Tráfego
            </span>
          </h2>
          <h3
            className="text-5xl mx-3 mt-16 f
        
        ont-sans font-extrabold"
          >
            Transforme seus cliques em{' '}
            <span className="text-purple-700">lucro</span>
          </h3>
          <p className="max-w-[600px] mb-14 mx-3 mt-5 font-extralight text-lg text-gray-200">
            Os anúncios da sua empresa no lugar certo, no momento certo e para
            as pessoas certas, no Instagram, Facebook ou Google. Nós criamos
            estratégias para alavancar o seu negócio e atingir o seu público
            ideial.
          </p>
          <Button size="xl" color="gradient">
            <span className="mx-20">QUERO DIVULGAR MEU NEGÓCIO</span>
          </Button>
        </About.Root>
      </main>
      <Why.Root>
        <h2 className="text-center text-transparent font-sans bg-clip-text font-extrabold text-[40px] text- bg-gradient-to-r from-[#984FFF] to-[#2C0F55]">
          Por que você deve investir em anúncio online?
        </h2>
        <div className="flex lg:flex-row flex-col justify-center lg:justify-around">
          <div>
            <Image
              className="lg:mx-0 mx-auto"
              width={584}
              src={Computer}
              alt="Computer"
            />
          </div>
          <div className="max-w-[550px] lg:mx-0 mx-auto h-[376px] mt-14  font-sans font-extralight text-gray-200 text-2xl">
            <h2 className="text-center">
              Enquanto você lê estas palavras, clientes em potencial estão
              buscando pelos produtos e serviços que a sua empresa oferece.
              <br />
              <br />
              Minha missão é assegurar que a sua empresa esteja conectada com
              esses clientes no momento oportuno, com anúncios online
              direcionados,{' '}
              <span className="text-white font-bold">
                atingindo a pessoa certa no momento exato.
              </span>
            </h2>
          </div>
        </div>
      </Why.Root>
    </>
  )
}

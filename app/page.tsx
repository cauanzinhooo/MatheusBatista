import Image from 'next/image'
import Button from './components/Atoms/Button'
import { About } from './components/Sections/About'
import { Welcome } from './components/Sections/Welcome'
import { Why } from './components/Sections/Why'
import Computer from '@/public/Computer.svg'
import List from './components/Sections/List'
export default function Home() {
  return (
    <>
      <main>
        <Welcome.Root>
          <div className="text-center">
            <h1 className="font-sans text-[70px] font-semibold text-white">
              Matheus <span className="text-purple-700">Batista</span>
            </h1>
            <span className="font-sans text-[40px] font-extralight text-gray-200">
              Gestor de Tráfego
            </span>
          </div>
        </Welcome.Root>
        <About.Root>
          <h2 className=" mx-3 font-sans text-[40px] font-bold">
            Matheus Batista l{' '}
            <span className="font-sans font-extralight text-gray-200">
              Gestor de Tráfego
            </span>
          </h2>
          <h3
            className="f ont-sans mx-3 mt-16
        
        text-5xl font-extrabold"
          >
            Transforme seus cliques em{' '}
            <span className="text-purple-700">lucro</span>
          </h3>
          <p className="mx-3 mb-14 mt-5 max-w-[600px] text-lg font-extralight text-gray-200">
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
        <h2 className="text- bg-gradient-to-r from-[#984FFF] to-[#2C0F55] bg-clip-text text-center font-sans text-[40px] font-extrabold text-transparent">
          Por que você deve investir em anúncio online?
        </h2>
        <div className="flex flex-col justify-center lg:flex-row lg:justify-around">
          <div>
            <Image
              className="mx-auto lg:mx-0"
              height={422}
              width={584}
              src={Computer}
              alt="Computer"
            />
          </div>
          <div className="mx-auto mt-20 h-[422px] max-w-[550px] font-sans  text-2xl font-extralight text-gray-200 lg:mx-0">
            <h2 className="text-center">
              Enquanto você lê estas palavras, clientes em potencial estão
              buscando pelos produtos e serviços que a sua empresa oferece.
              <br />
              <br />
              Minha missão é assegurar que a sua empresa esteja conectada com
              esses clientes no momento oportuno, com anúncios online
              direcionados,{' '}
              <span className="font-bold text-white">
                atingindo a pessoa certa no momento exato.
              </span>
            </h2>
          </div>
        </div>
      </Why.Root>
      <List />
    </>
  )
}

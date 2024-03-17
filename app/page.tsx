import Image from 'next/image'
import Button from './components/Atoms/Button'
import { About } from './components/Sections/About'
import { Welcome } from './components/Sections/Welcome'
import { Why } from './components/Sections/Why'
import Computer from '@/public/Computer.svg'
import List from './components/Sections/List'
import { Promotion } from './components/Sections/Promotion'
import { Socials } from './components/Sections/Socials'
import { Socialsdata } from './utils/variables'
import Services from './components/Sections/Services'
import { Profile } from './components/Sections/Profile'
import ProfileImage from '@/public/MatheusBatista.png'
import { Fac } from './components/Sections/Fac'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <main>
        <Welcome.Root>
          <div className="relative text-center">
            <h1 className=" font-sans text-5xl font-semibold text-white md:text-7xl ">
              Matheus <span className="text-purple-700">Batista</span>
            </h1>
            <p className="font-sans text-3xl font-extralight text-white">
              <span className="font-semibold text-purple-700">Gestor</span> de
              Tráfego
            </p>
          </div>
        </Welcome.Root>
        <About.Root>
          <h2 className=" mx-3 font-sans text-[40px] font-bold text-white">
            Matheus Batista{' '}
            <span className="font-sans font-extralight text-white">
              Gestor de Tráfego
            </span>
          </h2>
          <span
            className="f ont-sans mx-3 mt-16 text-3xl font-extrabold
        
        text-white sm:text-5xl"
          >
            Transforme seus cliques em{' '}
            <span className="text-purple-700">lucro</span>
          </span>
          <p className="mx-3 mb-14 mt-5 max-w-[600px] font-sans text-base font-extralight text-white sm:text-lg">
            Os anúncios da sua empresa no lugar certo, no momento certo e para
            as pessoas certas, no Instagram, Facebook ou Google. Nós criamos
            estratégias para alavancar o seu negócio e atingir o seu público
            ideial.
          </p>
          <div className="mx-5 flex justify-center">
            <Button size="xl" color="gradient">
              <Link
                href="https://api.whatsapp.com/send?phone=5521964698829&text=Fiquei%20com%20d%C3%BAvidas"
                className="mx-auto items-center text-center "
              >
                QUERO DIVULGAR MEU NEGÓCIO
              </Link>
            </Button>
          </div>
        </About.Root>
      </main>
      <Why.Root>
        <h2 className="mx-3 bg-gradient-to-r from-[#984FFF] to-[#2C0F55] bg-clip-text pb-14 text-center font-sans text-2xl font-extrabold text-transparent sm:text-[40px]">
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
          <div className="mx-3 md:mx-0">
            <div className="mx-auto mt-16 max-w-[550px] font-sans text-base  font-extralight text-gray-100 sm:h-[422px] sm:text-2xl lg:mx-0">
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
        </div>
      </Why.Root>
      <List />
      <Promotion.Root>
        <div className="mx-3 max-w-[900px] rounded-2xl bg-gradient-to-b from-[#4F3FA1]  to-[#1D173B] py-7">
          <h2 className="mx-5 text-center font-sans text-xl font-semibold text-white sm:text-3xl">
            Invista a partir de R$6 por dia e divulgue o seu negócio para
            milhares de pessoas da sua cidade
          </h2>
          <div className="mt-8 flex justify-center">
            <Button size="xl">APROVEITE A PROMOÇÃO!</Button>
          </div>
        </div>
      </Promotion.Root>
      <Socials.Root>
        {Socialsdata.map((i) => (
          <div
            className="mx-auto flex max-w-[240px] flex-row justify-center rounded-[38px] bg-[#1A1A1A] font-sans   lg:mx-0"
            key={i.id}
          >
            <div className="flex flex-col">
              <span className="mx-auto pt-5">{i.icon}</span>
              <h2 className="mx-2 py-2 text-center font-sans text-lg font-semibold md:py-3">
                {i.iconName}
              </h2>
              <p className="mx-4 max-w-52 pb-5  text-center font-sans font-extralight text-gray-100">
                {i.description}
              </p>
            </div>
          </div>
        ))}
      </Socials.Root>
      <Services />
      <Profile.Root>
        <div className="mx-3 ">
          <div className="mx-auto max-w-[360px] sm:w-[360px] min-[768px]:ml-3">
            <Image
              className="mx-auto min-[768px]:mx-0"
              src={ProfileImage}
              alt="MatheusBatista"
            />
          </div>
        </div>
        <div className="mx-auto max-w-[600px] min-[768px]:mx-0">
          <h2 className="mx-3 text-center font-sans text-2xl font-semibold sm:text-4xl min-[768px]:text-left">
            Matheus Batista
          </h2>
          <p className="mx-3 mt-1 max-w-[500px] pb-4 text-center font-sans  text-base font-extralight text-gray-100 sm:text-lg min-[768px]:text-left">
            Olá, é um prazer me apresentar a você!
            <br />
            <br /> Meu nome é Matheus, tenho 21 anos e um sonho: ser
            empreendedor, cuja paixão pelo mundo digital me levou a mergulhar de
            cabeça no mundo do marketing, me guiando para a minha especialização
            em gerenciamento de anúncios.
            <br />
            <br /> Minha abordagem é profundamente focada em entender as
            necessidades exclusivas de cada cliente.
            <br /> Estou ansioso para explorar como posso contribuir para o seu
            sucesso.
          </p>
        </div>
      </Profile.Root>
      <section className=" w-full  py-8 text-center text-2xl font-bold text-white  sm:text-3xl">
        F A Q
      </section>
      <Fac.Root />
      <Promotion.Root>
        <div className="mx-3 w-[900px] rounded-2xl bg-gradient-to-t from-[#6121BB]   to-[#120328]  py-7">
          <h2 className="mx-5 text-center font-sans text-2xl font-semibold text-white sm:text-3xl">
            Precisa de ajuda ou ficou com alguma dúvida?
          </h2>
          <p className="mx-5 text-center font-sans text-2xl font-medium text-white">
            {' '}
            Gostaria de um atendimento especial e exclusivo?
          </p>
          <p className="sm:text-md mx-5 text-center  text-base font-extralight text-white">
            Me chama no WhatsApp, caso queira tirar alguma dúvida ou adiantar
            nosso contato
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              icon={<FaWhatsapp className="mr-3" size={32} />}
              color="green"
              size="xl"
            >
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </Promotion.Root>
      <footer className="mt-20 bg-black text-white">
        <div className="py-20 text-center">
          © Copyright 2024, Todos os direitos Reservados.
        </div>
      </footer>
    </>
  )
}

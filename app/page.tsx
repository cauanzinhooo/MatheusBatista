// import Imagee from "@/public/1037eed8-c58e-45cd-8831-c003f929b494.png";
// import Image from 'next/image'
import Button from './components/Atoms/Button';
import { About } from './components/Sections/About';
import { Welcome } from './components/Sections/Welcome';
export default function Home() {
  return (
    <>
    <main>
      <Welcome.Root>
        <div className='text-center'>
          <h1 className='text-white font-semibold font-sans text-[70px]'>Matheus <span className='text-purple-700'>Batista</span></h1>
          <span className='text-gray-200 font-sans font-extralight text-[40px]'>Gestor de Tráfego</span>
        </div>
      </Welcome.Root>
      <About.Root>
        <h2 className=' font-sans mx-3 font-bold text-[40px]'>Matheus Batista l <span className='font-extralight font-sans text-gray-200'>Gestor de Tráfego</span></h2>
        <h3 className='text-6xl mx-3 mt-16 font-sans font-extrabold'>Transforme seus cliques em <span className='text-purple-700'>lucro</span></h3>
        <p className='max-w-[600px] mb-14 mx-3 mt-5 font-extralight text-lg text-gray-200'>Os anúncios da sua empresa no lugar certo, no momento certo e para as pessoas certas, no Instagram, Facebook ou Google. Nós criamos estratégias para alavancar o seu negócio e atingir o seu público ideial.</p>
        <Button size='xl' color='gradient'>
          <span className='mx-20'>
          QUERO DIVULGAR MEU NEGÓCIO

          </span>
         </Button>
      </About.Root>
    </main>
    </>
    
  );
}

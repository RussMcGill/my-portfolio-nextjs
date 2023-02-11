import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Navbar from '@/components/Navbar';
import MainInfo from '@/components/MainInfo';
import Skills from '@/components/Skills';
import About from '@/components/About';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Russ McGill | Software Engineer</title>
        <meta name='description' content='Software Engineer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='md:snap-y snap-mandatory h-screen w-screen overflow-auto'>
        <Navbar />
        <div className='snap-center md:h-screen w-screen'>
          <MainInfo />
        </div>
        <div className='snap-center md:h-screen w-screen'>
          <About />
        </div>
        <div className='snap-center md:h-screen w-screen'>
          <Skills />
        </div>
      </div>
    </>
  );
}

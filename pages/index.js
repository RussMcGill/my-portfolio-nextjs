import Head from 'next/head';
import { Inter } from '@next/font/google';
import Navbar from '@/components/Navbar';
import MainInfo from '@/components/MainInfo';
import Skills from '@/components/Skills';
import About from '@/components/About';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <Head>
        <title>Russ McGill | Software Engineer</title>
        <meta name='description' content='Software Engineer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className='md:snap-y snap-mandatory h-screen w-screen overflow-auto'>
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

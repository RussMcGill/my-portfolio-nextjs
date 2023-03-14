import Head from 'next/head';
import { useEffect, Children } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '@/components/Navbar';

export default function Container({ children }) {
  const { theme, setTheme } = useTheme('dark');

  // TODO: Put this back in when the mobile animation bug is fixed
  // TODO: We want the user to see proper animations on initial page load
  // useEffect(() => {
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // }, []);

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
        <meta name="description" content="Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar theme={'dark'} setTheme={setTheme} />
      {...Children.toArray(children)}
    </>
  );
}

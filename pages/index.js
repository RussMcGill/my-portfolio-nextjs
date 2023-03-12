import { Inter } from '@next/font/google';
import MainInfo from '@/components/MainInfo';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="2k:snap-y snap-mandatory h-screen w-screen overflow-auto">
        <div className="snap-start md:h-screen w-screen">
          <MainInfo />
        </div>
        <div className="snap-start md:h-screen w-screen">
          <Skills />
        </div>
        <div className="snap-start 4k:h-screen w-screen">
          <Projects />
        </div>
        <div className="snap-start md:h-screen w-screen">
          <About />
        </div>
        <div className="snap-start 2k:h-screen w-screen">
          <Contact />
        </div>
      </div>
    </>
  );
}

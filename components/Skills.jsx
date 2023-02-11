import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import NextJS from '../public/assets/skills/nextjs.png';
import NodeJS from '../public/assets/skills/nodejs.png';
import MUI from '../public/assets/skills/mui.png';

import { motion } from 'framer-motion';

const Skills = () => {
  const cardContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cards = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  const skillsArray = [
    { name: 'Html', image: Html },
    { name: 'Css', image: Css },
    { name: 'Javascript', image: Javascript },
    { name: 'React.JS', image: ReactImg },
    { name: 'Tailwind', image: Tailwind },
    { name: 'Github', image: Github },
    { name: 'Next.JS', image: NextJS },
    { name: 'Node.JS', image: NodeJS },
    { name: 'MUI', image: MUI },
  ];

  return (
    <div id='skills' className='w-full md:h-screen md:p-2 pt-28 px-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <motion.div variants={cardContainer} initial='hidden' whileInView='show' className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {skillsArray.map((skill) => {
            return (
              <motion.div variants={cards} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={skill.image} width='64px' height='64px' alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>{`${skill.name}`}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

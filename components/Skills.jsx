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
import Docker from '../public/assets/skills/docker.png';
import PostgreSQL from '../public/assets/skills/postgresql.png';
import AWS from '../public/assets/skills/aws.png';
import { GITHUB } from '@/lib/constants';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
    { name: 'Html', image: Html, url: 'https://html.com/html5/' },
    { name: 'Css', image: Css, url: '' },
    { name: 'Javascript', image: Javascript, url: 'https://www.javascript.com/' },
    { name: 'React.JS', image: ReactImg, url: 'https://reactjs.org/' },
    { name: 'Next.JS', image: NextJS, url: 'https://nextjs.org/' },
    { name: 'Node.JS', image: NodeJS, url: 'https://nodejs.org/en/' },
    { name: 'Github', image: Github, url: 'https://github.com' },
    { name: 'MUI', image: MUI, url: 'https://mui.com/' },
    { name: 'Tailwind', image: Tailwind, url: 'https://tailwindcss.com/' },
    { name: 'Docker', image: Docker, url: 'https://www.docker.com/' },
    { name: 'PostgreSQL', image: PostgreSQL, url: 'https://www.postgresql.org/' },
    { name: 'Amazon Web Services', image: AWS, url: 'https://aws.amazon.com/' },
  ];

  return (
    <div id='skills' className='w-full md:h-screen md:p-2 pt-28 px-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <motion.div
          variants={cardContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
        >
          {skillsArray.map((skill) => {
            return (
              <Link href={skill.url} target='_blank'>
                <motion.button
                  key={skill.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={cards}
                  className='p-6 shadow-xl rounded-xl dark:bg-slate-500'
                >
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={skill.image} width='64px' height='64px' alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>{`${skill.name}`}</h3>
                    </div>
                  </div>
                </motion.button>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

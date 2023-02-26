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

import Link from 'next/link';
import Skill from './Skill';

const Skills = () => {
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
    <div id="skills" className="w-full md:h-screen md:p-2 pt-28 px-2 ">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-primary">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsArray.map((skill, index) => {
            return (
              <Link href={skill.url} target="_blank" key={index}>
                <button className="p-6 shadow-xl rounded-xl dark:bg-grey800 hover:scale-110 transition duration-150">
                  <Skill skill={skill} />
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

import { PROJECTS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Project({ title, backgroundImg, tech, projectUrl, techStack }) {
  return (
    <div className='relative flex flex-col items-center justify-between h-auto w-full bg-grey300 dark:bg-grey800 px-5 light:shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <div className='py-5'>
        <h2 className='text-primary'>{title}</h2>
      </div>
      <div>
        <img className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
      </div>
      <div className='hidden group-hover:block absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <div className='flex justify-center'>
          <Link href={projectUrl}>
            <button className=' flex-1 w-full text-center m-auto py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer px-5'>
              More Info
            </button>
          </Link>
        </div>
      </div>
      <div className='flex flex-wrap gap-2 justify-evenly m-2 group-hover:opacity-10'>
        {techStack.map((tech) => {
          return <div className='bg-grey500 dark:bg-grey600 rounded p-1 text-white text-xs md:text-sm'>{tech}</div>;
        })}
      </div>
    </div>
  );
}

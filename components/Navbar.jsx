import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { GITHUB, LINKEDIN } from '@/lib/constants';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className='fixed w-full h-20 shadow-xl z-50'>
      <div className='flex justify-between items-center w-full h-full px-5 md:px-10 3xl:p-16'>
        <Link href='#'>
          <Image src='/RM.png' alt='' width='125' height='50' />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover: border-b'>Home</li>
            </Link>
            <Link href='#about'>
              <li className='ml-10 text-sm uppercase hover: border-b'>About</li>
            </Link>
            <Link href='#skills'>
              <li className='ml-10 text-sm uppercase hover: border-b'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover: border-b'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover: border-b'>Contact</li>
            </Link>
          </ul>
          <div className='md:hidden'>
            <AiOutlineMenu onClick={() => setNav(!nav)} size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500' : null}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
          }
        >
          <div className='flex flex-col justify-between'>
            <div className='flex w-full items-center justify-between'>
              <Image src='/RM.png' alt='' width='125' height='50' />
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose onClick={() => setNav(!nav)} />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let's build something lengendary together</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='#about'>
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href='#skills'>
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Project</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-16'>
              <p className='uppercase tracking-widest text-primary'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Link href={LINKEDIN.url}>
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Link href={GITHUB.url}>
                    <FaGithub />
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Link href='/resume'>
                    <BsFillPersonLinesFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

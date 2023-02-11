import Link from 'next/link';

import { motion } from 'framer-motion';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const pVariant = {
    hidden: { x: -2000 },
    show: { x: 0, transition: { duration: 0.5 } },
  };

  const dVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { delay: 1.5, duration: 0.5 } },
  };

  return (
    <div className='w-full md:h-screen p-2 flex items-center md:pt-24 pt-28'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <motion.div variants={container} initial='hidden' whileInView='show' className='col-span-2'>
          <motion.p variants={pVariant} className='uppercase text-xl tracking-widest text-primary'>
            About
          </motion.p>
          <motion.h2 variants={pVariant} className='md:py-4 py-2'>
            Who I Am
          </motion.h2>
          <motion.p variants={pVariant} className='py-2 text-gray-600'>
            Short about title
          </motion.p>
          <motion.p variants={pVariant} className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsum, dicta esse corrupti, itaque dolores, odio nemo id sunt
            voluptates consequatur eligendi nisi nihil accusantium aliquam minima. Beatae, eos esse. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Eveniet a odio, assumenda ipsam quis cum dolor ab facilis reiciendis voluptatum soluta deleniti mollitia iure maxime.
            Corporis dolor alias explicabo vitae.
          </motion.p>
          <motion.p variants={pVariant} className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsum, dicta esse corrupti, itaque dolores, odio nemo id sunt
            voluptates consequatur eligendi nisi nihil accusantium aliquam minima. Beatae, eos esse. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Eveniet a odio, assumenda ipsam quis cum dolor ab facilis reiciendis voluptatum soluta deleniti mollitia iure maxime.
            Corporis dolor alias explicabo vitae.
          </motion.p>
          <motion.div variants={pVariant}>
            <Link href='/projects'> Check out some of my latest projects!</Link>
          </motion.div>
        </motion.div>
        <motion.div
          variants={dVariant}
          initial='hidden'
          whileInView='show'
          className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 z-0'
        >
          <img className='rounded-xl' src={'/assets/projects/navy.jpg'} alt='' />
        </motion.div>
      </div>
    </div>
  );
}

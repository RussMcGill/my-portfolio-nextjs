import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function MainInfo() {
  const iconContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const mainInfoContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const mainInfoChildren = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 2, duration: 1 } },
  };

  const iconChildren = {
    hidden: { opacity: 0, y: -200 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <motion.div variants={mainInfoContainer} initial='hidden' whileInView='show' viewport={{ once: true }}>
            <motion.p variants={mainInfoChildren} className='uppercase text-sm tracking-widest text-gray-600'>
              let's build something awesome together
            </motion.p>
            <motion.h1 variants={mainInfoChildren} className='p-4 text-gray-700'>
              Hi, I'm <span className='text-primary'>Russ</span>{' '}
            </motion.h1>
            <motion.h1 variants={mainInfoChildren} className='py-2 text-gray-700'>
              A Web Developer
            </motion.h1>
            <motion.p variants={mainInfoChildren} className='py-4 text-gray-600 max-w-[70%] m-auto'>
              I'm a full-stack developer specializing in building exceptional digital experiances.{' '}
            </motion.p>
          </motion.div>
          <motion.div
            variants={iconContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex items-center justify-between max-w-[330px] m-auto py-4'
          >
            <motion.div
              variants={iconChildren}
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300'
            >
              <FaLinkedinIn />
            </motion.div>
            <motion.div
              variants={iconChildren}
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300'
            >
              <FaGithub />
            </motion.div>
            <motion.div
              variants={iconChildren}
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300'
            >
              <AiOutlineMail />
            </motion.div>
            <motion.div
              variants={iconChildren}
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300'
            >
              <BsFillPersonLinesFill />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

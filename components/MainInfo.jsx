import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { GITHUB, LINKEDIN } from '@/lib/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MainInfo() {
  const router = useRouter();
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
    show: { opacity: 1, transition: { delay: 1.5, duration: 1 } },
  };

  const iconChildren = {
    hidden: { opacity: 0, y: -200 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const iconButtons = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  };

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <motion.div
            variants={mainInfoContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p
              variants={mainInfoChildren}
              className="uppercase text-sm tracking-widest text-gray-600 dark:text-white"
            >
              let's build something awesome together
            </motion.p>
            <motion.h1 variants={mainInfoChildren} className="p-4 text-gray-700 dark:text-white">
              Hi, I'm <span className="text-primary">Russ</span>{' '}
            </motion.h1>
            <motion.h1 variants={mainInfoChildren} className="py-2 text-gray-700 dark:text-white">
              A Web Developer
            </motion.h1>
            <motion.p
              variants={mainInfoChildren}
              className="py-4 text-gray-600 dark:text-white max-w-[70%] m-auto"
            >
              I'm a full-stack developer specializing in building exceptional digital experiances.{' '}
            </motion.p>
          </motion.div>
          <motion.div
            variants={iconContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            // TODO: Change back to justify-between when I get resume button setup
            className="flex items-center justify-around max-w-[330px] m-auto py-4"
          >
            <Link href={LINKEDIN.url} target="_blank">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={iconChildren}
                className="p-6 rounded-full flex justify-center items-center bg-[#ecf0f3] shadow-lg light:shadow-gray-400 dark:bg-grey800"
              >
                <FaLinkedinIn />
              </motion.button>
            </Link>
            <Link href={GITHUB.url} target="_blank">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={iconChildren}
                className="p-6 rounded-full flex justify-center items-center bg-[#ecf0f3] shadow-lg light:shadow-gray-400 dark:bg-grey800"
              >
                <FaGithub />
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={iconChildren}
              className="p-6 rounded-full flex justify-center items-center bg-[#ecf0f3] shadow-lg light:shadow-gray-400 dark:bg-grey800"
              onClick={() => router.push('mailto:russ@russmcgill.com')}
            >
              <AiOutlineMail />
            </motion.button>
            {/* <Link href={'/'} target="_blank">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={iconChildren}
                className="p-6 rounded-full flex justify-center items-center bg-[#ecf0f3] shadow-lg light:shadow-gray-400 dark:bg-grey800"
              >
                <BsFillPersonLinesFill />
              </motion.button>
            </Link> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

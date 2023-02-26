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
    <div id="about" className="w-full md:h-screen p-2 flex items-center md:pt-24 pt-28">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="col-span-2"
        >
          <p variants={pVariant} className="uppercase text-xl tracking-widest text-primary">
            About
          </p>
          <h2 variants={pVariant} className="md:py-4 py-2">
            Who I Am
          </h2>
          <p variants={pVariant} className="py-2 text-gray-600 dark:text-white">
            Short about title
          </p>
          <p variants={pVariant} className="py-2 text-gray-600 dark:text-white">
            I am Russ McGill, a highly motivated and dedicated professional with extensive
            experience in various industries. Throughout my career, I have established myself as a
            leader in my field with a proven track record of success. My exceptional skills in
            problem-solving, strategic planning, and relationship building have helped me make a
            significant impact in the organizations I have worked with.
          </p>
          <p variants={pVariant} className="py-2 text-gray-600 dark:text-white">
            In addition to my technical expertise, I am a gifted communicator and have built a
            reputation as a trusted advisor and reliable partner. My interpersonal skills have
            helped me form strong relationships with clients, colleagues, and partners, and I bring
            a positive and energetic approach to every project. I am always eager to take on new
            challenges and continue to develop my skills. With my combination of technical
            knowledge, business acumen, and interpersonal skills, I am confident in my ability to
            make a valuable contribution to any organization.
          </p>
          <div variants={pVariant}>
            <Link href="#projects"> Check out some of my latest projects!</Link>
          </div>
        </div>
        <div
          // variants={dVariant}
          // initial='hidden'
          // whileInView='show'
          // viewport={{ once: true }}
          className="w-full h-auto m-auto shadow-xl light:shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 z-0"
        >
          <img className="rounded-xl" src={'/assets/home/navy.jpg'} alt="" />
        </div>
      </div>
    </div>
  );
}

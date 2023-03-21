import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { GITHUB, LINKEDIN } from '@/lib/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

export default function MainInfo() {
  const router = useRouter();

  return (
    <>
      <div id="home" className="w-full h-screen text-center  flex justify-center">
        <div className="max-w-[1240px] w-full h-full p-2 flex flex-col justify-center items-center">
          <h2 className="uppercase tracking-widest text-gray-600 dark:text-white">
            let's build something awesome together
          </h2>
          <h1 className="p-4 text-gray-700 dark:text-white">Hi, I'm Russ</h1>
          <div className="flex flex-col justify-center">
            <h1 className="py-2 text-gray-700 dark:text-white">{'A '} </h1>
            <h1 className="py-2 text-green">
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Full Stack Developer', 'Leader', 'Military Veteran'],
                  skipAddStyles: true,
                  autoStart: true,
                  loop: true,
                  cursorClassName: 'dark:text-white text-gray-700 animate-cursorPulse',
                }}
              />
            </h1>
          </div>
          <div className="w-full">
            <h3 className="py-4 text-gray-600 dark:text-white max-w-[70%] w-full m-auto">
              specializing in building
              <p className="text-green font-bold">
                exceptional digital experiences
                <span className="text-gray-600 dark:text-white">.</span>
              </p>
            </h3>
          </div>
          <div
            // TODO: Change back to justify-between when I get resume button setup
            className="flex items-center justify-between gap-5 py-4"
          >
            <div className="animate-dropIn1">
              <div className="active:scale-75">
                <Link href={LINKEDIN.url} target="_blank">
                  <button
                    aria-label="LinkedIn"
                    className="rounded-full flex justify-center items-center p-5 hover:-translate-y-3 transition ease-in duration-150"
                  >
                    <FaLinkedinIn className="text-3xl text-white" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="animate-dropIn2 opacity-0">
              <div className="active:scale-75">
                <Link href={GITHUB.url} target="_blank">
                  <button
                    aria-label="GitHub"
                    className="rounded-full flex justify-center items-center p-5 hover:-translate-y-3 transition ease-in duration-150"
                  >
                    <FaGithub className="text-3xl text-white" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="animate-dropIn3 opacity-0">
              <div className="active:scale-75">
                <button
                  aria-label="Email Me"
                  className="rounded-full flex justify-center items-center p-5 hover:-translate-y-3 transition ease-in duration-150"
                  onClick={() => router.push('mailto:russ@russmcgill.com')}
                >
                  <AiOutlineMail className="text-3xl text-white" />
                </button>
              </div>
            </div>

            {/* <Link href={'/'} target="_blank">
              <button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={iconChildren}
                className="p-6 rounded-full flex justify-center items-center bg-[#ecf0f3] shadow-lg light:shadow-gray-400 dark:bg-grey800"
              >
                <BsFillPersonLinesFill />
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

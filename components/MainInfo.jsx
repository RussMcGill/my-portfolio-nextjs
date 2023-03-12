import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { GITHUB, LINKEDIN } from '@/lib/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MainInfo() {
  const router = useRouter();

  return (
    <div id="home" className="w-full h-screen text-center mt-20">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="animate-fadeIn opacity-0">
            <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-white">
              let's build something awesome together
            </p>
            <h1 className="p-4 text-gray-700 dark:text-white">
              Hi, I'm <span className="text-primary">Russ</span>{' '}
            </h1>
            <h1 className="py-2 text-gray-700 dark:text-white">
              A<span></span>
            </h1>
            <p className="py-4 text-gray-600 dark:text-white max-w-[70%] m-auto">
              I'm a full-stack developer specializing in building exceptional digital experiances.{' '}
            </p>
          </div>
          <div
            // TODO: Change back to justify-between when I get resume button setup
            className="flex items-center justify-around max-w-[330px] m-auto py-4"
          >
            <div className="animate-dropIn1">
              <div className="active:scale-75">
                <Link href={LINKEDIN.url} target="_blank">
                  <button className="p-6 rounded-full flex justify-center items-center bg-[#ecf0f3] shadow-lg light:shadow-gray-400 dark:bg-grey800 hover:scale-110 transition ease-in duration-150">
                    <FaLinkedinIn />
                  </button>
                </Link>
              </div>
            </div>
            <div className="animate-dropIn2 opacity-0">
              <div className="active:scale-75">
                <Link href={GITHUB.url} target="_blank">
                  <button className="p-6 rounded-full flex justify-center items-center bg-[#ecf0f3] shadow-lg light:shadow-gray-400 dark:bg-grey800 hover:scale-110 transition ease-in duration-150">
                    <FaGithub />
                  </button>
                </Link>
              </div>
            </div>
            <div className="animate-dropIn3 opacity-0">
              <div className="active:scale-75">
                <button
                  className="p-6 rounded-full flex justify-center items-center bg-[#ecf0f3] shadow-lg light:shadow-gray-400 dark:bg-grey800 hover:scale-110 transition ease-in duration-150"
                  onClick={() => router.push('mailto:russ@russmcgill.com')}
                >
                  <AiOutlineMail />
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
    </div>
  );
}

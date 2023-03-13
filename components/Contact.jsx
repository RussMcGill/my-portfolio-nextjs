import { GITHUB, LINKEDIN } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineMail } from 'react-icons/ai';
// TODO: import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/home/contact.jpg';

export default function Contact() {
  const router = useRouter();

  return (
    <div
      id="contact"
      className="w-full xl:h-screen pt-20 2k:pt-0 flex flex-col items-center justify-center"
    >
      <div className="max-w-[1240px] m-auto px-2 w-full ">
        <p className="text-xl tracking-widest uppercase text-green">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl light:shadow-gray-400 dark:bg-blueStep1 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 md:pb-5"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-5">Russell McGill</h2>
                <p>Web Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact me and let&apos;s
                  talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-around pt-8">
                  <Link
                    href={LINKEDIN.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Linkedin Button"
                  >
                    <div className="rounded-full p-6 cursor-pointer hover:-translate-y-3 ease-in duration-150">
                      <FaLinkedinIn className="text-3xl text-white" />
                    </div>
                  </Link>
                  <Link
                    href={GITHUB.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Github Button"
                  >
                    <div className="rounded-full p-6 cursor-pointer hover:-translate-y-3 ease-in duration-150">
                      <FaGithub className="text-3xl text-white" />
                    </div>
                  </Link>

                  <button
                    className="rounded-full p-6 cursor-pointer hover:-translate-y-3 ease-in duration-150"
                    aria-label="Email Me Button"
                    onClick={() => router.push('mailto:russ@russmcgill.com')}
                  >
                    <AiOutlineMail className="text-3xl text-white" />
                  </button>
                  {/* TODO: Setup Resume section */}
                  {/* <Link href="/resume">
                    <div className="rounded-full shadow-lg light:shadow-gray-400 dark:bg-grey700 p-6 cursor-pointer hover:-translate-y-3 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl light:shadow-gray-400 dark:bg-blueStep1 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/fe232027-5d2f-4ece-b5fc-06318765f339"
                method="POST"
                encType="multipart/form-data"
              >
                <input type="hidden" name="_gotcha" className="hidden !important" />
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" aria-label="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-blueStep1"
                      type="text"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phonenumber" className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-blueStep1"
                      type="text"
                      name="phone"
                      id="phonenumber"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-blueStep1"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-blueStep1"
                    type="text"
                    name="subject"
                    id="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 dark:bg-blueStep1"
                    rows="8"
                    name="message"
                    id="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-primary bg-blueBackground mt-4 rounded-lg hover:scale-105 transition duration-150">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <Link href="#home" aria-label="Home Button">
            <div className="rounded-full p-4 cursor-pointer hover:-translate-y-3 ease-in duration-150">
              <HiOutlineChevronDoubleUp size={30} className="text-primary" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

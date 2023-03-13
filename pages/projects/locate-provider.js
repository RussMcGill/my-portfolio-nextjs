import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { LOCATE_PROVIDER_SCREENSHOTS, PROJECTS } from '@/lib/constants';

import grastonLocateProvider from '../../public/assets/projects/grastonLocateProvider.png';
import profileEdit from '../../public/assets/projects/profile-edit.png';
import extendedProfile from '../../public/assets/projects/locate-provider-extended.png';

export default function GrastonLocateProvider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [grastonLocateProvider, extendedProfile, profileEdit];

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? LOCATE_PROVIDER_SCREENSHOTS.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  function nextSlide() {
    const isLastSlide = currentIndex === LOCATE_PROVIDER_SCREENSHOTS.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const project = PROJECTS.find((p) => p.name === 'Graston Locate-a-Provider');

  return (
    <div className="w-full h-full 4k:h-screen pt-20 flex items-center justify-center flex-col">
      <div className="max-w-[1000px] mx-auto px-2 md:px-8 py-8">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-primary pb-3">Locate-a-Provider Project Overview</h2>
          <p>
            This app allows users to search for healthcare providers trained in Graston Techniques
            in their area.
          </p>
          <p>
            Upon visiting the page, users are presented with a search bar where they can input their
            location, such as their city or zip code. The page then displays a map of the specified
            area with markers indicating the locations of providers who have been trained in Graston
            Techniques.
          </p>
          <p>
            Users can click on a marker to view information about the provider, including their
            name, address, phone number, and website. Additionally, users can refine their search by
            specifying the type of provider they are looking for, such as a chiropractor or physical
            therapist, and by setting a radius for their search. Overall, this webpage serves as a
            helpful resource for individuals seeking healthcare providers who are trained in Graston
            Techniques.
          </p>
        </div>
      </div>
      <div className="rounded w-full py-5 px-2  flex flex-col gap-5 flex-wrap max-w-5xl">
        <h1 className="text-center text-primary">Technologies</h1>
        <div className="flex gap-2 justify-around flex-wrap">
          {project.techStack.map((tech, i) => (
            <div key={i} className="p-2 dark:bg-blueStep1 rounded-xl">
              <Image src={tech.img} key={i} alt={tech.name} width={75} height={75} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-5 items-center justify-center">
        <h2 className="text-primary text-2xl">Screenshots</h2>
        <div className="relative group px-2">
          <div className="md:hidden group-hover:block absolute top-[50%] -translate-x-[0] translate-y-[-50%] left-3 text-2xl rounded-full p-2 bg-black/20 md:hover:bg-black/50 text-white cursor-pointer">
            <BsChevronCompactLeft size={30} onClick={() => prevSlide()} />
          </div>
          <div className="md:hidden group-hover:block absolute top-[50%] -translate-x-[0] translate-y-[-50%] right-3 text-2x rounded-full p-2 bg-black/20 md:hover:bg-black/50 text-white cursor-pointer">
            <BsChevronCompactRight size={30} onClick={() => nextSlide()} />
          </div>
          <Image
            src={screenshots[currentIndex]}
            alt={screenshots[currentIndex]}
            style={{ width: 'auto', height: 'auto', maxHeight: '50vh' }}
          />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {LOCATE_PROVIDER_SCREENSHOTS.map((slide, index) => (
          <div
            key={index}
            className="text-2xl cursor-pointer"
            onClick={() => setCurrentIndex(index)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      <div className="md: min-h-[8rem]">
        <p className="mb-2 max-w-[1000px] text-center px-2">
          {LOCATE_PROVIDER_SCREENSHOTS[currentIndex].caption}
        </p>
      </div>
      <div className="flex gap-2 flex-wrap justify-center mt-5">
        <Link href={project.liveUrl} target="_blank">
          <button className="rounded bg-blueStep2 p-3 text-primary">
            View {project.title} Live
          </button>
        </Link>
      </div>
      <Link href="/#projects">
        <p className="underline cursor-pointer my-10">Back</p>
      </Link>
      {/* </div> */}
    </div>
  );
}

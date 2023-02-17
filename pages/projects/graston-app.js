import Image from 'next/image';
import { useState } from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import slide1 from '../../public/assets/projects/grastonApp.png';
import slide2 from '../../public/assets/projects/findTraining.png';

export default function GrastonApp() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState();
  const [modalText, setmodalText] = useState();

  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshotSlides = [
    {
      id: 'slide-1',
      image: slide1,
      caption: 'Login/Sign up screen. Authenticating with AWS Cognito through the Graston API.',
    },
    {
      id: 'slide-2',
      image: slide2,
      caption: 'Display all available trainings on a map using Google Maps API.',
    },
  ];

  function openModal(slide) {
    setShowModal(true);
    setModalImage(slide.image);
    setmodalText(slide.caption);
  }

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? screenshotSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  function nextSlide() {
    const isLastSlide = currentIndex === screenshotSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className='w-full'>
      <div className='w-screen h-[20vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[20vh] bg-black/70 z-10' />
        {/* <Image className='absolute z-1' fill style={{ objectFit: 'cover' }} src={'/assets/projects/grastonApp.png'} alt='/' /> */}
        <div className='absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Graston App</h2>
          <h3>Next JS / Material-UI / Heroku</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          {/* <p>
            I built this application in React JS and is hosted on GitHub pages. This app features user authentication with firebase as well as the
            firestore cloud storage database. This application is pulling movie data from an the IMDB movie API and displaying different categories.
            It features horizontal sliding and a featured selection. The useContext hook is also being implemented for app-wide state management.
          </p> */}
          <p>
            This app was built as a checkout funnel and a place for customers to track their training status. This application pulls customer,
            training, checkout data from the Graston API. The app has multiple checkout funnels, training selection pages, a profile page for
            clinicans to track their training status, a Locate-a-Provider page for potential patients to be able to find a trained clinician near
            them.
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-2 mt-5 items-center justify-center'>
        <h2 className='text-primary'>Screenshots</h2>
        <div className='max-w-[1200px] h-[500px] sm:min-h-[600px] md:min-h-[850px] lg:min-h-[1000px] w-full m-auto px-10 relative group'>
          <div
            style={{ backgroundImage: `url(${screenshotSlides[currentIndex].image.src})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
          >
            <div className='md:hidden group-hover:block absolute top-[50%] -translate-x-[0] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 md:hover:bg-black/50 text-white cursor-pointer'>
              <BsChevronCompactLeft size={30} onClick={() => prevSlide()} />
            </div>
            <div className='md:hidden group-hover:block absolute top-[50%] -translate-x-[0] translate-y-[-50%] right-5 text-2x rounded-full p-2 bg-black/20 md:hover:bg-black/50 text-white cursor-pointer'>
              <BsChevronCompactRight size={30} onClick={() => nextSlide()} />
            </div>
          </div>
        </div>
        <div className='flex top-4 justify-center py-2'>
          {screenshotSlides.map((slide, index) => (
            <div key={index} className='text-2xl cursor-pointer' onClick={() => setCurrentIndex(index)}>
              <RxDotFilled />
            </div>
          ))}
        </div>
        <p>{screenshotSlides[currentIndex].caption}</p>
      </div>

      <Link href='/#projects'>
        <p className='underline cursor-pointer'>Back</p>
      </Link>
    </div>
  );
}

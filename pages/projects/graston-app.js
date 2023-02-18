import Image from 'next/image';
import { useState } from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import grastonSignup from '../../public/assets/projects/grastonSignup.png';
import grastonTrainings from '../../public/assets/projects/grastonTrainings.png';
import grastonLocateProvider from '../../public/assets/projects/grastonLocateProvider.png';

export default function GrastonApp() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState();
  const [modalText, setmodalText] = useState();

  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshotSlides = [
    {
      id: 'slide-1',
      title: 'Graston Sign Up',
      image: grastonSignup,
      caption: 'Login/Sign up screen. Authenticating with AWS Cognito through the Graston API.',
      url: 'https://app.grastontechnique.com/signup',
    },
    {
      id: 'slide-2',
      title: 'Graston Trainings',
      image: grastonTrainings,
      caption: 'Display all available trainings on a map using Google Maps API, filterable by city, state, and zip code.',
      url: 'https://app.grastontechnique.com/trainings/M1',
    },
    {
      id: 'slide-3',
      title: 'Graston Locate a Provider',
      image: grastonLocateProvider,
      caption: 'Locate a provider on a map using Google Maps API.',
      url: 'https://app.grastontechnique.com/locate-provider',
    },
  ];

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
    <div className='w-full pt-20'>
      {/* <div className='w-screen h-[20vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[20vh] bg-black/70 z-10' />
        <Image className='absolute z-1' fill style={{ objectFit: 'cover' }} src={'/assets/projects/grastonApp.png'} alt='/' />
        <div className='absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Graston App</h2>
          <h3>Next JS / Material-UI / Heroku</h3>
        </div>
      </div> */}
      <div className='max-w-[1000px] mx-auto px-2 md:px-8 py-8'>
        <p>Project</p>
        <h2>Overview</h2>
        <p>
          This app was built as a backend app for Graston Techniques main website. The app has multiple checkout funnels, training selection pages, a
          profile page for clinicans to track their training status, as well as a Locate-a-Provider page for potential patients to be able to find a
          trained clinician near them. This application pulls customer, training, checkout data from the Graston API.
        </p>
      </div>
      <div className='flex flex-col gap-2 mt-5 items-center justify-center'>
        <h3 className='text-primary text-2xl'>Screenshots</h3>
        <h2>{screenshotSlides[currentIndex].title}</h2>
        <div className=' h-[280px] w-[350px] sm:h-[480px] sm:w-[600px] md:h-[625px] md:w-[770px] lg:w-[1000px] lg:min-h-[800px] m-auto px-2 relative group'>
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
        <p className='mb-2'>{screenshotSlides[currentIndex].caption}</p>
        <div className='flex gap-2 flex-wrap justify-center'>
          {screenshotSlides.map((slide, index) => (
            <Link href={slide.url} target='_blank'>
              <button className='rounded bg-primary p-2'>View {slide.title} Live</button>
            </Link>
          ))}
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer my-10'>Back</p>
        </Link>
      </div>
    </div>
  );
}

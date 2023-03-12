import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import locateProvider from '../public/assets/projects/grastonLocateProvider.png';
import forestAdmin from '../public/assets/projects/forest-admin-light.png';
import paymentCalculator from '../public/assets/projects/custom-payments.png';

export default function Project({ title, backgroundImg, projectUrl }) {
  function getImages(img) {
    switch (img) {
      case 'locate-provider':
        return locateProvider;
      case 'forest-admin':
        return forestAdmin;
      case 'payment-calculator':
        return paymentCalculator;
    }
  }
  return (
    <Link href={projectUrl}>
      <div className="relative flex flex-col gap-5 items-center justify-between h-auto w-full bg-white dark:bg-grey800 p-5 shadow-xl rounded-xl hover:scale-105 transition duration-150">
        <div>
          <h2 className="text-primary dark:text-grey200">{title}</h2>
        </div>
        <div>
          <Image
            className="rounded-xl"
            src={getImages(backgroundImg)}
            width="100%"
            height="100%"
            alt="/"
          />
        </div>
      </div>
    </Link>
  );
}

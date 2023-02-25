import Link from 'next/link';
import React from 'react';

export default function Project({ title, backgroundImg, tech, projectUrl, techStack }) {
  return (
    <Link href={projectUrl}>
      <div className="relative flex flex-col gap-5 items-center justify-between h-auto w-full bg-grey300 dark:bg-grey800 p-5 light:shadow-xl shadow-gray-400 rounded-xl">
        <div>
          <h2 className="text-primary dark:text-grey200">{title}</h2>
        </div>
        <div>
          <img className="rounded-xl " src={backgroundImg} alt="/" />
        </div>
      </div>
    </Link>
  );
}

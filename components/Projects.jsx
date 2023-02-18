import Image from 'next/image';
import Link from 'next/link';
import forestAdmin from '../public/assets/projects/forest_admin.png';
import customPayment from '../public/assets/projects/custom-payments.png';
import grastonApp from '../public/assets/projects/grastonApp.png';

import Project from './Project';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] md:pt-28 mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-primary'>Projects</p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {PROJECTS.map((project) => {
            return (
              <Project
                title={project.name}
                backgroundImg={project.img}
                projectUrl={project.url}
                tech={project.mainTech}
                techStack={project.techStack}
              />
            );
          })}
          {/* <Project title='CRM' backgroundImg={forestAdmin} projectUrl='/projects/crm' tech='Node JS' />
          <Project title='Payment Calculator' backgroundImg={customPayment} projectUrl='/projects/payment_calculator' tech='Next JS' />
          <Project title='Graston App' backgroundImg={grastonApp} projectUrl='/projects/graston-app' tech='Next JS' /> */}
          {/* <Project title='Twitch UI' backgroundImg={twitchImg} projectUrl='/twitch' tech='Next JS' /> */}
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import forestAdminLight from '../../public/assets/projects/forest-admin-light.png';
import forestAdminDark from '../../public/assets/projects/forest-admin-dark.png';
import { PROJECTS } from '@/lib/constants';

export default function ForestAdminCRM() {
  const { theme } = useTheme();

  const project = PROJECTS.find((p) => p.name === 'Custom CRM');

  return (
    <div className="w-full h-full 4k:h-screen pt-20 flex items-center justify-center flex-col gap-2">
      <div className="max-w-5xl px-2 md:px-8 py-8 ">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-primary pb-3">Custom CRM Project Overview</h2>
          <p>
            This is a bespoke Customer Relationship Management (CRM) solution that utilizes a
            PostgreSQL database and a Node.js backend API. To facilitate user data manipulation, the
            application leverages the capabilities of Forest Admin, a third-party service.
          </p>
          <p>
            This backend project boasts a suite of automations, including receiving data from
            webhooks and modifying data within the database. Additionally, the system sends API
            calls to third-party services in order to update customer information, thereby
            facilitating seamless integration with external platforms.
          </p>
        </div>
      </div>
      <div className="rounded w-full py-5 px-2  flex flex-col gap-5 flex-wrap max-w-5xl">
        <h1 className="text-center text-primary">Technologies</h1>
        <div className="flex gap-2 justify-around flex-wrap">
          {project.techStack.map((tech, i) => (
            <div key={i} className="p-2 dark:bg-grey300 rounded-xl">
              <Image src={tech.img} key={i} alt={tech.name} width={75} height={75} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="px-2 relative max-w-5xl my-5 rounded-xl">
          <Image src={theme === 'dark' ? forestAdminDark : forestAdminLight} alt="/" />
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer my-10">Back</p>
        </Link>
      </div>
    </div>
  );
}

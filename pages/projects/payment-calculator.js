import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import customPayments from '../../public/assets/projects/custom-payments.png';
import { PROJECTS } from '@/lib/constants';

export default function ForestAdminCRM() {
  const { theme } = useTheme();

  const project = PROJECTS.find((p) => p.name === 'Payment Calculator');

  return (
    <div className="w-full h-full 4k:h-screen pt-20 flex items-center justify-center flex-col gap-2">
      <div className="max-w-5xl px-2 md:px-8 py-2 md:py-8 ">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-primary pb-3">Payment Calculator Project Overview</h2>
          <p>
            This payment calculator is an innovative tool that provides users with the flexibility
            to customize their payment plan according to their financial needs and preferences. By
            allowing users to select an initial payment amount and a desired repayment period, this
            calculator enables them to tailor their payment schedule to align with their budget and
            cash flow. The payments and fees are automatically calculated based on the user input.
          </p>
          <p>
            Once the user has finalized their payment plan, they can simply click the "Next" button
            to initiate a post request to the payment gateway. This request retrieves a prepopulated
            checkout page, which contains the user's selected payment details, and enables them to
            seamlessly complete the payment process. By providing a seamless and user-friendly
            payment experience, this calculator enhances customer satisfaction and promotes repeat
            business.
          </p>
        </div>
      </div>
      <div className="rounded w-full py-5 px-2 flex flex-col gap-5 flex-wrap max-w-5xl">
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
          <Image src={customPayments} alt="/" />
        </div>
        <div className="flex gap-2 flex-col justify-center">
          <div className="m-auto">
            <Link href={project.liveUrl} target="_blank">
              <button className="rounded bg-primary p-2 text-white">
                View {project.title} Live
              </button>
            </Link>
          </div>
          <div className="text-center max-w-[75vw]">
            <p>(Please note: Customer has to be logged in to view this page)</p>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer my-10">Back</p>
        </Link>
      </div>
    </div>
  );
}

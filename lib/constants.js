// import grastonLocateProvider from '../../public/assets/projects/grastonLocateProvider.png';
// import profileEdit from '../../public/assets/projects/profile-edit.png';
// import extendedProfile from '../../public/assets/projects/locate-provider-extended.png';

export const LINKEDIN = {
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/in/russ-mcgill/',
};
export const GITHUB = {
  name: 'GitHub',
  url: 'https://github.com/RussMcGill',
};

export const PROJECTS = [
  {
    name: 'Graston Locate-a-Provider',
    img: '/assets/projects/grastonLocateProvider.png',
    title: 'Graston Locate-a-Provider',
    url: '/projects/locate-provider',
    liveUrl: 'https://app.grastontechnique.com/locate-provider',
    mainTech: 'Next.js',
    techStack: [
      {
        name: 'Javascript',
        img: '/assets/skills/javascript.png',
      },
      {
        name: 'React',
        img: '/assets/skills/react.png',
      },
      {
        name: 'Next.js',
        img: '/assets/skills/nextjs.png',
      },
      {
        name: 'AWS',
        img: '/assets/skills/aws.png',
      },
      {
        name: 'Material UI',
        img: '/assets/skills/mui.png',
      },
      {
        name: 'Github',
        img: '/assets/skills/github1.png',
      },
    ],
  },
  {
    name: 'Custom CRM',
    img: '/assets/projects/forest-admin-light.png',
    title: 'Custom CRM',
    url: '/projects/forest-admin',
    mainTech: 'Next.js',
    info: '',
    info2: '',
    techStack: [
      { name: 'Javascript', img: '/assets/skills/javascript.png' },
      { name: 'Node.js', img: '/assets/skills/nodejs.png' },
      { name: 'PostgreSQL', img: '/assets/skills/postgresql.png' },
      { name: 'AWS', img: '/assets/skills/aws.png' },
      { name: 'Docker', img: '/assets/skills/docker.png' },
      { name: 'Github', img: '/assets/skills/github1.png' },
    ],
  },
  {
    name: 'Payment Calculator',
    img: '/assets/projects/custom-payments.png',
    title: 'Payment Calculator',
    url: '/projects/payment-calculator',
    mainTech: 'Next.js',
    liveUrl:
      'https://app.grastontechnique.com/checkout/payment-calculator?training=5f66abea-4b0d-46f4-96a4-9f2ec76331de&planId=Full%20GT%20Clinician%20Journey',
    techStack: [
      {
        name: 'Javascript',
        img: '/assets/skills/javascript.png',
      },
      {
        name: 'React',
        img: '/assets/skills/react.png',
      },
      {
        name: 'Next.js',
        img: '/assets/skills/nextjs.png',
      },
      {
        name: 'AWS',
        img: '/assets/skills/aws.png',
      },
      {
        name: 'Material UI',
        img: '/assets/skills/mui.png',
      },
      {
        name: 'Github',
        img: '/assets/skills/github1.png',
      },
    ],
  },
];

export const LOCATE_PROVIDER_SCREENSHOTS = [
  {
    id: 'slide-1',
    title: 'Graston Locate-a-Provider',
    image: '../../public/assets/projects/grastonLocateProvider.png',
    caption: `The "Locate a Provider" feature offers a valuable service to potential patients seeking clinicians trained in the Graston Technique. Utilizing a sophisticated API, the application facilitates searches of over 10,000 clinicians to locate matches within a specified radius of the user's inputted zip code, city, or state.
      Upon executing the search, the application returns an array of qualified clinicians that match the user's specified criteria. This professional-grade functionality offers users a streamlined and intuitive tool for finding healthcare providers with expertise in Graston Technique.`,
    url: 'https://app.grastontechnique.com/locate-provider',
  },
  {
    id: 'slide-2',
    title: 'Extended Profile',
    image: '../../public/assets/projects/locate-provider-extended.png',
    caption:
      'Potential patients can view more information about a clinican from dropping down their profile including their education information, specialties and areas of focus. This area displays information stored in various datatypes including arrays, strings, JSON objects, and more.',
    url: 'https://app.grastontechnique.com/trainings/M1',
  },
  {
    id: 'slide-3',
    title: 'Profile Edit Page',
    image: '../../public/assets/projects/profile-edit.png',
    caption:
      "This is where the clinician can edit their public profile information. Each section has it's own modal that pops open when the clinician clicks on the edit button. Various different technologies are used here including an Autocomplete form, Checkboxes, Modals, Lists, and more. Profile images are stored in AWS S3 buckets. As the clinician updates their information, the data is sent to a PostgreSQL database via a call to the Graston API.",
    url: 'https://app.grastontechnique.com/signup',
  },
];

// gitprofile.config.ts

const CONFIG = {
  github: {
    username: '0xRajvardhan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 12, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['0xRajvardhan/Topmate-clone', '0xRajvardhan/SocialMediaApp', '0xRajvardhan/Authentication-with-Supabase', '0xRajvardhan/Trello-2.0', '0xRajvardhan/Untapped-Clone', '0xRajvardhan/Metaverse-Madness', '0xRajvardhan/Netflix-Clone', '0xRajvardhan/HooBank', '0xRajvardhan/GPT3_raj7dev', '0xRajvardhan/Linkedin-Frontend','0xRajvardhan/UniversityName.org', '0xRajvardhan/Weather-App'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Rajvardhan Singh Dodiya',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'rajvardhan-singh-dodiya',
    twitter: 'rajvardhansd',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'singhrajvardhan2003@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/11LmF1sjAT59ChnlY4lg_gQnAZzKNrlsq/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
    'Next.js',
    'TypeScript',
    'GraphQL',
    'REST API',
    'MongoDB',
    'Firebase',
    'Express.js',
    'Zod',
    'Bun',
    'Prisma',
    'Mongoose',
  ],
  experiences: [
    {
      company: 'MetaDev',
      position: 'Full-stack intern',
      from: 'June 2003',
      to: 'July 2003',
      companyLink: '',
    },
    {
      company: 'Soshals',
      position: 'SDE intern',
      from: 'March 2023',
      to: 'Msy 2023',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'AWS certified cloud practitioner',
      body: 'from AWS academy',
      year: 'Dec 2023',
      link: 'https://www.credly.com/go/syhWZAN4',
    },{
      name: 'AWS certified solutions architect associate',
      body: 'from AWS academy',
      year: 'Jan 2024',
      link: 'https://drive.google.com/file/d/1bTiPz7MrDWYpcPc_IpKwluKFbvbGUOfJ/view?usp=sharing',
    },
  ],
  educations: [
    {
    institution: 'Vellore Institute of Technology',
    degree: 'Btech in Computer Science and Engineering with Specialisation in AI & ML',
    from: '2021',
    to: '2025',
  },
    {
      institution: 'St. Jones HrSc School',
      degree: '11th - 12th std',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'Delhi Public Schoo',
      degree: '8th - 10th std',
      from: '2017',
      to: '2019',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/0xRajvardhan/0xRajvardhan.github.io"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

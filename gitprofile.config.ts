const CONFIG = {
  github: {
    username: 'SargeJoseph', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 1, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['', ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '',
          description: '',
          imageUrl: '',
          link: '',
        },
        {
          title: '',
          description:'',
          imageUrl: '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of SargeJoseph',
    description: '',
    imageURL: '',
  },
  social: {
    x: 'SargeJos3ph',
    reddit: 'sargejos3ph',
    youtube: 'sargejos3ph', // example: 'pewdiepie'
    dev: 'sargejos3ph',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JavaScript',
    'TypeScript',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'toilemaitre',
      from: 'December 1999',
      to: 'Present',
      companyLink: 'https://www.toilemaitre.com',
    },
  ],
  // certifications: [
  //   {
  //     name: '',
  //     body: '',
  //     year: '',
  //     link: '',
  //   },
  // ],
  // educations: [
  //   {
  //     institution: '',
  //     degree: '',
  //     from: '',
  //     to: '',
  //   },
  // ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  blog: {
    source: 'dev', // medium | dev
    username: 'sargejos3ph', // to hide blog section, keep it empty
    limit: 1, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-WCPJJP6HE8', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: false,
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

   footer: `Made by <a 
     class="text-primary" href="https://github.com/SargeJoseph"
     target="_blank"
     rel="noreferrer"
     >toilemaitre</a> `,
  enablePWA: true,
};

export default CONFIG;

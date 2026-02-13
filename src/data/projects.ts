export type Project = {
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  longDescription?: string;
  links?: { label: string; url: string }[];
  tech?: string[];
  isSideProject?: boolean;
  /** YouTube embed URL (e.g. https://www.youtube.com/embed/VIDEO_ID) */
  videoUrl?: string;
  /** Background image path for the project detail page (e.g. /images/wells.jpg) */
  backgroundImage?: string;
  /** Image shown at the bottom of the project detail page */
  image?: string;
  /** YouTube embed URL for a video at the bottom of the project detail page */
  bottomVideoUrl?: string;
  /** URL to embed in a card at the bottom (e.g. live demo / 3js scene). Opens in iframe. */
  embedUrl?: string;
  /** Optional label for the embed card (e.g. "Interactive 3js demo") */
  embedLabel?: string;
  /** Path to local demo (e.g. /3jsWorld/) shown in iframe at bottom. Served from public folder. */
  localDemoPath?: string;
};

export const mainProjects: Project[] = [
  {
    slug: 'xpm5',
    title: 'XPM 5',
    tagline: 'Wells Fargo Technology',
    description: 'Wells Fargo web app for business services to manage customer-side information.',
    image: '/images/wells.jpg',
    longDescription: `I built the grid-view and search bar components. The grid used Kendo Grid UI and Angular subscriptions to display user data, with loops for varying data sizes. The search used Kendo AutoComplete and a custom filter algorithm. I added unit tests with Jasmine and Karma and tracked coverage with Karma. The repo is private, so only a description is provided.`,
    tech: ['Angular', 'Kendo UI', 'Jasmine', 'Karma'],
  },
  {
    slug: 'iware',
    title: 'iWare',
    tagline: 'Cognizant Digital Engineering',
    description: 'Cognizant intern app: shop for glasses and try on frames with AR.',
    bottomVideoUrl: 'https://www.youtube.com/embed/nLeSPfV4K0A',
    longDescription: `Users shop for glasses from multiple brands and try on frames with AR; the cart updates automatically. Built with React Native (frontend) and Spring Boot (backend on Google Cloud). Quality checks via SonarQube; frontend–backend communication via Google Cloud. Code under NDA.`,
    tech: ['React Native', 'Spring Boot', 'Google Cloud', 'AR'],
  },
  {
    slug: 'hometohome',
    title: 'Home to Home',
    tagline: 'Cross-region student project',
    description: 'App to list items to sell or trade. Built by students from California, North Carolina, and India.',
    longDescription: `Cross-region student app (California, North Carolina, India) for listing items to sell or trade. Built in Android Studio with Firestore for auth and data. I handled backend: Firestore structure, queries, and passing data between pages to meet each screen’s requirements.`,
    tech: ['Android Studio', 'Firestore'],
    bottomVideoUrl: 'https://www.youtube.com/embed/FHrQ-NZgKD8',
    links: [
      { label: 'Github', url: 'https://github.com/kryan717/hometohome' },
      { label: 'Devpost', url: 'https://devpost.com/software/home-to-home-ojpvh2' },
    ],
  },
  {
    slug: 'minecraft-3js',
    title: 'Minecraft Environment in 3js',
    tagline: 'WebGL & Three.js',
    description: 'A Minecraft-style world in Three.js, resized for the web. Full breakdown linked below.',
    longDescription: `Sample Minecraft-style world in Three.js. The canvas was resized for the site; a full breakdown is on the next page.`,
    localDemoPath: '/3jsWorld/index.html',
    tech: ['Three.js', 'WebGL', 'GLTF'],
    links: [
      { label: 'Github', url: 'https://github.com/AbhinavPrasanna/SchoolProjects/tree/main/CSE160/MinecraftFigurein3js' },
      { label: 'A breakdown of the world', url: '/projects/minecraft-breakdown' },
    ],
  },
  {
    slug: 'minecraft-breakdown',
    title: 'A breakdown of the world',
    tagline: 'Minecraft 3js deep dive',
    description: 'Breakdown of the Minecraft Three.js scene: objects, textures, lighting, fog, and skybox.',
    longDescription: `20+ objects (30+ cubes, 4 cylinders, 1 icosahedron). I built grass, diamond, glowstone blocks, and four pillars in 3js with Minecraft textures; the grass wall uses interleaving (see source). 3D skybox from online assets. Four lights: directional, hemisphere, camera-linked spotlight, and cube lights for glowstone. Fog around the icosahedron. Models are GLTF (high-res from Unity/Three.js loaders), not OBJ.`,
    tech: ['Three.js', 'WebGL', 'GLTF'],
    links: [
      { label: 'Github', url: 'https://github.com/AbhinavPrasanna/SchoolProjects/tree/main/CSE160/MinecraftFigurein3js' },
    ],
  },
];

export const sideProjects: Project[] = [
  {
    slug: 'hometown-water',
    title: 'Hometown Water',
    tagline: 'Documentary',
    description: 'Documentary by high school and college interns on water conservation in Pleasanton, CA.',
    longDescription: `Documentary by high school and college interns on water conservation in Pleasanton, California. It covers water transport across California and includes interviews with local leaders.`,
    bottomVideoUrl: 'https://www.youtube.com/embed/F-7jN605W2Q',
    isSideProject: true,
  },
  {
    slug: 'bond',
    title: 'Bond: A Short Film',
    tagline: 'Short film',
    description: 'Short film about a teenager grieving his younger brother and the memories that made their bond special.',
    longDescription: `Short film about a teenager grieving his younger brother. The story unfolds as he remembers what made their bond special.`,
    bottomVideoUrl: 'https://www.youtube.com/embed/YXx8shZecIg',
    isSideProject: true,
  },
  {
    slug: 'anxiety',
    title: 'Anxiety',
    tagline: 'PSA',
    description: 'PSA for UC Merced students on the pandemic and COVID, with emotional support resources.',
    longDescription: `PSA for UC Merced students on pandemic anxiety and COVID, with resources for emotional support.`,
    bottomVideoUrl: 'https://www.youtube.com/embed/RHEOG1zWtYk',
    isSideProject: true,
  },
];

export const allProjects = [...mainProjects, ...sideProjects];

export function getProject(slug: string, side?: boolean): Project | undefined {
  const list = side ? sideProjects : mainProjects;
  return list.find((p) => p.slug === slug) ?? allProjects.find((p) => p.slug === slug);
}

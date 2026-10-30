export type Project = {
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  longDescription?: string;
  links?: { label: string; url: string }[];
  tech?: string[];
  previewImage?: { src: string; alt: string; caption: string };
  sections?: {
    id?: string;
    title: string;
    paragraphs: string[];
    image?: { src: string; alt: string; caption: string; portrait?: boolean };
    diagram?: { src: string; alt: string; caption: string };
  }[];
  caseStudyUrl?: string;
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
    slug: 'bayline-sports',
    title: 'Bayline Sports',
    tagline: 'Bay Area sports dashboard · Full-stack product delivery',
    description: 'A mobile-friendly home for Warriors, 49ers and Valkyries schedules, scores, statistics, highlights, injury reports and event ticket links, with spoiler protection and an AWS deployment.',
    longDescription: `I designed and shipped Bayline Sports to make following Bay Area teams easier across the NBA, NFL and WNBA. Fans can find the next game, browse a combined schedule and explore game details, with team preferences and spoiler protection saved on their device.\n\nI led product direction and full-stack delivery, from validating sports-data coverage to building the interface, independent ingestion worker, database and production recovery workflow. Developed October 20–23, 2026, in collaboration with OpenAI Codex.`,
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS Lightsail'],
    previewImage: {
      src: '/case-studies/bayline-sports/images/hero-desktop-2026-10-26.png',
      alt: 'Bayline Sports live homepage with player artwork, team records, upcoming games and the scoreboard.',
      caption: 'Live homepage captured October 26, 2026. Additional screenshots are dated in their captions.',
    },
    links: [
      { label: 'Live application', url: 'https://baylinescore.com/' },
      { label: 'GitHub source', url: 'https://github.com/AbhinavPrasanna/BayAreaSports' },
    ],
    caseStudyUrl: '/case-studies/bayline-sports/BaylineSports-portfolio.zip',
    sections: [
      {
        title: 'A useful game-day experience',
        paragraphs: [
          'Following local teams meant switching between league sites, schedules, scoreboards, highlight channels and injury reports. I validated provider coverage first and narrowed an initial five-team concept to a three-team MVP: the Golden State Warriors, San Francisco 49ers and Golden State Valkyries.',
          'Today, Schedule, Results and Live now views bring games together in Pacific time. Game details include team records, regulation-quarter scores, overtime and NBA/NFL player statistics where supported. Unknown data stays unknown; scheduled games do not show placeholder zeroes as played scores.',
          'Fans can use the app without an account. Device-saved team selections, refreshes that preserve scroll position and spoiler protection make it practical for people watching later. Spoiler controls cover scores, records, statistics, highlight titles and injury commentary, with separate reveal actions.',
        ],
        image: {
          src: '/case-studies/bayline-sports/images/nba-player-stats.png',
          alt: 'Warriors player statistics displayed inside a Bayline Sports game-details dialog.',
          caption: 'NBA player statistics in game details, captured during development.',
        },
      },
      {
        id: 'game-tickets',
        title: 'Tickets for upcoming games',
        paragraphs: [
          'Fans can access tickets directly from an upcoming game card or its game-details panel. “View tickets on Ticketmaster” opens the specific game’s event page in a new tab. The details panel shows the venue and when the link was verified, keeping ticket access alongside the matchup and viewing options.',
          'Ticket availability, prices and checkout are handled on Ticketmaster. Bayline displays reviewed event links for future scheduled games with a matching, fresh entry; it does not synchronize ticket prices or inventory, and automatic event discovery is not active.',
          'The worker imports a bundled, reviewed ticket catalog at release and every ten minutes. Entries match the teams and exact game start time, are subject to a 30-day review window and are suppressed when stale. This keeps each ticket link tied to the intended event while making ongoing catalog maintenance explicit.',
        ],
        image: {
          src: '/case-studies/bayline-sports/images/ticketmaster-game-details-2026-10-30.jpg',
          alt: 'Bayline game details for Lakers at Warriors showing a Tickets panel, View tickets on Ticketmaster link, Chase Center venue and October 30 verification date.',
          caption: 'Live game-details ticket access for Lakers at Warriors at Chase Center, captured October 30, 2026. Availability and pricing are shown on Ticketmaster.',
        },
      },
      {
        title: 'Official highlights and current injury reports',
        paragraphs: [
          'An independent worker discovers highlights through official NBA, NFL and WNBA YouTube upload playlists. It validates metadata and matches teams and game timing, with reviewed entries taking precedence. Click-to-load playback and external links handle embedding restrictions; missing or ambiguous matches retain an official-source fallback.',
          'Warriors and 49ers injury reports support team selection, player or position search and availability filters. Reports include provider status, commentary and return estimates when supplied. “No reported injury” means the feed lists no injury; it does not guarantee game-day availability. Reports opened from completed games are clearly identified as current reports.',
        ],
        image: {
          src: '/case-studies/bayline-sports/images/automatic-warriors-highlight.png',
          alt: 'An official NBA Warriors highlight video available in Bayline Sports game details.',
          caption: 'Official-channel highlight discovery with in-app playback and a YouTube fallback.',
        },
      },
      {
        id: 'production-architecture',
        title: 'Production architecture',
        diagram: {
          src: '/case-studies/bayline-sports/images/bayline-architecture-2026-10-30.png',
          alt: 'Bayline production architecture showing browser and Ticketmaster event links, Caddy and Next.js on Lightsail, private PostgreSQL, an independent Node.js worker, Warriors broadcast polling, a reviewed ticket catalog, external data sources, monitoring, backups and container releases.',
          caption: 'Updated production architecture, October 30, 2026: cached scores, reviewed ticket links, Warriors broadcast listings, recovery and container releases.',
        },
        paragraphs: [
          'Route 53 resolves baylinescore.com to the AWS Lightsail host, where Caddy terminates HTTPS and routes requests to Next.js. Docker Compose runs the web application, ingestion worker and PostgreSQL as separate services. The web application serves the React interface and read-only APIs from stored snapshots; the database has no public port.',
          'A separate Node.js worker fetches schedules, scores, statistics and injury reports from BALLDONTLIE, and discovers official highlights through the YouTube API. It validates and normalizes responses before writing PostgreSQL snapshots. Sports and YouTube credentials remain worker-only, so browser traffic does not consume provider quota and web restarts do not reset the ingestion schedule.',
          'Visible, online browsers refresh cached snapshots every 15 seconds and refetch on reconnect or focus. Upstream sports checks target roughly one minute and injury checks roughly ten minutes, subject to provider limits, pagination and backoff. These browser and ingestion intervals are independent; the app uses snapshot polling rather than an event stream.',
          'The Warriors broadcast task polls the official NBA schedule every 15 minutes, matching the exact matchup and start time. It uses national and Warriors television listings rather than opponent-only channels, caches listings with a 24-hour limit and provides a safe fallback when a current match is unavailable.',
          'Ticketmaster is a reviewed source and an external destination for fans. Reviewed event URLs and venues are shipped in a bundled ticket catalog, imported at release and every ten minutes, and stored in game_media.payload as JSONB. Team and exact-start matching, a 30-day review window and stale-link suppression limit display to future scheduled games with a fresh match. Clicking a ticket link goes from the browser to that Ticketmaster event; there is no automated discovery or price/inventory synchronization.',
          'Zod validates provider payloads, and ordered SQL migrations organize normalized games, records, media, statistics and player status. Composite league/provider identities prevent ID collisions. PostgreSQL advisory locking, persistent request throttling, transactional upserts and retries keep ingestion controlled. Failed or partial fetches preserve the last successful snapshot.',
          'Operations run outside the application process. EventBridge schedules a Lambda readiness check, with CloudWatch and SNS reporting failure and recovery. Host jobs send verified backups, including ticket metadata, to private off-server storage every six hours, with 35-day retention and isolated restore checks. For releases, an operator archives a Git commit, CodeBuild validates and builds containers, ECR stores digest-pinned images, and Lightsail pulls the images, imports the catalog and verifies the deployment. AWS budget alerts track actual and forecast spending without enforcing a spending cutoff.',
        ],
      },
      {
        title: 'Production deployment and recovery',
        paragraphs: [
          'I deployed Docker Compose services to AWS Lightsail behind Caddy HTTPS on baylinescore.com, keeping PostgreSQL on a private container network. CodeBuild validates and builds images, ECR stores them, and owner-invoked releases deploy separate web and worker containers pinned by digest.',
          'The deployment includes restart policies, resource limits, rotating logs, uptime and certificate checks, and budget alerts. Verified off-server backups run every six hours with 35-day retention. Recovery checks exercised process failures, a host reboot and restoration into an isolated database; a timed replacement-host exercise remains future work.',
          'The architecture targeted a $100/month AWS budget, with a documented $30–40/month infrastructure planning estimate at modest traffic. This is an estimate rather than an audited bill; data subscriptions, domain registration, taxes and exceptional usage need separate allowance.',
        ],
      },
      {
        title: 'Testing, debugging and demonstrated results',
        paragraphs: [
          'The latest recorded validation passed 71 application tests, with PostgreSQL behavior exercised through PGlite, plus four recovery guard tests. Phone checks at 320- and 390-pixel widths covered navigation, team selection, searching, spoiler behavior and horizontal overflow.',
          'One historical-statistics bug came from a mismatch between a 31-day ingestion cutoff and a schedule covering 45 Pacific calendar days. I aligned the windows and tested the inclusive date boundary to restore missing older 49ers statistics.',
          'The documented restore verified eight migrations, three teams, 45 games and populated player-status caches alongside existing statistics, records and media. These are recorded development and release results, without claims of measured production scale, user growth or a formal availability percentage.',
        ],
        image: {
          src: '/case-studies/bayline-sports/images/injury-team-icons-live-phone.png',
          alt: 'Mobile injury-report page with Warriors and 49ers team buttons and a player-search field.',
          caption: 'Phone-width injury-report verification from October 23, 2026.',
          portrait: true,
        },
      },
      {
        title: 'AI-assisted delivery and next steps',
        paragraphs: [
          'I directed scope, data-access decisions, account setup and release approval, collaborating with OpenAI Codex on implementation, debugging, testing and operational documentation. AI supported the development workflow; the deployed fan experience does not invoke an OpenAI model.',
          'The main lesson was to make product promises match available data and recovery evidence. Future work includes Sharks and Earthquakes coverage, supported WNBA advanced statistics and injury data, broader verified broadcast listings, load measurements and a timed replacement-host recovery exercise.',
        ],
      },
    ],
  },
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
    slug: 'vision-benefits',
    title: 'Vision Benefits',
    tagline: 'Kaiser Permanente Technology',
    description: 'Kaiser Permanente vision benefits platform that helps employers offer integrated, high-quality eye care alongside medical coverage.',
    longDescription: `Internal Kaiser Permanente web application for managing vision benefits across employer groups and business lines. The platform lets benefits and IT teams configure plan options, align vision coverage with medical plans, and keep eligibility and provider access in sync.\n\nOn this platform I served as a Site Reliability / Backend Engineer, designing and maintaining Node.js APIs and using AI-assisted development to accelerate delivery while backing changes with robust unit and integration test suites. I regularly led cross-team deployment calls and used Splunk to analyze logs, optimize API execution times, and troubleshoot critical production incidents. I also refactored and optimized code to isolate concerns, making debugging and ongoing maintenance significantly faster.`,
    tech: ['NodeJS', 'Microservices', 'Unit Testing', 'Integration Testing'],
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

export const siteConfig = {
  name: "Syed Shahid Hassan",
  title: "Former Additional Director, Federal Investigation Agency (FIA)",
  location: "Islamabad, Pakistan",
  linkedin: "https://pk.linkedin.com/in/syed-shahid-hassan-93578613",
  whatsapp: "https://wa.me/", // to be updated with real number
  email: "", // to be provided by client
};

export type TimelineEntry = {
  period: string;
  role: string;
  org: string;
  location: string;
};

export const timeline: TimelineEntry[] = [
  {
    period: "1992",
    role: "Inspector, FIA",
    org: "Federal Investigation Agency",
    location: "Pakistan",
  },
  {
    period: "2008 – 2009",
    role: "First In-charge, Cybercrime Circle",
    org: "FIA / NR3C (National Response Centre for Cyber Crime)",
    location: "Punjab, Pakistan",
  },
  {
    period: "2009 – 2010",
    role: "Cybercrime Investigations",
    org: "FIA",
    location: "Pakistan",
  },
  {
    period: "Sep 2010 – Sep 2012",
    role: "Crime Analyst / Forensic Investigation Studies",
    org: "BCIT Vancouver, Canada",
    location: "Greater Vancouver, Canada",
  },
  {
    period: "Jun 2014 – Sep 2021",
    role: "Deputy Director, Cybercrime Wing",
    org: "FIA",
    location: "Lahore (Punjab Zone)",
  },
  {
    period: "Jan 2019 – Sep 2021",
    role: "Additional Director FIA",
    org: "FIA",
    location: "Islamabad",
  },
  {
    period: "Sep 2021 – Present",
    role: "Additional Director (Addl. Director)",
    org: "FIA (Full-time)",
    location: "Islamabad",
  },
  {
    period: "Various (documented)",
    role: "Director, Anti-Corruption Wing",
    org: "FIA HQ",
    location: "Islamabad",
  },
  {
    period: "Various (documented)",
    role: "Director, FIA Faisalabad",
    org: "FIA",
    location: "Faisalabad",
  },
  {
    period: "Various (documented)",
    role: "Director, Punjab Zone",
    org: "FIA",
    location: "Punjab, Pakistan",
  },
];

export type Credential = {
  credential: string;
  institution: string;
  year: string;
};

export const credentials: Credential[] = [
  {
    credential: "Crime & Intelligence Analysis, Forensic Investigation (Grade: A)",
    institution: "British Columbia Institute of Technology (BCIT), Vancouver, Canada",
    year: "2010–2012",
  },
  {
    credential: "Advanced Specialty in Forensic Investigation: Application of Technology in Law Enforcement",
    institution: "British Columbia Institute of Technology (BCIT), Vancouver, Canada",
    year: "2010–2012",
  },
  {
    credential: "Cyber Crimes Investigation Course",
    institution: "CBI Academy, India",
    year: "Apr 2008",
  },
  {
    credential: "Crime Scene Investigation Course",
    institution: "French Police, SCTIP (Service de Coopération Technique Internationale de Police)",
    year: "Jun 2006",
  },
];

export const achievements: string[] = [
  "Pioneer of Cybercrime Enforcement in Pakistan: the first officer to head a Cybercrime Police Station (Circle) in Punjab, Pakistan (2008–2009), enforcing cyber laws at a time when almost no legal or institutional framework existed.",
  "NR3C Founding Contributor: worked at Pakistan's National Response Centre for Cyber Crime (NR3C), the country's first and only unit of its kind for digital forensics, cybercrime investigation, penetration testing, and information security audits.",
  "PECA Advocate: represented FIA as Deputy Director Cybercrime Wing at major national forums debating the Prevention of Electronic Crimes Act (PECA 2016), including a Round Table Conference at Shaikh Ahmad Hassan School of Law (SAHSOL) in 2015, and a Pakistan Electronic Crimes Bill conference documented by Bolo Bhi.",
  "Cybercrime Awareness Educator: spoke at UET Lahore (2016) on rising cybercrime and social media ethics, with coverage by Express Tribune and Pakistan Press Foundation, warning Pakistan of a spike in IT-enabled crime and advocating public-law enforcement cooperation.",
  "Anti-Corruption Wing Director: led the FIA's Anti-Corruption Wing, responsible for investigations involving federal government officers, public institutions, and corruption in public procurement.",
  "International Training: one of very few Pakistani law enforcement officers to have completed advanced forensic training in Canada, bringing a globally-informed perspective to Pakistani public service.",
  "Community Service in Canada: during his time at BCIT, worked with the Burnaby Association for Community Inclusion (2011–2012), supporting people with developmental disabilities.",
  "Public Speaking & Media Engagements: a recurring voice in national television interviews and conference panels, speaking on cybercrime, governance, and law enforcement reform.",
  "Digital Economy & Blockchain Advisor: advises on regulatory approaches to the digital economy, blockchain, and cryptocurrency, bridging law enforcement experience with emerging financial technology policy.",
  "Multi-Domain Cybercrime Specialist: maintains hands-on expertise across multiple domains of cybercrime investigation, from financial fraud and digital evidence handling to online exploitation and emerging cyber-enabled threats.",
  "International & Embassy Consultant: has worked as an independent contractor for foreign embassies and missions, supporting cross-border cybercrime investigations, field operations, and international case consultation.",
];

export type MediaItem = {
  platform: string;
  title: string;
  url: string;
  type: "video" | "press";
};

export const mediaItems: MediaItem[] = [
  {
    platform: "YouTube (FIA Official)",
    title: "Director, Anti-Corruption Wing, FIA: Syed Shahid Hassan outlines core functions",
    url: "https://www.youtube.com/watch?v=OExNiKzH_es",
    type: "video",
  },
  {
    platform: "YouTube (HumSub.TV)",
    title: "Syed Shahid Hassan, Deputy Director Cyber Crime FIA",
    url: "https://www.youtube.com/watch?v=nL_rJ16qqNI",
    type: "video",
  },
  {
    platform: "YouTube",
    title: "Guest of the Week: Director FIA Faisalabad, Syed Shahid Hassan (full interview)",
    url: "https://www.youtube.com/watch?v=D4-M67EUmhE",
    type: "video",
  },
  {
    platform: "FIA Facebook (Official)",
    title: "Director Anti-Corruption Wing: core functions post",
    url: "https://www.facebook.com/FIAAgencyOfficial/posts/director-anti-corruption-wing-fia-syed-shahid-hassan-outlines-the-core-functions/1389265806567782/",
    type: "press",
  },
  {
    platform: "Bolo Bhi",
    title: "PECB 2015: The Story So Far (Round Table on PECA, SAHSOL)",
    url: "https://bolobhi.org/pecb2015-the-story-so-far/",
    type: "press",
  },
  {
    platform: "Pakistan Press Foundation",
    title: "Cyber crime on the rise, says FIA: UET Lahore seminar",
    url: "https://pakistanpressfoundation.org/cyber-crime-on-the-rise-says-fia/",
    type: "press",
  },
];

export const featuredVideo = mediaItems[0];

export type ServiceColor = "cobalt" | "emerald" | "sky" | "crimson" | "slate" | "cyan";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  audience?: string[];
  topics?: string[];
  format?: string;
  color: ServiceColor;
  icon: "GraduationCap" | "Users" | "ShieldAlert" | "Scale" | "Search" | "Mic" | "Newspaper" | "Landmark" | "Presentation";
};

export const services: Service[] = [
  {
    slug: "css-ppsc-mentorship",
    color: "cobalt",
    icon: "GraduationCap",
    title: "1-on-1 Mentorship Sessions (CSS / PPSC)",
    shortDescription:
      "Personal guidance for aspirants targeting CSS and PPSC, from someone who has sat on the other side of the system.",
    description:
      "For aspirants targeting CSS/PPSC exams, especially those aiming for Central Superior Services, Police Service, and Secretariat Group. Sessions cover General Knowledge, Current Affairs from a law enforcement and governance angle, essay writing on security topics, and interview preparation.",
    audience: ["Fresh graduates", "CSS repeat candidates", "PPSC aspirants"],
    topics: [
      "General Knowledge",
      "Current Affairs (law enforcement/governance angle)",
      "Essay writing on security topics",
      "Interview preparation",
    ],
    format: "60-minute online or in-person sessions via Zoom or in Islamabad",
  },
  {
    slug: "css-ppsc-group-coaching",
    color: "sky",
    icon: "Users",
    title: "CSS/PPSC Group Coaching Courses",
    shortDescription:
      "Small cohort coaching covering governance, law, and current affairs with an insider's perspective.",
    description:
      "Small cohort batches of 10–20 students. Topics include Governance & Public Administration, Pakistan Affairs, Law (PECA, NAB, Anti-Corruption frameworks), and Current Affairs with insider perspective. Delivered online via recorded and live sessions.",
    topics: [
      "Governance & Public Administration",
      "Pakistan Affairs",
      "Law (PECA, NAB, Anti-Corruption frameworks)",
      "Current Affairs with insider perspective",
    ],
    format: "Online, recorded + live sessions, batches of 10–20 students",
  },
  {
    slug: "corporate-training",
    color: "emerald",
    icon: "ShieldAlert",
    title: "Cybercrime Awareness & PECA Training (Institutional)",
    shortDescription:
      "Half-day and full-day workshops for corporates, universities, NGOs, and media organizations.",
    description:
      "For corporates, universities, NGOs, and media organizations. Covers PECA 2016 compliance, digital safety, cyber investigation procedures, and what to do if you're a victim of cybercrime.",
    topics: [
      "PECA 2016 compliance",
      "Digital safety",
      "Cyber investigation procedures",
      "Victim response guidance",
    ],
    format: "Half-day or full-day workshops",
  },
  {
    slug: "anti-corruption-advisory",
    color: "crimson",
    icon: "Scale",
    title: "Anti-Corruption Compliance Advisory",
    shortDescription:
      "Advisory for organizations navigating federal institutions, procurement, and FIA-related matters lawfully.",
    description:
      "For organizations dealing with federal institutions, government procurement, or FIA-related matters. Advisory on documentation, compliance, and navigating public sector interactions lawfully.",
    format: "Consultation-based, scope defined per engagement",
  },
  {
    slug: "forensic-investigation-consulting",
    color: "slate",
    icon: "Search",
    title: "Forensic Investigation Consulting",
    shortDescription:
      "Consultation for law firms, corporate legal teams, and private investigators on digital forensics and evidence handling.",
    description:
      "Consultation for law firms, corporate legal teams, and private investigators. Areas include digital forensics, cybercrime evidence handling, and crime scene documentation advisory.",
    topics: ["Digital forensics", "Cybercrime evidence handling", "Crime scene documentation advisory"],
  },
  {
    slug: "keynote-speaking",
    color: "cyan",
    icon: "Mic",
    title: "Keynote Speaking",
    shortDescription:
      "Available for conferences, universities, and policy forums on cybercrime, governance, and reform.",
    description:
      "Available for conferences, universities, and policy forums. Topics include cybercrime in Pakistan, governance and accountability, digital safety, and public service reform.",
    topics: ["Cybercrime in Pakistan", "Governance and accountability", "Digital safety", "Public service reform"],
  },
  {
    slug: "media-commentary",
    color: "sky",
    icon: "Newspaper",
    title: "Media Appearances / Expert Commentary",
    shortDescription:
      "Available for TV, podcast, and written media as an expert voice on cybercrime and law enforcement reform.",
    description:
      "Available for TV, podcast, and written media as an expert voice on cybercrime, anti-corruption, and law enforcement reform.",
  },
  {
    slug: "policy-governance-advisory",
    color: "emerald",
    icon: "Landmark",
    title: "Policy, Governance & Digital Economy Advisory",
    shortDescription:
      "Advisory for policymakers and institutions on cyber law, anti-corruption frameworks, and digital economy regulation, including blockchain and cryptocurrency.",
    description:
      "For policymakers, think tanks, and public-sector and private institutions working on cyber law, anti-corruption frameworks, and digital economy regulation. Draws on direct experience representing the FIA at national forums shaping legislation such as PECA 2016, plus advisory work on regulatory approaches to blockchain and cryptocurrency.",
    topics: [
      "Cyber law and policy review",
      "Anti-corruption framework design",
      "Digital economy, blockchain, and cryptocurrency regulation",
      "Legislative and regulatory consultation",
    ],
    format: "Consultation-based, scope defined per engagement",
  },
  {
    slug: "university-workshops",
    color: "cobalt",
    icon: "Presentation",
    title: "University & Institutional Workshops",
    shortDescription:
      "Guest lectures and workshops for universities on cybercrime, criminology, and digital safety.",
    description:
      "For universities and academic institutions. Guest lectures and structured workshops for students on cybercrime trends, criminology, digital safety, and the realities of law enforcement careers.",
    topics: ["Cybercrime trends and case studies", "Criminology and law enforcement careers", "Digital safety for students"],
    format: "Single guest lectures or multi-session workshops, in-person or online",
  },
];

export const credibilityStrip = [
  "FIA",
  "BCIT Canada",
  "French Police",
  "CBI India",
  "Since 1992",
  "International Embassies",
];

export type EmbassyCapability = {
  title: string;
  description: string;
};

export const embassyCapabilities: EmbassyCapability[] = [
  {
    title: "Cybercrime Case Investigation",
    description:
      "Independent investigation support for embassies and missions handling cybercrime cases involving their nationals, staff, or interests abroad.",
  },
  {
    title: "Cross-Border Investigations",
    description:
      "Coordination across jurisdictions where digital evidence, suspects, or victims span more than one country, drawing on three decades of FIA cybercrime casework.",
  },
  {
    title: "Field Operations",
    description:
      "On-ground field investigation support, evidence coordination, and liaison with local law enforcement on sensitive cross-border matters.",
  },
  {
    title: "International Consultation",
    description:
      "Confidential advisory for diplomatic missions, international organizations, and multinational entities navigating cyber-enabled crime, fraud, or digital risk with a cross-jurisdiction dimension.",
  },
];

export const embassyAudience = [
  "Embassies & diplomatic missions",
  "International law firms handling cross-border cases",
  "Multinational corporations facing cross-jurisdiction cybercrime",
  "International organizations & NGOs operating in Pakistan",
];

export const bioShort =
  "Since 1992, Syed Shahid Hassan has served at the front line of Pakistan's law enforcement system, from setting up the country's first Cybercrime Circle in Punjab to leading the FIA's Anti-Corruption Wing. Trained in forensic investigation in Canada and certified by police academies in India and France, he now shares that experience directly with the next generation.";

export const bioFull = `Syed Shahid Hassan joined the Federal Investigation Agency in 1992 as an Inspector, beginning more than three decades inside Pakistan's federal law enforcement system. Much of that career sat at the edge of a problem the country had no real framework for yet: cybercrime.

In 2008, he became the first officer to head a Cybercrime Police Station, known as a Circle, in Punjab, Pakistan. At the time, there was almost no legal or institutional structure for cyber law enforcement in the country. He helped build it from the ground up as part of the National Response Centre for Cyber Crime (NR3C), Pakistan's first and only unit dedicated to digital forensics, cybercrime investigation, penetration testing, and information security audits.

To sharpen that work, he went to Canada, completing advanced studies in Crime & Intelligence Analysis and Forensic Investigation at the British Columbia Institute of Technology (BCIT) in Vancouver, graduating with an A grade and an advanced specialty in applying technology to law enforcement. It is a credential very few Pakistani law enforcement officers hold, and it gave him a globally-informed view of investigation and forensics that he later brought back home.

Back in Pakistan, he rose through the FIA's Cybercrime Wing, eventually serving as Deputy Director in the Punjab Zone from 2014 to 2021. During this period, he represented the FIA at national forums shaping the country's cyber law landscape, including a Round Table Conference on the Prevention of Electronic Crimes Act (PECA 2016) at the Shaikh Ahmad Hassan School of Law, and a Pakistan Electronic Crimes Bill conference documented by the digital rights group Bolo Bhi. He also spoke publicly, including at the University of Engineering and Technology, Lahore, warning of the rising tide of IT-enabled crime and the need for closer cooperation between the public and law enforcement.

In January 2019, he was elevated to Additional Director, a position he has held since, including leading the FIA's Anti-Corruption Wing, where he was responsible for investigations involving federal government officers, public institutions, and corruption in public procurement. He has also served as Director of FIA Faisalabad and Director of the Punjab Zone.

Beyond the badge, his time in Canada included volunteer work with the Burnaby Association for Community Inclusion, supporting people with developmental disabilities, a detail that says as much about his character as his case file does about his competence.

As he steps back from full-time service, he is turning that experience outward: mentoring the next generation of CSS and PPSC aspirants, training institutions on cybercrime and PECA compliance, and advising organizations on anti-corruption matters and forensic investigation. His advisory work has also grown alongside the technology he once investigated, now extending into the digital economy, blockchain, and cryptocurrency regulation, in addition to hands-on expertise across multiple domains of cybercrime.

His work has also extended beyond Pakistan's borders. As an independent contractor, he has supported foreign embassies and missions on cybercrime case investigation, field operations, and cross-border cases, and provides consultation on international matters where digital crime, law enforcement, and diplomacy intersect.`;

export const pullQuote =
  "I spent my career inside a system most people only see from the outside. Now I want to help the next generation understand it, and get into it, the right way.";

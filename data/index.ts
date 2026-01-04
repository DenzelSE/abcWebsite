  export type Event = {
  id: string
  title: string
  description: string
  image: string
  date: string
  location: string
  type: "upcoming" | "ongoing" | "past"
  registrationUrl?: string
  detailsUrl?: string
}
  
  export const events: Event[] = [
    {
      id: "Africa Stablecoin Summit",
      title: "African Stablecoin Summit",
      description: "This summit features central banks, regulators, banks, fintech leaders, stablecoin issuers, and corporate treasuries to explore how stablecoins can address Africa’s pressing challenges around crossborder payments, merchant acceptance, remittances, and treasury management.",
      image: "/Events/Asummit.jpeg",
      date: "Nov 12-13, 2025",
      location: "The Empire Conference and Events venue, Johannesburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7396815118640005120",
    },
    {
      id: "Party Event",
      title: "5th Global Pizza Party 2025",
      description: "In celebration of Bitcoin Pizza Day, join us and thousands around the world as PizzaDAO throws its 5th Global Pizza Party – and yes, it's as legendary as it sounds!",
      image: "/Events/PizzaDOA.png",
      date: "May 22, 2025",
      location: "The Wild Side Resturant, Ranburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7329186438976004096",
    },
    {
      id: "Expeditions",
      title: "Edge Vity South Africa: 10 Days Expedition",
      description: "Attended as part of the 10 days expedition in Cape Town, Networking with Industry experts from all over the world",
      image: "/Events/EdgeCity.jpg",
      date: "April 3-13, 2025",
      location: "Cape Town & Stellenbosch, South Africa",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/africa-s-blockchain-club_edgecity-africablockchainclub-blockchain-activity-7318225332753317888-2_CG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADc4tN4B5Q2YdTN2Yte0JKHBi7u_DS0f5l8",
    },
    {
      id: "Party",
      title: "ABC x Lisk Closing party",
      description: "End of the year closing party for Africa's blockchain Club partnered with Lisk Blockchain",
      image: "/Events/LiskClosing.jpg",
      date: "December 22, 2024",
      location: "Inanda Club Business Park, Sandton, Johannesburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/africa-s-blockchain-club_blockchain-lisk-africablockchainclub-activity-7280975333825142784-AdYW?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "Bootcamp",
      title: "Lisk x TUT :Lisk Blockchain Introduction Event",
      description: "fun activities, playing sweep stake game that was launched on Lisk. We had exciting giveaways, and great prizes for answering questions—plus, refreshing drinks to keep the energy upp",
      image: "/Events/TUT.jpg",
      date: "Mar 6, 2025",
      location: "Tshwane University of Technology, Pretoria",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7308150155097042944",
    },
    {
      id: "Blockchain Bootcamp",
      title: "UJ Blockchain Bootcamp x ABC x Alephium",
      description: "In an exciting collaboration with Africa's Blockchain Club, the fourth week of the South Africa-Swiss Bilateral Research Chair in Blockchain Technology (hashtag#UJBlockchain) masterclass featured Maud Bannwart, the Chief Operating Officer of Alephium. ",
      image: "/Events/UJ Kingsway campus Virtual Online(1).png",
      date: "Feb - Mar 08, 2025 (4 weeks)",
      location: "University of Johannesburg (APK) and virtual",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7303719866069352448",
    },
    {
      id: "Blockchain Conf",
      title: "Blockchain Africa Conference 2024",
      description: "Our members had a great time ✨ enjoying the 10th annual Blockchain Africa Conference 2024 that at Council for Scientific and Industrial Research (CSIR) hosted by Bitcoin Events 🎉",
      image: "/Events/BlockchainConf.jpg",
      date: "Nov 20, 2024",
      location: "Council for Scientific and Industrial Research (CSIR) International Convention Centre, Tshwane",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7266030468754460672/",
    },
    {
      id: "DevCon",
      title: "Thailand 🇹🇭 for DevCon7",
      description: "co-founder, Karabo Kayak , is currently in Thailand 🇹🇭 for DevCon7, diving into the heart of the Web3 world",
      image: "/Events/devCon.jpg",
      date: "October 5, 2024",
      location: "132 Jan Smuts Ave, WeThinkCode, Rosebank, Johannesburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/africa-s-blockchain-club_devcon-web3-activity-7261930179151745025-YR-9/?utm_source=share&utm_medium=member_android",
    },
    {
      id: "Hackathon",
      title: "EthCapeTown x W3Node : Hackathon & Conference",
      description: "co-founder, Karabo Kayak , is currently in Thailand 🇹🇭 for DevCon7, diving into the heart of the Web3 world",
      image: "/Events/EthCapetown.png",
      date: "September 20-22, 2024",
      location: "Dock Road, Cape Town",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/africa-s-blockchain-club_devcon-web3-activity-7261930179151745025-YR-9/?utm_source=share&utm_medium=member_android",
    },
    {
      id: "Showcase",
      title: "UJ Blockchain Demo Day",
      description: " Karabo Kayak, co-founder of Africa's Blockchain Club and OffConnectX, delivered an insightful speech at the UJBlockchain DemoDay, aimed at encouraging attendees to advance their blockchain skills. ",
      image: "/Events/UJ showcase.jpg",
      date: "September 5, 2024",
      location: "UJ Business School, Auckland Park, Johannesburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/south-africa-swiss-bilateral-research-chair-in-blockchain-technology_ujblockchain-demoday-ujblockchain-ugcPost-7247953485042790401-f3tS/?utm_source=share&utm_medium=member_android",
    },
    {
      id: "Partnership",
      title: "Biptap and ABC Partnership Announcement",
      description: "Launch Event Announvcing Biptap and Africa's Blockchain Club Partnership",
      image: "/Events/biptap.png",
      date: "October 5, 2024",
      location: "132 Jan Smuts Ave, WeThinkCode, Rosebank, Johannesburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/africa-s-blockchain-club_we-have-exciting-big-news-to-share-activity-7246578705085435906-tZij?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: "Workshop/Meetup",
      title: "Avalanche x ABC Worksho/MeetUp",
      description: "Introduction to Avalanche blockchain and its ecosystem. ABC meetup and refreshments",
      image: "/Events/Avax.png",
      date: "July 20, 2024",
      location: "132 Jan Smuts,WeThinkCode, Rosebank, Johannesburg",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7218907051127689217",
    },
    {
      id: "Zero-Knowledge-Proofs",
      title: "Scroll x ABC : Zero-Knowledge Proofs (ZK)",
      description: "Learn the fundamentals of Zero Knowledge proofs technology and its applications.",
      image: "/Events/scroll.png",
      date: "June 29, 2022",
      location: "Hybrid",
      type: "past",
      registrationUrl: "",
      detailsUrl: "https://www.linkedin.com/posts/africa-s-blockchain-club_blockchain-scroll-zks-activity-7213243972964524032-0r1q?utm_source=share&utm_medium=member_desktop",
    },
  ]

export const teamMembers = [
  {
    name: "Karabo Kayak",
    role: "Founder & CEO",
    bio: "Blockchain enthusiast with 5+ years in web3 space. Leading digital transformation in Africa's payment systems. Passionate about democratizing financial services through blockchain technology.",
    image: "/CoreTeam/karabo.jpg",
    linkedin: "https://linkedin.com/in/alexnkosi",
    twitter: "https://twitter.com/alexnkosi",
    github: "https://github.com/alexnkosi",
    expertise: ["DeFi", "Smart Contracts", "Tokenomics", "Leadership", "ZK Tech"],
  },
  {
    name: "Peter Manda",
    role: "Operations Manager",
    bio: "Leads efforts to grow blockchain education, innovation, and use across Africa. Since the club started in March 2024, he has been focused on building a strong community that helps people learn the skills they need to succeed in the world of blockchain. ",
    image: "/CoreTeam/Peter.jpg",
    linkedin: "https://linkedin.com/in/zainabosei",
    twitter: "https://twitter.com/zainabosei",
    github: "https://github.com/zainabosei",
    expertise: ["Research", "Web3", "Cryptos", "DeFi"],
  },
  {
    name: "Denzel Selokela",
    role: "COO & Community Manager",
    bio: "Community builder, technical coordinator and developer with a passion for blockchain adoption.increase the club’s visibility and reach across the continent. His dedication to the blockchain movement aligns with the club’s mission to make Africa a global leader in blockchain innovation.",
    image: "/CoreTeam/DenzelS.jpg",
    linkedin: "https://linkedin.com/in/davidmwangi",
    twitter: "https://twitter.com/davidmwangi",
    github: "https://github.com/davidmwangi",
    expertise: ["Community Building", "Education", "Solidity", "Events", "Web3 Dev"],
  },
  {
    name: "Maite Lemakoana",
    role: "Project Manager",
    bio: "As the head of Africa’s Blockchain Club for the Ladies, she curates events and initiatives that inspire women to participate and succeed in blockchain and Web3 technologies.Managing all aspects of event coordination, including venue selection, vendor partnerships, logistics, and ensuring a seamless experience for attendees.",
    image: "/CoreTeam/Maite.png",
    linkedin: "https://linkedin.com/in/fatimadiallo",
    twitter: "https://twitter.com/fatimadiallo",
    github: "https://github.com/fatimadiallo",
    expertise: ["Education", "Events", "Research", "Business Development"],
  },
  {
    name: "Katlego Phele",
    role: "CTO",
    bio: "With a background in software development and blockchain technology, he coordinates technical workshops, hackathons, and events that empower members to build, learn, and engage deeply with Web3. ",
    image: "/CoreTeam/Katlego.jpg",
    linkedin: "https://linkedin.com/in/kwameasante",
    twitter: "https://twitter.com/kwameasante",
    github: "https://github.com/kwameasante",
    expertise: ["Solidity", "Account Abtraction", "Cryptograhpy", "DeFi", "Web3 Dev"],
  },
  {
    name: "Lethabo Mokoena",
    role: "Logistics Manager & Reseacher",
    bio: "Overseeing travel plans for team members, ensuring smooth logistics for trips and events.Collaborating closely with the event coordinators.Researching grants, and funding opportunities aligned with ABC’s mission, writing proposals, and gathering necessary documentation for funding applications.",
    image: "/CoreTeam/Lethabo.png",
    linkedin: "https://linkedin.com/in/amarakone",
    twitter: "https://twitter.com/amarakone",
    github: "https://github.com/amarakone",
    expertise: ["Research", "DeFi", "Travel", "Academia"],
  },
]

export const ResearchTeam = [
  {
    name: "Sandile Siwundla",
    role: "Researcher & Developer",
    company: "",
    image: "/ResearchNDevs/Sandile Siwundla.jpg",
  },
  {
    name: "Sandile M'remi",
    role: "Researcher & Developer",
    company: "",
    image: "/ResearchNDevs/sandileM.png",
  },
  {
    name: "Tshepang Mokone",
    role: "Developer",
    company: "",
    image: "/ResearchNDevs/TshepangM.jpg",
  },
  {
    name: "Lindokuhle Mlilo",
    role: "Developer",
    company: "",
    image: "/ResearchNDevs/LindoM.png",
  },
  {
    name: "Lwazi Mashiya",
    role: "Developer",
    company: "",
    image: "/ResearchNDevs/LwaziM.jpg",
  },
  {
    name: "Yankho Saliji",
    role: "Researcher & Developer",
    company: "",
    image: "/ResearchNDevs/YankhoS.png",
  },
  {
    name: "Precious Maine",
    role: "Data Analyst & Developer",
    company: "",
    image: "/ResearchNDevs/PreciousM.jpg",
  },

]

export const milestones = [
  {
    year: "2024/03",
    title: "Foundation",
    description: "ABC was founded in Johannesburg",
  },
  {
    year: "2024/04",
    title: "First Hackathon",
    description: "Participated our first global hackathon with 1000+ participants",
  },
  {
    year: "2024",
    title: "Pan-African Expansion",
    description: "Expanded to 10 African countries with local ambassadors",
  },
  {
    year: "2024",
    title: "100+ Members",
    description: "Reached 1000+ active community members across Africa",
  },
  {
    year: "2024",
    title: "Research Initiative",
    description: "Launched ABC Research Lab focusing on African blockchain solutions",
  },
  {
    year: "2024",
    title: "Global Recognition",
    description: "Recognized as leading blockchain community in Africa",
  },
]



export const stats = [
  { number: "200+", label: "Community Members" },
  { number: "1", label: "African Country" },
  { number: "10+", label: "Projects Built" },
  { number: "12+", label: "Events Organized" },
]



export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/#projects" },
  { name: "Media", link: "/media" },
  { name: "Events", link: "/#events" },
  { name: "Contact", link: "/#contact" },
];

export const testimonials = [
  {
    id: "top",
    text: "This platform has significantly enhanced our productivity by providing powerful tools that allow us to analyze blockchain data seamlessly. It's perfect for teams looking for a reliable and easy-to-use platform for efficient solutions.",
    name: "Karabon Kayak",
    role: "Blockchain Developer",
    image: "/reviewers/alex.jpg",
  },
  {
    id: "bottom",
    text: "The user interface is incredibly smooth and intuitive. We have been able to complete tasks faster and more efficiently. The platform's features are really well thought out and help us manage our projects seamlessly, even under tight deadlines.",
    name: "Denzel Sokela",
    role: "Product Manager",
    image: "/reviewers/sara.jpg",
  },
  {
    id: "left",
    text: "An amazing platform that’s both powerful and user-friendly. It has truly transformed the way we approach and execute blockchain-based projects. The customer support is outstanding, and the platform's reliability gives us confidence in our work.",
    name: "Sanidile M'remi",
    role: "UX Designer",
    image: "/reviewers/michael.jpg",
  },
  {
    id: "right",
    text: "Highly recommend this tool for anyone involved in blockchain development or smart contract auditing. It is not only reliable and secure but also has excellent customer support that resolves issues quickly, making it an indispensable tool for my work.",
    name: "Maite",
    role: "Smart Contract Auditor",
    image: "/reviewers/fatima.jpg",
  },
];


  export const heroImage = {
    src: "/About/whiteABC.png",
    alt: "Africa's Blockchain Club",
    width: 100, 
    height: 1000,
  };
  
  export const logoImage = {
    src: "/header/ABC.png",
    alt: "Africa's Blockchain Club",
    width: 1000, 
    height: 1000,
  };
  
  export const projectsData = [
    {
      title: "7EduPact - Decentralized Education",
      description: "Transforming global education with a secure and decentralized platform that empowers students and educators.",
      image: "/abcWork/7edupact.svg",
      link: "https://7-edu-pact.vercel.app/",
      message: "View Website",
    },
    {
      title: "Blocksole",
      description: "Blocksole is a revolutionary decentralised sneaker store built on the Celo blockchain, designed to transform the traditional sneaker industry by providing a secure, transparent, and user-friendly platform for buying, selling, and trading sneakers.",
      image: "/abcWork/blacksole.png",
      link: "https://blocksole-react-app.vercel.app/",
      message: "View Website",
    },
    {
      title: "CeloGiftCard",
      description: "The Gift Cards project is a blockchain-powered solution integrated with MiniPay, designed to provide a seamless, secure, and decentralised platform for purchasing, redeeming, and gifting digital gift cards.",
      image: "/abcWork/gift_card_landing.png",
      link: "https://celo-gift-card-react-app.vercel.app/",
      message: "View Website",
    },
    {
      title: "SpxceDrive - Sharing Encrypted Files",
      description: "A cutting-edge platform using advanced encryption to ensure your file-sharing remains secure and private.",
      image: "/abcWork/spxcedrive.png",
      link: "https://spxce.vercel.app/",
      message: "View Website",
    },
    {
      title: "BioHealth DApp",
      description: "A software prototype focused on managing personal health records securely using decentralized storage.",
      image: "/abcWork/BioHealth.jpg",
      link: "/page3",
      message: "View Website",
    },
    {
      title: "Decentralized Voting System",
      description: "A secure and transparent platform enabling users to cast votes on various proposals and elections.",
      image: "/abcWork/cryptovote.svg",
      link: "https://cryptovotes.vercel.app/",
      message: "View Website",
    },
    {
      title: "Decentralized Agriculture Marketplace",
      description: "Empowering farmers and streamlining the supply chain through a transparent blockchain marketplace.",
      image: "/abcWork/harvestchain.svg",
      link: "/ui.apple.com",
      message: "View Website",
    },

  ];
  

export const aboutText = [
  {
    title1: "Our",
    title2: "Mission",
    description:
      "To empower developers with the knowledge and tools needed to build the decentralized future of Africa.",
  },
  {
    title1: "Our",
    title2: "Vision",
    description:
      "A world where blockchain technology is accessible to all and drives positive change in African societies.",
  },
];

export const aboutImages = [
  {
    src: "/About/whiteABC.png",
    inverted: "/About/ABC.png", 
    width: 300,
    height: 300,
    alt: "Our Mission",
  },
  {
    src: "/About/7.png",
    inverted: "/About/bg1.png", 
    width: 310,
    height: 310,
    alt: "Our Vision",
  },
];

  export const teamImages = [
    { src: "/team/1.JPG", alt: "Team Member 1" }, 
    { src: "/team/3.jpg", alt: "Team Member 3" },
    { src: "/team/4.jpg", alt: "Team Member 4" }, 
    { src: "/team/5.jpg", alt: "Team Member 5" }, 
    { src: "/team/6.jpg", alt: "Team Member 6" }, 
    { src: "/team/7.jpg", alt: "Team Member 7" },
    { src: "/team/8.jpg", alt: "Team Member 8" }, 
    { src: "/team/9.jpg", alt: "Team Member 9" },
    { src: "/team/9.jpeg", alt: "Team Member 9" },
    { src: "/team/10.jpg", alt: "Team Member 10" }, 
    { src: "/team/11.jpg", alt: "Team Member 11" },
    { src: "/team/12.jpg", alt: "Team Member 12" }, 
    { src: "/team/13.jpg", alt: "Team Member 13" }, 
    { src: "/team/14.jpg", alt: "Team Member 14" }, 
    { src: "/team/15.jpg", alt: "Team Member 15" },
    { src: "/team/16.jpg", alt: "Team Member 16" },
    { src: "/team/17.jpg", alt: "Team Member 17" },
    { src: "/team/18.jpg", alt: "Team Member 18" },
    { src: "/team/19.jpg", alt: "Team Member 19" },
    { src: "/team/20.jpg", alt: "Team Member 20" },
    { src: "/team/22.jpg", alt: "Team Member 22" },
    { src: "/team/23.jpg", alt: "Team Member 23" }, 
    { src: "/team/24.jpg", alt: "Team Member 24" }, 
    { src: "/team/25.jpg", alt: "Team Member 25" }, 
    { src: "/team/26.jpg", alt: "Team Member 26" },
    { src: "/team/27.jpg", alt: "Team Member 27" },
    { src: "/team/28.jpg", alt: "Team Member 28" },
    { src: "/team/29.jpg", alt: "Team Member 29" },
    { src: "/team/30.jpg", alt: "Team Member 30" },
    { src: "/team/31.jpg", alt: "Team Member 31" },
    { src: "/team/32.jpg", alt: "Team Member 32" },
    { src: "/team/33.jpg", alt: "Team Member 33" },
    { src: "/team/34.jpg", alt: "Team Member 34" }, 
    { src: "/team/35.jpg", alt: "Team Member 31" },
    { src: "/team/36.jpg", alt: "Team Member 32" },
    { src: "/team/37.jpg", alt: "Team Member 33" },
    { src: "/team/38.jpeg", alt: "Team Member 34" },
    { src: "/team/39.png", alt: "Team Member 33" },
    { src: "/team/40.jpeg", alt: "Team Member 34" },       

  ];
  
  export const contactUsData = [
    {
      title: "Web3 Fundamentals",
      text: "A comprehensive guide to the basics of Web3 development.",
      avatarType: "BookOpen",
      link: "https://stablecoin.gitbook.io/africas-blockchain-club-abc",
    },
    {
      title: "Smart Contract Development",
      text: "Learn how to write and deploy smart contracts on various blockchains.",
      avatarType: "Code",
      link: "https://stablecoin.gitbook.io/africas-blockchain-club-abc/defi/decentralised-exchange-dex/create-a-dapp",
    },
    {
      title: "Decentralzied Finance (DeFi)",
      text: "Decentralized Finance, or DeFi, is a revolutionary approach to financial services that operates on decentralized networks such as blockchains. ",
      avatarType: "Video",
      link: "https://stablecoin.gitbook.io/africas-blockchain-club-abc/defi/decentralized-finance-defi",
    },
    {
      title: "Crypto Research",
      text: "Learn how to research in the crypto space involving a structured approach to understand the intricacies of blockchain technology, market trends, and specific cryptocurrencies or projects",
      avatarType: "BookOpen",
      link: "https://stablecoin.gitbook.io/africas-blockchain-club-abc/research/crypto-research",
    },
    
  ];
  

interface Field {
  name: string;
  placeholder: string;
  type: "text" | "email" | "select" | "textarea";
  required?: boolean;
  options?: string[];
}

interface Form {
  text: string;
  fields: Field[];
}

type FormsData = {
  developer: Form;
  researcher: Form;
  partner: Form;
  cohort26: Form
};
  

export const forms: FormsData = {
  developer: {
    text: "Hire a skilled developer for your project.",
    fields: [
      { name: "name", placeholder: "Your Name", type: "text", required: true },
      { name: "email", placeholder: "Your Email", type: "email", required: true },
      { name: "linkedin", placeholder: "LinkedIn Profile", type: "text", required: false },
      { name: "association", placeholder: "Company/Organization", type: "text", required: false },
      { name: "developerType", placeholder: "Type of Developer", type: "select", options: ["Frontend", "Backend", "Blockchain Developer", "Fullstack"], required: true },
      { name: "employmentKind", placeholder: "Kind of Employment", type: "select", options: ["Remote", "On-site"], required: true },
      { name: "employmentDuration", placeholder: "Duration of Employment", type: "select", options: ["0-6 months", "6-12 months", "More than 1 year"], required: true },
      { name: "employmentType", placeholder: "Employment Type", type: "select", options: ["Part-time", "Full-time"], required: true },
      { name: "message", placeholder: "Additional Message", type: "textarea", required: false },
    ],
  },
  researcher: {
    text: "Collaborate with top researchers in your field.",
    fields: [
      { name: "name", placeholder: "Your Name", type: "text", required: true },
      { name: "email", placeholder: "Your Email", type: "email", required: true },
      { name: "linkedin", placeholder: "LinkedIn Profile", type: "text", required: false },
      { name: "association", placeholder: "Company/Organization", type: "text", required: false },
      { name: "workType", placeholder: "Type of Work", type: "select", options: ["Test Product", "Research Market", "Teach Blockchain", "Design a Curriculum", "Conduct Case Studies", "Analyze Blockchain Trends", "Develop Educational Content"], required: true },
      { name: "message", placeholder: "Additional Message", type: "textarea", required: false },
    ],
  },
  partner: {
    text: "Build strong partnerships with us.",
    fields: [
      { name: "name", placeholder: "Your Name", type: "text", required: true },
      { name: "email", placeholder: "Your Email", type: "email", required: true },
      { name: "linkedin", placeholder: "LinkedIn Profile", type: "text", required: false },
      { name: "association", placeholder: "Company/Organization", type: "text", required: false },
      { name: "partnershipType", placeholder: "Type of Partnership", type: "select", options: ["Host a Blockchain Function", "Be a Guest Speaker", "Sponsor Us", "Collaborate on Research", "Offer Internship Programs", "Provide Funding"], required: true },
      { name: "message", placeholder: "Additional Message", type: "textarea", required: false },
    ],
  },
  cohort26: {
    text: "Join Africa Blockchain Club - Cohort 2026",
    fields: [
      { name: "name", placeholder: "Your Full Name", type: "text", required: true },
      { name: "email", placeholder: "Your Email", type: "email", required: true },
      { name: "phone", placeholder: "Phone Number", type: "text", required: true },
      { name: "location", placeholder: "City & Country", type: "text", required: true },
      { name: "linkedin", placeholder: "LinkedIn Profile", type: "text", required: false },
      { name: "university", placeholder: "University/Institution", type: "text", required: false },
      { name: "experienceLevel", placeholder: "Blockchain Experience Level", type: "select", 
        options: ["Beginner", "Intermediate", "Advanced", "Professional"], required: true },
      { name: "interestArea", placeholder: "Primary Area of Interest", type: "select", 
        options: ["Web3 Development", "Blockchain Research", "Event Planning", "Startup Founder"], required: true },
      { name: "heardAbout", placeholder: "How did you hear about us?", type: "select", 
        options: ["Social Media", "Friend/Colleague", "University", "Event", "Online Search", "Other"], required: true },
      { name: "motivation", placeholder: "Why do you want to join Cohort 2026?", type: "textarea", required: true },
    ],
  }
};

  
  export const gridItems = [
    {
      id: 1,
      title: "We prioritize collaboration, fostering open communication within our community.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "collaboration.png",
      spareImg: "",
    },
    {
      id: 2,
      title: "Flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Tech stack",
      description: "We constantly improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Decentralized Exchange",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/code.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to collaborate?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  export const imageCards = [
    {
      title: "Web3 Hackathon",
      date: "July 15-17, 2023",
      description: "Join us for a weekend of building innovative Web3 projects.",
      imageSrc: "/Events/8.png", 
    },
    {
      title: "Blockchain Basics Workshop",
      date: "August 5, 2023",
      description: "Learn the fundamentals of blockchain technology and its applications.",
      imageSrc: "/Events/2.png", 
    },
    {
      title: "DeFi Deep Dive",
      date: "September 10, 2023",
      description: "Explore the world of decentralized finance and its potential.",
      imageSrc: "/Events/1.png",
    },
  ];
  
  
  export const projects = [
    {
      id: 1,
      title: "Decentralized Voting System",
      des: "A secure and transparent platform enabling users to cast votes on various proposals and elections.",
      img: "/cryptovote.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://cryptovotes.vercel.app/",
      message: "View Website"
    },
    {
      id: 2,
      title: "SpxceDrive - Sharing Encrypted Files",
      des: "A cutting-edge platform for securely sharing and storing files. Utilizing advanced encryption technology, SxpceDrive ensures your data remains private and protected, offering a seamless and reliable solution for all your file-sharing needs.",
      img: "/spxcedrive.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg"],
      link: "https://spxce.vercel.app/",
      message: "View Website"
    },
    {
      id: 3,
      title: "7EduPact - Decentralized Education",
      des: "A revolutionary platform transforming the education landscape by leveraging blockchain technology. 7EduPact enables secure, transparent, and decentralized learning environments, empowering educators and students to connect and collaborate globally while ensuring the integrity and accessibility of educational resources.",
      img: "/7edupact.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://7-edu-pact.vercel.app/",
      message: "View Website"
    },
    {
      id: 4,
      title: "Decentralized Agriculture Marketplace",
      des: "A cutting-edge platform revolutionizing the agricultural sector by connecting farmers, buyers, and suppliers directly through blockchain technology. This marketplace ensures transparency, fair pricing, and secure transactions, empowering farmers and streamlining the supply chain for agricultural products.",
      img: "/harvestchain.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
      message: "View Website"
    },
  ];
  
  export const team = [
    {
      quote:
          "Hello",
      name: "Karabo Kayak",
      title: "Software Dev",
    },
    {
      quote:
        "Welcome.",
      name: "Peter",
      title: "Researcher",
    },
    {
      quote:
        "Mr Luuuu",
      name: "Lucas",
      title: "Software Dev",
    },
    {
      quote:
        "Welcome",
      name: "Denzel",
      title: "Software Dev",
    },
    {
      quote:
        "Hello there",
      name: "Sandile",
      title: "Software Dev",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      link: "https://github.com/Africas-Blockchain-Club",
      img: "/git.svg",
    },
    {
      id: 2,
      link: "https://x.com/africasblock",
      img: "/twit.svg",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/company/africa-s-blockchain-club/",
      img: "/link.svg",
    },
  ];

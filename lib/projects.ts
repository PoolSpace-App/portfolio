// Project data types
export interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  category: string;
  slug: string;
  type: "freelance" | "permanent";
  details?: string;
  role?: string;
  duration?: string;
  year?: string;
  processDetails?: string[];
}

// Extract project data from portfolio page to be reused across the site
export const projectData: Record<number, Project> = {
  // Permanent Work (Dummy Projects)
  101: {
    id: 101,
    name: "nCino Smart Onboarding & Monitoring",
    tagline: "Modernizing digital banking experiences for millions of users.",
    description: "As a Senior Product Designer, I led the redesign of the nCino Smart Onboarding & Monitoring. Financial institutions face major challenges when onboarding commercial customers, driven by strict KYC and KYB regulations.",
    imageUrl: "/projects/ncino/onboarding-2.png",
    category: "Desktop Applications",
    slug: "ncino-onboarding",
    type: "permanent",
    details: "Redesigned the onboarding flow, reducing dropout rates by 25%. Implemented a new design system that unified the brand across all digital touchpoints.",
    role: "Senior Product Designer",
    duration: "2 years",
    year: "2021-2023",
    processDetails: [
      "Conducted extensive user research across multiple regions to identify pain points in international transfers.",
      "Collaborated with engineering teams to build a scalable component library using React and Tailwind.",
      "Presented design strategies to stakeholders, ensuring alignment with business goals and user needs."
    ]
  },
  102: {
    id: 102,
    name: "SICC (Search and Import Client from Core)",
    tagline: "Streamlining client onboarding for financial institutions.",
    description: "SICC (Search and Import Client from Core) is a featurethat allows financial institutions to search and import clients from their core banking system.",
    imageUrl: "/projects/docfox/final-4.png",
    category: "Desktop Applications",
    slug: "docfox-sicc",
    type: "permanent"
  },

  // Mobile Applications (9) - Freelance
  1: {
    id: 1,
    name: "CardSpace",
    tagline: "Your all-in-one loyalty app, for all your loyalty needs.",
    description: "CardSpace is a digital wallet platform for loyalty cards, gift cards, and rewards experiences, designed to replace the clutter of physical cards with a seamless, eco-friendly, and data-driven solution.",
    imageUrl: "/projects/cardspace/main.jpg",
    category: "Mobile Applications",
    slug: "cardspace",
    type: "freelance",
    details: "Users can: Scan and store loyalty cards in one app (no more carrying dozens of cards) and use digital cards at checkout via barcode scanning or tap-to-pay (coming soon).",
    role: "UX/UI Designer, AI/ML Engineer",
    duration: "12 months",
    year: "2024-25",
    processDetails: [
      "As, a mobile-first platform that digitizes physical loyalty and gift cards, CardSpace users scan, store, and redeem loyalty cards, eliminating the need to carry plastic cards. Businesses can create and manage digital loyalty programs, reducing printing costs and providing real-time insights.",
      "We also expored loyalty card scanning and storage, Virtual gift card system (SpaceGifts), Group contribution feature (CardSpace Pools), Business dashboard for tracking customer engagement, Eco-friendly and data-driven alternative to physical cards.",
      "I applied lean UX, worked across design and development using tools like React Native, Supabase, and AI-assisted design platforms to iterate quickly and reduce build costs."
    ]
  },
  2: {
    id: 2,
    name: "MyPerks",
    tagline: "Welcome to our world of customer and employee perks & incentives!",
    description: "MyPerks provides Kicks which are points organizations can use as incentives to unlock brand loyalty from their customers and employees.",
    imageUrl: "/projects/myperks/main.jpg",
    category: "Mobile Applications",
    slug: "myperks",
    type: "freelance",
    details: "MyPerks also provides a wide variety of rewards, guaranteeing that every employee can find something that truly resonates with their preferences.",
    role: "UX/UI Designer, AI/ML Engineer",
    duration: "4 - 6 months",
    year: "2024",
    processDetails: [
      "With their awesome retail partners, users could enjoy the rewards and treat themselves to something special!"
    ]
  },
  3: {
    id: 3,
    name: "LexMasFT Coal App",
    tagline: "Track, manage and summarize weekly deliveries and pickups of material (like coal, duff, pease and blend) via containers",
    description: "This App is ideal for Coal or bulk mineral operations, Transport & logistics companies and site supervisers needing real-time oversight of stock and container movements.",
    imageUrl: "/projects/lexmasft-coal-app/main.jpg",
    category: "Mobile Applications",
    slug: "lexmasft-coal-app",
    type: "freelance",
    details: "It is designed for businesses that handle bulk materials like coal.",
    role: "UX Researcher, User Testing & Designer",
    duration: "6 - 8 months",
    year: "2023 - 2024",
    processDetails: [
      "It provides a weekly summary of deliveries and pickups, showing the total weight moved, scheduled dates, and container details. Users can monitor current stock levels by material type and view a daily activity heatmap to track operations. With clear container logs and real-time updates, the app helps streamline scheduling, improve visibility, and ensure efficient coordination across delivery and pickup activities."
    ]
  },
  4: {
    id: 4,
    name: "MTN SelfCare App",
    tagline: "Empowring users with 24/7 access to manage their account Anytime, Anywhere",
    description: "Self Care app is a mobile application that enables MTN customers to perform high-value transactions, from simple account updates to paying bills, viewing and managing customer data and services, managing support tickets, and more.",
    imageUrl: "/projects/mtn-selfcare-app/main.jpg",
    category: "Mobile Applications",
    slug: "mtn-selfcare-app",
    type: "freelance",
    details: "MTN planned to launch a 24/7 internet-based Self Care app for all subscribers (prepaid and postpaid). ",
    role: "Research, User Testing, Prototyping & Product Designer",
    duration: "8 months",
    year: "2024",
    processDetails: [
      "MTN users will be able to: Manage accounts, view billing, and request service changes instantly, Track real-time usage for voice, data, and SMS, Access and subscribe to MTN-CI products and services, Change tariff plans and add value-added services anytime & Top up or recharge accounts online with ease"
    ]
  },
  5: {
    id: 5,
    name: "Vodacom RED Rewards",
    tagline: "Vodacom Red Rewards is a premium loyalty and benefits program designed for Vodacom Red customers in South Africa.",
    description:
      "Vodacom RED Rewards offers exclusive perks and experiences such as: Discounts and vouchers on travel, dining, lifestyle, entertainment, exclusive event access, like concerts or sports games. Vodacom RED also offers travel benefits, including airport lounge access and concierge services.",
    imageUrl: "/projects/vodacom-red-rewards/main.jpg",
    category: "Mobile Applications",
    slug: "vodacom-red-rewards",
    type: "freelance",
    details: "Vodacom Red Rewards also offers exclusive travel, lifestyle, digital, and connectivity perks.",
    role: "UI Designer & Brand Identity",
    duration: "3 months",
    year: "2025",
    processDetails: [
      "The new interface simplifies reward discovery, highlights monthly perks, and brings clarity to loyalty tiers and top partner deals. With a cleaner layout, vibrant visuals, and intuitive navigation, the redesign elevates the overall user journey while encouraging reward redemption and increased engagement with Vodacom's partner ecosystem."
    ]
  },
  6: {
    id: 6,
    name: "Notify.Gov",
    tagline: "Notify.Gov is a platform that connects citizens with government services.",
    description:
      "Notify.Gov is a platform that connects citizens with government services through secure identity verification methods, including two-factor authentication, biometric facial recognition, and secure image capture.",
    imageUrl: "/projects/notify.gov/main.jpg",
    category: "Mobile Applications",
    slug: "notify.gov",
    type: "freelance",
    details: "It allows users to receive notifications, report municipal issues, and access emergency services.",
    role: "Lead Designer",
    duration: "3 months",
    year: "2024",
    processDetails: [
      "A secure digital storage system enabling users to upload and manage personal documents, link to relatives and dependents, and view information such as credit scores and property details. An AI-powered virtual assistant that interacts with users to assess health, find qualified medical practitioners, book appointments, and monitor daily physical activity."
    ]
  },
  7: {
    id: 7,
    name: "Citizen C",
    tagline: "Your Daily Companion for Learning, Growth, and Wellbeing",
    description: "CitizenC is more than just a virtual school—it's a smart, supportive learning guide designed to meet students where they are.",
    imageUrl: "/projects/citizen-c/main.jpg",
    category: "Mobile Applications",
    slug: "citizen-c",
    type: "freelance",
    details: "CitizenC helps students stay engaged, confident, and organized. From personalized learning paths and career-focused goal setting to daily challenges, reminders, and mental health check-ins.",
    role: "Lead Designer",
    duration: "4 months",
    year: "2024",
    processDetails: [
      "Whether you're dreaming of becoming a game developer, a doctor, or an entrepreneur, CitizenC adapts to your strengths, helps you tackle your weak spots, and celebrates every win—big or small.",
      "Key Features:",
      "• Personalized learning guided by 'Edu,' your smart companion",
      "• Career goal setting based on student aspirations",
      "• Gamified challenges and a rewards passport system",
      "• Homework planner, reminders, and progress tracker",
      "• Emoji mood check-ins and daily tips/jokes to keep it light",
      "• Literacy boosters like 'Word of the Day' and 'Book of the Week'",
      "• Built-in access to psycho-social support and wellness resources",
      "• Collaborative study groups and discussion forums",
      "• Strong parental controls and data privacy for peace of mind"
    ]
  },

  // Desktop Applications (4) - Freelance
  10: {
    id: 10,
    name: "eTender Platform",
    tagline: "Creative workflow management for design teams.",
    description:
      "The eTender platform is a locally developed digital procurement system designed to streamline and automate the tendering process for both public and private sectors in South Africa.",
    imageUrl: "/projects/etender-platform/main.jpg",
    category: "Desktop Applications",
    slug: "etender-platform",
    type: "freelance",
    details: "Its primary audience is the public sector — including government departments, municipalities, and SOEs — while the secondary audience is private companies with procurement needs.",
    role: "Lead Designer",
    duration: "4 months",
    year: "2023",
    processDetails: [
      "The system addresses critical challenges faced by the public sector such as:",
      "• Non-compliance with procurement regulations",
      "• Manual, error-prone processes",
      "• Loss or mismanagement of physical documents",
      "• Inability to link procurement plans to actual spending",
      "• Over-invoicing and poor audit trails",
      "For the private sector, it solves the issue of reliance on costly and inflexible international systems not tailored to local needs.",
      "What makes this platform stand out is its deep local understanding — created by a procurement auditor with firsthand experience — and its affordability versus international solutions like SAP. The team is still defining the visual identity and tone but leans toward a friendly, casual communication style and seeks input on branding and UX inspiration.",
      "The goal is to build a clear, user-friendly system that not only reduces fraud and inefficiencies but also instills confidence and compliance across South African procurement ecosystems."
    ]
  },
  11: {
    id: 11,
    name: "Capitec Bank",
    tagline: "Simplified banking - banking that works for you.",
    description: "Lead UI designer, redesigning the Capitec Bank's digital banking platform",
    imageUrl: "/projects/capitec-bank/main.jpg",
    category: "Desktop Applications",
    slug: "capitec-bank",
    type: "freelance",
    details: "Capitec Bank is a South African commercial bank, and as of February 2024 the bank was the largest retail bank in South Africa.",
    role: "Lead UI Designer",
    duration: "3 months",
    year: "2023",
    processDetails: [
      "Focused purely on UI Design, working closely with UX designers, developers, and the product team.",
      "Redesigned core flows like home dashboard, transactions, accounts, and payments to improve clarity and reduce visual noise.",
      "Introduced modular design components to streamline future feature additions"
    ]
  },

  // Branding (2) - Freelance
  14: {
    id: 14,
    name: "TeamFinder",
    tagline: "The leading provider of tech talent solutions in Europe, expanding services to include AI-driven workforce integration across multiple industries.",
    description:
      "To revolutionise talent engagement by providing flexible, risk-free, and strategic talent solutions that empower businesses.",
    imageUrl: "/projects/teamfinder/main.jpg",
    category: "Branding",
    slug: "teamfinder",
    type: "freelance",
    details: "TeamFinder's Talent-as-a-Service (TaaS) platform specialises in tech industries, offering AI-driven talent matching and flexible contractual terms.",
    role: "Lead Designer – Branding & UI",
    duration: "4 months",
    year: "2024-25",
    processDetails: [
      "Defined the brand strategy and visual identity, reflecting TeamFinder’s positioning at the intersection of technology, flexibility, and human connection.",
      "Created a bold, tech-forward logo, color palette, and typography system to communicate trust, innovation, and adaptability.",
      "Designed UI concepts for key platform screens to ensure brand consistency across digital touchpoints."
    ]
  },
};

// Convert the object to an array for easier use in components
export const projectsArray: Project[] = Object.values(projectData); 

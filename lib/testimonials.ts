export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dean Benjamin",
    role: "Senior Product Manager",
    company: "Docfox",
    image: "/projects/ncino/dean.png",
    quote: "Mr.Q delivers clear, thoughtful UX solutions that balance user needs and business goals. Brings structure and clarity to complex product problems."
  },
  {
    id: 2,
    name: "Greg Meyer",
    role: "Product Manager",
    company: "Docfox",
    image: "/projects/ncino/greg.png",
    quote: "Mr.Q is easy to work with, highly collaborative, and always open to feedback. Communicates design decisions clearly and brings the team along. A calm, trusted design partner in fast-moving environments."
  },
  {
    id: 3,
    name: "Tim Akinnusi",
    role: "CEO/Co-Founder",
    company: "MortgageMarket",
    image: "/projects/ncino/tim.png",
    quote: "I was impressed by his methodical approach, creativity and ability to understand our business requirements."
  },
  {
    id: 4,
    name: "Manenga Mungandi",
    role: "Senior Software Engineer",
    company: "22Seven",
    image: "/projects/ncino/manenga.png",
    quote: "Mr.Q is a creative with fresh ideas and solid table tennis skills 🏓 he's a team player and highly skilled designer & photographer."
  },
  {
    id: 5,
    name: "Mathew Marsden",
    role: "Growing Africa's Tech Ecosystem 🚀",
    company: "Startup Club ZA",
    image: "/projects/ncino/mathew.png",
    quote: "Working with Mr.Q exceeded expectations. Building upon our wireframes and design ideas, he offered insightful UI/UX support, skilled design capability and timeous delivery."
  },
  {
    id: 6,
    name: "Sagi Chaitas",
    role: "UX Manager, UK",
    company: "Flight Centre Travel Group",
    image: "/projects/ncino/sagi.png",
    quote: "Mr.Q's designs are modern and imaginative, yet they take into account usefulness, UX approach, and business needs."
  },
  {
    id: 7,
    name: "Tami Ruschin",
    role: "Founder",
    company: "Style ID Africa",
    image: "/projects/ncino/tami.png",
    quote: "Mr.Q is extremely professional and was a great pleasure to work with when launch the Style ID Africa influencer platform. "
  },
  {
    id: 8,
    name: "Harley Furguson",
    role: "Co-Founder/CEO",
    company: "Origen",
    image: "/projects/ncino/harley.png",
    quote: "Mr.Q is by far the most talented designer that I've ever had the pleasure of working with. Beyond that, he is an incredible start up founder who is super innovative and loves to think outside the box."
  },
  {
    id: 9,
    name: "David Lazarus",
    role: "Product Manager",
    company: "Basalt",
    image: "/projects/ncino/david.png",
    quote: "Mr.Q has a very strong work ethic and understands clients requirements. In terms of his work he has a great eye for detail and is very good at problem solving."
  },
  {
    id: 10,
    name: "Anand Nagrick",
    role: "Lead Product Designer",
    company: "Whereismytransport",
    image: "/projects/ncino/anand.png",
    quote: "Mr.Q is a methodical product designer who has a flare for creating elegant ideas on complex data driven platforms. "
  }
];

export const coachingTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Tshepo Selepe",
    role: "UX/UI Designer",
    company: "Relocated to Cape Town",
    image: "/coaching/tshepo.png",
    quote: "The 2-month intensive coaching program was a game-changer for me. I mastered design thinking, AI workflows, and advanced prototyping. Two months later, I landed my dream job!"
  },
];

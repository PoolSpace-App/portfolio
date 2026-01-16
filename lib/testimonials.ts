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
    name: "Tim Akinnusi",
    role: "CEO/Co-Founder",
    company: "MortgageMarket",
    image: "/placeholder-user.jpg",
    quote: "I was impressed by his methodical approach, creativity and ability to understand our business requirements."
  },
  {
    id: 2,
    name: "Manenga Mungandi",
    role: "Senior Software Engineer",
    company: "22Seven",
    image: "/placeholder-user.jpg",
    quote: "Mr.Q is a creative with fresh ideas and solid table tennis skills 🏓 he's a team player and highly skilled designer & photographer."
  },
  {
    id: 3,
    name: "Mathew Marsden",
    role: "Growing Africa's Tech Ecosystem 🚀",
    company: "Startup Club ZA",
    image: "/placeholder-user.jpg",
    quote: "Working with Mr.Q exceeded expectations. Building upon our wireframes and design ideas, he offered insightful UI/UX support, skilled design capability and timeous delivery."
  },
  {
    id: 4,
    name: "Sagi Chaitas",
    role: "UX Manager, UK",
    company: "Flight Centre Travel Group",
    image: "/placeholder-user.jpg",
    quote: "Mr.Q's designs are modern and imaginative, yet they take into account usefulness, UX approach, and business needs."
  },
  {
    id: 5,
    name: "Tami Ruschin",
    role: "Founder",
    company: "Style ID Africa",
    image: "/placeholder-user.jpg",
    quote: "Mr.Q is extremely professional and was a great pleasure to work with when launch the Style ID Africa influencer platform. "
  },
  {
    id: 6,
    name: "Harley Furguson",
    role: "Co-Founder/CEO",
    company: "Origen",
    image: "/placeholder-user.jpg",
    quote: "Mr.Q is by far the most talented designer that I've ever had the pleasure of working with. Beyond that, he is an incredible start up founder who is super innovative and loves to think outside the box."
  },
  {
    id: 7,
    name: "David Lazarus",
    role: "Product Manager",
    company: "Basalt",
    image: "/placeholder-user.jpg",
    quote: "Mr.Q has a very strong work ethic and understands clients requirements. In terms of his work he has a great eye for detail and is very good at problem solving."
  },
  {
    id: 8,
    name: "Anand Nagrik",
    role: "Lead Product Designer",
    company: "Whereismytransport",
    image: "/placeholder-user.jpg",
    quote: "Mr.Q is a methodical product designer who has a flare for creating elegant ideas on complex data driven platforms. "
  }
];

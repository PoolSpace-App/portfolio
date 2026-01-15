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
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "TechFlow",
    image: "/placeholder-user.jpg",
    quote: "A rare talent who combines deep design thinking with a practical understanding of business goals."
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Head of Engineering",
    company: "ScaleUp",
    image: "/placeholder-user.jpg",
    quote: "He doesn't just design interfaces; he builds systems that scale and solves complex user problems elegantly."
  },
  {
    id: 4,
    name: "Amanda Dlamini",
    role: "Creative Director",
    company: "Visionary Studio",
    image: "/placeholder-user.jpg",
    quote: "His ability to synthesize user research into intuitive design patterns is truly remarkable."
  },
  {
    id: 5,
    name: "David Smith",
    role: "Founder",
    company: "SwiftPay",
    image: "/placeholder-user.jpg",
    quote: "Working with him was a game-changer for our MVP. We shipped faster and with more confidence."
  },
  {
    id: 6,
    name: "Jessica Taylor",
    role: "VP of Product",
    company: "EcoNexus",
    image: "/placeholder-user.jpg",
    quote: "Precision, speed, and a great eye for detail. Exactly what we needed for our rebranding effort."
  },
  {
    id: 7,
    name: "Robert Mokoena",
    role: "Marketing Lead",
    company: "Connectify",
    image: "/placeholder-user.jpg",
    quote: "The design work delivered exceeded our expectations and significantly improved our conversion rates."
  },
  {
    id: 8,
    name: "Elena Rodriguez",
    role: "Lead Researcher",
    company: "InnoLabs",
    image: "/placeholder-user.jpg",
    quote: "A collaborative partner who truly listens and translates complex data into simple, beautiful experiences."
  }
];

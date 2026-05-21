import { bookCategoryById, type BookCategory } from "./book-categories"

export type { BookCategory }
export { BOOK_CATEGORY_ORDER } from "./book-categories"

export interface Book {
  id: string
  title: string
  author: string
  description: string
  imageUrl: string
  link: string
  category: BookCategory
}

const placeholder = "/placeholder.jpg"

export const books: Book[] = [
  {
    id: "lean-ux",
    title: "Lean UX",
    author: "Jeff Gothelf & Josh Seiden",
    description:
      "How to apply lean principles to user experience design — focusing on outcomes, collaboration, and rapid learning over heavy deliverables.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Lean-UX-Designing-Products-Agile/dp/1491953604",
  },
  {
    id: "design-of-everyday-things",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    description:
      "A foundational read on usability, affordances, and how people interact with the objects and interfaces around them.",
    imageUrl: "/cover-image.png",
    link: "https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654",
  },
  {
    id: "sprint",
    title: "Sprint",
    author: "Jake Knapp",
    description:
      "A practical guide to solving big problems and testing ideas in five days — useful for product teams moving fast with limited time.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Sprint-Solve-Problems-Test-Ideas/dp/150112174X",
  },
  {
    id: "good-to-great",
    title: "Good to Great",
    author: "Jim Collins",
    description:
      "Why some companies make the leap to sustained excellence while others do not — and the disciplined habits that separate them.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Good-Great-Some-Companies-Others/dp/0066620996",
  },
  {
    id: "great-by-choice",
    title: "Great by Choice",
    author: "Jim Collins & Morten T. Hansen",
    description:
      "How great leaders and teams thrive through uncertainty, chaos, and luck by combining discipline, empiricism, and productive paranoia.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Great-Choice-Uncertainty-Luck-Why/dp/0062120999",
  },
  {
    id: "no-limits",
    title: "No Limits",
    author: "John C. Maxwell",
    description:
      "A guide to blowing the cap off your capacity by developing the mindset and habits that unlock greater personal and professional growth.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/No-Limits-Blow-Cap-Your/dp/1455555355",
  },
  {
    id: "the-winning-attitude",
    title: "The Winning Attitude",
    author: "John C. Maxwell",
    description:
      "Practical principles for cultivating optimism, resilience, and a constructive outlook that fuels leadership and influence.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Winning-Attitude-Your-Pathway-Personal/dp/0785288925",
  },
  {
    id: "developing-the-leader-around-you",
    title: "Developing the Leader Around You",
    author: "John C. Maxwell",
    description:
      "How to identify, mentor, and multiply leaders on your team so growth scales beyond what one person can carry alone.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Developing-Leader-Around-You-Maxwell/dp/0785263663",
  },
  {
    id: "becoming-a-person-of-influence",
    title: "Becoming a Person of Influence",
    author: "John C. Maxwell & Jim Dornan",
    description:
      "How to positively impact others through integrity, nurturing, faith, listening, understanding, enlarging, navigating, and connecting.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Becoming-Person-Influence-John-Maxwell/dp/0785266662",
  },
  {
    id: "no-rules-rules",
    title: "No Rules Rules",
    author: "Reed Hastings & Erin Meyer",
    description:
      "Netflix's unconventional culture of freedom and responsibility — and what it teaches about building high-performance teams.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/No-Rules-Netflix-Culture-Reinvention/dp/1984877860",
  },
  {
    id: "rediscovering-the-kingdom",
    title: "Rediscovering the Kingdom",
    author: "Myles Munroe",
    description:
      "A exploration of kingdom principles and purpose — reframing how faith, leadership, and identity shape a meaningful life.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Rediscovering-Kingdom-Expanded-Edition-Munroe/dp/0768423600",
  },
  {
    id: "retire-rich-through-property",
    title: "Retire Rich Through Property",
    author: "Jason Lee",
    description:
      "How to fast-forward retirement by building a property portfolio tailored to South African investors and long-term wealth.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Retire-Rich-Through-Property-South-Africa/dp/1770227751",
  },
  {
    id: "the-billionaire-mindset",
    title: "The Billionaire Mindset",
    author: "Daniel Strauss",
    description:
      "Secrets from a South African entrepreneur on thinking above the line, accessing capital, and building wealth through mindset.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/dp/0624090346",
  },
  {
    id: "making-money-out-of-property",
    title: "Making Money Out of Property in South Africa",
    author: "Jason Lee",
    description:
      "A practical guide to finding deals, financing, and structuring property investments for sustainable returns in South Africa.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Making-Money-Property-South-Africa/dp/1770070982",
  },
  {
    id: "the-diary-of-a-ceo",
    title: "The Diary of a CEO",
    author: "Steven Bartlett",
    description:
      "Frameworks and hard-won lessons on building businesses, leading teams, and making better decisions under pressure.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Diary-CEO-33-Laws-Business/dp/0593593710",
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "Tiny changes, remarkable results — a proven system for building good habits, breaking bad ones, and mastering consistency.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
  },
  {
    id: "the-lean-startup",
    title: "The Lean Startup",
    author: "Eric Ries",
    description:
      "How constant experimentation, validated learning, and iterative product development help startups innovate under uncertainty.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898",
  },
  {
    id: "influence",
    title: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini",
    description:
      "The classic breakdown of reciprocity, commitment, social proof, authority, liking, and scarcity in how people say yes.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Influence-New-Expanded-Psychology-Persuasion/dp/006124189X",
  },
  {
    id: "his-needs-her-needs",
    title: "His Needs, Her Needs",
    author: "Willard F. Harley Jr.",
    description:
      "Building an affair-proof marriage by understanding and meeting each partner's core emotional needs with intention.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/His-Needs-Her-Building-Affair-Proof/dp/0800719389",
  },
  {
    id: "real-artists-dont-starve",
    title: "Real Artists Don't Starve",
    author: "Jeff Goins",
    description:
      "Timeless strategies for thriving creatively — combining discipline, community, and smart business thinking without selling out.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Real-Artists-Dont-Starve-Creative/dp/0718086575",
  },
  {
    id: "21-irrefutable-laws-of-leadership",
    title: "The 21 Irrefutable Laws of Leadership",
    author: "John C. Maxwell",
    description:
      "Foundational leadership laws — from influence and process to respect and timing — illustrated through stories and examples.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/21-Irrefutable-Laws-Leadership-Follow/dp/0785288372",
  },
  {
    id: "think-remarkable",
    title: "Think Remarkable",
    author: "Guy Kawasaki & Madisun Nuismer",
    description:
      "Nine paths to transform your life and make a difference — drawn from interviews with extraordinary builders and thinkers.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Think-Remarkable-Paths-Transform-Difference/dp/1394245229",
  },
  {
    id: "how-the-mighty-fall",
    title: "How the Mighty Fall",
    author: "Jim Collins",
    description:
      "Stages of decline that bring great companies down — and how leaders can spot warning signs before irreversible damage.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/How-Mighty-Fall-Companies-Decline/dp/0066620102",
  },
  {
    id: "think-and-grow-rich",
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    description:
      "A landmark on desire, faith, persistence, and organized planning as the mental foundations of achievement and wealth.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Think-Grow-Rich-Landmark-Updated/dp/1585424331",
  },
  {
    id: "i-thought-it-was-just-me",
    title: "I Thought It Was Just Me (But It Isn't)",
    author: "Brené Brown",
    description:
      "Research on shame, empathy, and connection — and how speaking honestly about struggle helps us live more wholeheartedly.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/I-Thought-Was-Just-Isnt/dp/1592403352",
  },
  {
    id: "thinking-for-a-change",
    title: "Thinking for a Change",
    author: "John C. Maxwell",
    description:
      "Eleven thinking skills that improve decision-making, creativity, and strategic clarity for leaders at every level.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Thinking-Change-11-Ways-People/dp/0446676754",
  },
  {
    id: "men-are-from-mars-women-are-from-venus",
    title: "Men Are from Mars, Women Are from Venus",
    author: "John Gray",
    description:
      "A classic guide to understanding communication differences and building stronger relationships across common gender patterns.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Men-Mars-Women-Venus-Communication/dp/0060574216",
  },
  {
    id: "talking-to-strangers",
    title: "Talking to Strangers",
    author: "Malcolm Gladwell",
    description:
      "Why we misread people we do not know — and what high-profile failures teach us about trust, deception, and default assumptions.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Talking-Strangers-What-Should-about/dp/0316456070",
  },
  {
    id: "start-with-why",
    title: "Start With Why",
    author: "Simon Sinek",
    description:
      "Great leaders inspire action by starting with purpose — the why behind what they do, not just what or how.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone/dp/1591846447",
  },
  {
    id: "things-i-wish-id-known-before-we-got-married",
    title: "Things I Wish I'd Known Before We Got Married",
    author: "Gary Chapman",
    description:
      "Honest advice on expectations, communication, finances, and in-laws to help couples build a stronger foundation before and after marriage.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Things-Wish-Known-Before-Married/dp/0802481833",
  },
  {
    id: "the-richest-man-who-ever-lived",
    title: "The Richest Man Who Ever Lived",
    author: "Steven K. Scott",
    description:
      "King Solomon's wisdom applied to modern life — principles for success in work, relationships, finances, and personal growth.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Richest-Man-Who-Ever-Lived/dp/0767397587",
  },
  {
    id: "the-art-of-the-start",
    title: "The Art of the Start 2.0",
    author: "Guy Kawasaki",
    description:
      "A hands-on guide to launching ideas — from positioning and pitching to bootstrapping, recruiting, and shipping with momentum.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Art-Start-2-0-Time-Tested/dp/0544272993",
  },
  {
    id: "the-talent-code",
    title: "The Talent Code",
    author: "Daniel Coyle",
    description:
      "How deep practice, ignition, and master coaching grow skill in music, sport, and business — talent as a built, not born, thing.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Talent-Code-Greatness-Born-Grows/dp/0345519856",
  },
  {
    id: "zero-to-one",
    title: "Zero to One",
    author: "Peter Thiel & Blake Masters",
    description:
      "Notes on startups and building the future — why creating something new beats competing in crowded markets.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
  },
  {
    id: "changes-that-heal",
    title: "Changes That Heal",
    author: "Dr. Henry Cloud",
    description:
      "Four practical shifts — connecting, boundaries, distinguishing good and bad, and growing up — for emotional and relational healing.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Changes-That-Heal-Complete-Integrated/dp/0316035892",
  },
  {
    id: "power",
    title: "Power",
    author: "Robert Greene",
    description:
      "Forty-eight laws distilled from history's strategists — a sharp, often unsettling study of how power is gained, kept, and lost.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Power-Robert-Greene/dp/0143115277",
  },
  {
    id: "developing-the-leader-within-you",
    title: "Developing the Leader Within You 2.0",
    author: "John C. Maxwell",
    description:
      "Updated principles for self-leadership — character, influence, priorities, and growth as the base for leading others well.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/Developing-Leader-Within-You-2-0/dp/1400203956",
  },
  {
    id: "how-to-read-the-bible-for-all-its-worth",
    title: "How to Read the Bible for All Its Worth",
    author: "Gordon D. Fee & Douglas Stuart",
    description:
      "A clear guide to interpreting Scripture by genre — narrative, poetry, prophecy, Gospels, and letters — with sound hermeneutics.",
    imageUrl: placeholder,
    link: "https://www.amazon.com/How-Read-Bible-All-Worth/dp/0310091148",
  },
].map((book) => ({
  ...book,
  category: bookCategoryById[book.id],
}))

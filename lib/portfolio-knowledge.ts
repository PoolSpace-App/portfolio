export type PortfolioAnswer = {
  headline: string
  body: string
  focus: string
}

export type PortfolioQa = PortfolioAnswer & {
  question: string
  keywords: string[]
}

function normalizeQuestion(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9&]+/g, " ").trim()
}

export const portfolioAnswers: PortfolioQa[] = [
  {
    question: "Give me the 30-second version",
    keywords: ["30", "second", "overview", "summary", "who is"],
    headline: "",
    focus: "30-second version",
    body: `Nqobile Vundla is a Senior Product Designer and product builder with 10+ years of experience designing complex digital products across fintech, banking, SaaS and startups.

He currently works at nCino, following its acquisition of DocFox, designing enterprise financial products used within complex banking and regulatory environments.

Increasingly, he works as a Product Designer who can build — moving from product strategy and UX through interface design, APIs, AI workflows and working software.

Outside his core role, he's built and launched his own products, including CardSpace, which grew to approximately 15,000 users, and has worked on AI-powered financial experiences such as Mortgage Market's Zero Capture.

His sweet spot is 0→1 products, complex systems and turning difficult problems into simple experiences.`,
  },
  {
    question: "Why should I hire Nqobile?",
    keywords: ["hire", "why"],
    headline: "",
    focus: "Why hire him",
    body: `Hire Nqobile if you need someone who can operate beyond the traditional boundaries of product design.

He can take an ambiguous problem, understand the business and user constraints, define the product experience, design the system, prototype it and work closely enough with the technical implementation to help get it shipped.

He has experience on both sides of product development: large, regulated financial software and small 0→1 products where he has had to find users, test assumptions, make commercial decisions and build the product himself.

He's comfortable working directly with product managers, founders and engineers rather than treating design as a separate function.

His strongest areas are complex UX, fintech, AI-native products, 0→1 product development and product engineering.`,
  },
  {
    question: "Can Nqobile actually code?",
    keywords: ["code", "coding", "engineer", "technical", "build"],
    headline: "",
    focus: "Can he code",
    body: `Yes — although Nqobile doesn't position himself as a traditional software engineer.

He's a product designer who increasingly builds the products he designs.

He works with technologies including React, Next.js, TypeScript, React Native/Expo, Supabase, Convex, Clerk, APIs, Stripe and GitHub, alongside AI development tools such as Cursor.

On projects such as Mortgage Market, his involvement has moved beyond Figma into the actual application, including working with the existing codebase, backend integrations and APIs.

This allows him to prototype ideas at much higher fidelity, understand engineering constraints and increasingly take features from:

Idea → UX → Interface → Working implementation

It also changes the relationship he has with engineers. Instead of simply handing over designs, he can participate in conversations about how the product should actually be implemented.`,
  },
  {
    question: "What has Nqobile actually shipped?",
    keywords: ["shipped", "ship", "built", "cardspace", "poolspace", "brandspace"],
    headline: "",
    focus: "What he's shipped",
    body: `Nqobile's work spans enterprise financial software, consumer products and products he's helped build from scratch.

At nCino and DocFox, he's worked on complex banking and regulatory products involving onboarding, KYC/KYB, screening and monitoring.

He co-founded CardSpace, a consumer loyalty product that grew to approximately 15,000 users.

For Mortgage Market, he worked on Zero Capture — using documents and AI to replace a roughly 20-step, 20–30 minute financial application experience with a journey that can take the customer under two minutes.

He's also built products such as PoolSpace and is exploring API-driven loyalty through BrandSpace.

The common thread is taking complicated underlying systems and making them considerably simpler for users.`,
  },
  {
    question: "What banking & fintech experience does he have?",
    keywords: ["banking", "fintech", "bank", "kyc", "ncino", "docfox", "22seven"],
    headline: "",
    focus: "Banking & fintech",
    body: `Nqobile has spent a significant part of his career designing products in banking and financial technology, spanning consumer fintech, RegTech, lending, onboarding and enterprise banking software.

Before nCino, he worked at DocFox, a South African-founded RegTech company focused on helping financial institutions manage KYC, AML and customer onboarding. This gave him deep exposure to the complexity behind financial compliance, identity verification and regulated onboarding.

Following nCino's acquisition of DocFox, Nqobile continued into nCino, where he now works on enterprise banking software involving onboarding, KYC/KYB, screening, monitoring and regulatory workflows, collaborating with product and engineering teams across the UK and US.

His broader fintech experience includes 22seven in personal financial management, Mortgage Market in home loans and AI-powered financial onboarding, and CardSpace, the loyalty platform he co-founded and grew to approximately 15,000 users.

Together, this gives him experience across the financial-services spectrum — from consumer fintech and startups to RegTech and complex enterprise banking infrastructure.`,
  },
  {
    question: "Show me Nqobile's AI work",
    keywords: ["ai", "zero capture", "mortgage"],
    headline: "",
    focus: "AI work",
    body: `Nqobile is interested in AI primarily as a way of removing work, rather than adding an AI button to an existing interface.

A good example is Mortgage Market's Zero Capture.

Instead of asking customers to manually complete a long financial application, customers provide documents and the system uses AI to extract and structure the information required for the application.

He's also explored AI document analysis, structured data extraction, agentic workflows and interfaces where users express an intention and the software determines the workflow required to accomplish it.

His broader product thesis is simple:

If the system can obtain or infer information reliably, the user shouldn't have to type it into another form.`,
  },
  {
    question: "What makes Nqobile different from other Senior Product Designers?",
    keywords: ["different", "differentiate", "other", "unique"],
    headline: "",
    focus: "What makes him different",
    body: `Nqobile sits in the overlap between designer, product thinker, founder and increasingly product engineer.

He has the design maturity that comes from more than a decade in product, including experience with enterprise banking systems, but he's also comfortable opening a codebase, connecting an API, working with a database or building a functioning product himself.

He's also founded products, which changes how he approaches design. A beautiful interface means very little if nobody wants the product.

His work therefore tends to consider the complete system:

Is this a real problem? → Should we build it? → How should it work? → Can we simplify it? → Can we ship it? → Are people actually using it?`,
  },
  {
    question: "What kind of problems is Nqobile best at?",
    keywords: ["problems", "best at", "strongest", "complex"],
    headline: "",
    focus: "Problems he's best at",
    body: `Nqobile is strongest when the problem is complex but the experience needs to feel simple.

That includes financial workflows, onboarding, large forms, document-heavy processes, enterprise SaaS, AI-assisted workflows and products involving multiple systems or APIs.

He's particularly comfortable when the brief isn't completely defined.

Rather than starting with screens, he'll usually try to understand the underlying system first: users, business model, constraints, data, technology and the actual job the customer is trying to accomplish.

Then he works backwards toward the simplest product experience.`,
  },
  {
    question: "What kind of role is Nqobile looking for?",
    keywords: ["role", "looking", "job", "staff", "principal", "founding"],
    headline: "",
    focus: "Role he's looking for",
    body: `Nqobile is particularly interested in Senior, Staff, Principal or founding-level product roles where he can operate with substantial ownership.

The strongest fit would involve some combination of AI, fintech, complex SaaS, 0→1 product development or design engineering.

He's especially interested in organisations where designers work closely with engineering and product strategy rather than being limited to producing design artefacts.

International and remote teams are a natural fit given his experience working across geographically distributed product and engineering teams.`,
  },
]

export const suggestedPortfolioQuestions = portfolioAnswers.map((item) => item.question)

export const portfolioKnowledge = portfolioAnswers
  .map((item) => `Q: ${item.question}\nA: ${item.body}`)
  .join("\n\n")

export function getExactPortfolioAnswer(question: string): PortfolioAnswer | null {
  const query = normalizeQuestion(question)
  const match = portfolioAnswers.find((item) => normalizeQuestion(item.question) === query)

  if (!match) return null

  return {
    headline: match.headline,
    body: match.body,
    focus: match.focus,
  }
}

export function getLocalPortfolioAnswer(question: string): PortfolioAnswer {
  const exact = getExactPortfolioAnswer(question)
  if (exact) return exact

  const query = normalizeQuestion(question)
  let best = portfolioAnswers[0]
  let bestScore = 0

  for (const answer of portfolioAnswers) {
    const score = answer.keywords.filter((keyword) => query.includes(keyword)).length
    if (score > bestScore) {
      best = answer
      bestScore = score
    }
  }

  return {
    headline: best.headline,
    body: best.body,
    focus: best.focus,
  }
}

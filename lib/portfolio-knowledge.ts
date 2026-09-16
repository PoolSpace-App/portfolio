export const portfolioKnowledge = `
Nqobile Vundla, also known as Mr.Q, is a Johannesburg-based Senior Product Designer and product builder with 10+ years of experience across fintech, banking, enterprise SaaS, consumer technology, payments, loyalty, mobility and AI-powered products.

His positioning: Senior Product Designer and product builder operating at the intersection of product design, engineering and AI. He specialises in taking complex products, from regulated banking platforms to early-stage startups, from ambiguous ideas to working software.

Current work: Nqobile currently works as a Senior Product Designer at nCino, having joined through DocFox. His work centres around complex financial-services software, especially customer onboarding, KYC/KYB, screening, monitoring and compliance workflows. He collaborates with product and engineering teams across international teams including the UK and US. This work has made complex information architecture and enterprise workflows one of his strongest capabilities.

Mortgage Market / Zero Capture: Nqobile has worked on AI-led financial-product application flows. The Zero Capture idea replaces long repeated forms with document upload and AI extraction. Instead of asking customers for information already inside documents, AI extracts and structures the relevant information automatically. This can reduce a roughly 20-step, 20-30 minute form journey to under two minutes. He also worked with backend, APIs and integrations such as TIH/Telesure.

CardSpace: Nqobile was a co-founder and product builder behind CardSpace, a digital loyalty product that grew to approximately 15,000 users. The product explored digital loyalty, vouchers, QR redemption and merchant tooling. It shows he has built products and had to convince real people to use them, thinking about acquisition, onboarding, retention, pricing, trust, merchant behaviour and product economics.

BrandSpace: BrandSpace is an evolution of his loyalty thinking: digital loyalty infrastructure that is easier for small businesses to adopt, with API-based integrations and a broader interest in interoperable loyalty.

PoolSpace: Nqobile founded and built PoolSpace around shared household finances and roommate living. He has worked across product strategy, positioning, UX, UI, pricing, authentication, databases, payments architecture, onboarding and frontend development.

Earlier career: His background includes work connected with 22seven, WhereIsMyTransport and other technology businesses spanning mobility, fintech, platforms and consumer products. His earlier work included StyleID Africa, which grew to a community of more than 20,000 influencers.

How he works: Nqobile is not purely a UI designer. He thinks in terms of problem, system, workflow, interface, implementation and measurement. He enjoys ambiguous problems where the solution has not already been defined. He works best in environments with high ownership and relatively low bureaucracy. He values direct feedback and cares more about making the product better than protecting a design artifact.

Product engineering and AI: His toolkit includes Next.js, React, React Native, Expo, TypeScript, Supabase, Clerk, Convex, Stripe, GitHub and AI coding tools such as Cursor. He does not position himself as a traditional software engineer with a computer-science background, but uses technical fluency and AI-assisted development to remove the boundary between designing something and building it.

AI philosophy: Nqobile is interested in what happens when AI stops being a feature and starts changing how software itself works. A recurring idea is removing unnecessary human data entry. If information already exists in a bank statement, payslip, identity document or another system, why ask someone to type it again?

Problems that interest him: fintech and financial infrastructure, AI-native software, complex SaaS, 0 to 1 products, small-business infrastructure and design engineering.

What differentiates him: the combination of 10+ years of product-design judgement, enterprise financial software experience, founder/product-building experience and the ability to prototype and increasingly build the products he designs.
`

export const suggestedPortfolioQuestions = [
  "Why should I hire Nqobile?",
  "Can he actually code?",
  "Show me his AI work",
  "Tell me about CardSpace",
  "What banking experience does he have?",
  "Give me the 30-second version",
]

export function getLocalPortfolioAnswer(question: string) {
  const query = question.toLowerCase()

  if (query.includes("code") || query.includes("engineer") || query.includes("technical")) {
    return {
      headline: "Yes. He is not pretending to be a traditional CS-background engineer, but he is technically fluent and ships.",
      body:
        "Nqobile works across Next.js, React, React Native, Expo, TypeScript, Supabase, Clerk, Convex, Stripe, APIs and databases. His edge is collapsing the distance between product thinking, UX and working software.",
      focus: "Product Designer / Product Engineer hybrid",
    }
  }

  if (query.includes("bank") || query.includes("fintech") || query.includes("kyc") || query.includes("ncino")) {
    return {
      headline: "His strongest domain experience is complex financial software.",
      body:
        "At nCino and DocFox, he works on onboarding, KYC/KYB, screening, monitoring and compliance workflows where usability has to coexist with regulation, business rules and technical constraints.",
      focus: "Fintech, compliance and enterprise SaaS",
    }
  }

  if (query.includes("ai") || query.includes("zero") || query.includes("mortgage")) {
    return {
      headline: "His AI thesis is simple: stop asking people to type information the system can already understand.",
      body:
        "On Mortgage Market's Zero Capture work, he explored AI-led document extraction to reduce a long mortgage application journey from roughly 20 steps and 20-30 minutes to under two minutes.",
      focus: "AI replacing forms and manual work",
    }
  }

  if (query.includes("cardspace") || query.includes("founder") || query.includes("startup") || query.includes("0")) {
    return {
      headline: "He has founder scars, which is useful.",
      body:
        "CardSpace reached about 15,000 users and forced him to think beyond UI: acquisition, onboarding, merchant behavior, trust, pricing and product economics. PoolSpace and BrandSpace continue that builder pattern.",
      focus: "0 to 1 product building",
    }
  }

  if (query.includes("hire") || query.includes("founder") || query.includes("talk")) {
    return {
      headline: "Talk to him if you need someone who can make ambiguous product problems tangible quickly.",
      body:
        "He brings senior design judgement, systems thinking and enough technical fluency to prototype, test and iterate without waiting for every idea to pass through a long handoff chain.",
      focus: "Strategy to shipped product",
    }
  }

  return {
    headline: "Nqobile is a Senior Product Designer and product builder operating where product design, engineering and AI overlap.",
    body:
      "He has 10+ years across fintech, banking, enterprise SaaS, loyalty, mobility and AI-powered products, with a bias toward reducing complexity and getting real software in front of users.",
    focus: "Senior Product Designer + builder",
  }
}

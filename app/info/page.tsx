import MyValues from "@/components/my-values"
import PortfolioBleedLine from "@/components/portfolio-bleed-line"
import { InfoAboutLayout } from "@/components/info-about-layout"

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="portfolio-dot-grid relative bg-white">
        <PortfolioBleedLine />

        <div className="portfolio-layout-guides relative mx-auto w-full py-10 lg:py-14">
          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-top portfolio-border-x bg-white p-8 md:p-10 lg:p-12">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                About
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
                Product designer with 10+ years shipping digital products across fintech, travel,
                health, and emerging technologies.
              </p>
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-y overflow-visible portfolio-border-x bg-white">
              <InfoAboutLayout>
                <p data-about-animate="load" className="mb-6">
                  I&apos;m a Product Designer with 10+ years of experience designing and shipping
                  digital products across fintech, travel, health, and emerging technologies.
                </p>
                <p data-about-animate="load" className="mb-6">
                  Since 2013, I&apos;ve partnered with startups, scale-ups, and enterprise teams to
                  create thoughtful, scalable user experiences — blending UX, product strategy, and
                  modern AI-assisted workflows to move products from idea to launch faster.
                </p>
                <p data-about-animate="load" className="mb-6">
                  My work spans everything from early discovery and prototyping to production-ready
                  platforms used by real teams and millions of users. Recently, I&apos;ve been
                  focused on the intersection of design and AI, exploring how intelligent tooling
                  can accelerate product development, improve workflows, and reshape how modern
                  digital products are built.
                </p>
                <p data-about-animate="load" className="mb-6">
                  I enjoy working closely with founders, product teams, and engineers in lean,
                  collaborative environments where speed, clarity, and execution matter.
                </p>
                <p data-about-animate="load" className="mb-6">
                  Currently, I&apos;m a Senior Product Designer at nCino (formerly DocFox), helping
                  shape digital banking experiences for financial institutions through scalable
                  onboarding, compliance, and customer management platforms used globally.
                </p>

                <div
                  data-about-animate="load"
                  className="mt-12 font-mono text-xs uppercase tracking-[0.18em] text-slate-400"
                >
                  Contact
                </div>
                <p data-about-animate="load" className="mt-4">
                  Feel free to reach out to me at{" "}
                  <a
                    href="mailto:nqovun@gmail.com"
                    className="underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-900 hover:decoration-slate-900"
                  >
                    nqovun@gmail.com
                  </a>{" "}
                  or connect with me on{" "}
                  <a
                    href="https://www.linkedin.com/in/mrq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-900 hover:decoration-slate-900"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              </InfoAboutLayout>
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-bottom overflow-visible portfolio-border-x bg-white">
              <MyValues />
            </div>
          </div>

          <PortfolioBleedLine />
        </div>
      </section>
    </main>
  )
}

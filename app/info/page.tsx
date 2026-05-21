import MyValues from "@/components/my-values"
import GridLinesBackground from "@/components/grid-lines-background"
import { InfoAboutLayout } from "@/components/info-about-layout"

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-[#050510]">
      <div className="relative overflow-hidden">
        <GridLinesBackground variant="dark" fade="bottom" />
        <div className="relative z-10">
          <InfoAboutLayout>
            <div data-about-animate="load" className="text-3xl font-light mb-8">
              About Me
            </div>
            <div>
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
                platforms used by real teams and millions of users. Recently, I&apos;ve been focused
                on the intersection of design and AI, exploring how intelligent tooling can
                accelerate product development, improve workflows, and reshape how modern digital
                products are built.
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
            </div>

            <div data-about-animate="load" className="text-2xl font-light mt-12 mb-4">
              Contact
            </div>
            <div className="mb-8">
              <p data-about-animate="load" className="mb-6">
                Feel free to reach out to me at{" "}
                <a href="mailto:nqovun@gmail.com" className="underline hover:text-white/80">
                  nqovun@gmail.com
                </a>{" "}
                or connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/mrq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white/80"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </InfoAboutLayout>
        </div>
      </div>

      <div className="pb-32">
        <MyValues />
      </div>
    </div>
  )
}

import Navbar from "@/components/navbar"
import Logo from "@/components/logo"
import MyValues from "@/components/my-values"

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-[#050510]">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Navbar />
      </header>
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-3xl font-light mb-8">About Me</div>
          <div>
            <p className="mb-6">
              I'm an experienced product designer with over a decade of experience creating high-impact digital products. Since 2013, I've collaborated with brilliant teams across Fintech, Travel, Health, and Blockchain—building intuitive, user-centred solutions that matter.
            </p>
            <p className="mb-6">
            Lately, I've been diving deep into the intersection of design and AI—exploring how intelligent tools can enhance creativity, speed up workflows, and shape the future of product development. I'm excited about how AI is reshaping design, and I actively incorporate it into my process to stay ahead.
            </p>
            <p className="mb-6">
            I thrive in collaborative environments, whether brainstorming on paper or prototyping in pixels. I adapt easily, believe in lean principles, and love seeing a product through from concept to launch. Above all, I care deeply about crafting experiences that are meaningful, scalable, and beautifully simple.
            </p>
          </div>
        </div>
      </div>

      <MyValues />

      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-2xl font-light mb-8">Current Work Experience</div>
          <div className="space-y-10">
            <div>
              <div className="font-medium">Senior Product Designer (UX/UI) - nCino Inc formerly DocFox</div>
              <div className="text-gray-400 text-sm mb-2">Oct 2022 - Present</div>
              <p>
              nCino is a cloud-based financial technology company that offers a comprehensive digital banking platform built on Salesforce. Our solutions streamline various banking operations, including loan origination, account opening, customer relationship management, and compliance tracking. 
              </p>
              <p>
              Product Designers at nCino play a crucial role in shaping the user experience of the company's digital banking solutions. ctional teams, including engineers and product managers, to bring designs to life. 
              </p>
              <p>
              By focusing on user-centric design, Product Designers at nCino ensure that the platform meets the diverse needs of financial institutions and their customers.
              </p>
            </div>
          </div>

          <div className="text-2xl font-light mt-12 mb-4">Contact</div>
          <div className="mb-24">
            <p className="mb-6">
              Feel free to reach out to me at <a href="mailto:nqovun@gmail.com" className="underline">nqovun@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/mrq/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

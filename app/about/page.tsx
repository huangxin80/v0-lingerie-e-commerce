import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdf2f6]">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif tracking-wide text-burgundy-800">
              One More
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/collections" className="text-sm font-medium hover:text-burgundy-700 transition-colors">
                Collections
              </Link>
              <Link href="/new-arrivals" className="text-sm font-medium hover:text-burgundy-700 transition-colors">
                New Arrivals
              </Link>
              <Link href="/bestsellers" className="text-sm font-medium hover:text-burgundy-700 transition-colors">
                Bestsellers
              </Link>
              <Link href="/about" className="text-sm font-medium text-burgundy-700 transition-colors">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-burgundy-700">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-burgundy-700">Our Story</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-plum-100 to-burgundy-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-burgundy-900 mb-6">Our Story</h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At One More, we believe that true beauty begins with wellness. Our journey started with a simple yet
              powerful vision: to create intimate apparel that celebrates women's bodies while prioritizing their health
              and comfort.
            </p>
            <div className="w-24 h-1 bg-burgundy-300 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-burgundy-900 mb-6">Our Founder's Vision</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                One More was born from a personal journey. Our founder, Sophie Laurent, struggled for years to find
                lingerie that was both beautiful and comfortable, especially after experiencing health issues related to
                poorly designed intimate wear.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "I realized that many women were silently suffering from the same issues I was facing. The industry was
                focused on appearance at the expense of women's health and comfort. I knew there had to be a better
                way," says Sophie.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                In 2015, Sophie assembled a team of designers and medical consultants to create a line of lingerie that
                would prioritize women's physiological health without compromising on elegance and sensuality.
              </p>
              <blockquote className="border-l-4 border-burgundy-300 pl-4 italic text-burgundy-800">
                "One More is about giving women one more reason to feel confident, one more moment of comfort, and one
                more piece that honors both their beauty and health."
              </blockquote>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Our founder" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-[#fdf2f6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-burgundy-900 mb-12">Our Commitment to Your Wellbeing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-burgundy-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-burgundy-800 mb-4 text-center">Health-First Design</h3>
              <p className="text-gray-600 text-center">
                Every piece we create is designed with your physiological health in mind. We consult with medical
                professionals to ensure our designs provide proper support and use breathable, hypoallergenic materials
                that are gentle on your skin.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-burgundy-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-burgundy-800 mb-4 text-center">Sustainable Materials</h3>
              <p className="text-gray-600 text-center">
                We carefully select fabrics that are not only luxurious but also sustainable and free from harmful
                chemicals. Our production processes minimize environmental impact while ensuring the highest quality
                standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-burgundy-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-burgundy-800 mb-4 text-center">Body Positivity</h3>
              <p className="text-gray-600 text-center">
                We celebrate all body types and design our collections to be inclusive. Our sizing is thoughtfully
                developed to provide proper support and comfort for women of all shapes and sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Research */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-center text-burgundy-900 mb-8">Our Research & Development</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At One More, we take women's health seriously. Our dedicated research team works closely with
              gynecologists, dermatologists, and textile experts to understand how intimate apparel affects women's
              bodies.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We've invested in extensive research on how different fabrics and designs impact skin health, circulation,
              and overall comfort. This research informs every aspect of our design process, from the selection of
              materials to the placement of seams and support structures.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our commitment to health extends beyond our products. We regularly publish educational content about
              intimate health and wellness, empowering women with knowledge about their bodies and how to care for them.
            </p>
            <div className="mt-8 text-center">
              <Button className="bg-burgundy-700 hover:bg-burgundy-800 text-white">Read Our Health Research</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gradient-to-r from-plum-50 to-burgundy-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-burgundy-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[3/4] relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-burgundy-900 mb-1">{member.name}</h3>
                  <p className="text-burgundy-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-burgundy-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">Join Our Movement</h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              We're more than just a lingerie brand – we're a community of women who believe that health and beauty go
              hand in hand. Join us in our mission to transform the intimate apparel industry and celebrate women's
              wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-burgundy-900 hover:bg-burgundy-50">Shop Our Collection</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Follow Our Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-burgundy-700 hover:text-burgundy-900">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} One More. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const team = [
  {
    name: "Sophie Laurent",
    role: "Founder & Creative Director",
    bio: "With a background in fashion design and personal experience with health issues related to intimate wear, Sophie founded One More to revolutionize the industry.",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Dr. Elena Moreau",
    role: "Health Consultant",
    bio: "A gynecologist with over 15 years of experience, Dr. Moreau ensures all our designs prioritize women's physiological health and comfort.",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Mia Chen",
    role: "Lead Designer",
    bio: "Combining her expertise in textile design with a passion for body positivity, Mia creates pieces that are both beautiful and functional.",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Thomas Dubois",
    role: "Sustainability Director",
    bio: "Thomas ensures our production processes and materials meet the highest standards of sustainability and ethical manufacturing.",
    image: "/placeholder.svg?height=800&width=600",
  },
]

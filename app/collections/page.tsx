import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CollectionsPage() {
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
              <Link href="/collections" className="text-sm font-medium text-burgundy-700 transition-colors">
                Collections
              </Link>
              <Link href="/new-arrivals" className="text-sm font-medium hover:text-burgundy-700 transition-colors">
                New Arrivals
              </Link>
              <Link href="/bestsellers" className="text-sm font-medium hover:text-burgundy-700 transition-colors">
                Bestsellers
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-burgundy-700 transition-colors">
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
            <span className="text-burgundy-700">Collections</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-plum-100 to-burgundy-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-burgundy-900 mb-6">Our Collections</h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Discover our carefully curated collections designed with your comfort, health, and confidence in mind.
              Each piece is crafted to provide one more reason to feel beautiful.
            </p>
            <div className="w-24 h-1 bg-burgundy-300 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainCollections.map((collection, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.svg?height=900&width=1600"}
                    alt={collection.name}
                    width={1600}
                    height={900}
                    className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-serif text-white mb-2">{collection.name}</h3>
                  <p className="text-white/90 mb-4 max-w-md">{collection.description}</p>
                  <Link href={collection.link}>
                    <Button className="bg-white text-burgundy-900 hover:bg-burgundy-50">Explore Collection</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Collections */}
      <section className="py-16 bg-[#fdf2f6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12 text-burgundy-900">Specialty Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subCollections.map((collection, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm group">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.svg?height=800&width=600"}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-burgundy-900 mb-2">{collection.name}</h3>
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <Link
                    href={collection.link}
                    className="inline-flex items-center text-burgundy-700 hover:text-burgundy-900"
                  >
                    View Collection <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-16 bg-gradient-to-r from-plum-50 to-burgundy-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6 text-burgundy-900">Health Benefits in Every Design</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              At One More, we believe that beautiful lingerie should also support your wellbeing. Each collection is
              designed with specific health benefits in mind, from breathable fabrics to supportive structures.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-burgundy-800 mb-4">Comfort Collection</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-burgundy-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Breathable, hypoallergenic fabrics</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-burgundy-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Seamless designs to prevent irritation</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-burgundy-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Moisture-wicking properties for daily comfort</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-burgundy-800 mb-4">Support Collection</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-burgundy-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ergonomic designs for proper posture support</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-burgundy-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Wider straps to distribute weight evenly</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-burgundy-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Structured cups for optimal breast health</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12">
              <Button className="bg-burgundy-700 hover:bg-burgundy-800 text-white">
                Learn More About Our Health Approach
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} One More. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const mainCollections = [
  {
    name: "Everyday Elegance",
    description: "Comfortable, breathable pieces designed for daily wear without compromising on style or your health.",
    image: "/placeholder.svg?height=900&width=1600",
    link: "/collections/everyday-elegance",
  },
  {
    name: "Sensual Moments",
    description: "Luxurious, special occasion pieces that combine sensuality with comfort for those intimate moments.",
    image: "/placeholder.svg?height=900&width=1600",
    link: "/collections/sensual-moments",
  },
]

const subCollections = [
  {
    name: "Silk & Satin",
    description:
      "Hypoallergenic silk and satin pieces that are gentle on sensitive skin while providing a luxurious feel.",
    image: "/placeholder.svg?height=800&width=600",
    link: "/collections/silk-satin",
  },
  {
    name: "Cotton Comfort",
    description: "Breathable, organic cotton pieces designed for maximum comfort and everyday health.",
    image: "/placeholder.svg?height=800&width=600",
    link: "/collections/cotton-comfort",
  },
  {
    name: "Supportive Essentials",
    description: "Specially designed pieces that provide proper support for all-day comfort and wellbeing.",
    image: "/placeholder.svg?height=800&width=600",
    link: "/collections/supportive-essentials",
  },
]

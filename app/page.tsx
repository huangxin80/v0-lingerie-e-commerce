import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Heart, Search, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
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
              <Link href="/about" className="text-sm font-medium hover:text-burgundy-700 transition-colors">
                Our Story
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-burgundy-700">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-burgundy-700">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-burgundy-700">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-burgundy-700">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Elegant lingerie collection"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">One More Moment</h1>
            <p className="text-white/90 mb-8 text-lg">
              Discover our new collection of sophisticated lingerie designed for comfort, confidence, and your
              wellbeing.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-burgundy-700 text-white hover:bg-burgundy-800 border-none">Shop Collection</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Bestsellers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section - NEW */}
      <section className="py-20 bg-gradient-to-r from-plum-50 to-burgundy-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-burgundy-800">Our Commitment to You</h2>
            <div className="w-24 h-1 bg-burgundy-300 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At One More, we believe that true beauty begins with wellness. Since our founding, we have been dedicated
              to creating intimate apparel that not only enhances your natural beauty but also prioritizes your
              physiological health and comfort.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-burgundy-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-burgundy-800 mb-3">Health-Conscious Design</h3>
                <p className="text-gray-600">
                  Our designs prioritize breathability, support, and comfort using premium fabrics that are gentle on
                  your skin and body.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-burgundy-700"
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
                <h3 className="text-xl font-serif text-burgundy-800 mb-3">Sustainable Materials</h3>
                <p className="text-gray-600">
                  We use eco-friendly, hypoallergenic fabrics that are free from harmful chemicals and safe for your
                  most sensitive skin.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-burgundy-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-burgundy-800 mb-3">Inclusive Sizing</h3>
                <p className="text-gray-600">
                  We celebrate all body types with thoughtfully designed pieces that provide proper support for women of
                  all shapes and sizes.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Button className="bg-burgundy-700 hover:bg-burgundy-800 text-white">Read Our Full Story</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12 text-burgundy-900">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={600}
                    height={800}
                    className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-medium text-white mb-2">{category.name}</h3>
                  <Link
                    href={category.link}
                    className="inline-flex items-center text-white/90 text-sm hover:text-white transition-colors"
                  >
                    Discover <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-[#fdf2f6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12 text-burgundy-900">Bestsellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-[#f5f0ee]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={800}
                    className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white text-burgundy-700 rounded-full"
                  >
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                </div>
                <h3 className="text-lg font-medium text-burgundy-900 mb-1">{product.name}</h3>
                <p className="text-gray-500 mb-2">{product.color}</p>
                <div className="flex justify-between items-center">
                  <span className="text-burgundy-700 font-medium">{product.price}</span>
                  <Button variant="ghost" size="sm" className="text-gray-700 hover:text-burgundy-700">
                    Add to bag
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-burgundy-200 text-burgundy-900 hover:bg-burgundy-50">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - NEW */}
      <section className="py-16 bg-plum-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12 text-burgundy-900">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-burgundy-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Not only are these pieces beautiful, but they're also the most comfortable lingerie I've ever worn. I
                can feel the difference in quality and how they support my body."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-burgundy-100 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-burgundy-900">Sophia L.</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-burgundy-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "As someone with sensitive skin, I've always struggled to find lingerie that doesn't cause irritation.
                One More's commitment to health-conscious materials has been a game-changer for me."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-burgundy-100 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-burgundy-900">Emma T.</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-burgundy-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "I appreciate a brand that understands women's bodies and health needs. The attention to detail in the
                design and the quality of materials make me feel both beautiful and cared for."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-burgundy-100 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-burgundy-900">Olivia M.</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-burgundy-100 to-plum-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-4 text-burgundy-900">Join Our Community</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for exclusive offers, new arrivals, and wellness tips for your intimate
              health.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-burgundy-200 focus-visible:ring-burgundy-300"
              />
              <Button className="bg-burgundy-700 hover:bg-burgundy-800 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-serif mb-4 text-burgundy-900">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-burgundy-700 text-sm">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-burgundy-700 text-sm">
                    Bestsellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-burgundy-700 text-sm">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-burgundy-700 text-sm">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-4 text-burgundy-900">Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-burgundy-700 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-burgundy-700 text-sm">
                    Our Wellness Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-burgundy-700 text-sm">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-burgundy-700 text-sm">
                    Our Stores
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-4 text-burgundy-900">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-burgundy-700 text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-burgundy-700 text-sm">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-burgundy-700 text-sm">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-burgundy-700 text-sm">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-4 text-burgundy-900">Connect</h3>
              <p className="text-gray-600 text-sm mb-4">
                Follow us on social media for styling inspiration, wellness tips, and exclusive offers.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-burgundy-700">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-burgundy-700">
                  <span className="sr-only">Pinterest</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-burgundy-700">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} One More. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const categories = [
  {
    name: "Lingerie Sets",
    image: "/placeholder.svg?height=800&width=600",
    link: "/collections/lingerie-sets",
  },
  {
    name: "Sleepwear",
    image: "/placeholder.svg?height=800&width=600",
    link: "/collections/sleepwear",
  },
  {
    name: "Essentials",
    image: "/placeholder.svg?height=800&width=600",
    link: "/collections/essentials",
  },
]

const products = [
  {
    name: "Silk Lace Camisole",
    color: "Burgundy",
    price: "$89",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Satin Sleep Set",
    color: "Plum",
    price: "$129",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Lace Trim Bralette",
    color: "Black",
    price: "$59",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Silk Robe",
    color: "Deep Rose",
    price: "$149",
    image: "/placeholder.svg?height=800&width=600",
  },
]

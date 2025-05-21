import Image from "next/image"
import Link from "next/link"
import { Heart, Minus, Plus, Share2, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ProductPage() {
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
            <Link href="/collections" className="text-gray-500 hover:text-burgundy-700">
              Collections
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-burgundy-700">Silk Lace Camisole</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1200&width=900"
                  alt="Silk Lace Camisole - Burgundy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square relative rounded-md overflow-hidden cursor-pointer">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt={`Silk Lace Camisole view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-serif text-burgundy-900 mb-2">Silk Lace Camisole</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-burgundy-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">42 reviews</span>
              </div>
              <p className="text-2xl text-burgundy-700 font-medium mb-6">$89.00</p>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Color</h3>
                <div className="flex space-x-3">
                  <button className="w-8 h-8 rounded-full bg-burgundy-700 ring-2 ring-burgundy-700 ring-offset-2"></button>
                  <button className="w-8 h-8 rounded-full bg-plum-400"></button>
                  <button className="w-8 h-8 rounded-full bg-black"></button>
                  <button className="w-8 h-8 rounded-full bg-rose-300"></button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Size</h3>
                <RadioGroup defaultValue="m" className="flex space-x-3">
                  <div>
                    <RadioGroupItem value="xs" id="xs" className="sr-only" />
                    <Label
                      htmlFor="xs"
                      className="flex h-10 w-10 items-center justify-center rounded-md border text-sm cursor-pointer hover:bg-burgundy-50"
                    >
                      XS
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="s" id="s" className="sr-only" />
                    <Label
                      htmlFor="s"
                      className="flex h-10 w-10 items-center justify-center rounded-md border text-sm cursor-pointer hover:bg-burgundy-50"
                    >
                      S
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="m" id="m" className="sr-only" />
                    <Label
                      htmlFor="m"
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-burgundy-700 bg-burgundy-50 text-sm cursor-pointer"
                    >
                      M
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="l" id="l" className="sr-only" />
                    <Label
                      htmlFor="l"
                      className="flex h-10 w-10 items-center justify-center rounded-md border text-sm cursor-pointer hover:bg-burgundy-50"
                    >
                      L
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="xl" id="xl" className="sr-only" />
                    <Label
                      htmlFor="xl"
                      className="flex h-10 w-10 items-center justify-center rounded-md border text-sm cursor-pointer hover:bg-burgundy-50"
                    >
                      XL
                    </Label>
                  </div>
                </RadioGroup>
                <Link
                  href="/size-guide"
                  className="text-sm text-burgundy-700 hover:text-burgundy-900 mt-2 inline-block"
                >
                  Size Guide
                </Link>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Quantity</h3>
                <div className="flex items-center border rounded-md w-32">
                  <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-burgundy-700">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="flex-1 text-center">1</span>
                  <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-burgundy-700">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4 mb-8">
                <Button className="flex-1 bg-burgundy-700 hover:bg-burgundy-800 text-white">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Bag
                </Button>
                <Button variant="outline" className="border-burgundy-200 text-burgundy-700 hover:bg-burgundy-50">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to Wishlist</span>
                </Button>
                <Button variant="outline" className="border-burgundy-200 text-burgundy-700 hover:bg-burgundy-50">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>

              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="health">Health Benefits</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4">
                  <p className="text-gray-600 leading-relaxed">
                    Our Silk Lace Camisole combines luxury with comfort. Made from 100% mulberry silk with delicate lace
                    trim, this camisole offers a soft, sensual feel against your skin while providing breathability and
                    temperature regulation.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    The adjustable straps and subtle support make it perfect for both day and night wear, giving you one
                    more reason to feel confident and comfortable.
                  </p>
                </TabsContent>
                <TabsContent value="health" className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-burgundy-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-burgundy-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-burgundy-900">Hypoallergenic Silk</h4>
                        <p className="text-gray-600 text-sm">
                          Our mulberry silk is naturally hypoallergenic, making it ideal for sensitive skin and helping
                          to prevent irritation and allergic reactions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-burgundy-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-burgundy-700"
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
                      <div>
                        <h4 className="font-medium text-burgundy-900">Temperature Regulation</h4>
                        <p className="text-gray-600 text-sm">
                          Silk naturally regulates body temperature, keeping you cool in summer and warm in winter,
                          helping to prevent night sweats and discomfort.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-burgundy-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-burgundy-700"
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
                      <div>
                        <h4 className="font-medium text-burgundy-900">Moisture-Wicking</h4>
                        <p className="text-gray-600 text-sm">
                          Silk absorbs moisture while remaining dry to the touch, helping to keep your skin comfortable
                          and reducing the risk of skin irritation.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="details" className="pt-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• 100% Mulberry Silk (19 momme)</li>
                    <li>• Delicate lace trim: 90% Nylon, 10% Elastane</li>
                    <li>• Adjustable straps</li>
                    <li>• Hand wash in cold water or dry clean</li>
                    <li>• Made in small, ethical workshops</li>
                    <li>• Model wears size S</li>
                    <li>• Model's height: 5'9" / 175cm</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Wellness Section */}
      <section className="py-16 bg-gradient-to-r from-plum-50 to-burgundy-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6 text-burgundy-900">One More Reason to Choose Silk</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              At One More, we believe in the power of natural materials. Our silk products are not just luxurious—they
              offer significant health benefits for your skin and overall wellbeing.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-serif text-burgundy-800 mb-3">Skin Health</h3>
                <p className="text-gray-600 text-sm">
                  Silk contains natural proteins and 18 essential amino acids that are beneficial for skin health. It
                  helps maintain skin moisture and reduces the appearance of fine lines.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-serif text-burgundy-800 mb-3">Allergy Relief</h3>
                <p className="text-gray-600 text-sm">
                  Silk is naturally resistant to dust mites, mold, and fungus, making it an excellent choice for those
                  with allergies or asthma.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-serif text-burgundy-800 mb-3">Hair Protection</h3>
                <p className="text-gray-600 text-sm">
                  The smooth surface of silk helps prevent hair breakage and keeps your hair tangle-free, especially
                  when worn during sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12 text-burgundy-900">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recommendedProducts.map((product, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-[#f5f0ee]">
                  <Image
                    src={product.image || "/placeholder.svg?height=800&width=600"}
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
        </div>
      </section>

      {/* Reviews Summary */}
      <section className="py-16 bg-[#fdf2f6]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center mb-12 text-burgundy-900">Customer Reviews</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="flex text-burgundy-500 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <p className="text-2xl font-medium text-burgundy-900">4.9 out of 5</p>
                    <p className="text-gray-500">Based on 42 reviews</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <span className="text-sm text-gray-600 w-8">{rating}</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                        <div
                          className="bg-burgundy-500 h-2.5 rounded-full"
                          style={{
                            width:
                              rating === 5
                                ? "85%"
                                : rating === 4
                                  ? "10%"
                                  : rating === 3
                                    ? "3%"
                                    : rating === 2
                                      ? "1%"
                                      : "1%",
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-8">
                        {rating === 5 ? "85%" : rating === 4 ? "10%" : rating === 3 ? "3%" : rating === 2 ? "1%" : "1%"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button className="bg-burgundy-700 hover:bg-burgundy-800 text-white">Write a Review</Button>
                </div>
              </div>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="flex text-burgundy-500">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating ? "text-burgundy-500" : "text-gray-300"
                            } fill-current`}
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                    </div>
                    <h4 className="font-medium text-burgundy-900 mb-2">{review.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{review.comment}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-burgundy-100 rounded-full mr-2"></div>
                      <div>
                        <p className="text-sm font-medium text-burgundy-900">{review.name}</p>
                        <p className="text-xs text-gray-500">Verified Purchase</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="text-center">
                  <Button variant="outline" className="border-burgundy-200 text-burgundy-700 hover:bg-burgundy-50">
                    View All Reviews
                  </Button>
                </div>
              </div>
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

const recommendedProducts = [
  {
    name: "Silk Sleep Mask",
    color: "Burgundy",
    price: "$39",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Lace Trim Shorts",
    color: "Burgundy",
    price: "$59",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Silk Robe",
    color: "Deep Rose",
    price: "$149",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Lace Bralette",
    color: "Black",
    price: "$49",
    image: "/placeholder.svg?height=800&width=600",
  },
]

const reviews = [
  {
    name: "Emma L.",
    rating: 5,
    date: "2 months ago",
    title: "Luxurious and comfortable",
    comment:
      "This camisole is absolutely beautiful and so comfortable to wear. The silk feels amazing against my skin and I've noticed less irritation compared to my synthetic camisoles.",
  },
  {
    name: "Sarah T.",
    rating: 5,
    date: "3 months ago",
    title: "Perfect for sensitive skin",
    comment:
      "As someone with eczema, finding lingerie that doesn't trigger flare-ups is challenging. This silk camisole has been a game-changer for me. No irritation at all!",
  },
  {
    name: "Michelle K.",
    rating: 4,
    date: "1 month ago",
    title: "Beautiful but delicate",
    comment:
      "I love this camisole - it's gorgeous and feels wonderful. Just be careful with washing as it's quite delicate. Follow the care instructions carefully.",
  },
]

import Link from "next/link"
import Image from "next/image"

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#1a1a1a] p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-8">
            <h1 className="text-[5rem] md:text-[8rem] font-serif leading-[0.85]">Shop</h1>
            <p className="text-xl font-light leading-relaxed max-w-lg">
              A collection of premium Webflow and Framer templates designed for creators, photographers, and small
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {products.map((product) => (
              <Link key={product.id} href={`/shop/${product.id}`} className="group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.isNew && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 text-xs uppercase tracking-wider bg-black text-white rounded-full">
                        NEW
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-serif">{product.title}</h2>
                    <p className="text-lg text-gray-600">{product.type}</p>
                    <p className="text-xl font-medium">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

const products = [
  {
    id: "momento",
    title: "Momento",
    type: "Photography Template",
    price: 39,
    image: "/placeholder.svg?height=600&width=800",
    isNew: true,
  },
  {
    id: "portfolio",
    title: "Portfolio Pro",
    type: "Framer Template",
    price: 49,
    image: "/placeholder.svg?height=600&width=800",
    isNew: false,
  },
  {
    id: "minimal",
    title: "Minimal Store",
    type: "Webflow Template",
    price: 59,
    image: "/placeholder.svg?height=600&width=800",
    isNew: false,
  },
]

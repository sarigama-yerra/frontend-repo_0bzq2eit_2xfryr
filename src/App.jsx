import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Categories from './components/Categories'
import Footer from './components/Footer'

const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [category, setCategory] = useState(null)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const cat = params.get('category')
    setCategory(cat)
  }, [])

  useEffect(() => {
    const load = async () => {
      try {
        const url = new URL(`${api}/api/products`)
        if (category) url.searchParams.set('category', category)
        url.searchParams.set('limit', '12')
        const res = await fetch(url.toString())
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setProducts([])
      }
    }
    load()
  }, [category])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">{category ? `Browsing: ${category}` : 'Latest Arrivals'}</h2>
          {products.length === 0 ? (
            <p className="text-gray-500">No products yet. If this is a fresh workspace without database configured, the section will appear once connected.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <div key={p.id || i} className="rounded-2xl overflow-hidden bg-white border hover:shadow-xl transition">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1520975693411-b46f52b85097?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">{p.title}</h3>
                      <span className="font-black">${p.price?.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{p.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wide text-gray-500">{p.category}</span>
                      <button className="px-3 py-1.5 rounded-full bg-gray-900 text-white text-sm font-semibold">Add to cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <Categories />
      </main>
      <Footer />
    </div>
  )
}

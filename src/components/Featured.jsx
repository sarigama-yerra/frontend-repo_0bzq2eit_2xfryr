import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Featured() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${api}/api/featured`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="featured" className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Featured Drops</h2>
          <a href="#" className="text-fuchsia-600 font-semibold">View all</a>
        </div>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, i) => (
              <motion.div
                key={p.id || i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl overflow-hidden bg-white border hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1520975693411-b46f52b85097?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{p.title}</h3>
                    <span className="font-black">${p.price?.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{p.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wide text-gray-500">{p.category}</span>
                    <button className="px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm font-semibold hover:shadow-lg">Add to cart</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const categories = [
  { key: 'plush', title: 'Stitch Plush', img: 'https://images.unsplash.com/photo-1546778316-dfda79f1c5d0?q=80&w=1200&auto=format&fit=crop' },
  { key: 'toys', title: 'Toys', img: 'https://images.unsplash.com/photo-1520975693411-b46f52b85097?q=80&w=1200&auto=format&fit=crop' },
  { key: 'cards', title: 'Trading Cards', img: 'https://images.unsplash.com/photo-1603575449060-397ac9c3e9b3?q=80&w=1200&auto=format&fit=crop' },
]

export default function Categories() {
  return (
    <section id="categories" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Shop by Category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <motion.a
              href={`/?category=${c.key}`}
              key={c.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border bg-white hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-bold text-lg">{c.title}</h3>
                <span className="text-sm text-fuchsia-600 font-semibold">Explore →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

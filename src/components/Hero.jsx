import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 sm:p-10 text-white border border-white/20 shadow-xl"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-white/80 mb-3">Welcome to</p>
            <h1 className="text-4xl sm:text-6xl font-black leading-tight">
              Riftlol
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300"> Toys & Cards</span>
            </h1>
            <p className="mt-4 max-w-xl text-white/90">
              Gaming-inspired toys, Stitch collectibles, and trading cards. Vibes on max with 3D, neon, and motion.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#featured" className="px-5 py-2 rounded-full bg-white text-gray-900 font-semibold hover:scale-105 active:scale-95 transition">
                Shop Featured
              </a>
              <a href="#categories" className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition">
                Explore Categories
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

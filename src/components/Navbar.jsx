import { useState } from 'react'
import { Menu, ShoppingCart, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl backdrop-blur bg-white/70 border border-white/60 shadow-lg px-4 py-3">
          <div className="flex items-center gap-3">
            <button className="sm:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
              <Menu className="h-6 w-6" />
            </button>
            <a href="/" className="font-black text-xl tracking-tight">
              Riftlol<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">.</span>
            </a>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <a href="#featured" className="hover:text-fuchsia-600">Featured</a>
            <a href="#categories" className="hover:text-fuchsia-600">Categories</a>
            <a href="#about" className="hover:text-fuchsia-600">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="search">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="cart">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="sm:hidden bg-white/90 backdrop-blur border-t">
          <div className="max-w-7xl mx-auto px-6 py-3 grid gap-2">
            <a href="#featured" className="py-2">Featured</a>
            <a href="#categories" className="py-2">Categories</a>
            <a href="#about" className="py-2">About</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default function Footer() {
  return (
    <footer id="about" className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="font-black text-2xl">Riftlol</h3>
            <p className="text-white/70 mt-2">A playful universe of toys, Stitch collectibles, and trading cards. Built with love for gamers and collectors.</p>
          </div>
          <div>
            <h4 className="font-semibold">Shop</h4>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li><a href="#featured" className="hover:text-fuchsia-400">Featured</a></li>
              <li><a href="#categories" className="hover:text-fuchsia-400">Categories</a></li>
              <li><a href="/test" className="hover:text-fuchsia-400">System Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Brand</h4>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li>Made for fun</li>
              <li>Built for vibes</li>
              <li>Powered by motion</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/60">© {new Date().getFullYear()} Riftlol. All rights reserved.</div>
      </div>
    </footer>
  )
}

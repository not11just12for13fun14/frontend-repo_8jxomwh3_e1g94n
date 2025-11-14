import { useState } from 'react'
import { ShoppingBag, Menu, Search } from 'lucide-react'

export default function Navbar({ onCartOpen }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button aria-label="Menu" className="lg:hidden p-2 hover:bg-white/5 rounded-md transition-colors" onClick={() => setOpen(!open)}>
            <Menu className="w-5 h-5 text-white" />
          </button>
          <a href="/" className="font-semibold tracking-wide text-white">
            <span className="font-manrope text-lg">Noir Atelier</span>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {['New Arrivals', 'Women', 'Men', 'Accessories', 'Sale'].map((item) => (
            <a key={item} href="#" className="text-zinc-300 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Search" className="p-2 hover:bg-white/5 rounded-md transition-colors">
            <Search className="w-5 h-5 text-white" />
          </button>
          <button onClick={onCartOpen} className="group flex items-center gap-2 pl-3 pr-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden sm:block text-sm">Cart</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-3 space-y-2">
            {['New Arrivals', 'Women', 'Men', 'Accessories', 'Sale'].map((item) => (
              <a key={item} href="#" className="block text-zinc-300 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-400">
        <div>
          <h4 className="text-white font-semibold">Noir Atelier</h4>
          <p className="mt-2 text-sm">Minimalist essentials designed for the night cityscape.</p>
        </div>
        <div className="space-y-2">
          <h5 className="text-white font-medium">Shop</h5>
          {['Women', 'Men', 'Accessories', 'Sale'].map((i) => (
            <a key={i} href="#" className="block hover:text-white transition-colors">{i}</a>
          ))}
        </div>
        <div className="space-y-2">
          <h5 className="text-white font-medium">Company</h5>
          {['About', 'Careers', 'Contact'].map((i) => (
            <a key={i} href="#" className="block hover:text-white transition-colors">{i}</a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Noir Atelier. All rights reserved.</div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/products`)
        if (res.ok) {
          const data = await res.json()
          // Fallback demo products if DB is empty
          setProducts(
            data.length ? data : [
              {
                name: 'Midnight Hoodie',
                slug: 'midnight-hoodie',
                price: 89,
                description: 'Heavyweight fleece. Subtle logo embroidery.',
                images: ['https://images.unsplash.com/photo-1520975922203-b325efc85c60?q=80&w=1200&auto=format&fit=crop'],
              },
              {
                name: 'Urban Shell Jacket',
                slug: 'urban-shell-jacket',
                price: 149,
                description: 'Water-resistant. Clean profile. City-ready.',
                images: ['https://images.unsplash.com/photo-1542326237-94b1c5a538d1?q=80&w=1200&auto=format&fit=crop'],
              },
              {
                name: 'Essential Tee',
                slug: 'essential-tee',
                price: 39,
                description: 'Premium cotton. Boxy fit.',
                images: ['https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1200&auto=format&fit=crop'],
              },
            ]
          )
        } else {
          throw new Error('failed')
        }
      } catch (e) {
        setProducts([
          {
            name: 'Midnight Hoodie',
            slug: 'midnight-hoodie',
            price: 89,
            description: 'Heavyweight fleece. Subtle logo embroidery.',
            images: ['https://images.unsplash.com/photo-1520975922203-b325efc85c60?q=80&w=1200&auto=format&fit=crop'],
          },
          {
            name: 'Urban Shell Jacket',
            slug: 'urban-shell-jacket',
            price: 149,
            description: 'Water-resistant. Clean profile. City-ready.',
            images: ['https://images.unsplash.com/photo-1542326237-94b1c5a538d1?q=80&w=1200&auto=format&fit=crop'],
          },
          {
            name: 'Essential Tee',
            slug: 'essential-tee',
            price: 39,
            description: 'Premium cotton. Boxy fit.',
            images: ['https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1200&auto=format&fit=crop'],
          },
        ])
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <section id="shop" className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured</h2>
          <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Crafted in the dark</h3>
            <p className="mt-3 text-zinc-400">We design refined, minimal pieces that pair with anything and last season after season. Focused on form, fabric, and function.</p>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 to-black" />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App

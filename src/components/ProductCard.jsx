import { motion } from 'framer-motion'

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group bg-zinc-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
    >
      <div className="aspect-[4/5] bg-gradient-to-br from-zinc-800 to-black relative overflow-hidden">
        <img
          src={product.images?.[0] || 'https://images.unsplash.com/photo-1520975922203-b325efc85c60?q=80&w=1200&auto=format&fit=crop'}
          alt={product.name}
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-medium tracking-tight">{product.name}</h3>
          <p className="text-zinc-300">${product.price.toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-zinc-400 line-clamp-2">{product.description}</p>
        <button className="mt-4 w-full py-2 rounded-md bg-white text-black hover:bg-zinc-200 transition-colors">Add to cart</button>
      </div>
    </motion.div>
  )
}

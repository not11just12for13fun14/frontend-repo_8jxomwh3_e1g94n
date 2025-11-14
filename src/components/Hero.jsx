import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-36 pb-20 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
        >
          Minimalist Streetwear,
          <br className="hidden md:block" />
          elevated.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 max-w-xl text-zinc-300"
        >
          Clean silhouettes. Premium fabrics. Designed for the city at night.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex gap-3"
        >
          <a href="#shop" className="px-5 py-2 rounded-md bg-white text-black hover:bg-zinc-200 transition-colors">Shop now</a>
          <a href="#about" className="px-5 py-2 rounded-md border border-white/30 text-white hover:bg-white/10 transition-colors">Learn more</a>
        </motion.div>
      </div>
    </section>
  )
}

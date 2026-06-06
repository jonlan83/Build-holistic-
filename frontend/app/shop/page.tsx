// frontend/app/shop/page.tsx
'use client';

import { motion } from 'framer-motion';
import GalleryGrid from '@/components/GalleryGrid';
import { artworks } from '@/data/artworks';

export default function ShopPage() {
  return (
    <div className="bg-holistic-cream">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-holistic"
        >
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-holistic-teal font-semibold mb-4 tracking-widest uppercase text-sm"
            >
              Gallery & Shop
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-holistic-dark-purple mb-6 leading-tight"
            >
              Psychedelic Art & Transformation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-holistic-sage leading-relaxed mb-8"
            >
              Each piece celebrates the creative journey inspired by nature, growth, and the transformative power of consciousness. Own a piece of this holistic vision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 text-holistic-sage"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                <span>Original Paintings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🖼️</span>
                <span>Limited Edition Prints</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌿</span>
                <span>Holistic Inspiration</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ float: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-10 w-40 h-40 bg-holistic-light-purple/10 rounded-full blur-3xl -z-10"
        />
        <motion.div
          animate={{ float: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-10 w-60 h-60 bg-holistic-teal/10 rounded-full blur-3xl -z-10"
        />
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container-holistic">
          <GalleryGrid artworks={artworks} showFilters={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-holistic-dark-purple">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container-holistic text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-holistic-cream mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-holistic-cream/80 mb-8 max-w-2xl mx-auto">
            Commission a custom piece inspired by your own journey. Let's create something unique together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-holistic-gold text-holistic-dark-purple px-8 py-4 rounded-lg font-bold text-lg hover:bg-holistic-copper transition-colors duration-300"
          >
            Request a Commission
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

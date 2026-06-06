'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import { artworks } from '@/data/artworks';

export default function HomePage() {
  const featuredArtworks = artworks.filter(a => a.featured).slice(0, 3);

  return (
    <div className="bg-holistic-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
        {/* Background Decorations */}
        <motion.div
          animate={{ float: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-holistic-light-purple/10 rounded-full blur-3xl -z-10"
        />
        <motion.div
          animate={{ float: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-holistic-teal/10 rounded-full blur-3xl -z-10"
        />

        <div className="container-holistic text-center space-y-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-holistic-teal font-semibold tracking-widest uppercase text-sm"
          >
            🍄 Welcome to Holistic Art
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-holistic-dark-purple leading-tight"
          >
            Art Born from
            <br />
            <span className="text-gradient">Transformation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-holistic-sage max-w-2xl mx-auto leading-relaxed"
          >
            Psychedelic-inspired paintings celebrating creative awakening, holistic growth, and the invisible networks that connect all life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-holistic-purple text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-holistic-light-purple transition-colors duration-300"
              >
                Explore Gallery
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-holistic-cream border-2 border-holistic-purple text-holistic-purple px-8 py-4 rounded-lg font-bold text-lg hover:bg-holistic-light-purple/10 transition-colors duration-300"
              >
                Learn the Story
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-16 md:py-24 border-t border-holistic-cream/50">
        <div className="container-holistic">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-holistic-teal font-semibold tracking-widest uppercase text-sm">Featured Collection</span>
            <h2 className="text-5xl md:text-6xl font-bold text-holistic-dark-purple mt-2 mb-4">
              Highlighted Works
            </h2>
            <p className="text-xl text-holistic-sage max-w-2xl">
              A selection of powerful pieces that capture the essence of creative transformation and holistic awakening.
            </p>
          </motion.div>

          <GalleryGrid artworks={featuredArtworks} showFilters={false} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-holistic-dark-purple">
        <div className="container-holistic">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '50+', label: 'Original Paintings' },
              { number: '1000+', label: 'Happy Collectors' },
              { number: '5', label: 'Art Series' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold text-holistic-gold mb-2">{stat.number}</p>
                <p className="text-holistic-cream/80 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-holistic max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-bold text-holistic-dark-purple">
              Ready to Own a Piece of Art?
            </h2>
            <p className="text-lg text-holistic-sage">
              Explore our complete gallery. Original paintings, limited edition prints, and custom commissions available.
            </p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-holistic-teal text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-holistic-sage transition-colors duration-300"
              >
                Visit the Shop
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
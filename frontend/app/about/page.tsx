'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-holistic-cream">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
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
              About the Artist
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-holistic-dark-purple mb-6 leading-tight"
            >
              Inspired by Transformation
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-holistic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-holistic-purple/20 to-holistic-teal/20"
            >
              <div className="w-full h-full flex items-center justify-center text-6xl">
                🍄
              </div>
            </motion.div>

            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold text-holistic-dark-purple mb-4">
                  The Journey Begins
                </h2>
                <p className="text-lg text-holistic-sage leading-relaxed">
                  My creative journey took a transformative turn when I opened myself to new perspectives and experiences. Through psychedelic exploration, I discovered profound truths about consciousness, connection, and the nature of creativity itself.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-holistic-purple mb-3">
                  Awakening Through Art
                </h3>
                <p className="text-lg text-holistic-sage leading-relaxed">
                  What began as personal exploration became artistic expression. I learned that creativity isn't something we create—it's something we receive and channel. My paintings capture the essence of growth, interconnection, and the beautiful complexity of consciousness.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-holistic-teal mb-3">
                  Holistic Vision
                </h3>
                <p className="text-lg text-holistic-sage leading-relaxed">
                  Each piece celebrates the invisible networks that connect all life. From the mycelial networks beneath the forest to the neural connections in our minds, I paint to honor the interconnectedness of existence and inspire others to embrace their creative awakening.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-holistic-dark-purple/5">
        <div className="container-holistic">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-holistic-dark-purple">My Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🌱',
                title: 'Growth',
                description: 'Art that celebrates transformation and personal evolution'
              },
              {
                icon: '🔗',
                title: 'Connection',
                description: 'Honoring the invisible networks that bind all consciousness'
              },
              {
                icon: '✨',
                title: 'Authenticity',
                description: 'Creating from genuine experience and honest expression'
              },
              {
                icon: '🌍',
                title: 'Holism',
                description: 'Viewing art and life as interconnected wholes'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 card-shadow"
              >
                <p className="text-5xl mb-4">{value.icon}</p>
                <h3 className="text-xl font-bold text-holistic-dark-purple mb-2">
                  {value.title}
                </h3>
                <p className="text-holistic-sage">{value.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-holistic-dark-purple">
              Join the Creative Journey
            </h2>
            <p className="text-lg text-holistic-sage">
              Explore the collection and own a piece of this transformative vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-holistic-purple text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-holistic-light-purple transition-colors duration-300"
                >
                  View Gallery
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-holistic-cream border-2 border-holistic-purple text-holistic-purple px-8 py-4 rounded-lg font-bold text-lg hover:bg-holistic-light-purple/10 transition-colors duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
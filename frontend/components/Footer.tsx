// frontend/components/Footer.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { label: 'Gallery', href: '/shop' },
      { label: 'About Artist', href: '/about' },
      { label: 'Commissions', href: '/commissions' },
    ],
    Support: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
      { label: 'Contact', href: '/contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
    Connect: [
      { label: 'Instagram', href: '#' },
      { label: 'Pinterest', href: '#' },
      { label: 'Newsletter', href: '#' },
    ],
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-holistic-dark-purple text-holistic-cream">
      <div className="container-holistic py-16 md:py-24">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 pb-16 border-b border-holistic-light-purple/20"
        >
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Stay Inspired
            </h3>
            <p className="text-holistic-cream/80 mb-6">
              Get updates on new artworks, behind-the-scenes insights, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-holistic-dark-purple focus:outline-none focus:ring-2 focus:ring-holistic-gold"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-holistic-gold text-holistic-dark-purple px-6 py-3 rounded-lg font-bold hover:bg-holistic-copper transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          {Object.entries(footerLinks).map(([section, links]) => (
            <motion.div key={section} variants={item}>
              <h4 className="font-bold text-lg mb-4 text-holistic-gold">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-holistic-cream/70 hover:text-holistic-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-holistic-light-purple/20 pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Brand Info */}
            <div>
              <h3 className="text-2xl font-bold mb-2">🍄 Holistic Artist</h3>
              <p className="text-holistic-cream/70">
                Celebrating creative transformation and the holistic journey of art inspired by nature, growth, and consciousness.
              </p>
            </div>

            {/* Copyright */}
            <div className="flex flex-col justify-between">
              <div className="space-y-2 text-sm text-holistic-cream/70">
                <p>© {currentYear} Holistic Artist Studio. All rights reserved.</p>
                <p>Each artwork is unique and celebrates the creative journey.</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 pt-8 border-t border-holistic-light-purple/20">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-2xl hover:text-holistic-gold transition-colors duration-300"
            >
              📸
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-2xl hover:text-holistic-gold transition-colors duration-300"
            >
              📌
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-2xl hover:text-holistic-gold transition-colors duration-300"
            >
              💌
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

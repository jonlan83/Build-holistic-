// frontend/components/Navigation.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Shop', href: '/shop' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-holistic-cream border-b border-holistic-cream/50 sticky top-0 z-50">
      <div className="container-holistic py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-holistic-purple"
          >
            🍄 Holistic
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-holistic-dark-purple hover:text-holistic-purple transition-colors duration-300 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Cart & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <Link href="/cart">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 hover:bg-holistic-light-purple/10 rounded-lg transition-colors duration-300"
            >
              <span className="text-2xl">🛒</span>
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0 right-0 bg-holistic-copper text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-holistic-light-purple/10 rounded-lg transition-colors duration-300"
          >
            <span className="text-2xl">≡</span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-holistic-cream border-t border-holistic-cream/50"
        >
          <div className="container-holistic py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-holistic-dark-purple hover:text-holistic-purple transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

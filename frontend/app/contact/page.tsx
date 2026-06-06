'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-holistic-cream min-h-screen py-12 md:py-24">
      <div className="container-holistic">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-holistic-dark-purple mb-4">
              Let's Connect
            </h1>
            <p className="text-xl text-holistic-sage">
              Reach out for inquiries, commissions, or just to share your creative journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {[
                {
                  icon: '✉️',
                  label: 'Email',
                  value: 'hello@holisticartist.com',
                  href: 'mailto:hello@holisticartist.com'
                },
                {
                  icon: '📱',
                  label: 'Instagram',
                  value: '@holisticartist',
                  href: '#'
                },
                {
                  icon: '📍',
                  label: 'Location',
                  value: 'United States',
                  href: ''
                }
              ].map((contact, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                >
                  <p className="text-3xl mb-2">{contact.icon}</p>
                  <p className="text-sm text-holistic-sage mb-1">{contact.label}</p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-holistic-purple font-semibold hover:text-holistic-light-purple transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-holistic-dark-purple font-semibold">{contact.value}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold text-holistic-dark-purple mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border-2 border-holistic-cream focus:border-holistic-purple focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-holistic-dark-purple mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-holistic-cream focus:border-holistic-purple focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-holistic-dark-purple mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-holistic-cream focus:border-holistic-purple focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  submitted
                    ? 'bg-holistic-teal text-white'
                    : 'bg-holistic-purple text-white hover:bg-holistic-light-purple'
                }`}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
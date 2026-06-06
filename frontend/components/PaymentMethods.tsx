// frontend/components/PaymentMethods.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface PaymentMethodsProps {
  total: number;
  cartItems: number;
}

export default function PaymentMethods({ total, cartItems }: PaymentMethodsProps) {
  if (cartItems === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg p-6 card-shadow"
    >
      <h3 className="text-2xl font-bold text-holistic-dark-purple mb-6">
        Choose Payment Method
      </h3>

      <div className="space-y-4">
        {/* PayPal */}
        <motion.a
          href={`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=YOUR_PAYPAL_EMAIL&item_name=Holistic%20Art%20Purchase&amount=${total.toFixed(2)}&currency_code=USD&return=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin + '/checkout/success' : '')}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block\"\n        >\n          <div className=\"border-2 border-holistic-cream hover:border-holistic-purple transition-colors duration-300 rounded-lg p-6 cursor-pointer\">\n            <div className=\"flex items-center justify-between\">\n              <div>\n                <h4 className=\"text-lg font-bold text-holistic-dark-purple mb-1\">\n                  PayPal\n                </h4>\n                <p className=\"text-sm text-holistic-sage\">\n                  Fast, secure checkout with PayPal\n                </p>\n              </div>\n              <span className=\"text-4xl\">🔵</span>\n            </div>\n          </div>\n        </motion.a>\n\n        {/* Cash App */}\n        <motion.a\n          href=\"#\"\n          whileHover={{ scale: 1.02 }}\n          whileTap={{ scale: 0.98 }}\n          className=\"block\"\n        >\n          <div className=\"border-2 border-holistic-cream hover:border-holistic-teal transition-colors duration-300 rounded-lg p-6 cursor-pointer\">\n            <div className=\"flex items-center justify-between\">\n              <div>\n                <h4 className=\"text-lg font-bold text-holistic-dark-purple mb-1\">\n                  Cash App\n                </h4>\n                <p className=\"text-sm text-holistic-sage\">\n                  Direct payment via Cash App\n                </p>\n                <p className=\"text-xs text-holistic-teal font-semibold mt-2\">\n                  Total: ${total.toFixed(2)}\n                </p>\n              </div>\n              <span className=\"text-4xl\">💚</span>\n            </div>\n          </div>\n        </motion.a>\n\n        {/* Bank Transfer / Manual Payment */}\n        <motion.button\n          whileHover={{ scale: 1.02 }}\n          whileTap={{ scale: 0.98 }}\n          className=\"w-full\"\n        >\n          <div className=\"border-2 border-holistic-cream hover:border-holistic-gold transition-colors duration-300 rounded-lg p-6\">\n            <div className=\"flex items-center justify-between\">\n              <div className=\"text-left\">\n                <h4 className=\"text-lg font-bold text-holistic-dark-purple mb-1\">\n                  Contact for Other Payment Options\n                </h4>\n                <p className=\"text-sm text-holistic-sage\">\n                  Bank transfer, check, or custom arrangement\n                </p>\n              </div>\n              <span className=\"text-4xl\">💬</span>\n            </div>\n          </div>\n        </motion.button>\n      </div>\n\n      {/* Payment Instructions */}\n      <motion.div\n        initial={{ opacity: 0, y: 10 }}\n        animate={{ opacity: 1, y: 0 }}\n        transition={{ duration: 0.6, delay: 0.3 }}\n        className=\"mt-8 p-4 bg-holistic-cream rounded-lg\"\n      >\n        <p className=\"text-sm text-holistic-sage mb-3 font-semibold\">\n          💡 Pro Tip: After completing payment, you'll receive:\n        </p>\n        <ul className=\"text-sm text-holistic-sage space-y-2\">\n          <li>✓ Order confirmation email</li>\n          <li>✓ Shipping details & tracking</li>\n          <li>✓ Certificate of authenticity (for originals)</li>\n          <li>✓ Artist thank you note</li>\n        </ul>\n      </motion.div>\n    </motion.div>\n  );\n}

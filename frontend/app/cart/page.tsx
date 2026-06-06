// frontend/app/cart/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const getTotal = useCartStore((state) => state.getTotal());

  return (
    <div className="bg-holistic-cream min-h-screen py-12 md:py-24">
      <div className="container-holistic">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-holistic-dark-purple mb-12"
        >
          Shopping Cart
        </motion.h1>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <p className="text-2xl text-holistic-sage mb-8">Your cart is empty</p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-holistic-purple text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-holistic-light-purple transition-colors duration-300"
              >
                Continue Shopping
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-lg p-6 card-shadow"
                >
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="col-span-1">
                      <img
                        src={item.artwork.imageUrl}
                        alt={item.artwork.title}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <h3 className="font-bold text-holistic-dark-purple">
                        {item.artwork.title}
                      </h3>
                      <p className="text-sm text-holistic-sage">
                        {item.type === 'print'
                          ? `Print - ${item.printOption?.type}`
                          : 'Original Painting'}
                      </p>
                      <p className="text-holistic-purple font-bold">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="col-span-1 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded border border-holistic-cream hover:bg-holistic-cream"
                        >
                          −
                        </button>
                        <span className="font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded border border-holistic-cream hover:bg-holistic-cream"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-holistic-copper hover:text-holistic-copper/80 font-semibold w-full"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cart Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-6 card-shadow h-fit sticky top-24"
            >
              <h3 className="text-2xl font-bold text-holistic-dark-purple mb-6">
                Order Summary
              </h3>
              <div className="space-y-3 mb-6 pb-6 border-b border-holistic-cream">
                <div className="flex justify-between text-holistic-sage">
                  <span>Subtotal</span>
                  <span>${getTotal().toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-holistic-sage">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg text-holistic-dark-purple mb-6">
                <span>Total</span>
                <span>${getTotal().toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-holistic-purple text-white py-3 rounded-lg font-bold text-lg hover:bg-holistic-light-purple transition-colors duration-300"
              >
                Proceed to Checkout
              </motion.button>
              <Link href="/shop">
                <button className="w-full mt-3 border-2 border-holistic-purple text-holistic-purple py-3 rounded-lg font-bold hover:bg-holistic-light-purple/10 transition-colors duration-300">
                  Continue Shopping
                </button>
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

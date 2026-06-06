// frontend/components/ArtworkDetails.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Artwork, PrintOption } from '@/types';
import { useCartStore } from '@/store/cartStore';

interface ArtworkDetailsProps {
  artwork: Artwork;
}

export default function ArtworkDetails({ artwork }: ArtworkDetailsProps) {
  const [selectedType, setSelectedType] = useState<'original' | 'print'>('original');
  const [selectedPrint, setSelectedPrint] = useState<PrintOption | null>(
    artwork.printOptions?.[0] || null
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (selectedType === 'original') {
      addItem(artwork, 'original');
    } else if (selectedType === 'print' && selectedPrint) {
      addItem(artwork, 'print', selectedPrint);
    }
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isAvailable = selectedType === 'original' ? artwork.originalAvailable : artwork.printsAvailable;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-holistic-cream">
          <Image
            src={artwork.imageUrl}
            alt={artwork.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Thumbnails (if you have more images) */}
        <div className="grid grid-cols-4 gap-2">
          {[artwork.imageUrl].map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-lg overflow-hidden bg-holistic-cream border-2 border-holistic-purple"
            >
              <Image
                src={img}
                alt={`View ${idx + 1}`}
                fill
                className="object-cover cursor-pointer"
                sizes="100px"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Details Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-8"
      >
        {/* Title & Meta */}
        <div>
          <div className="mb-4 inline-block">
            <span className="bg-holistic-teal text-white px-4 py-2 rounded-full text-sm font-medium">
              {artwork.series}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-holistic-dark-purple mb-4">
            {artwork.title}
          </h1>
          <div className="space-y-2 text-holistic-sage">
            <p className="text-lg">{artwork.medium}</p>
            <p className="text-lg">{artwork.dimensions}</p>
            <p className="text-lg">{artwork.year}</p>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-lg text-holistic-charcoal leading-relaxed">
            {artwork.description}
          </p>
          {artwork.artistNote && (
            <div className="mt-6 p-4 bg-holistic-cream border-l-4 border-holistic-gold rounded">
              <p className="text-sm font-semibold text-holistic-gold mb-2">Artist's Note</p>
              <p className="text-holistic-charcoal italic">{artwork.artistNote}</p>
            </div>
          )}
        </div>

        {/* Purchase Options */}
        <div className="space-y-6 border-t border-b border-holistic-cream py-6">
          {/* Type Selection */}
          <div>
            <h3 className="text-sm font-semibold text-holistic-dark-purple mb-3 uppercase tracking-wide">
              What would you like?
            </h3>
            <div className="space-y-2">
              {artwork.originalAvailable && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedType('original')}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${
                    selectedType === 'original'
                      ? 'border-holistic-purple bg-holistic-light-purple/10'
                      : 'border-holistic-cream bg-holistic-cream hover:border-holistic-purple'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-holistic-dark-purple">Original Painting</span>
                    <span className="text-holistic-purple font-bold text-lg">
                      ${artwork.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-holistic-sage text-left mt-1">One of a kind piece</p>
                </motion.button>
              )}

              {artwork.printsAvailable && artwork.printOptions && artwork.printOptions.length > 0 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedType('print')}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${
                    selectedType === 'print'
                      ? 'border-holistic-teal bg-holistic-teal/10'
                      : 'border-holistic-cream bg-holistic-cream hover:border-holistic-teal'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-holistic-dark-purple">Limited Edition Print</span>
                    <span className="text-holistic-teal font-bold text-lg">
                      from ${artwork.printOptions[0].price}
                    </span>
                  </div>
                  <p className="text-sm text-holistic-sage text-left mt-1">Choose size & material</p>
                </motion.button>
              )}

              {!artwork.originalAvailable && !artwork.printsAvailable && (
                <div className="p-4 bg-holistic-cream rounded-lg">
                  <p className="text-holistic-copper font-semibold">Currently Unavailable</p>
                </div>
              )}
            </div>
          </div>

          {/* Print Options */}
          {selectedType === 'print' && artwork.printOptions && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-sm font-semibold text-holistic-dark-purple mb-3 uppercase tracking-wide">
                Choose Size & Material
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {artwork.printOptions.map((option) => (
                  <motion.button
                    key={option.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPrint(option)}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 text-center ${
                      selectedPrint?.id === option.id
                        ? 'border-holistic-teal bg-holistic-teal/10'
                        : 'border-holistic-cream bg-holistic-cream hover:border-holistic-teal'
                    }`}
                  >
                    <p className="font-semibold text-sm text-holistic-dark-purple">{option.type}</p>
                    <p className="text-xs text-holistic-sage mb-1">{option.material}</p>
                    <p className="text-holistic-teal font-bold">${option.price}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Quantity */}
          {isAvailable && (
            <div>
              <h3 className="text-sm font-semibold text-holistic-dark-purple mb-3 uppercase tracking-wide">
                Quantity
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border-2 border-holistic-cream hover:border-holistic-purple transition-colors duration-300 flex items-center justify-center"
                >
                  −
                </button>
                <span className="text-2xl font-bold text-holistic-dark-purple w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border-2 border-holistic-cream hover:border-holistic-purple transition-colors duration-300 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        {isAvailable ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
              added
                ? 'bg-holistic-teal text-white'
                : 'bg-holistic-purple text-white hover:bg-holistic-light-purple'
            }`}
          >
            {added ? '✓ Added to Cart' : 'Add to Cart'}
          </motion.button>
        ) : (
          <div className="w-full py-4 px-6 rounded-lg bg-holistic-cream text-holistic-copper font-bold text-center">
            Out of Stock
          </div>
        )}

        {/* Shipping Info */}
        <div className="space-y-3 text-sm text-holistic-sage">
          <div className="flex items-start gap-3">
            <span className="text-holistic-gold mt-1">🚚</span>
            <div>
              <p className="font-semibold text-holistic-dark-purple">Secure Shipping</p>
              <p>Carefully packaged and insured for safe delivery</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-holistic-gold mt-1">💳</span>
            <div>
              <p className="font-semibold text-holistic-dark-purple">Secure Payment</p>
              <p>Powered by Stripe with full buyer protection</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-holistic-gold mt-1">🎁</span>
            <div>
              <p className="font-semibold text-holistic-dark-purple">Gift Option</p>
              <p>Include a personalized message with your purchase</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

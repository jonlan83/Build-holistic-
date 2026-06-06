'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import ArtworkDetails from '@/components/ArtworkDetails';
import { artworks } from '@/data/artworks';

interface ArtworkPageProps {
  params: {
    id: string;
  };
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const artwork = artworks.find(a => a.id === params.id);

  if (!artwork) {
    notFound();
  }

  const relatedArtworks = artworks.filter(
    a => a.series === artwork.series && a.id !== artwork.id
  ).slice(0, 3);

  return (
    <div className="bg-holistic-cream">
      {/* Breadcrumb */}
      <div className="container-holistic py-6">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm text-holistic-sage"
        >
          <a href="/shop" className="hover:text-holistic-purple transition-colors">
            Gallery
          </a>
          <span>/</span>
          <span className="text-holistic-dark-purple font-semibold truncate">
            {artwork.title}
          </span>
        </motion.nav>
      </div>

      {/* Main Content */}
      <section className="container-holistic py-12 md:py-16">
        <ArtworkDetails artwork={artwork} />
      </section>

      {/* Related Artworks */}
      {relatedArtworks.length > 0 && (
        <section className="py-16 md:py-24 bg-holistic-dark-purple/5">
          <div className="container-holistic">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-holistic-dark-purple mb-12">
                More from {artwork.series}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArtworks.map((related, idx) => (
                  <motion.a
                    key={related.id}
                    href={`/shop/${related.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-square mb-4 bg-holistic-cream">
                      <img
                        src={related.imageUrl}
                        alt={related.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-holistic-dark-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white font-semibold">View Details</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-holistic-dark-purple group-hover:text-holistic-purple transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-holistic-sage text-sm">
                      {related.originalAvailable
                        ? `$${related.price.toLocaleString()}`
                        : `From $${related.printOptions?.[0]?.price || 0}`}
                    </p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container-holistic max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-holistic-dark-purple mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How are the prints made?",
                  a: "Our prints are created using museum-quality materials and professional printing techniques to ensure longevity and color accuracy. Each print is inspected for quality before shipping."
                },
                {
                  q: "Do you offer custom framing?",
                  a: "Yes! We recommend our partner framers. Contact us for recommendations based on your print size and preferred style."
                },
                {
                  q: "What is your return policy?",
                  a: "We offer a 30-day return policy on prints if they arrive damaged. Original paintings are non-returnable as they are one-of-a-kind pieces."
                },
                {
                  q: "How long does shipping take?",
                  a: "Standard shipping takes 5-7 business days. Express options are available at checkout. Originals are shipped with full insurance."
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-holistic-cream pb-6"
                >
                  <h3 className="text-lg font-semibold text-holistic-dark-purple mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-holistic-sage">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
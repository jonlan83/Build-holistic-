import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Holistic Artist Studio | Original Art & Limited Prints',
  description: 'Discover psychedelic-inspired artwork celebrating creative transformation and holistic growth. Shop original paintings and limited edition prints.',
  keywords: ['art', 'paintings', 'psychedelic', 'holistic', 'artist', 'prints', 'original art'],
  openGraph: {
    title: 'Holistic Artist Studio',
    description: 'Art inspired by transformation and creative growth',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-holistic-cream text-holistic-charcoal">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter, MedievalSharp } from 'next/font/google';
import './globals.css';

const interSands = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const medievalSharp = MedievalSharp({
  weight: '400',
  variable: '--font-medieval',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Harry Potter World',
  description: 'All thing Harry Potter',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSands.variable} ${medievalSharp.variable} antialiased`}
      >
        <Header />
        <div className="2xl:max-w-screen-2xl mx-auto">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}


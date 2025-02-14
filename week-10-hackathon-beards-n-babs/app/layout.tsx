import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/next';
import type React from 'react'; // Import React

export const metadata: Metadata = {
  title: 'Fortune Cookie App',
  description: 'Reveal your fortune with a click!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Normal Cookie</Link>
          <Link href="/malevolent">Malevolent Cookie</Link>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

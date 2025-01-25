import type { Metadata } from 'next';

import './globals.css';
import Header from '@/features/common/header';

export const metadata: Metadata = {
  title: 'Daloy',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}

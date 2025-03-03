import type { Metadata } from 'next';

import './globals.css';
import MainLayout from '@/layouts/main-layout';

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
      <body className="antialiased bg-gray-100">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

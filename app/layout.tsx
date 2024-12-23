import './globals.css';
import type { Metadata } from 'next';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import NextAuthProvider from '@/app/components/layouts/providers/NextAuth';

export const metadata: Metadata = {
  title: 'Next.js Sample Layout',
  description: 'next.js sample layout',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <NextAuthProvider>
        <body className="antialiased flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </NextAuthProvider>
    </html>
  );
}

import type { Metadata } from 'next';
import { Hahmlet } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import NavBar from '@/components/NavBar';
import Head from 'next/head';

const inter = Hahmlet({ subsets: ['latin', 'latin-ext', 'vietnamese'] });

export const metadata: Metadata = {
  title: '헬스낵',
  description: '홍두깨살, 토마호크, 떡볶이 등 헬스에 좋은 간식을 만나보세요!',
  openGraph: {
    title: '헬스낵',
    description: '홍두깨살, 토마호크, 떡볶이 등 헬스에 좋은 간식을 만나보세요!',
  },
};

export default function RootLayout({
  children,
  hero,
  best,
  products,
  reviews,
  footer,
}: {
  children: ReactNode;
  hero: ReactNode;
  best: ReactNode;
  products: ReactNode;
  reviews: ReactNode;
  footer: ReactNode;
}) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning={true}
      className={'w-screen overflow-x-hidden'}
    >
      <head>
        <meta
          name="naver-site-verification"
          content="44b51371771d29a54d3f4c4a7d8d4a5b5b97e76d"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} hidden-scroll w-screen overflow-x-hidden pt-[94px]`}
      >
        <NavBar />
        {reviews}
        {best}
        {products}
        {hero}
        {children}
        {footer}
      </body>
    </html>
  );
}

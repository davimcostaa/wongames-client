import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import { Providers } from './providers';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'The best Game Store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}
                ${geistMono.variable}`}
      >
        <StyledComponentsRegistry>
          <Providers> {children} </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

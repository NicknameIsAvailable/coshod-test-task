import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/shared/ui/globals.css';
import {Toaster} from '@/shared/ui/sonner';
import {RootLayout} from '@/shared/layouts/root-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Восход тестовое задание',
};

export default function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout>
            {children}
        </RootLayout>
      </body>
      <Toaster />
    </html>
  );
}

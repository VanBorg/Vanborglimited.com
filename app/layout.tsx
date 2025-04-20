import { ThemeProvider } from '@/context/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import '@/styles/base.css';
import '@/styles/typography.css';
import '@/styles/buttons.css';
import '@/styles/glass.css';
import '@/styles/animations.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js Application',
  description: 'A modern Next.js application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
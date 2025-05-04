import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { AiChat } from '@/components/ai-chat';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Solution Centre Online - RCCGSL',
  description: 'Welcome to the Redeemed Christian Church of God, Solution Centre - Where miracles happen.',
  keywords: 'RCCG, church, christian, worship, solution centre, faith, community',
  authors: [{ name: 'RCCG Solution Centre' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rccgsl.org',
    title: 'Solution Centre Online - RCCGSL',
    description: 'Welcome to the Redeemed Christian Church of God, Solution Centre - Where miracles happen.',
    siteName: 'RCCG Solution Centre',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solution Centre Online - RCCGSL',
    description: 'Welcome to the Redeemed Christian Church of God, Solution Centre - Where miracles happen.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 animate-fade-in">
              <div className="container mx-auto px-4 py-8">
                {children}
              </div>
            </main>
            <Footer />
          </div>
          <AiChat />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

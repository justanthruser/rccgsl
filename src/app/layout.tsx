import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter font for a modern look
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster
import { AiChat } from '@/components/ai-chat'; // Import AiChat

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' }); // Configure Inter font

export const metadata: Metadata = {
  title: 'Solution Centre Online - RCCGSL',
  description: 'Website for the Redeemed Christian Church of God, Solution Centre.',
  // Add more specific SEO metadata later
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Add suppressHydrationWarning for potential dev issues */}
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.variable}`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <AiChat /> {/* Add AI Chat component */}
        <Toaster /> {/* Add Toaster for potential notifications */}
      </body>
    </html>
  );
}

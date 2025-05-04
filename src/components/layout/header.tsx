import Link from 'next/link';
import { Church } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Church className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block">Solution Centre Online</span>
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6 flex-1">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Events
          </Link>
          {/* Add other links like About, Sermons, Contact later */}
        </nav>
        {/* Placeholder for potential user auth or dark mode toggle */}
        {/* <div className="ml-auto">
          <Button variant="ghost" size="icon">
             <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
             <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div> */}
      </div>
    </header>
  );
}

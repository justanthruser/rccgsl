import React from 'react';

export function Footer() {
  return (
    <footer className="p-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          &copy; {new Date().getFullYear()} RCCG Solution Centre. All rights reserved.
        </p>
        {/* Add social links later */}
      </div>
    </footer>
  );
}

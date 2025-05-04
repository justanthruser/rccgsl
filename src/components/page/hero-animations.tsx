'use client';

import React from 'react';

export function HeroAnimations() {
  // Using styled-jsx requires this component to be a Client Component.
  // The 'use client' directive ensures this.
  return (
    <style jsx global>{`
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out forwards;
        /* Ensure elements start invisible if animation hasn't run */
        opacity: 0;
      }
      .animation-delay-200 { animation-delay: 0.2s; }
      .animation-delay-400 { animation-delay: 0.4s; }
    `}</style>
  );
}

import React from 'react';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import LogoCloud from './components/LogoCloud.jsx';
import PricingTeaser from './components/PricingTeaser.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-neutral-900">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span aria-hidden className="h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-400 via-sky-300 to-amber-300" />
            Vocal365
          </a>
          <nav aria-label="Primary" className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#how-it-works" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">How it works</a>
            <a href="#pricing" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Pricing</a>
            <a href="#contact" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 md:inline-block">Sign in</a>
            <a href="#pricing" className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-neutral-900 shadow-md hover:scale-[1.02]">Get started</a>
          </div>
        </div>
      </header>

      <main id="main">
        <Hero />
        <LogoCloud />
        <HowItWorks />
        <PricingTeaser />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 py-10 text-center text-white/60">
        <div className="mx-auto max-w-6xl px-6">
          <p>© {new Date().getFullYear()} Vocal365. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const words = ['bookings', 'revenue', 'guest happiness', 'answer rates'];

export default function Hero() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section aria-label="Vocal365 hero" className="relative flex min-h-[88vh] w-full items-center justify-center overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          <Rocket className="h-3.5 w-3.5" aria-hidden="true" />
          AI for short‑term rentals
        </motion.div>

        <h1 className="sr-only">Vocal365 — Never miss a guest. Turn calls into bookings automatically.</h1>
        <div className="mt-6 flex flex-col items-center gap-4">
          <motion.p
            role="heading"
            aria-level={1}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-semibold leading-tight text-white md:text-6xl text-4xl"
          >
            Never miss a guest. Turn calls into{' '}
            <span className="relative inline-block">
              <span className="sr-only">{words[index]}</span>
              <motion.span
                key={index}
                aria-hidden="true"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="inline-block bg-gradient-to-r from-fuchsia-400 via-sky-300 to-amber-300 bg-clip-text text-transparent"
              >
                {words[index]}
              </motion.span>
            </span>
            — automatically.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl text-white/70"
          >
            Capture revenue you already earned with AI voice agents trained for hospitality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-lg shadow-white/10 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              See how it works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

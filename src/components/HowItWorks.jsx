import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Headphones, PhoneCall, Wallet } from 'lucide-react';

const steps = [
  {
    icon: Headphones,
    title: 'Connect your lines',
    desc: 'Forward calls or integrate your number. No code required.',
  },
  {
    icon: PhoneCall,
    title: 'AI answers 24/7',
    desc: 'Trained on your brand voice, policies, and property data.',
  },
  {
    icon: Wallet,
    title: 'Convert to bookings',
    desc: 'Capture missed revenue with instant follow‑ups and payments.',
  },
];

export default function HowItWorks() {
  const prefersReduced = useReducedMotion();
  return (
    <section id="how-it-works" aria-label="How it works" className="relative w-full bg-neutral-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">How it works</h2>
          <p className="mt-2 text-white/70">Three steps to turn calls into guaranteed revenue.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur hover:bg-white/10"
              >
                <div className="mb-4 inline-flex rounded-lg bg-white/10 p-2">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-white/70">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

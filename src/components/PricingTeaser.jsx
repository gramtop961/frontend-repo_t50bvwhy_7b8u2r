import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function PricingTeaser() {
  const features = ['24/7 AI call handling', 'CRM/logbook export', 'Property-aware answers'];
  return (
    <section id="pricing" aria-label="Pricing teaser" className="relative w-full bg-neutral-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            💰 One-time setup = less than 15% of your first month’s recovered earnings
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Simple setup, instant ROI</h2>
          <p className="mt-2 text-white/70">Pay once. Recover revenue every month.</p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {[499, 999, 1499].map((price, i) => (
            <motion.div
              key={price}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-xl border border-white/10 bg-white/5 p-6 text-white shadow-lg shadow-black/20 backdrop-blur"
            >
              <div className="text-sm text-white/60">Setup</div>
              <div className="mt-1 text-3xl font-semibold">${price}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Choose plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

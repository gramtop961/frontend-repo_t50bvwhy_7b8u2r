import React from 'react';
import { motion } from 'framer-motion';

const logos = ['Airbnb', 'Vrbo', 'Booking.com', 'Stripe', 'Twilio', 'HubSpot'];

export default function LogoCloud() {
  return (
    <section aria-label="Trusted logos" className="w-full bg-neutral-950 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-xs uppercase tracking-widest text-white/60">Trusted by operators and tools you already use</p>
        <div className="grid grid-cols-2 items-center gap-6 text-white/70 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm backdrop-blur"
              aria-label={name}
              role="img"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

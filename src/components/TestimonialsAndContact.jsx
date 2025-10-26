import { motion } from 'framer-motion';
import { useState } from 'react';

const transition = { duration: 1.05, ease: [0.25, 0.1, 0.25, 1] };

const testimonials = [
  {
    quote:
      'Every detail felt intentional. The home is a sanctuary—timeless, calm, and beautifully crafted.',
    author: 'E. Nakamura',
  },
  {
    quote:
      'They elevated our boutique with quiet confidence—understated design that lets the experience shine.',
    author: 'Maison Aurele',
  },
  {
    quote:
      'From materials to light, their approach is poetic yet practical. We felt truly cared for.',
    author: 'J. Ramirez',
  },
];

export default function TestimonialsAndContact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setTimeout(() => setSubmitted(true), 400);
    console.log(Object.fromEntries(form.entries()));
  }

  return (
    <section className="mt-24">
      <div id="testimonials" className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-2xl md:text-4xl font-medium"
        >
          Client Testimonials
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: idx * 0.05 }}
              className="border border-neutral-300/40 rounded-xl p-6 bg-white/40"
            >
              <p className="text-neutral-800 leading-relaxed">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-neutral-600">— {t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>

      <div id="contact" className="mx-auto max-w-6xl px-6 mt-20 md:mt-28">
        <div className="border-t border-neutral-300/40 pt-12 grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <h2 className="text-2xl md:text-4xl font-medium">Let's begin your project</h2>
            <p className="mt-4 text-neutral-700">
              Share a few details about your vision, timeline, and location. We typically respond within two business days.
            </p>
            <div className="mt-8 aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-300/40">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
                alt="Textural neutral palette with stone and wood"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.05 }}
            className="bg-white/60 border border-neutral-300/40 rounded-xl p-6 md:p-8"
          >
            {submitted ? (
              <div className="min-h-[300px] flex items-center justify-center text-center">
                <div>
                  <p className="text-lg">Thank you for reaching out.</p>
                  <p className="text-neutral-700 mt-2">We'll be in touch shortly.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-neutral-700">Name</label>
                    <input required name="name" type="text" className="mt-2 w-full rounded-md border border-neutral-300/60 bg-[#FAF7F2] px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-400/40" />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-700">Email</label>
                    <input required name="email" type="email" className="mt-2 w-full rounded-md border border-neutral-300/60 bg-[#FAF7F2] px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-400/40" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-neutral-700">Project Location</label>
                  <input name="location" type="text" className="mt-2 w-full rounded-md border border-neutral-300/60 bg-[#FAF7F2] px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-400/40" />
                </div>

                <div>
                  <label className="block text-sm text-neutral-700">Estimated Budget</label>
                  <select name="budget" className="mt-2 w-full rounded-md border border-neutral-300/60 bg-[#FAF7F2] px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-400/40">
                    <option value="Undisclosed">Undisclosed</option>
                    <option value="$250k–$500k">$250k–$500k</option>
                    <option value="$500k–$1M">$500k–$1M</option>
                    <option value="$1M+">$1M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-neutral-700">Tell us about your project</label>
                  <textarea name="message" rows={5} className="mt-2 w-full rounded-md border border-neutral-300/60 bg-[#FAF7F2] px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-400/40" placeholder="Scope, style, timeline..." />
                </div>

                <div className="pt-2">
                  <button type="submit" className="px-5 py-3 bg-[#2B2B2B] text-[#FAF7F2] text-sm tracking-wide rounded-md hover:opacity-90 transition-opacity">
                    Send Inquiry
                  </button>
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

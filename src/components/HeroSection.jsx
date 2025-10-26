import { motion } from 'framer-motion';

const transition = { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] };

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="uppercase tracking-[0.2em] text-xs md:text-sm text-neutral-600"
        >
          Architecture & Interior Design
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
          className="mt-4 text-3xl md:text-6xl leading-tight font-medium"
        >
          Warm minimal spaces that honor light, texture, and quiet luxury.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
          className="mt-6 max-w-2xl text-[15px] md:text-base text-neutral-700"
        >
          We design tranquil environments where craftsmanship meets calm. A restrained palette, considered details, and enduring materials define our work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.25 }}
          className="mt-10 flex gap-4"
        >
          <a href="#projects" className="px-5 py-3 bg-[#2B2B2B] text-[#FAF7F2] text-sm tracking-wide rounded-md hover:opacity-90 transition-opacity">
            View Signature Projects
          </a>
          <a href="#contact" className="px-5 py-3 border border-neutral-300/60 text-sm tracking-wide rounded-md hover:bg-black/5 transition-colors">
            Start a Conversation
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="mx-auto max-w-6xl px-6"
      >
        <div className="aspect-[16/8] md:aspect-[16/6] w-full overflow-hidden rounded-xl border border-neutral-300/40">
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000&auto=format&fit=crop"
            alt="Sunlit minimalist living space with warm wood and stone"
            className="w-full h-full object-cover scale-[1.02]"
            loading="eager"
          />
        </div>
      </motion.div>
    </section>
  );
}

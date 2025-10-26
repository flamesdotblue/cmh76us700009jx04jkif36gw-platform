import { motion } from 'framer-motion';

const transition = { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] };

export default function StudioAndApproach() {
  return (
    <section id="studio" className="mt-20 md:mt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <h2 className="text-2xl md:text-4xl font-medium">Our Studio Story</h2>
            <p className="mt-5 text-neutral-700 leading-relaxed">
              Founded with the belief that serenity is a form of luxury, Atelier Lumen crafts residences and boutique spaces with a warm minimal sensibility. We draw from natural light, regional materials, and thoughtful proportion to create rooms that breathe.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Our practice moves carefully—listening first, refining always. We collaborate closely with artisans and builders to ensure an elevated experience from concept to completion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-300/40">
              <img
                src="https://images.unsplash.com/photo-1499363536502-87642509e31b?q=80&w=1600&auto=format&fit=crop"
                alt="Atelier desk with material samples in neutral tones"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        <div id="approach" className="mt-16 md:mt-24 border-t border-neutral-300/40 pt-12">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Light & Proportion',
                desc:
                  'We sculpt with daylight—establishing balance through scale, rhythm, and considered negative space.'
              },
              {
                title: 'Material Honesty',
                desc:
                  'Stone, timber, limewash, and brushed metals—chosen for tactility and longevity, finished with restraint.'
              },
              {
                title: 'Quiet Technology',
                desc:
                  'Comfort-forward systems integrated discreetly—acoustics, climate, and lighting that support calm.'
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: idx * 0.05 }}
              >
                <h3 className="text-lg md:text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-neutral-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

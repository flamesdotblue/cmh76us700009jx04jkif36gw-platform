import { motion } from 'framer-motion';

const transition = { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] };

const projects = [
  {
    title: 'Clifftop Residence',
    location: 'Big Sur, CA',
    img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Courtyard House',
    location: 'Austin, TX',
    img: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Gallery Loft',
    location: 'SoHo, NY',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Desert Pavilion',
    location: 'Scottsdale, AZ',
    img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Lakeside Retreat',
    location: 'Ontario, CA',
    img: 'https://images.unsplash.com/photo-1531870979169-7f25b50a2ca8?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Boutique Suite',
    location: 'Kyoto, JP',
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function ProjectsGallery() {
  return (
    <section id="projects" className="mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="text-2xl md:text-4xl font-medium">Signature Projects</h2>
            <p className="mt-3 text-neutral-700 max-w-2xl">
              A curated selection of homes and boutique spaces defined by restraint, warmth, and precision.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-sm underline underline-offset-4 decoration-neutral-400 hover:opacity-70">Inquire</a>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: (idx % 3) * 0.06 }}
              className="group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-300/40">
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.location}`}
                  className="w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="text-base md:text-lg font-medium">{p.title}</h3>
                <span className="text-xs md:text-sm text-neutral-600">{p.location}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

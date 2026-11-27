import { motion } from 'motion/react';
import { SPACE_CARDS } from '../data/bakeryData';
import { EditorialImage } from './EditorialImage';

export function SpaceSection() {
  const [interior, retail, coffee, pastry] = SPACE_CARDS;

  return (
    <section id="space" className="py-14 md:py-28 lg:py-32 border-b border-[#1E1916]/12">
      <div className="max-w-[1320px] mx-auto px-7 sm:px-9 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 pb-8 md:pb-12">
          <div>
            <p className="text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-[#6B745D] font-medium mb-2.5 sm:mb-3">
              Атмосфера на Подолі
            </p>
            <h2 className="font-serif text-[clamp(1.9rem,5.4vw,3.3rem)] leading-[1.06] tracking-[-0.02em] text-[#1E1916]">
              Простір, де пахне <em className="italic font-normal text-[#B85D3B]">теплим</em> зерном
            </h2>
          </div>

          <p className="text-[13.5px] sm:text-[14px] leading-[1.6] sm:leading-[1.65] text-[#1E1916]/75 max-w-[40ch]">
            Світло, тактильний дуб, ручна кераміка та полиця з речами, які хочеться забрати з собою додому.
          </p>
        </div>

        {/* Mixed-Ratio Editorial Bento Grid — preserved asymmetrical hierarchy on mobile & desktop */}
        <div className="grid grid-cols-12 gap-3.5 sm:gap-6 lg:gap-8">
          {/* Card 1: Wide Architectural Interior (12 cols mobile -> 8 cols desktop) */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-8 flex flex-col border border-[#1E1916]/12 rounded-[4px] bg-[#EAE3D5]/30 p-2.5 sm:p-4"
          >
            <EditorialImage
              src={interior.image}
              alt={interior.imageAlt}
              containerClassName="w-full aspect-[16/9] rounded-[2px]"
              className="hover:scale-[1.02]"
            />
            <div className="pt-3.5 sm:pt-5 pb-1.5 sm:pb-2 px-1 grid grid-cols-12 gap-3 sm:gap-4 items-baseline">
              <div className="col-span-12 sm:col-span-6">
                <p className="text-[10.5px] sm:text-[11px] tracking-[0.12em] uppercase text-[#6B745D] font-medium">
                  {interior.kicker}
                </p>
                <h3 className="mt-1 font-serif text-[21px] sm:text-[26px] leading-tight text-[#1E1916]">
                  {interior.title}
                </h3>
              </div>
              <p className="col-span-12 sm:col-span-6 text-[12.5px] sm:text-[13px] leading-[1.55] sm:leading-[1.6] text-[#1E1916]/75">
                {interior.description}
              </p>
            </div>
          </motion.article>

          {/* Card 2: Tall Arch Retail Shelf (5 cols mobile -> 4 cols desktop) */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-5 lg:col-span-4 flex flex-col justify-between border border-[#1E1916]/12 rounded-t-[130px] sm:rounded-t-[180px] lg:rounded-t-[200px] rounded-b-[4px] bg-[#EAE3D5]/45 p-2 sm:p-4"
          >
            <EditorialImage
              src={retail.image}
              alt={retail.imageAlt}
              containerClassName="w-full aspect-[3/4] rounded-t-[122px] sm:rounded-t-[170px] lg:rounded-t-[190px] rounded-b-[2px]"
              className="hover:scale-[1.02]"
            />
            <div className="pt-3 sm:pt-5 pb-1 px-0.5 sm:px-1">
              <p className="text-[9.5px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#B85D3B] font-medium">
                {retail.kicker}
              </p>
              <h3 className="mt-1 font-serif text-[16.5px] sm:text-[22px] lg:text-[24px] leading-[1.12] text-[#1E1916]">
                {retail.title}
              </h3>
              <p className="hidden sm:block mt-2 text-[13px] leading-[1.6] text-[#1E1916]/75">
                {retail.description}
              </p>
            </div>
          </motion.article>

          {/* Card 3: Specialty Coffee Bar (7 cols alongside tall arch on mobile -> 6 cols desktop) */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-7 lg:col-span-6 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 items-center border border-[#1E1916]/12 rounded-[4px] bg-[#EAE3D5]/30 p-2 sm:p-4"
          >
            <EditorialImage
              src={coffee.image}
              alt={coffee.imageAlt}
              containerClassName="lg:col-span-6 w-full aspect-[4/3] rounded-[2px]"
              className="hover:scale-[1.02]"
            />
            <div className="lg:col-span-6 px-0.5 sm:px-1">
              <p className="text-[9.5px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.12em] uppercase text-[#6B745D] font-medium">
                {coffee.kicker}
              </p>
              <h3 className="mt-1 font-serif text-[17.5px] sm:text-[22px] lg:text-[24px] leading-[1.12] text-[#1E1916]">
                {coffee.title}
              </h3>
              <p className="mt-1.5 sm:mt-2.5 text-[11.5px] sm:text-[13px] leading-[1.48] sm:leading-[1.6] text-[#1E1916]/75">
                {coffee.description}
              </p>
            </div>
          </motion.article>

          {/* Card 4: Pet-friendly Vibe & Morning Pastry (Horizontal 5/7 split on mobile -> 6 cols desktop) */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-3.5 sm:gap-5 items-center border border-[#1E1916]/12 rounded-[4px] bg-[#EAE3D5]/30 p-2.5 sm:p-4"
          >
            <EditorialImage
              src={pastry.image}
              alt={pastry.imageAlt}
              containerClassName="col-span-5 sm:col-span-6 w-full aspect-[4/3] rounded-[2px]"
              className="hover:scale-[1.02]"
            />
            <div className="col-span-7 sm:col-span-6 px-0.5 sm:px-1">
              <p className="text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-[#B85D3B] font-medium">
                {pastry.kicker}
              </p>
              <h3 className="mt-1 font-serif text-[19px] sm:text-[24px] leading-tight text-[#1E1916]">
                {pastry.title}
              </h3>
              <p className="mt-1.5 sm:mt-2.5 text-[12px] sm:text-[13px] leading-[1.52] sm:leading-[1.6] text-[#1E1916]/75">
                {pastry.description}
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

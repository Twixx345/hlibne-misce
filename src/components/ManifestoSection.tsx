import { motion } from 'motion/react';

const PILLARS = [
  {
    number: '01.',
    title: 'Тридцять шість годин тиші',
    detail: 'Холодна ферментація при +4°C',
    copy: 'Ми не прискорюємо тісто теплом чи промисловими дріжджами. Довге визрівання в холоді розщеплює фітинову кислоту, робить хліб легким для травлення та формує ту саму медово-молочну глибину смаку.',
  },
  {
    number: '02.',
    title: 'Жива закваска з 2019 року',
    detail: 'Дикі дріжджі · борошно та вода',
    copy: 'Наша материнська культура не спить жодного дня. Щоночі пекарі оновлюють її двічі перед замісом, щоб о п’ятій ранку перші буханці зайшли на гарячий кам’яний під.',
  },
  {
    number: '03.',
    title: 'Повага до локального зерна',
    detail: 'Кам’яний млин · цільне зерно',
    copy: 'Співпрацюємо напряму з невеликими фермами Київщини та Полтавщини. Жорновий помел зберігає зародок пшениці, жита, гречки та полби, залишаючи в борошні натуральні олії та аромат поля.',
  },
];

export function ManifestoSection() {
  return (
    <section id="manifesto" className="py-14 md:py-28 lg:py-32 border-b border-[#1E1916]/12">
      <div className="max-w-[1320px] mx-auto px-7 sm:px-9 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-16 items-start">
          {/* Left Sticky Editorial Index & Pull Quote */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-[#6B745D] font-medium mb-3 sm:mb-4">
              Маніфест пекарні
            </p>
            <h2 className="font-serif text-[clamp(1.85rem,5.2vw,3.15rem)] leading-[1.06] tracking-[-0.02em] text-[#1E1916] [text-wrap:balance]">
              Хороший хліб не терпить{' '}
              <em className="italic font-normal text-[#B85D3B]">поспіху</em> — лише борошно, воду, сіль і час.
            </h2>
            <p className="mt-4 sm:mt-6 text-[14px] sm:text-[15px] leading-[1.65] text-[#1E1916]/75 max-w-[42ch]">
              «Хлібне Місце» народилося з бажання повернути щоденному хлібу статус тихої події. Без гучних обіцянок, але з бездоганною скоринкою, яка тріскається під ножем.
            </p>
          </div>

          {/* Right Craft Pillars separated by 1px hairline borders — preserved 5/7 split on mobile */}
          <div className="lg:col-span-7">
            <div className="border-t border-[#1E1916]/14">
              {PILLARS.map((pillar, idx) => (
                <motion.article
                  key={pillar.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="py-6 sm:py-8 md:py-10 border-b border-[#1E1916]/14 grid grid-cols-12 gap-3.5 sm:gap-8 items-baseline"
                >
                  <div className="col-span-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <span className="font-mono text-[11px] sm:text-[12px] text-[#B85D3B] tabular-nums">
                        {pillar.number}
                      </span>
                      <h3 className="font-serif text-[19px] sm:text-[24px] md:text-[26px] leading-[1.12] text-[#1E1916]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 sm:mt-2 sm:pl-8 text-[11px] sm:text-[12px] tracking-[0.03em] text-[#6B745D]">
                      {pillar.detail}
                    </p>
                  </div>

                  <p className="col-span-7 text-[13px] sm:text-[15px] leading-[1.62] sm:leading-[1.7] text-[#1E1916]/80">
                    {pillar.copy}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

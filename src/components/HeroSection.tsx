import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/bakeryData';
import { EditorialImage } from './EditorialImage';

interface HeroSectionProps {
  onOpenReserve: () => void;
}

const MARQUEE_ITEMS = [
  'Свіжий тартін з печі о 08:30 · 12:00 · 16:00',
  '36 годин холодної ферментації',
  'Борошно кам’яного млина та дика закваска',
  'Спешелті фільтр-кава щоранку з 08:00',
];

export function HeroSection({ onOpenReserve }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-7 sm:px-9 lg:px-12 pt-7 pb-10 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-stretch">
          {/* Top/Left Editorial Headline + Desktop Copy */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-between py-1 lg:py-2">
            <div>
              <p className="text-[10.5px] sm:text-[12px] tracking-[0.14em] uppercase text-[#6B745D] font-medium mb-3 sm:mb-6">
                Київ · Поділ · Пекарня та кав’ярня
              </p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[clamp(2.35rem,7.8vw,4.85rem)] leading-[0.99] tracking-[-0.025em] text-[#1E1916] [text-wrap:balance] max-w-[15ch]"
              >
                Повільний хліб, теплий{' '}
                <em className="italic font-normal text-[#B85D3B]">ритм</em>{' '}
                ранку.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:block mt-7 text-[17px] leading-[1.68] text-[#1E1916]/80 max-w-[48ch]"
              >
                Ремісничий хліб на живій заквасці з жорнового зерна, листкова випічка на фермерському маслі та прозорий фільтр. Місце, де час вимірюють виходами з подової печі.
              </motion.p>
            </div>

            {/* Desktop Footer Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex mt-14 pt-8 border-t border-[#1E1916]/12 flex-row items-center justify-between gap-6"
            >
              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={onOpenReserve}
                  className="inline-flex items-center gap-3 px-7 py-3.5 text-[14px] font-medium tracking-[0.02em] bg-[#1E1916] text-[#F6F3EE] hover:bg-[#B85D3B] rounded-[3px] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B85D3B] focus-visible:outline-offset-2"
                >
                  <span>Забронювати буханець</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                </button>

                <a
                  href="#menu"
                  className="inline-flex items-center py-2 text-[14px] font-medium text-[#1E1916] border-b border-[#1E1916]/35 hover:border-[#B85D3B] hover:text-[#B85D3B] transition-colors whitespace-nowrap shrink-0"
                >
                  Дивитись меню
                </a>
              </div>

              <div className="text-[12px] text-[#1E1916]/65 tracking-[0.02em] leading-relaxed">
                <span>вул. Ярославська, 14</span>
                <span aria-hidden="true" className="mx-2">·</span>
                <span className="font-mono tabular-nums">08:00–20:00</span>
              </div>
            </motion.div>
          </div>

          {/* Mobile & Tablet Asymmetric Copy + Action Column (7 cols alongside 5-col arch) */}
          <div className="col-span-7 lg:hidden flex flex-col justify-between pt-2 border-t border-[#1E1916]/12">
            <p className="text-[13.5px] sm:text-[15px] leading-[1.58] text-[#1E1916]/82">
              Ремісничий хліб на живій заквасці з жорнового зерна, листкова випічка та прозорий фільтр на Подолі.
            </p>

            <div className="mt-5 space-y-3.5">
              <button
                type="button"
                onClick={onOpenReserve}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-3.5 sm:px-6 py-2.5 text-[12px] sm:text-[13.5px] font-medium bg-[#1E1916] text-[#F6F3EE] hover:bg-[#B85D3B] rounded-[3px] transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Забронювати хліб</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />
              </button>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <a
                  href="#menu"
                  className="inline-flex items-center min-h-[40px] text-[12.5px] sm:text-[13px] font-medium text-[#1E1916] border-b border-[#1E1916]/35 hover:text-[#B85D3B] whitespace-nowrap"
                >
                  Дивитись меню
                </a>
                <span className="text-[11px] font-mono tabular-nums text-[#1E1916]/60">
                  Ярославська, 14
                </span>
              </div>
            </div>
          </div>

          {/* Right Arch Visual Frame (5 cols on BOTH mobile & desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-5 lg:col-span-5 flex flex-col"
          >
            <div className="relative flex-1 min-h-[185px] sm:min-h-[300px] lg:min-h-[540px] p-1.5 sm:p-2.5 border border-[#1E1916]/14 rounded-t-[130px] sm:rounded-t-[200px] lg:rounded-t-[260px] rounded-b-[4px] bg-[#EAE3D5]/55">
              <EditorialImage
                src={IMAGES.heroSourdough}
                alt="Свіжоспечений буханець тартіну на небіленому льоні під ранковим віконним світлом"
                loading="eager"
                containerClassName="w-full h-full rounded-t-[122px] sm:rounded-t-[192px] lg:rounded-t-[250px] rounded-b-[2px] aspect-[3/4] lg:aspect-auto lg:h-full"
                className="hover:scale-[1.02]"
              />
            </div>
            <div className="mt-2 sm:mt-3 flex items-baseline justify-between gap-2 text-[11px] sm:text-[12px] text-[#1E1916]/60">
              <span className="font-serif italic text-[12px] sm:text-[14px] text-[#1E1916]/80 truncate">
                Мал. 01 — Тартін
              </span>
              <span className="font-mono tabular-nums text-[10px] sm:text-[11px] shrink-0">08:30</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimalist Subtle Oven Schedule Marquee */}
      <div
        aria-label="Розклад випічки"
        className="border-y border-[#1E1916]/12 bg-[#EAE3D5]/70 py-3.5 overflow-hidden select-none"
      >
        <div className="animate-oven-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-10 pr-10 shrink-0">
              {MARQUEE_ITEMS.map((item, idx) => (
                <div key={`${dup}-${idx}`} className="flex items-center gap-10 shrink-0">
                  <span className="text-[12px] tracking-[0.08em] uppercase text-[#1E1916]/80 font-medium whitespace-nowrap">
                    {item}
                  </span>
                  <span aria-hidden="true" className="text-[#B85D3B] text-xs">
                    —
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

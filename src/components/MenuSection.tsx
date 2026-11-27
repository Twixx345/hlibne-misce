import { useRef, useState } from 'react';
import { AnimatePresence, motion, useSpring } from 'motion/react';
import { MENU_CATEGORIES, MenuCategoryId, MenuItem } from '../data/bakeryData';
import { EditorialImage } from './EditorialImage';

export function MenuSection() {
  const [activeTab, setActiveTab] = useState<MenuCategoryId>('sourdough');
  const currentCategory = MENU_CATEGORIES.find((c) => c.id === activeTab) ?? MENU_CATEGORIES[0];
  const [activeItem, setActiveItem] = useState<MenuItem>(currentCategory.items[0]);

  const listRef = useRef<HTMLDivElement>(null);
  const floatY = useSpring(0, { stiffness: 180, damping: 24, mass: 0.6 });

  const handleCategoryChange = (categoryId: MenuCategoryId) => {
    setActiveTab(categoryId);
    const nextCategory = MENU_CATEGORIES.find((c) => c.id === categoryId);
    if (nextCategory && nextCategory.items.length > 0) {
      setActiveItem(nextCategory.items[0]);
    }
    floatY.set(0);
  };

  const handleItemHover = (item: MenuItem, index: number) => {
    setActiveItem(item);
    // Subtle vertical parallax offset centered around list middle (compositor-only transform)
    const offset = (index - 1.5) * 18;
    floatY.set(offset);
  };

  return (
    <section id="menu" className="py-14 md:py-28 lg:py-32 border-b border-[#1E1916]/12">
      <div className="max-w-[1320px] mx-auto px-7 sm:px-9 lg:px-12">
        {/* Section Header + Category Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 pb-8 lg:pb-10 border-b border-[#1E1916]/14">
          <div>
            <p className="text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-[#6B745D] font-medium mb-2.5 sm:mb-3">
              Щоденна вітрина
            </p>
            <h2 className="font-serif text-[clamp(1.9rem,5.4vw,3.3rem)] leading-[1.06] tracking-[-0.02em] text-[#1E1916]">
              Меню <em className="italic font-normal text-[#B85D3B]">пекарні</em> та бару
            </h2>
          </div>

          {/* Clean segmented category tabs (2x2 balanced grid on mobile, inline row on sm+) */}
          <div
            role="tablist"
            aria-label="Категорії меню"
            className="grid grid-cols-2 sm:inline-flex items-center gap-1 p-1 bg-[#EAE3D5]/80 border border-[#1E1916]/10 rounded-[4px]"
          >
            {MENU_CATEGORIES.map((category) => {
              const isSelected = category.id === activeTab;
              return (
                <button
                  key={category.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`min-h-[44px] sm:min-h-[38px] px-3 sm:px-4 py-2 text-[12.5px] sm:text-[13px] font-medium rounded-[3px] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B85D3B] ${
                    isSelected
                      ? 'bg-[#1E1916] text-[#F6F3EE]'
                      : 'text-[#1E1916]/75 hover:text-[#1E1916]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Lead Note */}
        <p className="mt-5 sm:mt-6 text-[13.5px] sm:text-[14px] text-[#1E1916]/70 max-w-[60ch]">
          {currentCategory.editorialLead}
        </p>

        {/* Two-column Living Showcase Grid */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Michelin-inspired Editorial Menu List */}
          <div ref={listRef} className="lg:col-span-7 border-t border-[#1E1916]/14">
            {currentCategory.items.map((item, idx) => {
              const isFocused = activeItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => handleItemHover(item, idx)}
                  onFocus={() => handleItemHover(item, idx)}
                  onClick={() => handleItemHover(item, idx)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isFocused}
                  className={`group py-5 sm:py-7 md:py-8 border-b border-[#1E1916]/14 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B85D3B] focus-visible:outline-offset-[-2px] ${
                    isFocused ? 'bg-[#EAE3D5]/35 -mx-3 sm:-mx-4 px-3 sm:px-4 rounded-[3px]' : 'hover:bg-[#EAE3D5]/20 -mx-3 sm:-mx-4 px-3 sm:px-4 rounded-[3px]'
                  }`}
                >
                  <div className="grid grid-cols-12 lg:block gap-3.5 sm:gap-5 items-center">
                    <div className="col-span-8 lg:w-full">
                      <div className="flex flex-wrap lg:flex-nowrap items-baseline justify-between gap-x-3 gap-y-1">
                        <h3 className="font-serif text-[21px] sm:text-[25px] md:text-[28px] leading-[1.12] text-[#1E1916] group-hover:text-[#B85D3B] transition-colors duration-200">
                          {item.name}
                        </h3>
                        <div className="flex items-baseline gap-2 shrink-0 font-mono tabular-nums">
                          <span className="text-[11px] sm:text-[12px] text-[#1E1916]/55">{item.portion}</span>
                          <span aria-hidden="true" className="text-[#1E1916]/30">·</span>
                          <span className="text-[14px] sm:text-[16px] font-medium text-[#1E1916]">{item.price} ₴</span>
                        </div>
                      </div>

                      <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-[12px] tracking-[0.02em] text-[#6B745D] font-medium">
                        {item.subtitle}
                      </p>

                      <p className="mt-2 sm:mt-3 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.55] sm:leading-[1.65] text-[#1E1916]/80 max-w-[56ch]">
                        {item.description}
                      </p>

                      {item.note && (
                        <p className="mt-2 text-[11.5px] sm:text-[12px] font-serif italic text-[#B85D3B]">
                          {item.note}
                        </p>
                      )}
                    </div>

                    {/* Mobile & Tablet Asymmetric Mini Arch Frame (preserves Living Showcase look without single-column collapse) */}
                    <div className="col-span-4 lg:hidden">
                      <div className="p-1 border border-[#1E1916]/14 rounded-t-[90px] rounded-b-[3px] bg-[#EAE3D5]/55">
                        <EditorialImage
                          src={item.image}
                          alt={item.imageAlt}
                          containerClassName="w-full aspect-[3/4] rounded-t-[84px] rounded-b-[2px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Desktop Living Showcase Parallax Preview */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
            <motion.div style={{ y: floatY }} className="will-change-transform">
              <div className="p-3 border border-[#1E1916]/14 rounded-t-[200px] rounded-b-[4px] bg-[#EAE3D5]/55">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <EditorialImage
                      src={activeItem.image}
                      alt={activeItem.imageAlt}
                      containerClassName="w-full aspect-[4/3] rounded-t-[190px] rounded-b-[2px]"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 flex items-baseline justify-between gap-4 px-1">
                <div>
                  <p className="font-serif italic text-[20px] text-[#1E1916]">
                    {activeItem.name}
                  </p>
                  <p className="text-[12px] text-[#1E1916]/65 mt-0.5">
                    {activeItem.subtitle}
                  </p>
                </div>
                <span className="font-mono tabular-nums text-[14px] text-[#B85D3B] shrink-0">
                  {activeItem.price} ₴
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

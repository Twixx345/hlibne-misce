import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, X } from 'lucide-react';

interface BrandGuideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const COLOR_TOKENS = [
  { name: 'Unbleached Linen', ukr: 'Небілений льон', hex: '#F6F3EE', role: 'Основне полотно (60%)' },
  { name: 'Warm Sand', ukr: 'Тепле масло / пісок', hex: '#EAE3D5', role: 'Поверхні та паузи (30%)' },
  { name: 'Roasted Bean', ukr: 'Темне кавове зерно', hex: '#1E1916', role: 'Типографіка та рамки' },
  { name: 'Fired Clay', ukr: 'Приглушена теракота', hex: '#B85D3B', role: 'Акценти, курсив, дії (10%)' },
  { name: 'Sage Olive', ukr: 'Шавлієва олива', hex: '#6B745D', role: 'Підзаголовки та статуси' },
];

export function BrandGuideDrawer({ isOpen, onClose }: BrandGuideDrawerProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="brand-guide-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1E1916]/60 backdrop-blur-[2px]"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[680px] h-full overflow-y-auto bg-[#F6F3EE] text-[#1E1916] border-l border-[#1E1916]/15 p-6 sm:p-10 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#1E1916]/14">
              <div>
                <p className="text-[11px] tracking-[0.14em] uppercase text-[#6B745D] font-medium">
                  Brand & UX Specification
                </p>
                <h2 id="brand-guide-title" className="mt-1 font-serif text-[32px] leading-tight">
                  Дизайн-система <em className="italic font-normal text-[#B85D3B]">«Хлібне Місце»</em>
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Закрити гід"
                className="w-10 h-10 flex items-center justify-center text-[#1E1916]/70 hover:text-[#1E1916] cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            <div className="mt-8 space-y-10 text-[14px] leading-[1.65]">
              {/* 1. Palette */}
              <section>
                <h3 className="font-serif text-[24px] text-[#1E1916] mb-4">
                  01. Кольорова система (Modern Tactile Minimalism)
                </h3>
                <div className="divide-y divide-[#1E1916]/12 border-y border-[#1E1916]/12">
                  {COLOR_TOKENS.map((token) => (
                    <div key={token.hex} className="py-3.5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <span
                          className="w-9 h-9 rounded-[3px] border border-[#1E1916]/18 shrink-0"
                          style={{ backgroundColor: token.hex }}
                        />
                        <div>
                          <p className="font-medium text-[#1E1916]">
                            {token.ukr} <span className="text-[#1E1916]/50 font-normal">· {token.name}</span>
                          </p>
                          <p className="text-[12px] text-[#1E1916]/65">{token.role}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(token.hex)}
                        className="inline-flex items-center gap-1.5 font-mono text-[12px] px-2.5 py-1.5 border border-[#1E1916]/16 rounded-[3px] hover:border-[#B85D3B] transition-colors cursor-pointer"
                      >
                        <span>{token.hex}</span>
                        {copiedHex === token.hex ? (
                          <Check className="w-3.5 h-3.5 text-[#6B745D]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-[#1E1916]/50" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* 2. Typography */}
              <section>
                <h3 className="font-serif text-[24px] text-[#1E1916] mb-3">
                  02. Типографіка з підтримкою кирилиці
                </h3>
                <div className="space-y-3 border border-[#1E1916]/12 rounded-[3px] p-4 bg-[#EAE3D5]/35">
                  <p>
                    <strong className="font-medium">Display Serif — Cormorant Garamond (400 / Italic):</strong>{' '}
                    Виразний контраст штрихів, мікс прямого накреслення й курсиву в межах одного заголовка (<code className="font-mono text-[12px]">tracking: -0.025em</code>).
                  </p>
                  <p>
                    <strong className="font-medium">Body & UI — Manrope (400 / 500):</strong>{' '}
                    Теплий нео-гротеск із досконалою українською кирилицею та високою читабельністю.
                  </p>
                  <p>
                    <strong className="font-medium">Tabular Data — IBM Plex Mono:</strong>{' '}
                    Використовується виключно для розкладу печі (<code className="font-mono text-[12px]">08:30</code>), ваги та цін із <code className="font-mono text-[12px]">tabular-nums</code>.
                  </p>
                </div>
              </section>

              {/* 3. Photography Brief */}
              <section>
                <h3 className="font-serif text-[24px] text-[#1E1916] mb-3">
                  03. Арт-дирекшн фотографії
                </h3>
                <p className="text-[#1E1916]/80">
                  Спрямоване ранкове віконне світло з глибокими м’якими тінями (chiaroscuro), естетика 35мм плівки (Kodak Portra 400), макро-текстури відкритого м’якуша тартіну, гофрованих шарів круасану, ручної шамотної кераміки та небіленого льону. Форми: арки пекарської печі (<code className="font-mono text-[12px]">border-radius: 260px 260px 4px 4px</code>) у поєднанні з чіткими лініями 1px.
                </p>
              </section>

              {/* 4. Build Recommendations */}
              <section>
                <h3 className="font-serif text-[24px] text-[#1E1916] mb-3">
                  04. Рекомендації для Figma / Framer / Webflow
                </h3>
                <ul className="space-y-2.5 list-disc pl-5 text-[#1E1916]/80">
                  <li>
                    <strong>Figma:</strong> 12-колонкова сітка (max-width 1320px, gutter 32px), змінні кольорів для Surface/Ink/Accent, автолейаути з hairline-розділювачами 1px (<code className="font-mono text-[12px]">rgba(30,25,22,0.14)</code>).
                  </li>
                  <li>
                    <strong>Framer:</strong> Використовуйте Scroll Transform та Spring-фізику (<code className="font-mono text-[12px]">stiffness: 180, damping: 24</code>) для плавного «Living Showcase» прев’ю меню та Lenis-подібного інерційного скролу.
                  </li>
                  <li>
                    <strong>Webflow + GSAP:</strong> Анімуйте лише композитні властивості (<code className="font-mono text-[12px]">transform</code>, <code className="font-mono text-[12px]">opacity</code>) через GSAP ScrollTrigger без тривалих затримок, щоб не блокувати перше зчитування меню.
                  </li>
                </ul>
              </section>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

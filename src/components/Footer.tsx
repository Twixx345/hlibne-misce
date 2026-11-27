import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenBrandGuide: () => void;
}

export function Footer({ onOpenBrandGuide }: FooterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Вкажіть коректну електронну адресу');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer id="footer" className="pt-16 md:pt-28 pb-8 bg-[#1E1916] text-[#F6F3EE]">
      <div className="max-w-[1320px] mx-auto px-7 sm:px-9 lg:px-12">
        <div className="grid grid-cols-12 gap-x-5 gap-y-10 md:gap-12 pb-14 md:pb-16 border-b border-[#F6F3EE]/14">
          {/* Column 1: Newsletter "Хлібний лист" */}
          <div className="col-span-12 md:col-span-5">
            <p className="text-[11px] tracking-[0.14em] uppercase text-[#EAE3D5]/70 font-medium">
              Хлібний лист
            </p>
            <h2 className="mt-3 font-serif text-[26px] sm:text-[28px] md:text-[32px] leading-[1.12] text-[#F6F3EE] [text-wrap:balance]">
              Сезонні дегустації, нове зерно та{' '}
              <em className="italic font-normal text-[#EAE3D5]">тихі</em> вечори.
            </h2>
            <p className="mt-3 text-[13.5px] sm:text-[14px] leading-[1.6] text-[#F6F3EE]/70 max-w-[40ch]">
              Один короткий лист раз на місяць — без спаму, лише анонси нових партій борошна та камерних капінгів.
            </p>

            {submitted ? (
              <div className="mt-6 flex items-center gap-3 py-3.5 px-4 border border-[#6B745D] bg-[#6B745D]/15 rounded-[3px] text-[13px] text-[#F6F3EE]">
                <Check className="w-4 h-4 text-[#EAE3D5] shrink-0" aria-hidden="true" />
                <span>Дякуємо. Наступний «Хлібний лист» вже готується для вас.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Електронна пошта
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="your@email.com"
                    className="flex-1 min-h-[44px] bg-transparent border border-[#F6F3EE]/28 focus:border-[#B85D3B] rounded-[3px] px-4 py-3 text-[14px] text-[#F6F3EE] placeholder:text-[#F6F3EE]/40 outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="min-h-[44px] px-6 py-3 bg-[#B85D3B] hover:bg-[#a24f31] text-[#F6F3EE] text-[13px] font-medium rounded-[3px] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F6F3EE]"
                  >
                    Підписатися
                  </button>
                </div>
                {error && (
                  <p className="mt-2 text-[12px] text-[#E69A7E]" role="alert">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Column 2: Address & Hours (6 cols side-by-side on mobile) */}
          <div className="col-span-6 md:col-span-4 md:pl-8 space-y-5 sm:space-y-6">
            <div>
              <p className="text-[10.5px] sm:text-[11px] tracking-[0.14em] uppercase text-[#EAE3D5]/60 mb-1.5 sm:mb-2">
                Адреса
              </p>
              <p className="text-[13.5px] sm:text-[15px] leading-[1.6] text-[#F6F3EE]">
                вул. Ярославська, 14
                <br />
                Поділ, Київ, 04071
              </p>
            </div>

            <div>
              <p className="text-[10.5px] sm:text-[11px] tracking-[0.14em] uppercase text-[#EAE3D5]/60 mb-1.5 sm:mb-2">
                Години роботи
              </p>
              <p className="text-[13px] sm:text-[15px] leading-[1.6] text-[#F6F3EE] font-mono tabular-nums">
                Пн–Пт · 08:00–20:00
                <br />
                Сб–Нд · 08:30–20:30
              </p>
            </div>
          </div>

          {/* Column 3: Social & Brand Spec (6 cols side-by-side on mobile) */}
          <div className="col-span-6 md:col-span-3 space-y-5 sm:space-y-6">
            <div>
              <p className="text-[10.5px] sm:text-[11px] tracking-[0.14em] uppercase text-[#EAE3D5]/60 mb-1.5 sm:mb-2">
                Зв’язок
              </p>
              <ul className="space-y-2 sm:space-y-2.5 text-[13.5px] sm:text-[15px]">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#F6F3EE] hover:text-[#B85D3B] transition-colors"
                  >
                    <span>@khlibne.misce</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </li>
                <li className="text-[#F6F3EE]/80 font-mono tabular-nums text-[12.5px] sm:text-[14px]">
                  +38 (067) 412 88 30
                </li>
                <li className="text-[#F6F3EE]/80 text-[12.5px] sm:text-[14px] break-all sm:break-normal">
                  hello@khlibnemisce.ua
                </li>
              </ul>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenBrandGuide}
                className="min-h-[40px] text-left text-[12.5px] sm:text-[13px] text-[#EAE3D5]/80 hover:text-[#F6F3EE] border-b border-[#EAE3D5]/30 hover:border-[#F6F3EE] pb-0.5 transition-colors cursor-pointer"
              >
                Дизайн-система та гід бренду
              </button>
            </div>
          </div>
        </div>

        {/* Sub-footer copyright */}
        <div className="pt-6 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-[11.5px] sm:text-[12px] text-[#F6F3EE]/50">
          <span>© {new Date().getFullYear()} Хлібне Місце. Усі буханці спечені вручну на Подолі.</span>
          <span>Запашна закваска · Спешелті зерно</span>
        </div>

        {/* Full-Width Oversized Brand Wordmark */}
        <div className="pt-4 border-t border-[#F6F3EE]/12 overflow-hidden select-none">
          <p
            aria-hidden="true"
            className="font-serif text-[clamp(2.5rem,11.2vw,10.5rem)] leading-[0.88] tracking-[-0.03em] text-[#F6F3EE]/92 text-center whitespace-nowrap"
          >
            ХЛІБНЕ МІСЦЕ
          </p>
        </div>
      </div>
    </footer>
  );
}

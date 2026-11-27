import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenReserve: () => void;
}

export function Navbar({ onOpenReserve }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#manifesto', label: 'Філософія' },
    { href: '#menu', label: 'Меню' },
    { href: '#schedule', label: 'Розклад печі' },
    { href: '#space', label: 'Простір' },
    { href: '#footer', label: 'Контакти' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F6F3EE]/92 backdrop-blur-md border-b border-[#1E1916]/12">
      <div className="max-w-[1320px] mx-auto px-7 sm:px-9 lg:px-12 h-16 md:h-[72px] flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif text-[22px] sm:text-2xl md:text-[26px] font-medium tracking-[-0.02em] text-[#1E1916] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#B85D3B] focus-visible:outline-offset-4"
        >
          Хлібне Місце
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Головна навігація" className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-[13px] font-medium tracking-[0.02em] text-[#1E1916]/75 hover:text-[#1E1916] transition-colors duration-200 whitespace-nowrap shrink-0 after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#B85D3B] hover:after:scale-x-100 after:transition-transform after:duration-200 focus-visible:outline-2 focus-visible:outline-[#B85D3B] focus-visible:outline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile drawer trigger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenReserve}
            className="hidden sm:inline-flex items-center justify-center min-h-[40px] px-5 py-2.5 text-[13px] font-medium tracking-[0.02em] text-[#F6F3EE] bg-[#1E1916] hover:bg-[#B85D3B] rounded-[3px] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B85D3B] focus-visible:outline-offset-2"
          >
            Забронювати хліб
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Закрити меню' : 'Відкрити меню'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#1E1916] hover:text-[#B85D3B] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5 stroke-[1.5]" /> : <Menu className="w-5 h-5 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#1E1916]/12 bg-[#F6F3EE] px-7 py-6">
          <nav aria-label="Мобільна навігація" className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-base font-medium text-[#1E1916] border-b border-[#1E1916]/8"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenReserve();
              }}
              className="mt-3 w-full min-h-[44px] py-3 px-5 text-sm font-medium text-[#F6F3EE] bg-[#1E1916] hover:bg-[#B85D3B] rounded-[3px] transition-colors cursor-pointer"
            >
              Забронювати хліб
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

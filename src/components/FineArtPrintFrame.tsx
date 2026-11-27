import { RefObject } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

interface FineArtPrintFrameProps {
  targetRef: RefObject<HTMLElement | null>;
}

function RegistrationCrosshair({ className = '' }: { className?: string }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
      className={`text-[#1E1916]/30 ${className}`}
    >
      <path d="M6.5 0V13M0 6.5H13" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  );
}

function WheatStalkSketch({ className = '' }: { className?: string }) {
  return (
    <svg
      width="46"
      height="156"
      viewBox="0 0 46 156"
      fill="none"
      aria-hidden="true"
      className={`text-[#6B745D]/40 ${className}`}
    >
      {/* Main curving stem */}
      <path
        d="M23 154C23 118 22 86 24 44C24.5 32 25 20 23 8"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
      />
      {/* Left wheat grains & awns */}
      <path
        d="M23.5 68C16 64 12 56 14 48C18.5 52 22 59 23.5 68Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      <path d="M14 48C10 38 9 30 10 22" stroke="currentColor" strokeWidth="0.65" strokeLinecap="round" />
      <path
        d="M23.8 52C16.5 47.5 13 40 15 32C19.5 36.5 22.5 43 23.8 52Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      <path d="M15 32C12 22 11 14 12.5 7" stroke="currentColor" strokeWidth="0.65" strokeLinecap="round" />
      <path
        d="M24 36C18 31.5 15.5 24.5 17.5 17.5C21.5 21.5 23.5 28 24 36Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      {/* Right wheat grains & awns */}
      <path
        d="M23.5 60C30.5 55.5 34 47.5 31.5 40C27.5 44 24.5 51 23.5 60Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      <path d="M31.5 40C34.5 30.5 35.5 22 34.5 14" stroke="currentColor" strokeWidth="0.65" strokeLinecap="round" />
      <path
        d="M24 44C30.5 39.5 33.5 32 31.5 25C27.5 29 25 35.5 24 44Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      <path d="M31.5 25C34 16 34.5 9 33.5 3" stroke="currentColor" strokeWidth="0.65" strokeLinecap="round" />
      <path
        d="M23.5 27C28.5 22 30 15.5 27.5 9.5C24.5 13.5 23.5 19.5 23.5 27Z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      {/* Slender leaf blade */}
      <path
        d="M23 116C15 104 9 94 4 86C11 91 18 100 23 116Z"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RyeSprigSketch({ className = '' }: { className?: string }) {
  return (
    <svg
      width="44"
      height="136"
      viewBox="0 0 44 136"
      fill="none"
      aria-hidden="true"
      className={`text-[#1E1916]/24 ${className}`}
    >
      <path
        d="M22 134C21 104 21 76 23 38C24 26 24.5 16 22 6"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
      />
      {/* Minimal grain kernels along top stem */}
      <path d="M22.5 54C16 48 14 40 16.5 34C20 39 22 46 22.5 54Z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M23 42C29 36 31 28 28.5 22C25 27 23.5 34 23 42Z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M23 30C17.5 24.5 16 17.5 18.5 12C21.5 16.5 22.5 23 23 30Z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M23 19C27.5 14 28.5 8 26.5 3.5C24 7 23 12.5 23 19Z" stroke="currentColor" strokeWidth="0.8" />
      {/* Fine awns */}
      <path d="M16.5 34L12 18" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M28.5 22L32 7" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M18.5 12L16 2" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      {/* Detached floating grain */}
      <ellipse cx="10" cy="88" rx="2.4" ry="4.8" transform="rotate(-18 10 88)" stroke="currentColor" strokeWidth="0.75" />
      <ellipse cx="33" cy="102" rx="2.2" ry="4.4" transform="rotate(22 33 102)" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

function ScatteredGrainSketch({ className = '' }: { className?: string }) {
  return (
    <svg
      width="42"
      height="72"
      viewBox="0 0 42 72"
      fill="none"
      aria-hidden="true"
      className={`text-[#B85D3B]/35 ${className}`}
    >
      <path
        d="M15 24C12 19 13 12 17.5 9C21 13.5 20 20 15 24Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path d="M16.5 11C16 16 16 19 15.5 22" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      <path
        d="M27 42C24 37 25 30 29.5 27C33 31.5 32 38 27 42Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path d="M28.5 29C28 34 28 37 27.5 40" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      <path
        d="M14 58C12.5 53 15 47.5 19.5 46C21.5 50.5 19 56 14 58Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export function FineArtPrintFrame({ targetRef }: FineArtPrintFrameProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Soft vertical scroll drift (compositor-only translateY)
  const leftLabelY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rightLabelY = useTransform(scrollYProgress, [0, 1], [60, -140]);
  const botanicalSlowY = useTransform(scrollYProgress, [0, 1], [-24, 48]);
  const botanicalCounterY = useTransform(scrollYProgress, [0, 1], [32, -40]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 z-10 overflow-hidden"
    >
      {/* Left & Right 1px Vertical Print Margin Hairlines */}
      <div className="absolute top-0 bottom-0 left-2.5 sm:left-5 xl:left-7 w-px bg-[#1E1916]/[0.10]" />
      <div className="absolute top-0 bottom-0 right-2.5 sm:right-5 xl:right-7 w-px bg-[#1E1916]/[0.10]" />

      {/* Top & Bottom Corner Registration Crosshairs (+) */}
      <RegistrationCrosshair className="absolute top-3.5 left-[4px] sm:left-[14px] xl:left-[22px]" />
      <RegistrationCrosshair className="absolute top-3.5 right-[4px] sm:right-[14px] xl:right-[22px]" />
      <RegistrationCrosshair className="absolute bottom-3.5 left-[4px] sm:left-[14px] xl:left-[22px]" />
      <RegistrationCrosshair className="absolute bottom-3.5 right-[4px] sm:right-[14px] xl:right-[22px]" />

      {/* Intermediate Section-Divider Registration Marks along vertical rails (all viewports) */}
      <RegistrationCrosshair className="absolute top-[27%] left-[4px] sm:left-[14px] xl:left-[22px] opacity-75" />
      <RegistrationCrosshair className="absolute top-[27%] right-[4px] sm:right-[14px] xl:right-[22px] opacity-75" />
      <RegistrationCrosshair className="absolute top-[56%] left-[4px] sm:left-[14px] xl:left-[22px] opacity-75" />
      <RegistrationCrosshair className="absolute top-[56%] right-[4px] sm:right-[14px] xl:right-[22px] opacity-75" />
      <RegistrationCrosshair className="absolute top-[82%] left-[4px] sm:left-[14px] xl:left-[22px] opacity-75" />
      <RegistrationCrosshair className="absolute top-[82%] right-[4px] sm:right-[14px] xl:right-[22px] opacity-75" />

      {/* Left Outer Margin: Faint Vertical Typography & Botanical Sketches (scaled across mobile -> desktop) */}
      <div>
        {/* Scroll-drifting vertical colophon typography (Left Top-Mid) */}
        <motion.div
          style={prefersReducedMotion ? undefined : { y: leftLabelY }}
          className="absolute top-[9%] left-[1px] sm:left-[7px] xl:left-[10px] will-change-transform"
        >
          <span
            className="block font-mono text-[8px] sm:text-[9px] xl:text-[10px] tracking-[0.22em] xl:tracking-[0.26em] uppercase text-[#1E1916]/28 whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            ХЛІБНЕ МІСЦЕ · ПОДОЛ · 50°28′N
          </span>
        </motion.div>

        {/* Scroll-drifting vertical editorial note (Left Lower) */}
        <motion.div
          style={prefersReducedMotion ? undefined : { y: leftLabelY }}
          className="absolute top-[62%] left-[1px] sm:left-[7px] xl:left-[10px] will-change-transform"
        >
          <span
            className="block font-serif italic text-[10px] sm:text-[11.5px] xl:text-[13px] tracking-[0.12em] xl:tracking-[0.14em] text-[#1E1916]/32 whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Жива закваска · Аркуш № 04
          </span>
        </motion.div>

        {/* Left Margin Botanical Wheat Stalk (Manifesto / Menu transition) */}
        <motion.div
          style={prefersReducedMotion ? undefined : { y: botanicalSlowY }}
          className="absolute top-[35%] left-[0px] sm:left-[3px] xl:left-[5px] will-change-transform"
        >
          <WheatStalkSketch className="w-[22px] sm:w-[30px] xl:w-[38px] h-auto" />
        </motion.div>

        {/* Left Margin Scattered Grain Kernels (Space section) */}
        <motion.div
          style={prefersReducedMotion ? undefined : { y: botanicalCounterY }}
          className="absolute top-[84%] left-[1px] sm:left-[5px] xl:left-[7px] will-change-transform"
        >
          <ScatteredGrainSketch className="w-[20px] sm:w-[28px] xl:w-[34px] h-auto" />
        </motion.div>
      </div>

      {/* Right Outer Margin: Faint Vertical Typography & Rye Sketch */}
      <div>
        {/* Right Top-Mid Botanical Rye Ear */}
        <motion.div
          style={prefersReducedMotion ? undefined : { y: botanicalCounterY }}
          className="absolute top-[16%] right-[0px] sm:right-[4px] xl:right-[6px] will-change-transform"
        >
          <RyeSprigSketch className="w-[22px] sm:w-[28px] xl:w-[36px] h-auto" />
        </motion.div>

        {/* Scroll-drifting vertical colophon typography (Right Mid) */}
        <motion.div
          style={prefersReducedMotion ? undefined : { y: rightLabelY }}
          className="absolute top-[42%] right-[1px] sm:right-[7px] xl:right-[10px] will-change-transform"
        >
          <span
            className="block font-mono text-[8px] sm:text-[9px] xl:text-[10px] tracking-[0.22em] xl:tracking-[0.26em] uppercase text-[#1E1916]/28 whitespace-nowrap"
            style={{ writingMode: 'vertical-rl' }}
          >
            36 ГОДИН ФЕРМЕНТАЦІЇ · КАМ’ЯНИЙ МЛИН
          </span>
        </motion.div>

        {/* Right Lower Botanical Wheat Stalk */}
        <motion.div
          style={prefersReducedMotion ? undefined : { y: botanicalSlowY }}
          className="absolute top-[71%] right-[0px] sm:right-[3px] xl:right-[5px] will-change-transform"
        >
          <WheatStalkSketch className="w-[22px] sm:w-[30px] xl:w-[38px] h-auto scale-x-[-1]" />
        </motion.div>
      </div>
    </div>
  );
}

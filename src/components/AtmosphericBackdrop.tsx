import { RefObject } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

interface AtmosphericBackdropProps {
  targetRef: RefObject<HTMLElement | null>;
}

const PAPER_GRAIN_TILE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`;

// Minimalist Ukrainian folk embroidery motif ("засіяне поле" diamond & cross-grain star) in 1px monochrome linework
const FOLK_GEOMETRIC_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128' fill='none'%3E%3Cg stroke='%231E1916' stroke-width='0.75'%3E%3Cpath d='M64 26L102 64L64 102L26 64Z'/%3E%3Cpath d='M64 42L86 64L64 86L42 64Z'/%3E%3Cpath d='M64 56V72M56 64H72'/%3E%3Cpath d='M64 14V20M64 108V114M14 64H20M108 64H114'/%3E%3Cpath d='M16 16L22 22M112 16L106 22M16 112L22 106M112 112L106 106' stroke-opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`;

// Delicate 1px monochrome botanical wheat ear & scattered grain motif
const WHEAT_GRAIN_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160' fill='none'%3E%3Cg stroke='%231E1916' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M48 118V48'/%3E%3Cpath d='M48 86C40 82 37 74 40 68C44 72 47 78 48 86Z'/%3E%3Cpath d='M48 74C56 70 59 62 56 56C52 60 49 66 48 74Z'/%3E%3Cpath d='M48 64C41 60 39 53 42 47C45 51 47 57 48 64Z'/%3E%3Cpath d='M48 54C54 50 56 44 53 39C50 43 48 48 48 54Z'/%3E%3Cpath d='M40 68L36 54M56 56L60 42' stroke-width='0.6'/%3E%3Cellipse cx='116' cy='46' rx='3' ry='6.5' transform='rotate(-22 116 46)'/%3E%3Cellipse cx='124' cy='112' rx='2.6' ry='5.5' transform='rotate(18 124 112)'/%3E%3Cpath d='M116 41V51' stroke-width='0.55'/%3E%3C/g%3E%3C/svg%3E")`;

export function AtmosphericBackdrop({ targetRef }: AtmosphericBackdropProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const archDriftSlow = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const wheatDrift = useTransform(scrollYProgress, [0, 1], [30, -90]);
  const sunDrift = useTransform(scrollYProgress, [0, 1], [-20, 60]);

  return (
    <>
      {/* Ambient Sunbeams, Subtle Folk/Botanical Patterns & Silhouettes (z-0, behind content) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Minimalist Ukrainian Folk Embroidery Geometric Pattern Band (Hero -> Manifesto, ~3.8% opacity) */}
        <div
          className="absolute top-[16%] inset-x-0 h-[760px] opacity-[0.038]"
          style={{
            backgroundImage: FOLK_GEOMETRIC_PATTERN,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
            maskImage: 'radial-gradient(ellipse 80% 55% at 22% 50%, black 20%, transparent 78%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 55% at 22% 50%, black 20%, transparent 78%)',
          }}
        />

        {/* Delicate 1px Botanical Wheat & Grain Texture Pattern Band (Menu -> Schedule, ~3.5% opacity) */}
        <div
          className="absolute top-[42%] inset-x-0 h-[920px] opacity-[0.035]"
          style={{
            backgroundImage: WHEAT_GRAIN_PATTERN,
            backgroundRepeat: 'repeat',
            backgroundSize: '160px 160px',
            maskImage: 'radial-gradient(ellipse 75% 58% at 78% 50%, black 25%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 58% at 78% 50%, black 25%, transparent 80%)',
          }}
        />

        {/* Second Whisper-Faint Folk Diamond Pattern Band (Schedule -> Space, ~3.5% opacity) */}
        <div
          className="absolute top-[74%] inset-x-0 h-[740px] opacity-[0.035]"
          style={{
            backgroundImage: FOLK_GEOMETRIC_PATTERN,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
            maskImage: 'radial-gradient(ellipse 72% 52% at 30% 55%, black 18%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 72% 52% at 30% 55%, black 18%, transparent 75%)',
          }}
        />

        {/* Warm Morning Sunlight Ambient Pools (soft blurred radial gradients) */}
        <motion.div
          style={prefersReducedMotion ? undefined : { y: sunDrift }}
          className="absolute -top-24 right-[-6%] w-[680px] h-[680px] rounded-full blur-[110px] opacity-55 will-change-transform"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(232, 198, 154, 0.58) 0%, rgba(234, 227, 213, 0.25) 48%, rgba(246, 243, 238, 0) 74%)',
            }}
          />
        </motion.div>

        <motion.div
          style={prefersReducedMotion ? undefined : { y: sunDrift }}
          className="absolute top-[33%] left-[-12%] w-[620px] h-[620px] rounded-full blur-[120px] opacity-45 will-change-transform"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(184, 93, 59, 0.16) 0%, rgba(234, 227, 213, 0.42) 45%, rgba(246, 243, 238, 0) 75%)',
            }}
          />
        </motion.div>

        <motion.div
          style={prefersReducedMotion ? undefined : { y: archDriftSlow }}
          className="absolute top-[64%] right-[-8%] w-[700px] h-[660px] rounded-full blur-[120px] opacity-45 will-change-transform"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(226, 193, 148, 0.48) 0%, rgba(107, 116, 93, 0.1) 52%, rgba(246, 243, 238, 0) 76%)',
            }}
          />
        </motion.div>

        {/* Oversized 1px Geometric Oven Arch Silhouette — Hero / Manifesto transition (4.5% opacity) */}
        <motion.svg
          style={prefersReducedMotion ? undefined : { y: archDriftSlow }}
          viewBox="0 0 440 620"
          fill="none"
          className="absolute top-[14%] -left-24 md:left-[2%] w-[320px] md:w-[440px] h-auto text-[#1E1916] opacity-[0.045] will-change-transform"
        >
          <path
            d="M20 618V220C20 109.543 109.543 20 220 20C330.457 20 420 109.543 420 220V618"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M52 618V224C52 131.216 127.216 56 220 56C312.784 56 388 131.216 388 224V618"
            stroke="currentColor"
            strokeWidth="0.75"
          />
        </motion.svg>

        {/* Oversized Delicate 1px Botanical Wheat Silhouette — Menu Background (4.5% opacity) */}
        <motion.svg
          style={prefersReducedMotion ? undefined : { y: wheatDrift }}
          viewBox="0 0 320 680"
          fill="none"
          className="absolute top-[38%] -right-14 md:right-[4%] w-[240px] md:w-[320px] h-auto text-[#1E1916] opacity-[0.045] will-change-transform"
        >
          <path
            d="M170 670C168 510 164 360 176 190C180 130 184 82 174 30"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M174 265C134 240 116 196 130 162C154 184 168 222 174 265Z"
            stroke="currentColor"
            strokeWidth="0.95"
          />
          <path d="M130 162C112 114 108 82 114 52" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
          <path
            d="M176 205C136 180 122 138 136 104C158 126 170 162 176 205Z"
            stroke="currentColor"
            strokeWidth="0.95"
          />
          <path d="M136 104C122 64 118 34 126 8" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
          <path
            d="M174 235C214 210 232 168 216 134C194 156 180 194 174 235Z"
            stroke="currentColor"
            strokeWidth="0.95"
          />
          <path d="M216 134C234 90 238 54 232 24" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
          <path
            d="M177 172C214 148 228 110 214 78C194 98 182 132 177 172Z"
            stroke="currentColor"
            strokeWidth="0.95"
          />
          <path d="M214 78C226 44 228 18 222 2" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
          <path
            d="M176 116C202 94 210 64 196 38C180 56 176 84 176 116Z"
            stroke="currentColor"
            strokeWidth="0.95"
          />
          <path
            d="M167 480C122 424 88 378 58 340C98 364 138 408 167 480Z"
            stroke="currentColor"
            strokeWidth="0.9"
          />
        </motion.svg>

        {/* Second Faint Oversized Double-Arch Silhouette — Space Section (5% opacity) */}
        <motion.svg
          style={prefersReducedMotion ? undefined : { y: archDriftSlow }}
          viewBox="0 0 540 480"
          fill="none"
          className="absolute bottom-[4%] left-[-8%] md:left-[6%] w-[360px] md:w-[520px] h-auto text-[#6B745D] opacity-[0.05] will-change-transform"
        >
          <path
            d="M16 478V200C16 98.3796 98.3796 16 200 16C301.62 16 384 98.3796 384 200V478"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M156 478V230C156 128.38 238.38 46 340 46C441.62 46 524 128.38 524 230V478"
            stroke="currentColor"
            strokeWidth="0.85"
          />
        </motion.svg>
      </div>

      {/* Tactile Organic Paper / Linen Grain Overlay (barely visible 4.5% texture) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-20 opacity-[0.045] mix-blend-multiply"
        style={{
          backgroundImage: PAPER_GRAIN_TILE,
          backgroundRepeat: 'repeat',
          backgroundSize: '220px 220px',
        }}
      />
    </>
  );
}

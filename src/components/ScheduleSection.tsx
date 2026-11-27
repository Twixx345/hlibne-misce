import { OvenBatch } from '../data/bakeryData';

interface ScheduleSectionProps {
  batches: OvenBatch[];
  onSelectBatch: (batch: OvenBatch) => void;
}

export function ScheduleSection({ batches, onSelectBatch }: ScheduleSectionProps) {
  return (
    <section id="schedule" className="py-14 md:py-28 lg:py-32 bg-[#EAE3D5]/55 border-b border-[#1E1916]/12">
      <div className="max-w-[1320px] mx-auto px-7 sm:px-9 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-6 pb-8 md:pb-10 border-b border-[#1E1916]/16">
          <div>
            <p className="text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-[#6B745D] font-medium mb-2.5 sm:mb-3">
              Ритм подової печі
            </p>
            <h2 className="font-serif text-[clamp(1.9rem,5.4vw,3.3rem)] leading-[1.06] tracking-[-0.02em] text-[#1E1916]">
              Хліб за <em className="italic font-normal text-[#B85D3B]">розкладом</em>
            </h2>
          </div>

          <p className="text-[13.5px] sm:text-[14px] leading-[1.6] sm:leading-[1.65] text-[#1E1916]/75 max-w-[42ch]">
            Ми печемо невеликими партіями протягом дня, щоб ви забирали буханець ще теплим. Оберіть час виходу з печі та забронюйте свій хліб у два кліки.
          </p>
        </div>

        {/* Hairline Schedule Table / Timeline (preserves multi-column alignment on mobile) */}
        <div className="divide-y divide-[#1E1916]/14 border-b border-[#1E1916]/14">
          {batches.map((batch) => {
            const isSoldOut = batch.remaining <= 0;

            return (
              <div
                key={batch.id}
                className="py-5 sm:py-6 md:py-7 grid grid-cols-12 gap-x-3 gap-y-3 md:gap-6 items-center hover:bg-[#F6F3EE]/55 transition-colors duration-200 px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-[3px]"
              >
                {/* Exact Oven Time */}
                <div className="col-span-3 md:col-span-2">
                  <span className="block font-mono text-[19px] sm:text-[23px] md:text-[26px] font-medium tracking-tight text-[#1E1916] tabular-nums">
                    {batch.time}
                  </span>
                  <span className="md:hidden block mt-0.5 font-mono text-[12px] text-[#1E1916]/70 tabular-nums">
                    {batch.price} ₴
                  </span>
                </div>

                {/* Loaf Name & Metadata */}
                <div className="col-span-9 md:col-span-5">
                  <h3 className="font-serif text-[20px] sm:text-[23px] md:text-[25px] leading-tight text-[#1E1916]">
                    {batch.loafName}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-[12px] text-[#1E1916]/65 tracking-[0.02em]">
                    <span>{batch.grainNote}</span>
                    <span aria-hidden="true" className="mx-1.5 sm:mx-2">·</span>
                    <span>{batch.fermentation}</span>
                    <span aria-hidden="true" className="mx-1.5 sm:mx-2">·</span>
                    <span className="font-mono tabular-nums">{batch.weight}</span>
                  </p>
                </div>

                {/* Availability & Price */}
                <div className="col-span-6 md:col-span-3 flex items-center md:justify-end gap-6 text-[12px] sm:text-[13px]">
                  <span className={isSoldOut ? 'text-[#B85D3B] font-medium' : 'text-[#6B745D] font-medium'}>
                    {isSoldOut
                      ? 'Партію розібрано'
                      : `Вільно ${batch.remaining} ${batch.remaining === 1 ? 'буханець' : batch.remaining < 5 ? 'буханці' : 'буханців'}`}
                  </span>
                  <span className="hidden md:inline font-mono text-[15px] text-[#1E1916] tabular-nums">
                    {batch.price} ₴
                  </span>
                </div>

                {/* 2-Click Action */}
                <div className="col-span-6 md:col-span-2 flex justify-end">
                  <button
                    type="button"
                    disabled={isSoldOut}
                    onClick={() => onSelectBatch(batch)}
                    className={`w-full md:w-auto min-h-[44px] sm:min-h-[40px] px-4 sm:px-5 py-2 text-[12.5px] sm:text-[13px] font-medium rounded-[3px] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#B85D3B] ${
                      isSoldOut
                        ? 'border border-[#1E1916]/15 text-[#1E1916]/40 cursor-not-allowed'
                        : 'border border-[#1E1916] text-[#1E1916] hover:bg-[#1E1916] hover:text-[#F6F3EE] cursor-pointer'
                    }`}
                  >
                    {isSoldOut ? 'Очікується завтра' : 'Забронювати'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

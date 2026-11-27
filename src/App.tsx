import { useEffect, useRef, useState } from 'react';
import { OVEN_SCHEDULE, OvenBatch } from './data/bakeryData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { MenuSection } from './components/MenuSection';
import { ScheduleSection } from './components/ScheduleSection';
import { SpaceSection } from './components/SpaceSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { BrandGuideDrawer } from './components/BrandGuideDrawer';
import { FineArtPrintFrame } from './components/FineArtPrintFrame';
import { AtmosphericBackdrop } from './components/AtmosphericBackdrop';

export default function App() {
  const mainRef = useRef<HTMLElement>(null);
  const [batches, setBatches] = useState<OvenBatch[]>(OVEN_SCHEDULE);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<OvenBatch | null>(null);
  const [brandGuideOpen, setBrandGuideOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setReserveOpen(false);
        setBrandGuideOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenReserveModal = (batch?: OvenBatch) => {
    setSelectedBatch(batch ?? null);
    setReserveOpen(true);
  };

  const handleConfirmReservation = (batchId: string, quantity: number) => {
    setBatches((prev) =>
      prev.map((batch) =>
        batch.id === batchId
          ? { ...batch, remaining: Math.max(0, batch.remaining - quantity) }
          : batch
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#F6F3EE] text-[#1E1916] font-sans antialiased">
      <Navbar onOpenReserve={() => handleOpenReserveModal()} />

      <main ref={mainRef} className="relative overflow-x-clip">
        <AtmosphericBackdrop targetRef={mainRef} />
        <FineArtPrintFrame targetRef={mainRef} />
        <div className="relative z-[2]">
          <HeroSection onOpenReserve={() => handleOpenReserveModal()} />
          <ManifestoSection />
          <MenuSection />
          <ScheduleSection batches={batches} onSelectBatch={handleOpenReserveModal} />
          <SpaceSection />
        </div>
      </main>

      <Footer onOpenBrandGuide={() => setBrandGuideOpen(true)} />

      <ReservationModal
        isOpen={reserveOpen}
        batches={batches}
        initialBatch={selectedBatch}
        onClose={() => setReserveOpen(false)}
        onConfirmReservation={handleConfirmReservation}
      />

      <BrandGuideDrawer
        isOpen={brandGuideOpen}
        onClose={() => setBrandGuideOpen(false)}
      />
    </div>
  );
}

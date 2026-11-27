import { FormEvent, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Minus, Plus, X } from 'lucide-react';
import { OvenBatch } from '../data/bakeryData';
import { EditorialImage } from './EditorialImage';

interface ReservationModalProps {
  isOpen: boolean;
  batches: OvenBatch[];
  initialBatch: OvenBatch | null;
  onClose: () => void;
  onConfirmReservation: (batchId: string, quantity: number) => void;
}

export function ReservationModal({
  isOpen,
  batches,
  initialBatch,
  onClose,
  onConfirmReservation,
}: ReservationModalProps) {
  const availableBatches = batches.filter((b) => b.remaining > 0);
  const [selectedBatchId, setSelectedBatchId] = useState<string>(
    initialBatch?.id ?? availableBatches[0]?.id ?? batches[0].id
  );
  const [quantity, setQuantity] = useState(1);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [error, setError] = useState('');
  const [ticketCode, setTicketCode] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (initialBatch) {
        setSelectedBatchId(initialBatch.id);
      } else if (availableBatches.length > 0) {
        setSelectedBatchId(availableBatches[0].id);
      }
      setQuantity(1);
      setError('');
      setTicketCode(null);
    }
  }, [isOpen, initialBatch]);

  const activeBatch = batches.find((b) => b.id === selectedBatchId) ?? batches[0];
  const maxSelectable = Math.max(1, Math.min(3, activeBatch.remaining));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      setError('Вкажіть, будь ласка, ваше ім’я');
      return;
    }
    if (guestPhone.trim().length < 7) {
      setError('Вкажіть контактний номер телефону');
      return;
    }
    if (activeBatch.remaining < quantity) {
      setError('На жаль, залишилося менше буханців у цій партії');
      return;
    }

    const randomCode = `HM-${Math.floor(100 + Math.random() * 899)}`;
    onConfirmReservation(activeBatch.id, quantity);
    setTicketCode(randomCode);
    setError('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reserve-modal-title"
        >
          {/* Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1E1916]/60 backdrop-blur-[2px]"
          />

          {/* Modal Surface */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto bg-[#F6F3EE] text-[#1E1916] border border-[#1E1916]/18 rounded-[4px] p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#1E1916]/12">
              <div>
                <p className="text-[11px] tracking-[0.14em] uppercase text-[#6B745D] font-medium">
                  Передзамовлення з печі
                </p>
                <h2 id="reserve-modal-title" className="mt-1 font-serif text-[30px] leading-tight">
                  Забронювати <em className="italic font-normal text-[#B85D3B]">хліб</em>
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Закрити вікно"
                className="w-9 h-9 flex items-center justify-center text-[#1E1916]/70 hover:text-[#1E1916] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {ticketCode ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 mx-auto mb-5 rounded-full border border-[#6B745D] flex items-center justify-center text-[#6B745D]">
                  <Check className="w-5 h-5 stroke-[1.75]" />
                </div>
                <p className="font-mono text-[13px] tracking-[0.1em] uppercase text-[#6B745D]">
                  Бронювання {ticketCode} підтверджено
                </p>
                <h3 className="mt-2 font-serif text-[28px] leading-tight text-[#1E1916]">
                  Чекатимемо о {activeBatch.time}
                </h3>
                <p className="mt-3 text-[14px] text-[#1E1916]/75 max-w-[38ch] mx-auto leading-relaxed">
                  {activeBatch.loafName} ({quantity} шт.) буде відкладено на ім’я{' '}
                  <strong className="font-medium text-[#1E1916]">{guestName}</strong>. Оплата на місці при отриманні на вул. Ярославській, 14.
                </p>

                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 px-7 py-3 bg-[#1E1916] text-[#F6F3EE] hover:bg-[#B85D3B] text-[13px] font-medium rounded-[3px] transition-colors cursor-pointer"
                >
                  Повернутися на сайт
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                {/* Batch Selector */}
                <div>
                  <label htmlFor="batch-select" className="block text-[12px] tracking-[0.06em] uppercase text-[#1E1916]/65 mb-2">
                    Партія та час виходу
                  </label>
                  <select
                    id="batch-select"
                    value={selectedBatchId}
                    onChange={(e) => {
                      setSelectedBatchId(e.target.value);
                      setQuantity(1);
                    }}
                    className="w-full bg-[#EAE3D5]/60 border border-[#1E1916]/18 rounded-[3px] px-3.5 py-3 text-[14px] text-[#1E1916] focus:border-[#B85D3B] outline-none"
                  >
                    {batches.map((b) => (
                      <option key={b.id} value={b.id} disabled={b.remaining <= 0}>
                        {b.time} — {b.loafName} ({b.price} ₴){b.remaining <= 0 ? ' · Розібрано' : ` · Вільно ${b.remaining}`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Selected Batch Visual Summary */}
                <div className="flex items-center gap-4 p-3 border border-[#1E1916]/12 bg-[#EAE3D5]/35 rounded-[3px]">
                  <EditorialImage
                    src={activeBatch.image}
                    alt={activeBatch.imageAlt}
                    containerClassName="w-20 h-20 rounded-[2px] shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-[20px] leading-snug text-[#1E1916] truncate">
                      {activeBatch.loafName}
                    </p>
                    <p className="text-[12px] text-[#1E1916]/65 mt-0.5">
                      {activeBatch.weight} · {activeBatch.fermentation}
                    </p>
                    <p className="font-mono tabular-nums text-[13px] text-[#B85D3B] mt-1">
                      {activeBatch.price * quantity} ₴
                    </p>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#1E1916]/20 rounded-[3px] shrink-0">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Зменшити кількість"
                      className="w-9 h-9 flex items-center justify-center hover:bg-[#EAE3D5] transition-colors cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-mono tabular-nums text-[13px]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.min(maxSelectable, q + 1))}
                      aria-label="Збільшити кількість"
                      className="w-9 h-9 flex items-center justify-center hover:bg-[#EAE3D5] transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Guest Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guest-name" className="block text-[12px] text-[#1E1916]/70 mb-1.5">
                      Ваше ім’я
                    </label>
                    <input
                      id="guest-name"
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Олена"
                      className="w-full bg-transparent border border-[#1E1916]/22 focus:border-[#B85D3B] rounded-[3px] px-3.5 py-2.5 text-[14px] outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="guest-phone" className="block text-[12px] text-[#1E1916]/70 mb-1.5">
                      Телефон для підтвердження
                    </label>
                    <input
                      id="guest-phone"
                      type="tel"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="+380 67 000 00 00"
                      className="w-full bg-transparent border border-[#1E1916]/22 focus:border-[#B85D3B] rounded-[3px] px-3.5 py-2.5 text-[14px] font-mono tabular-nums outline-none"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-[13px] text-[#B85D3B]" role="alert">
                    {error}
                  </p>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[12px] text-[#1E1916]/60">
                    Тримаємо бронь 2 години після виходу партії.
                  </p>
                  <button
                    type="submit"
                    disabled={activeBatch.remaining <= 0}
                    className="px-6 py-3 bg-[#1E1916] hover:bg-[#B85D3B] disabled:opacity-40 text-[#F6F3EE] text-[13px] font-medium rounded-[3px] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Підтвердити бронювання
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

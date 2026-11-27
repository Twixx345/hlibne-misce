import { useState } from 'react';
import { Wheat } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
}

export function EditorialImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  loading = 'lazy',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#EAE3D5] text-[#1E1916]/60 p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <Wheat className="w-6 h-6 mb-2 stroke-[1.25]" aria-hidden="true" />
        <span className="font-serif italic text-sm max-w-[22ch] leading-snug">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-[#EAE3D5] ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${className}`}
      />
    </div>
  );
}

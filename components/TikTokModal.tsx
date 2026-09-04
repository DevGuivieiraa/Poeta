'use client';

import { useEffect, useRef } from 'react';

interface TikTokModalProps {
  embedUrl: string;
  onClose: () => void;
}

export default function TikTokModal({ embedUrl, onClose }: TikTokModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Fechar modal ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevenir scroll do body quando modal está aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors z-10"
        aria-label="Fechar vídeo"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-black rounded-lg overflow-hidden shadow-2xl"
      >
        {/* Player do TikTok embutido */}
        <div className="relative" style={{ paddingBottom: '177.78%' }}>
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            allow="encrypted-media;"
            title="Vídeo do TikTok"
          />
        </div>
      </div>
    </div>
  );
}

// src/components/common/EditorialPhotoFrame.tsx
import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface EditorialPhotoFrameProps {
  src?: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '21/9';
  label?: string;
  requiredPhotoSpec?: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}

export const EditorialPhotoFrame: React.FC<EditorialPhotoFrameProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  label = 'Authentic Clinical Photography',
  requiredPhotoSpec = 'Doctor engaged in authentic consultation with patient in natural clinic lighting.',
  caption,
  className = '',
}) => {
  const aspectClass = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
  }[aspectRatio];

  return (
    <figure className={`relative rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-50 shadow-sm ${className}`}>
      {src ? (
        <div className={`w-full ${aspectClass} overflow-hidden bg-slate-100`}>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        /* Composition-Safe Development Placeholder */
        <div
          className={`w-full ${aspectClass} flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-slate-50 via-[#F4F9FA] to-[#EBF3F5] text-slate-700 relative select-none`}
          role="img"
          aria-label={`${alt} (Photo pending owner procurement)`}
        >
          {/* Subtle Ambient Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none" aria-hidden="true">
            <Camera className="w-32 h-32 text-[#507D88]" />
          </div>

          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#507D88]/20 text-[#507D88] text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <ImageIcon className="w-3.5 h-3.5" />
              {label}
            </span>
            <span className="text-[10px] font-mono font-semibold text-slate-400 bg-white/70 px-2 py-0.5 rounded">
              {aspectRatio} Ratio
            </span>
          </div>

          <div className="z-10 space-y-2 my-auto py-4">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
              {alt}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md">
              <strong className="text-slate-700">Production Specification:</strong> {requiredPhotoSpec}
            </p>
          </div>

          <div className="z-10 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-200/60 pt-3">
            <span>Status: <strong>Pending Real Photography</strong></span>
            <span className="italic">No generic stock / AI models used</span>
          </div>
        </div>
      )}

      {caption && (
        <figcaption className="p-3 text-xs text-slate-500 bg-white border-t border-slate-100 leading-normal">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

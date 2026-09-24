// src/components/sections/CapabilitiesGrid.tsx
import React from 'react';
import { Mic, FileAudio, Sparkles, FileText, Tag, Stethoscope, CheckCircle, Database } from 'lucide-react';
import { Card } from '../common/Card';

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
}

interface CapabilitiesGridProps {
  items: CapabilityItem[];
}

const iconMap: Record<string, React.ElementType> = {
  'ambient-capture': Mic,
  'ai-transcription': FileAudio,
  'clinical-nlp': Sparkles,
  'soap-doc': FileText,
  'icd-10': Tag,
  'cpt': Stethoscope,
  'clinician-review': CheckCircle,
  'structured-output': Database,
};

export const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, idx) => {
        const Icon = iconMap[item.id] || FileText;
        return (
          <Card key={item.id || idx} hover={true} className="flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3F5] text-[#507D88] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#507D88]">
              <span>Core Module</span>
              <span>0{idx + 1}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

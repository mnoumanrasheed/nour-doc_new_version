// src/components/subscription/PaymentMethods.tsx
import React from 'react';
import { CreditCard, Smartphone, Wallet, Building, CheckCircle, ShieldCheck } from 'lucide-react';
import { PAYMENT_GATEWAYS, type MarketCode } from '../../data/pricingConfig';

interface PaymentMethodsProps {
  market: MarketCode;
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ market }) => {
  const relevantGateways = PAYMENT_GATEWAYS.filter((g) => g.markets.includes(market));

  const renderIcon = (name: string) => {
    switch (name) {
      case 'CreditCard':
        return <CreditCard className="h-6 w-6 text-nourdoc-primary" />;
      case 'Smartphone':
        return <Smartphone className="h-6 w-6 text-amber-600" />;
      case 'Wallet':
        return <Wallet className="h-6 w-6 text-emerald-600" />;
      case 'Building':
        return <Building className="h-6 w-6 text-slate-700" />;
      case 'CheckCircle':
      default:
        return <CheckCircle className="h-6 w-6 text-nourdoc-primary" />;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-nourdoc-primary bg-nourdoc-primary-light px-3.5 py-1 rounded-full border border-nourdoc-primary/20">
          Regional Payment Infrastructure
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Accepted Payment Methods
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Secure, market-tailored transaction processing for {market === 'PK' ? 'Pakistan' : 'international'} healthcare practitioners and medical institutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {relevantGateways.map((gateway) => (
          <div
            key={gateway.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-nourdoc-primary/40 hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100">
                  {renderIcon(gateway.iconName)}
                </div>
                {gateway.status === 'active' ? (
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                    Live Enabled
                  </span>
                ) : (
                  <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200">
                    Subject to Activation
                  </span>
                )}
              </div>

              <h4 className="text-base font-bold text-slate-900 tracking-tight">
                {gateway.name}
              </h4>
              <span className="text-xs font-semibold text-nourdoc-primary block mb-2">
                {gateway.type}
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                {gateway.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              <span>Encrypted 256-bit PCI-DSS transaction</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
        <ShieldCheck className="h-4 w-4 text-emerald-600" />
        <span>All financial transactions are tokenized and processed through certified regional banking partners.</span>
      </div>
    </div>
  );
};


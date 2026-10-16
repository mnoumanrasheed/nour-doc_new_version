import React, { useEffect, useState } from 'react';
import logoIcon from '../../assets/logo-icon.png';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const LOADER_MIN_DURATION = 700;

export const WebsiteLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const startedAt = performance.now();
    let isCancelled = false;
    let dismissTimeout: number | undefined;

    const dismiss = () => {
      if (isCancelled) return;

      const remaining = Math.max(0, LOADER_MIN_DURATION - (performance.now() - startedAt));
      dismissTimeout = window.setTimeout(() => setIsVisible(false), remaining);
    };

    if (document.readyState === 'complete') {
      dismiss();
    } else {
      window.addEventListener('load', dismiss, { once: true });
    }

    // Keep the intro from blocking the page if a browser delays the load event.
    const fallbackTimeout = window.setTimeout(dismiss, 1300);

    return () => {
      isCancelled = true;
      window.removeEventListener('load', dismiss);
      window.clearTimeout(fallbackTimeout);
      if (dismissTimeout) window.clearTimeout(dismissTimeout);
    };
  }, []);

  const noMotion = shouldReduceMotion === true;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: noMotion ? 0 : 0.32, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex min-h-[100svh] items-center justify-center overflow-hidden bg-white px-6 text-slate-900"
          role="status"
          aria-live="polite"
          aria-label="Loading NourDoc"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(111,156,144,0.16),transparent_26%),linear-gradient(145deg,#ffffff_0%,#f4f8f7_58%,#edf5f2_100%)]"
          />
          <motion.div
            aria-hidden="true"
            animate={noMotion ? undefined : { scale: [0.98, 1.03, 0.98], opacity: [0.32, 0.52, 0.32] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-nourdoc-primary/15 shadow-[0_0_90px_rgba(40,98,82,0.10)] sm:h-64 sm:w-64"
          />

          <motion.div
            initial={noMotion ? { opacity: 1 } : { opacity: 0, y: 10, scale: 0.98 }}
            animate={noMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative flex w-full max-w-[24rem] flex-col items-center text-center"
          >
            <motion.div
              initial={noMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              animate={noMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="mb-5 flex h-20 w-20 items-center justify-center sm:h-[5.5rem] sm:w-[5.5rem]"
            >
              <img
                src={logoIcon}
                alt="NourDoc"
                className="h-full w-full object-contain drop-shadow-[0_0_24px_rgba(111,156,144,0.18)]"
              />
            </motion.div>

            <div className="mb-7">
              <div className="text-[2.15rem] font-bold leading-none tracking-[-0.045em] sm:text-[2.4rem]">NourDoc</div>
              <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-nourdoc-secondary/90 sm:text-xs">
                Ambient Clinical Intelligence
              </div>
            </div>

            <div className="w-full max-w-[21rem] space-y-4">
              <div className="h-[3px] overflow-hidden rounded-full bg-slate-200 ring-1 ring-nourdoc-primary/10">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: noMotion ? 0 : 0.82, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-nourdoc-secondary/75 via-nourdoc-secondary to-nourdoc-primary/85 shadow-[0_0_10px_rgba(111,156,144,0.28)]"
                />
              </div>
              <p className="text-sm font-medium tracking-[0.01em] text-slate-600 sm:text-[15px]">
                Opening your clinical workspace...
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Secure • Private • Human-centered
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
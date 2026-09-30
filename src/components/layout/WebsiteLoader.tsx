import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const LOADER_MIN_DURATION = 1100;

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
    const fallbackTimeout = window.setTimeout(dismiss, 1800);

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
          transition={{ duration: noMotion ? 0 : 0.55, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-nourdoc-primary-dark text-white"
          role="status"
          aria-live="polite"
          aria-label="Loading NourDoc"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(40,98,82,0.22),transparent_30%),radial-gradient(circle_at_15%_85%,rgba(111,156,144,0.1),transparent_28%)]" />
          <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-nourdoc-secondary/10" />
          <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-nourdoc-secondary/10" />

          <motion.div
            initial={noMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={noMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative flex w-[min(86vw,22rem)] flex-col items-center text-center"
          >
            <div className="relative mb-7 flex h-24 w-24 items-center justify-center">
              {!noMotion && (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-transparent border-t-nourdoc-secondary border-r-nourdoc-secondary/40"
                />
              )}
              <div className="absolute inset-2 rounded-full bg-nourdoc-primary/15 shadow-[0_0_55px_rgba(111,156,144,0.22)]" />
              <img src="/logo.png" alt="NourDoc" className="relative h-14 w-14 object-contain" />
            </div>

            <div className="mb-8">
              <div className="text-3xl font-black tracking-[-0.04em]">NourDoc</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.34em] text-nourdoc-secondary">
                Clinical Intelligence
              </div>
            </div>

            <div className="w-full space-y-3">
              <div className="h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: noMotion ? 0 : 1.1, ease: 'easeInOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-nourdoc-primary via-nourdoc-secondary to-white"
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                <span>Initializing platform</span>
                <motion.span
                  initial={{ opacity: 0.35 }}
                  animate={noMotion ? { opacity: 0.7 } : { opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Ready
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import { useEffect, useState } from "react";

export default function StatCounter({ value, suffix = "", label, duration = 1400 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * Number(value)));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateCount);
      }
    };

    animationFrame = window.requestAnimationFrame(updateCount);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [duration, value]);

  return (
    <div className="rounded-2xl border border-violet-500/20 bg-[var(--card-bg)] p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl">
      <div className="text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[var(--text-secondary)]">{label}</p>
    </div>
  );
}

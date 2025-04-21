
import { useEffect, useState } from "react";

function getNextDropDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  // Next drop is always 1st of the next month at 12:00:00 AM Sri Lankan time (UTC+5:30)
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;
  return new Date(Date.UTC(nextYear, nextMonth, 1, 18, 30, 0)); // UTC + 5:30 = 12:00am local
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<{d:number;h:number;m:number;s:number}>();

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const target = getNextDropDate();
      const diff = target.getTime() - now.getTime();

      const d = Math.floor(diff/(1000*60*60*24));
      const h = Math.floor((diff/(1000*60*60)) % 24);
      const m = Math.floor((diff/(1000*60)) % 60);
      const s = Math.floor((diff/1000) % 60);

      setTimeLeft(diff > 0 ? { d, h, m, s } : { d:0, h:0, m:0, s:0});
    };
    tick();
    const intv = setInterval(tick, 1000);
    return () => clearInterval(intv);
  }, []);

  return (
    <div className="px-5 py-3 bg-brand-dark-purple rounded-xl text-white shadow-inner flex flex-row items-center gap-4 font-inter w-fit animate-fade-in">
      <span className="font-playfair text-lg tracking-tight mr-2">Next Drop</span>
      {timeLeft ? (
        <>
          <span className="font-bold">{timeLeft.d}d</span>
          <span>:</span>
          <span className="font-bold">{timeLeft.h}h</span>
          <span>:</span>
          <span className="font-bold">{timeLeft.m}m</span>
          <span>:</span>
          <span className="font-bold">{timeLeft.s}s</span>
        </>
      ) : (
        <span>Calculating...</span>
      )}
    </div>
  );
};

export default CountdownTimer;

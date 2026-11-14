import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

interface BootSequenceProps {
  onComplete: () => void;
  duration?: number;
}

const bootMessages = [
  { text: 'Loading profile...', delay: 0 },
  { text: 'PORTFOLIO ONLINE', delay: 320, isSuccess: true },
];

// The terminal is always dark, so its root carries the `dark` class and the
// arc color tokens resolve to their dark-theme values in both page themes.
const BootSequence = ({ onComplete, duration = 600 }: BootSequenceProps) => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timers = bootMessages.map((message, index) =>
      window.setTimeout(() => {
        setVisibleMessages(index + 1);
      }, message.delay)
    );

    timers.push(
      window.setTimeout(() => {
        setIsExiting(true);
      }, duration)
    );

    timers.push(window.setTimeout(onComplete, duration + 200));

    return () => {
      timers.forEach(window.clearTimeout);
    };
  }, [duration, onComplete]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        'dark pointer-events-none fixed right-4 bottom-4 z-30 w-[calc(100%-2rem)] max-w-xs font-mono transition-all duration-200 motion-reduce:hidden sm:right-6 sm:bottom-6',
        isExiting ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
      )}
    >
      <div className="boot-terminal relative overflow-hidden rounded-lg border border-arc-cyan/25 bg-background/90 backdrop-blur-md">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-arc-cyan/25 to-transparent" />
        <div className="flex items-center gap-2 bg-arc-dark-blue/50 px-3 py-2">
          <div className="flex gap-1.5">
            <div className="size-2 rounded-full bg-arc-red" />
            <div className="size-2 rounded-full bg-arc-yellow" />
            <div className="size-2 rounded-full bg-arc-green" />
          </div>
          <span className="ml-1 text-[0.65rem] text-arc-cyan opacity-60">
            terminal@nicolas-layne
          </span>
        </div>

        <div className="min-h-17 border-t border-arc-cyan/20 px-3 py-2.5 text-xs">
          {bootMessages.slice(0, visibleMessages).map((msg, index) => (
            <div
              key={msg.text}
              className="mb-1.5 flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-200"
            >
              <span className="text-arc-cyan">{'>'}</span>
              <span
                className={
                  msg.isSuccess ? 'boot-success font-bold' : 'text-arc-cyan'
                }
              >
                {msg.text}
              </span>
              {index === visibleMessages - 1 && !msg.isSuccess && (
                <span className="animate-pulse text-arc-cyan">█</span>
              )}
            </div>
          ))}

          <div className="mt-2 h-0.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="boot-progress h-full rounded-full bg-linear-to-r from-arc-cyan to-arc-green transition-all duration-200 ease-out"
              style={{
                width: `${(visibleMessages / bootMessages.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootSequence;

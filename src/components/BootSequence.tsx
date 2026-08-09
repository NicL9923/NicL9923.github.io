import { useEffect, useState } from 'react';
import { ArcColors } from '../lib/colors';

interface BootSequenceProps {
  onComplete: () => void;
  duration?: number;
}

const bootMessages = [
  { text: 'Loading profile...', delay: 0 },
  { text: 'PORTFOLIO ONLINE', delay: 320, isSuccess: true },
];

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
      className={`pointer-events-none fixed right-4 bottom-4 z-30 w-[calc(100%-2rem)] max-w-xs transition-all duration-200 motion-reduce:hidden sm:right-6 sm:bottom-6 ${
        isExiting ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div
        className="relative overflow-hidden rounded-lg border shadow-2xl backdrop-blur-md"
        style={{
          backgroundColor: '#0D1117E8',
          borderColor: `${ArcColors.cyan}40`,
          boxShadow: `0 12px 40px #00000050, 0 0 24px ${ArcColors.cyan}18`,
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${ArcColors.cyan}40, transparent)`,
          }}
        />
        <div
          className="flex items-center gap-2 px-3 py-2"
          style={{ backgroundColor: `${ArcColors.darkBlue}80` }}
        >
          <div className="flex gap-1.5" aria-hidden="true">
            <div
              className="size-2 rounded-full"
              style={{ backgroundColor: ArcColors.red }}
            />
            <div
              className="size-2 rounded-full"
              style={{ backgroundColor: ArcColors.yellow }}
            />
            <div
              className="size-2 rounded-full"
              style={{ backgroundColor: ArcColors.green }}
            />
          </div>
          <span
            className="ml-1 font-mono text-[0.65rem] opacity-60"
            style={{ color: ArcColors.cyan }}
          >
            terminal@nicolas-layne
          </span>
        </div>

        <div
          className="min-h-17 border-t px-3 py-2.5 font-mono text-xs"
          style={{
            borderColor: `${ArcColors.cyan}30`,
          }}
        >
          {bootMessages.slice(0, visibleMessages).map((msg, index) => (
            <div
              key={msg.text}
              className="mb-1.5 flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-200"
            >
              <span style={{ color: ArcColors.cyan }}>{'>'}</span>
              <span
                className={msg.isSuccess ? 'font-bold' : ''}
                style={{
                  color: msg.isSuccess ? ArcColors.green : ArcColors.cyan,
                  textShadow: msg.isSuccess
                    ? `0 0 10px ${ArcColors.green}80`
                    : 'none',
                }}
              >
                {msg.text}
              </span>
              {index === visibleMessages - 1 && !msg.isSuccess && (
                <span
                  className="animate-pulse"
                  style={{ color: ArcColors.cyan }}
                >
                  █
                </span>
              )}
            </div>
          ))}

          <div className="mt-2 h-0.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full transition-all duration-200 ease-out"
              style={{
                width: `${(visibleMessages / bootMessages.length) * 100}%`,
                background: `linear-gradient(90deg, ${ArcColors.cyan}, ${ArcColors.green})`,
                boxShadow: `0 0 10px ${ArcColors.cyan}80`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootSequence;

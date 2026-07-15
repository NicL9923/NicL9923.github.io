import { useEffect, useState } from 'react';
import { ArcColors } from '../lib/colors';

interface BootSequenceProps {
  onComplete: () => void;
  duration?: number;
}

const bootMessages = [
  { text: 'Initializing system...', delay: 0 },
  { text: 'Loading core modules...', delay: 120 },
  { text: 'Establishing secure connection...', delay: 240 },
  { text: 'Decrypting profile data...', delay: 400 },
  { text: 'Rendering interface...', delay: 580 },
  { text: 'CONNECTION ESTABLISHED', delay: 740, isSuccess: true },
];

const BootSequence = ({ onComplete, duration = 900 }: BootSequenceProps) => {
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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      timers.forEach(window.clearTimeout);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [duration, onComplete]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="boot-sequence-title"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0D1117] transition-opacity duration-200 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h2 id="boot-sequence-title" className="sr-only">
        Loading Nicolas Layne&apos;s portfolio
      </h2>

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute w-full h-[2px] animate-scan"
          style={{
            background: `linear-gradient(90deg, transparent, ${ArcColors.cyan}40, transparent)`,
            boxShadow: `0 0 20px ${ArcColors.cyan}60`,
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(${ArcColors.cyan}20 1px, transparent 1px),
            linear-gradient(90deg, ${ArcColors.cyan}20 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative w-full max-w-lg mx-4">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-t-lg"
          style={{ backgroundColor: `${ArcColors.darkBlue}80` }}
        >
          <div className="flex gap-1.5" aria-hidden="true">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: ArcColors.red }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: ArcColors.yellow }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: ArcColors.green }}
            />
          </div>
          <span
            className="ml-2 text-xs font-mono opacity-60"
            style={{ color: ArcColors.cyan }}
          >
            terminal@nicolas-layne
          </span>
          <button
            type="button"
            onClick={onComplete}
            className="ml-auto rounded px-2 py-1 text-xs font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arc-cyan"
          >
            Skip intro
          </button>
        </div>

        <div
          aria-hidden="true"
          className="p-4 rounded-b-lg font-mono text-sm border border-t-0"
          style={{
            backgroundColor: '#0D1117',
            borderColor: `${ArcColors.cyan}30`,
          }}
        >
          {bootMessages.slice(0, visibleMessages).map((msg, index) => (
            <div
              key={msg.text}
              className="flex items-center gap-2 mb-2 animate-in fade-in slide-in-from-left-2 duration-300"
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

          <div className="mt-4 h-1 rounded-full overflow-hidden bg-white/10">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${(visibleMessages / bootMessages.length) * 100}%`,
                background: `linear-gradient(90deg, ${ArcColors.cyan}, ${ArcColors.green})`,
                boxShadow: `0 0 10px ${ArcColors.cyan}80`,
              }}
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2"
        style={{ borderColor: `${ArcColors.cyan}40` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2"
        style={{ borderColor: `${ArcColors.cyan}40` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2"
        style={{ borderColor: `${ArcColors.cyan}40` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2"
        style={{ borderColor: `${ArcColors.cyan}40` }}
      />
    </div>
  );
};

export default BootSequence;

interface ChevronHeaderProps {
  segments: Array<{
    text: string;
    color: string;
  }>;
  className?: string;
}

const ChevronHeader = ({ segments, className = '' }: ChevronHeaderProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {segments.map((segment, index) => (
        <div key={index} className="flex items-center">
          <div
            className="relative px-4 py-2 font-bold text-white tracking-wider"
            style={{ backgroundColor: segment.color }}
          >
            <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              {segment.text}
            </span>
            {/* Right chevron point */}
            <div
              className="absolute top-0 -right-4 w-0 h-0 border-t-[20px] border-b-[20px] border-l-[16px] border-t-transparent border-b-transparent"
              style={{ borderLeftColor: segment.color }}
            />
          </div>
          {/* Spacing for chevron overlap */}
          {index < segments.length - 1 && <div className="w-4" />}
        </div>
      ))}
    </div>
  );
};

export { ChevronHeader };

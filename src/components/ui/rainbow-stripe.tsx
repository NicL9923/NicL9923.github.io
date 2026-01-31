interface RainbowStripeProps {
  className?: string;
  vertical?: boolean;
  animate?: boolean;
}

const RainbowStripe = ({
  className = '',
  vertical = false,
  animate = false,
}: RainbowStripeProps) => {
  const colors = [
    '#E63946', // Red
    '#F4A261', // Orange
    '#E9C46A', // Yellow
    '#2A9D8F', // Green
    '#00B4D8', // Cyan
    '#0077B6', // Blue
  ];

  return (
    <div
      className={`flex ${vertical ? 'flex-col' : 'flex-row'} ${
        animate ? 'animate-pulse' : ''
      } ${className}`}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          className={`${vertical ? 'w-full h-1' : 'h-full w-1'} transition-all duration-300`}
          style={{
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}80`,
          }}
        />
      ))}
    </div>
  );
};

// Diagonal stripe variant for more dynamic look
const DiagonalStripes = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E63946" />
            <stop offset="20%" stopColor="#F4A261" />
            <stop offset="40%" stopColor="#E9C46A" />
            <stop offset="60%" stopColor="#2A9D8F" />
            <stop offset="80%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#0077B6" />
          </linearGradient>
        </defs>
        {/* Multiple diagonal lines */}
        <line
          x1="0"
          y1="20"
          x2="25"
          y2="0"
          stroke="#E63946"
          strokeWidth="2"
          className="drop-shadow-[0_0_4px_#E63946]"
        />
        <line
          x1="5"
          y1="20"
          x2="30"
          y2="0"
          stroke="#F4A261"
          strokeWidth="2"
          className="drop-shadow-[0_0_4px_#F4A261]"
        />
        <line
          x1="10"
          y1="20"
          x2="35"
          y2="0"
          stroke="#E9C46A"
          strokeWidth="2"
          className="drop-shadow-[0_0_4px_#E9C46A]"
        />
        <line
          x1="15"
          y1="20"
          x2="40"
          y2="0"
          stroke="#2A9D8F"
          strokeWidth="2"
          className="drop-shadow-[0_0_4px_#2A9D8F]"
        />
        <line
          x1="20"
          y1="20"
          x2="45"
          y2="0"
          stroke="#00B4D8"
          strokeWidth="2"
          className="drop-shadow-[0_0_4px_#00B4D8]"
        />
        <line
          x1="25"
          y1="20"
          x2="50"
          y2="0"
          stroke="#0077B6"
          strokeWidth="2"
          className="drop-shadow-[0_0_4px_#0077B6]"
        />
      </svg>
    </div>
  );
};

export { RainbowStripe, DiagonalStripes };

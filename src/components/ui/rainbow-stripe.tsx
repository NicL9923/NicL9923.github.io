import { ArcColors, ArcColorArray } from '../../lib/colors';

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
  const colors = ArcColorArray;

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
            <stop offset="0%" stopColor={ArcColors.red} />
            <stop offset="20%" stopColor={ArcColors.orange} />
            <stop offset="40%" stopColor={ArcColors.yellow} />
            <stop offset="60%" stopColor={ArcColors.green} />
            <stop offset="80%" stopColor={ArcColors.cyan} />
            <stop offset="100%" stopColor={ArcColors.blue} />
          </linearGradient>
        </defs>
        {/* Multiple diagonal lines */}
        <line
          x1="0"
          y1="20"
          x2="25"
          y2="0"
          stroke={ArcColors.red}
          strokeWidth="2"
          className={`drop-shadow-[0_0_4px_${ArcColors.red}]`}
        />
        <line
          x1="5"
          y1="20"
          x2="30"
          y2="0"
          stroke={ArcColors.orange}
          strokeWidth="2"
          className={`drop-shadow-[0_0_4px_${ArcColors.orange}]`}
        />
        <line
          x1="10"
          y1="20"
          x2="35"
          y2="0"
          stroke={ArcColors.yellow}
          strokeWidth="2"
          className={`drop-shadow-[0_0_4px_${ArcColors.yellow}]`}
        />
        <line
          x1="15"
          y1="20"
          x2="40"
          y2="0"
          stroke={ArcColors.green}
          strokeWidth="2"
          className={`drop-shadow-[0_0_4px_${ArcColors.green}]`}
        />
        <line
          x1="20"
          y1="20"
          x2="45"
          y2="0"
          stroke={ArcColors.cyan}
          strokeWidth="2"
          className={`drop-shadow-[0_0_4px_${ArcColors.cyan}]`}
        />
        <line
          x1="25"
          y1="20"
          x2="50"
          y2="0"
          stroke={ArcColors.blue}
          strokeWidth="2"
          className={`drop-shadow-[0_0_4px_${ArcColors.blue}]`}
        />
      </svg>
    </div>
  );
};

export { RainbowStripe, DiagonalStripes };

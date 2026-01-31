import { ArcColors } from '../../lib/colors';

interface GlowHeaderProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const GlowHeader = ({ text, className = '', size = 'lg' }: GlowHeaderProps) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <h1
      className={`font-bold tracking-wide ${sizeClasses[size]} ${className}`}
      style={{
        color: ArcColors.cyan,
        textShadow: `0 0 10px ${ArcColors.cyan}60, 0 0 20px ${ArcColors.cyan}30`,
      }}
    >
      {text}
    </h1>
  );
};

export { GlowHeader };

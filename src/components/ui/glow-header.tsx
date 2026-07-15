interface GlowHeaderProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
}

const GlowHeader = ({
  text,
  className = '',
  size = 'lg',
  as: Heading = 'h2',
  id,
}: GlowHeaderProps) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <Heading
      id={id}
      className={`glow-heading font-bold tracking-wide ${sizeClasses[size]} ${className}`}
    >
      {text}
    </Heading>
  );
};

export { GlowHeader };

import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CreditCardIconProps {
  className?: string;
  size?: number;
  animate?: boolean;
  status?: 'low' | 'medium' | 'high';
}

const CreditCardIcon: React.FC<CreditCardIconProps> = ({
  className,
  size = 28,
  animate = true,
  status = 'medium'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get color based on status level - using cyan theme
  const getCardColor = () => {
    switch (status) {
      case 'low': return 'bg-cyan-300/20';
      case 'high': return 'bg-cyan-400/60';
      case 'medium':
      default: return 'bg-cyan-300/40';
    }
  };

  const getHoverCardColor = () => {
    switch (status) {
      case 'low': return 'bg-cyan-300/30';
      case 'high': return 'bg-cyan-500/70';
      case 'medium':
      default: return 'bg-cyan-400/50';
    }
  };

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      onMouseEnter={() => animate && setIsHovered(true)}
      onMouseLeave={() => animate && setIsHovered(false)}
    >
      {animate && (
        <div className={cn(
          "absolute w-full h-full rounded-full blur-lg transform transition-all duration-700",
          isHovered ? `scale-150 ${getHoverCardColor()}` : `scale-100 ${getCardColor()}`
        )} />
      )}

      <CreditCard
        className={cn(
          "text-cyan-600 transition-all duration-500 z-10",
          animate && isHovered ? "rotate-3 scale-110" : ""
        )}
        size={size}
      />

      {/* Payment processing effect */}
      {animate && isHovered && (
        <div
          className={cn(
            "absolute bottom-1/3 right-1/4 transform transition-all duration-300",
            "w-[3px] h-[1px] bg-cyan-400",
            "animate-pulse"
          )}
        />
      )}
    </div>
  );
};

export default CreditCardIcon;
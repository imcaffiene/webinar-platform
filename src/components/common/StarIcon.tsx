import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarIconProps {
  className?: string;
  size?: number;
  animate?: boolean;
  brightness?: 'low' | 'medium' | 'high';
}

const StarIcon: React.FC<StarIconProps> = ({
  className,
  size = 28,
  animate = true,
  brightness = 'medium'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get color based on brightness level - using cyan theme
  const getStarColor = () => {
    switch (brightness) {
      case 'low': return 'bg-cyan-300/20';
      case 'high': return 'bg-cyan-400/60';
      case 'medium':
      default: return 'bg-cyan-300/40';
    }
  };

  const getHoverStarColor = () => {
    switch (brightness) {
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
          isHovered ? `scale-150 ${getHoverStarColor()}` : `scale-100 ${getStarColor()}`
        )} />
      )}

      <Star
        className={cn(
          "text-cyan-600 transition-all duration-500 z-10",
          animate && isHovered ? "rotate-45 scale-110" : ""
        )}
        size={size}
      />

      {/* Star twinkle effect */}
      {animate && isHovered && (
        <div
          className={cn(
            "absolute top-1/4 right-1/4 transform transition-all duration-300",
            "w-[2px] h-[2px] bg-cyan-400 rounded-full",
            "animate-ping"
          )}
        />
      )}
    </div>
  );
};

export default StarIcon;
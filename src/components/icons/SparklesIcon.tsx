import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SparklesIconProps {
  className?: string;
  size?: number;
  animate?: boolean;
  sparkle?: 'low' | 'medium' | 'high';
}

const SparklesIcon: React.FC<SparklesIconProps> = ({
  className,
  size = 28,
  animate = true,
  sparkle = 'medium'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get color based on sparkle level - using cyan theme
  const getSparkleColor = () => {
    switch (sparkle) {
      case 'low': return 'bg-cyan-300/20';
      case 'high': return 'bg-cyan-400/60';
      case 'medium':
      default: return 'bg-cyan-300/40';
    }
  };

  const getHoverSparkleColor = () => {
    switch (sparkle) {
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
          isHovered ? `scale-150 ${getHoverSparkleColor()}` : `scale-100 ${getSparkleColor()}`
        )} />
      )}

      <Sparkles
        className={cn(
          "text-cyan-600 transition-all duration-500 z-10",
          animate && isHovered ? "rotate-12 scale-110" : ""
        )}
        size={size}
      />

      {/* Sparkle effect */}
      {animate && isHovered && (
        <div
          className={cn(
            "absolute top-1/4 right-1/4 transform transition-all duration-300",
            "w-[2px] h-[2px] bg-cyan-400 rounded-full",
            "animate-pulse"
          )}
        />
      )}
    </div>
  );
};

export default SparklesIcon;
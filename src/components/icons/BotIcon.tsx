import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BotIconProps {
  className?: string;
  size?: number;
  animate?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

const BotIcon: React.FC<BotIconProps> = ({
  className,
  size = 28,
  animate = true,
  intensity = 'medium'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get color based on intensity level - using cyan theme
  const getBotColor = () => {
    switch (intensity) {
      case 'low': return 'bg-cyan-300/20';
      case 'high': return 'bg-cyan-400/60';
      case 'medium':
      default: return 'bg-cyan-300/40';
    }
  };

  const getHoverBotColor = () => {
    switch (intensity) {
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
          isHovered ? `scale-150 ${getHoverBotColor()}` : `scale-100 ${getBotColor()}`
        )} />
      )}

      <Bot
        className={cn(
          "text-cyan-600 transition-all duration-500 z-10",
          animate && isHovered ? "rotate-6 scale-110" : ""
        )}
        size={size}
      />

      {/* Bot processing effect */}
      {animate && isHovered && (
        <div
          className={cn(
            "absolute top-1/3 left-1/2 transform -translate-x-1/2 transition-all duration-300",
            "w-[4px] h-[1px] bg-cyan-400",
            "animate-pulse"
          )}
        />
      )}
    </div>
  );
};

export default BotIcon;
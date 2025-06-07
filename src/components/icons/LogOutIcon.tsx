import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogOutIconProps {
  className?: string;
  size?: number;
  animate?: boolean;
  urgency?: 'low' | 'medium' | 'high';
}

const LogOutIcon: React.FC<LogOutIconProps> = ({
  className,
  size = 28,
  animate = true,
  urgency = 'medium'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get color based on urgency level - using cyan theme
  const getLogoutColor = () => {
    switch (urgency) {
      case 'low': return 'bg-cyan-300/20';
      case 'high': return 'bg-cyan-400/60';
      case 'medium':
      default: return 'bg-cyan-300/40';
    }
  };

  const getHoverLogoutColor = () => {
    switch (urgency) {
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
          isHovered ? `scale-150 ${getHoverLogoutColor()}` : `scale-100 ${getLogoutColor()}`
        )} />
      )}

      <LogOut
        className={cn(
          "text-cyan-600 transition-all duration-500 z-10",
          animate && isHovered ? "-rotate-6 scale-110" : ""
        )}
        size={size}
      />

      {/* Logout indicator effect */}
      {animate && isHovered && (
        <div
          className={cn(
            "absolute top-1/2 right-1/4 transform -translate-y-1/2 transition-all duration-300",
            "w-[2px] h-[2px] bg-cyan-400 rounded-full",
            "animate-ping"
          )}
        />
      )}
    </div>
  );
};

export default LogOutIcon;
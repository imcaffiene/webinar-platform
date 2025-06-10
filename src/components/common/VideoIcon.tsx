import React, { useState } from 'react';
import { Video } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoIconProps {
  className?: string;
  size?: number;
  animate?: boolean;
  quality?: 'low' | 'medium' | 'high';
}

const VideoIcon: React.FC<VideoIconProps> = ({
  className,
  size = 28,
  animate = true,
  quality = 'medium'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get color based on quality level - using cyan theme
  const getVideoColor = () => {
    switch (quality) {
      case 'low': return 'bg-cyan-300/20';
      case 'high': return 'bg-cyan-400/60';
      case 'medium':
      default: return 'bg-cyan-300/40';
    }
  };

  const getHoverVideoColor = () => {
    switch (quality) {
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
          isHovered ? `scale-150 ${getHoverVideoColor()}` : `scale-100 ${getVideoColor()}`
        )} />
      )}

      <Video
        className={cn(
          "text-cyan-600 transition-all duration-500 z-10",
          animate && isHovered ? "rotate-3 scale-110" : ""
        )}
        size={size}
      />

      {/* Video recording effect */}
      {animate && isHovered && (
        <div
          className={cn(
            "absolute top-1/4 right-1/4 transform transition-all duration-300",
            "w-[3px] h-[3px] bg-cyan-400 rounded-full",
            "animate-pulse"
          )}
        />
      )}
    </div>
  );
};

export default VideoIcon;
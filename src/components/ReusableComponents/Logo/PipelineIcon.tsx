'use client';

import React, { useState } from 'react';
import { Workflow } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpotlightPipelineProps {
  className?: string;
  size?: number;
  animate?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

const Pipeline: React.FC<SpotlightPipelineProps> = ({
  className,
  size = 28,
  animate = true,
  intensity = 'medium'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get color based on intensity level
  const getPipelineColor = () => {
    switch (intensity) {
      case 'low': return 'bg-blue-300/20';
      case 'high': return 'bg-blue-400/60';
      case 'medium':
      default: return 'bg-blue-300/40';
    }
  };

  const getHoverPipelineColor = () => {
    switch (intensity) {
      case 'low': return 'bg-blue-300/30';
      case 'high': return 'bg-blue-500/70';
      case 'medium':
      default: return 'bg-blue-400/50';
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
          isHovered ? `scale-150 ${getHoverPipelineColor()}` : `scale-100 ${getPipelineColor()}`
        )} />
      )}

      <Workflow
        className={cn(
          "text-blue-500 transition-all duration-500 z-10",
          animate && isHovered ? "rotate-12 scale-110" : ""
        )}
        size={size}
      />

      {/* Pipeline flow effect */}
      {animate && isHovered && (
        <div
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
            "w-[3px] h-[3px] bg-blue-400 rounded-full",
            "animate-ping"
          )}
        />
      )}
    </div>
  );
};

export default Pipeline;
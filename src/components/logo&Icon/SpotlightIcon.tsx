import React, { useState } from 'react';
import { Monitor, Mic, Video, Presentation } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpotlightIconProps {
  className?: string;
  size?: number;
  animate?: boolean;
  iconType?: 'monitor' | 'mic' | 'video' | 'presentation';
}

const SpotlightIcon: React.FC<SpotlightIconProps> = ({
  className,
  size = 28,
  animate = true,
  iconType = 'presentation'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Choose the icon based on iconType prop
  const IconComponent = () => {
    switch (iconType) {
      case 'monitor':
        return <Monitor
          className={cn(
            "text-purple-600 transition-all duration-500 z-10",
            animate && isHovered ? "rotate-6 scale-110" : ""
          )}
          size={size}
        />;
      case 'mic':
        return <Mic
          className={cn(
            "text-purple-600 transition-all duration-500 z-10",
            animate && isHovered ? "rotate-12 scale-110" : ""
          )}
          size={size}
        />;
      case 'video':
        return <Video
          className={cn(
            "text-purple-600 transition-all duration-500 z-10",
            animate && isHovered ? "rotate-6 scale-110" : ""
          )}
          size={size}
        />;
      case 'presentation':
      default:
        return <Presentation
          className={cn(
            "text-purple-600 transition-all duration-500 z-10",
            animate && isHovered ? "rotate-8 scale-110" : ""
          )}
          size={size}
        />;
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
          "absolute w-full h-full rounded-full bg-purple-300/30 blur-lg transform transition-all duration-700",
          isHovered ? "scale-150 bg-purple-300/50" : "scale-100"
        )} />
      )}

      <IconComponent />
    </div>
  );
};

export default SpotlightIcon;
import React, { useState } from 'react';
import { Presentation } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpotlightLogoProps {
  className?: string;
  showTagline?: boolean;
}

const SpotlightLogo: React.FC<SpotlightLogoProps> = ({
  className,
  showTagline = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("flex flex-col items-center", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center">
        <div className={cn(
          "absolute -top-1 -left-3 w-8 h-8 rounded-full bg-purple-300/30 blur-lg transform transition-all duration-700",
          isHovered ? "scale-150 bg-purple-300/50" : "scale-100"
        )} />

        <Presentation
          className={cn(
            "mr-2 text-purple-600 transition-all duration-500",
            isHovered ? "rotate-8 scale-110" : ""
          )}
          size={28}
        />

        <div className="flex items-center">
          <span className="text-2xl font-extrabold tracking-wider text-gray-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              SPOT
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              LIGHT
            </span>
          </span>
        </div>
      </div>

      {showTagline && (
        <p className="text-xs text-gray-500 mt-1 opacity-0 transform -translate-y-2 transition-all duration-500 ease-out"
          style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateY(0)' : 'translateY(-8px)' }}>
          Your premier webinar platform
        </p>
      )}
    </div>
  );
};

export default SpotlightLogo;
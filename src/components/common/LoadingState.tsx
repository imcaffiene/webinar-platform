import React, { useState } from 'react';
import { Loader2, Sparkles, Zap, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  className?: string;
  variant?: 'orbital' | 'matrix' | 'ripple' | 'particles';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Loading: React.FC<LoadingProps> = ({
  className,
  variant = 'orbital',
  message = 'Loading...',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-16 w-16',
    md: 'h-24 w-24',
    lg: 'h-32 w-32'
  };

  const containerSize = {
    sm: 'h-20 w-20',
    md: 'h-28 w-28',
    lg: 'h-36 w-36'
  };

  if (variant === 'orbital') {
    return (
      <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
        <div className={cn("relative flex items-center justify-center", containerSize[size])}>
          {/* Central core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
          </div>

          {/* Orbital rings */}
          <div className="absolute inset-2 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-4 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />

          {/* Orbiting particles */}
          <div className="absolute inset-2 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute -top-1 left-1/2 w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50" />
          </div>
          <div className="absolute inset-4 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
            <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 bg-accent rounded-full" />
          </div>

          {/* Energy waves */}
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" />
          <div className="absolute inset-1 rounded-full bg-primary/5 animate-ping" style={{ animationDelay: '0.5s' }} />
        </div>
        {message && <span className="text-muted-foreground animate-pulse">{message}</span>}
      </div>
    );
  }

  if (variant === 'matrix') {
    return (
      <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
        <div className={cn("relative grid grid-cols-3 gap-1", containerSize[size])}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "bg-primary rounded-sm animate-pulse",
                size === 'sm' ? 'h-1.5 w-1.5' : size === 'md' ? 'h-2 w-2' : 'h-3 w-3'
              )}
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}

          {/* Scanning line */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent h-full w-full animate-pulse"
            style={{ animationDuration: '2s' }} />
        </div>
        {message && <span className="text-muted-foreground font-mono">{message}</span>}
      </div>
    );
  }

  if (variant === 'ripple') {
    return (
      <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
        <div className={cn("relative flex items-center justify-center", containerSize[size])}>
          {/* Central icon */}
          <RefreshCw className="w-6 h-6 text-primary animate-spin z-10" />

          {/* Ripple waves */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}

          {/* Background glow */}
          <div className="absolute inset-2 bg-primary/10 rounded-full blur-lg animate-pulse" />
        </div>
        {message && <span className="text-muted-foreground">{message}</span>}
      </div>
    );
  }

  if (variant === 'particles') {
    return (
      <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
        <div className={cn("relative flex items-center justify-center", containerSize[size])}>
          {/* Central sparkle */}
          <Sparkles className="w-8 h-8 text-primary animate-spin z-10" style={{ animationDuration: '3s' }} />

          {/* Floating particles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-bounce"
              style={{
                top: `${20 + Math.sin(i * Math.PI / 3) * 30}%`,
                left: `${50 + Math.cos(i * Math.PI / 3) * 30}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}

          {/* Energy burst */}
          <div className="absolute inset-0">
            <Zap className="absolute top-0 left-1/2 w-3 h-3 text-accent animate-pulse transform -translate-x-1/2" />
            <Zap className="absolute bottom-0 left-1/2 w-3 h-3 text-accent animate-pulse transform -translate-x-1/2 rotate-180" style={{ animationDelay: '0.5s' }} />
            <Zap className="absolute left-0 top-1/2 w-3 h-3 text-accent animate-pulse transform -translate-y-1/2 rotate-90" style={{ animationDelay: '1s' }} />
            <Zap className="absolute right-0 top-1/2 w-3 h-3 text-accent animate-pulse transform -translate-y-1/2 -rotate-90" style={{ animationDelay: '1.5s' }} />
          </div>

          {/* Outer glow ring */}
          <div className="absolute inset-0 border border-primary/30 rounded-full animate-spin" style={{ animationDuration: '4s' }} />
        </div>
        {message && <span className="text-muted-foreground animate-pulse">{message}</span>}
      </div>
    );
  }

  // Default fallback
  return (
    <div className={cn("flex items-center justify-center space-x-3", className)}>
      <Loader2 className={cn("animate-spin text-primary", sizeClasses[size])} />
      {message && <span className="text-muted-foreground">{message}</span>}
    </div>
  );
};

export default Loading;

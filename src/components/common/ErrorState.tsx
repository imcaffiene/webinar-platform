import React from 'react';
import { XCircle, AlertTriangle, Zap, Skull, Frown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ErrorProps {
  className?: string;
  variant?: 'orbital' | 'matrix' | 'ripple' | 'particles';
  message?: string;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ErrorDisplay: React.FC<ErrorProps> = ({
  className,
  variant = 'orbital',
  message = 'Something went wrong',
  title = 'Error',
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
          {/* Central error icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <XCircle className="w-8 h-8 text-destructive animate-pulse" />
          </div>

          {/* Cracked ring */}
          <div className="absolute inset-2 border-2 border-destructive/30 rounded-full" />
          <div className="absolute inset-2 border-t-2 border-destructive/80 animate-pulse"
            style={{ transform: 'rotate(45deg)', width: '110%' }} />

          {/* Shattered particles */}
          <div className="absolute -top-1 left-1/3 w-1.5 h-1.5 bg-destructive rounded-full animate-bounce" />
          <div className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-destructive rounded-full animate-bounce"
            style={{ animationDelay: '0.2s' }} />
          <div className="absolute bottom-1/3 left-0 w-1.5 h-1.5 bg-destructive rounded-full animate-bounce"
            style={{ animationDelay: '0.4s' }} />

          {/* Error glow */}
          <div className="absolute inset-0 rounded-full bg-destructive/10 animate-pulse" />
        </div>
        {title && <span className="text-destructive font-medium">{title}</span>}
        {message && <span className="text-muted-foreground text-center max-w-xs">{message}</span>}
      </div>
    );
  }

  if (variant === 'matrix') {
    return (
      <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
        <div className={cn("relative grid grid-cols-3 gap-1", containerSize[size])}>
          {/* Error grid */}
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                i === 4 ? "bg-destructive" : "bg-destructive/20",
                "rounded-sm",
                size === 'sm' ? 'h-1.5 w-1.5' : size === 'md' ? 'h-2 w-2' : 'h-3 w-3'
              )}
            />
          ))}

          {/* Error cross */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(45deg, transparent 45%, rgba(220, 38, 38, 0.8) 45%, rgba(220, 38, 38, 0.8) 55%, transparent 55%),
                           linear-gradient(-45deg, transparent 45%, rgba(220, 38, 38, 0.8) 45%, rgba(220, 38, 38, 0.8) 55%, transparent 55%)`
            }}
          />
        </div>
        {title && <span className="text-destructive font-mono font-medium">{title}</span>}
        {message && <span className="text-muted-foreground font-mono text-center max-w-xs">{message}</span>}
      </div>
    );
  }

  if (variant === 'ripple') {
    return (
      <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
        <div className={cn("relative flex items-center justify-center", containerSize[size])}>
          {/* Central icon */}
          <AlertTriangle className="w-8 h-8 text-destructive z-10" />

          {/* Ripple waves */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border-2 border-destructive/20 rounded-full"
              style={{
                transform: `scale(${1 + i * 0.3})`,
                opacity: 1 - i * 0.3
              }}
            />
          ))}

          {/* Pulsing effect */}
          <div className="absolute inset-0 border-2 border-destructive/50 rounded-full animate-ping" />
        </div>
        {title && <span className="text-destructive font-medium">{title}</span>}
        {message && <span className="text-muted-foreground text-center max-w-xs">{message}</span>}
      </div>
    );
  }

  if (variant === 'particles') {
    return (
      <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
        <div className={cn("relative flex items-center justify-center", containerSize[size])}>
          {/* Central skull */}
          <Skull className="w-10 h-10 text-destructive z-10" />

          {/* Exploding particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-destructive rounded-full"
              style={{
                top: `${50 + Math.sin(i * Math.PI / 4) * 40}%`,
                left: `${50 + Math.cos(i * Math.PI / 4) * 40}%`,
                animation: `explode 0.5s ease-out ${i * 0.1}s forwards`
              }}
            />
          ))}

          {/* Static electricity */}
          <Zap className="absolute top-0 left-1/2 w-3 h-3 text-yellow-500 animate-pulse transform -translate-x-1/2" />
          <Zap className="absolute bottom-0 left-1/2 w-3 h-3 text-yellow-500 animate-pulse transform -translate-x-1/2 rotate-180"
            style={{ animationDelay: '0.3s' }} />
        </div>
        {title && <span className="text-destructive font-medium">{title}</span>}
        {message && <span className="text-muted-foreground text-center max-w-xs">{message}</span>}
      </div>
    );
  }

  // Default fallback
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-3", className)}>
      <div className="relative">
        <XCircle className={cn("text-destructive", sizeClasses[size])} />
        <div className="absolute inset-0 rounded-full bg-destructive/10 animate-ping" />
      </div>
      {title && <span className="text-destructive font-medium">{title}</span>}
      {message && <span className="text-muted-foreground text-center max-w-xs">{message}</span>}
    </div>
  );
};

export default ErrorDisplay;
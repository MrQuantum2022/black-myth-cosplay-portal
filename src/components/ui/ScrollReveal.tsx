
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  className,
  threshold = 0.1,
  direction = 'up',
  distance = 50,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getDirectionStyles = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `translate3d(0, ${distance}px, 0)`;
        case 'down':
          return `translate3d(0, -${distance}px, 0)`;
        case 'left':
          return `translate3d(${distance}px, 0, 0)`;
        case 'right':
          return `translate3d(-${distance}px, 0, 0)`;
        case 'none':
          return 'translate3d(0, 0, 0)';
        default:
          return `translate3d(0, ${distance}px, 0)`;
      }
    }
    return 'translate3d(0, 0, 0)';
  };

  const styles = {
    opacity: isVisible ? 1 : 0,
    transform: getDirectionStyles(),
    transition: `opacity 0.8s ease-out, transform 0.8s ease-out ${delay}s`,
  };

  return (
    <div ref={ref} style={styles} className={cn('', className)}>
      {children}
    </div>
  );
};

export default ScrollReveal;

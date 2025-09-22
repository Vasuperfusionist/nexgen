import { useState, useEffect } from 'react';

export const useCountAnimation = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCount(0);
    
    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
        setIsAnimating(false);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  return { count, startAnimation, isAnimating };
};
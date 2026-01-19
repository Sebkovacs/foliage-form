import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'full' | 'auto';
  delay?: number; // in ms
}

const Reveal: React.FC<RevealProps> = ({ children, width = 'full', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <div 
      ref={ref} 
      className={`${width === 'full' ? 'w-full' : 'w-auto'} ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default Reveal;
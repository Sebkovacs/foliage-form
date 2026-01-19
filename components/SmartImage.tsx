import React, { useState, useEffect } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  localSrc: string; // The path to the generated image (e.g., /images/hero.png)
  fallbackSrc: string; // The Unsplash URL
  priority?: boolean; // If true, loads eagerly. If false/undefined, loads lazily.
}

const SmartImage: React.FC<SmartImageProps> = ({ 
  localSrc, 
  fallbackSrc, 
  alt, 
  className, 
  priority = false,
  ...props 
}) => {
  const [src, setSrc] = useState(localSrc);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset state if props change
    setSrc(localSrc);
    setError(false);
  }, [localSrc]);

  const handleError = () => {
    if (!error) {
      setSrc(fallbackSrc);
      setError(true);
    }
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className={`transition-opacity duration-500 ${className}`}
      onError={handleError}
      {...props} 
    />
  );
};

export default SmartImage;
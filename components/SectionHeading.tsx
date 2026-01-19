import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  light = false 
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const textColor = light ? 'text-white' : 'text-forest-green';
  const subTextColor = light ? 'text-gray-300' : 'text-stone-gray';

  return (
    <div className={`mb-16 ${alignClass} max-w-3xl mx-auto`}>
      <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl mb-6 ${textColor} font-light tracking-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-sans text-sm md:text-base uppercase tracking-widest font-medium ${subTextColor} max-w-xl mx-auto leading-relaxed`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-px w-24 bg-current opacity-20 mx-auto ${align === 'left' ? 'ml-0' : ''} ${textColor}`} />
    </div>
  );
};

export default SectionHeading;
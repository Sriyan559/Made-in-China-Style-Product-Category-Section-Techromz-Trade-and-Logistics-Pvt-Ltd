import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10 md:mb-12">
      <div className="flex items-center gap-3 mb-3">
        {/* Made-in-China style red vertical bar indicator */}
        <span 
          className="w-1.5 h-7 bg-primary rounded-full" 
          aria-hidden="true"
        />
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-secondary">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-base text-gray-500 max-w-2xl font-normal leading-relaxed ml-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

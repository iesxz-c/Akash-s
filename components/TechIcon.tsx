import React from 'react';

// Option 1: More specific typing (recommended)
interface TechIconProps {
  component: React.ComponentType<{ className?: string }>;
}

export const TechIcon = ({ component: Component }: TechIconProps) => {
  return (
    <>
      <Component className="size-10 fill-[url(#gradient)]" />
      <svg className="size-10 absolute">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="rgb(236 72 153)" />
            <stop offset="100%" stopColor="#48484a" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
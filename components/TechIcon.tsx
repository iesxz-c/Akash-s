export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component as React.ComponentType<{ className?: string }>;
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
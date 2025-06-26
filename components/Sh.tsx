export const Sh = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="uppercase font-semibold 
        tracking-widest bg-gradient-to-r
         from-pink-800 to-purple text-transparent
          bg-clip-text font-serif text-3xl md:text-5xl
       text-center mt-6">
          {title}
        </h2>
      </div>
      <p className="text-center md:text-lg lg:text-xl
       text-white/60 mt-4">
        {description}
      </p>
    </>
  );
};

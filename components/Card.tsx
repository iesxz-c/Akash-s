import grainImage from "../assets/images/grain.jpg";

export const Card = () => {
  return (
    <div
      className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10"
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
    </div>
  );
};

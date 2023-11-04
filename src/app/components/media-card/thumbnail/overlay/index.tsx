import SeeMoreButton from "../button";

const Overlay = () => {
  return (
    <div className="flex justify-center items-center absolute inset-0 z-10 bg-black bg-opacity-70 transition delay-100 hover:scale-110">
      <SeeMoreButton />
    </div>
  );
};

export default Overlay;

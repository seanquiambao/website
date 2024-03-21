import Image from "next/image";
const Photo = ({ text, link, image }) => {
  return (
    <div className="relative group p-5">
      <Image
        src={image}
        alt="photo"
        className="border border-black p-1 group-hover:brightness-50 duration-300  hidden md:block"
        width={700}
        height={700}
      />
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl text-white opacity-0 group-hover:opacity-100 duration-300 hidden md:block">
        {text}
      </p>
      <Image
        src={image}
        alt="photo"
        className="border border-black p-1 brightness-50 duration-300 md:hidden block"
        width={700}
        height={700}
      />
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-white opacity-100 duration-300 md:hidden block">
        {text}
      </p>
    </div>
  );
};

export default Photo;

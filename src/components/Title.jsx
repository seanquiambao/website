const Title = ({ title }) => {
  return (
    <div
      id={title.toLowerCase()}
      className="relative flex py-5 items-center -z-10"
    >
      <div className="flex-grow">
        <div className="border-t border-black" />
        <div className="border-t border-black my-1" />
      </div>
      <span className="flex-shrink mx-[5%] md:text-7xl text-5xl">{title}</span>
      <div className="flex-grow">
        <div className="border-t border-black" />
        <div className="border-t border-black my-1" />
      </div>
    </div>
  );
};

export default Title;

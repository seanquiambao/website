import Image from "next/image";
import Sean from "@/public/sean.webp";

const Landing = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center md:h-[calc(100vh-5rem)] w-screen md:text-left text-center md:my-0 my-[8%] p-15">
      <Image
        src={Sean}
        alt="Sean Quiambao"
        width={400}
        height={400}
        className="p-2 border border-black"
      />
      <div className="md:ml-5 md:px-0 md:mt-0 mt-5 px-5 md:w-1/3 items-center justify-center">
        <div className="text-7xl italic mb-2">Sean Quiambao</div>
        <div className="border-b w-full border-black md:block hidden" />
        <div className="border-b w-full border-black mt-1 md:block hidden" />
        <div className="text-xl font-bold my-3">he/him - web developer</div>
        <div className="text-wrap">
          Welcome to my website! I am currently an undergraduate student
          studying computer science at University of California, Riverside. I am
          seeking web development, full stack engineering, and software
          engineering opportunities. In my spare time, I draw digitally and
          traditionally. I aim to fill an entire sketchbook with completed
          drawings leaving no blank pages before 2024 ends.
        </div>
      </div>
    </div>
  );
};

export default Landing;

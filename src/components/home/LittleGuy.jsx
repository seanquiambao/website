import Image from "next/image";
import meirl from "@/public/meirl.gif";

const LittleGuy = ({ visible }) => {
  return (
    <Image
      className={`bottom-0 right-0 fixed ${visible ? "" : "hidden"}`}
      src={meirl}
      alt="me irl"
    />
  );
};

export default LittleGuy;

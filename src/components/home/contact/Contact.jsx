import Title from "@/components/Title";
import Link from "next/link";
import { CONTACT } from "@/data/Contact";

const Gallery = () => {
  return (
    <div className="my-[3%]">
      <Title title="Contact" />
      <div className="md:flex md:flex-row grid grid-cols-2 gap-y-10 place-items-center md:justify-evenly items-center mt-6">
        {CONTACT.map((contact, index) => {
          return (
            <Link key={index} href={contact.link}>
              {contact.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import { GALLERY } from "@/data/Gallery";
const Gallery = () => {
  return (
    <>
      <Title title="Gallery" />
      <div className="md:grid md:grid-cols-3 md:place-items-center flex flex-col justify-center items-center gap-y-5 gap-x-5 m-6">
        {GALLERY.map((gallery, index) => (
          <Image
            key={index}
            src={gallery}
            alt="photo"
            className="border border-black p-1"
            width={700}
            height={700}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="https://drive.google.com/drive/folders/1BJHzv4BsZY7kAzUHNBNtB-Ny9gCmcXsE?usp=sharing"
          className="border rounded-lg px-5 py-2 text-2xl border-black hover:scale-110 duration-300"
        >
          See More
        </Link>
      </div>
    </>
  );
};

export default Gallery;

"use client";
import Link from "next/link";
import { HOME } from "@/data/Navigation";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex sticky top-0 text-3xl h-20 border-b border-black items-center bg-white justify-between z-50">
      <Link href="/" className="ml-5">
        sean quiambao
      </Link>
      <div className="mr-5 md:block hidden">
        {HOME.map((item, index) => (
          <Link
            key={index}
            href={item.ref}
            className="mx-3 hover:text-black/60 duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;

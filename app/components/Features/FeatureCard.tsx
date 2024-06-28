import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  title: string;
}

const FeatureCard = ({ image, title }: Props) => {
  return (
    <div className="text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-103">
      <Image
        src={image}
        alt="icon"
        width={70}
        height={70}
        className="mx-auto"
      />
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-[500] text-[#02073e]">
        {title}
      </h1>
      <p className="mt-[1rem] text-black opacity-90 text-[15px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam odio
        teneturcusamus aspernatur libero dolorum. Placeat,
        nihil?
          </p>
          <Link href="/" className="mt-[1.4rem] text-red-600 font-[300] text-[20px] cursor-pointer hover:text-red-800 decoration-none">Learn More</Link>
    </div>
  );
};

export default FeatureCard;

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid ggrid-cols-1 border-b-[1.5px] border-b-slate-300 pb-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] item-start">
        <div className="md:mx-auto mx-0 flex flex-col">
          <h1 className="text-[17px] text-gray-900] font-semibold mb-[1.5rem]">
            Company
          </h1>
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Affiliate
          </Link>{" "}
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Careers & Culture
          </Link>{" "}
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Blog
          </Link>{" "}
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Press
          </Link>
        </div>
        <div className="md:mx-auto mx-0 flex flex-col">
          <h1 className="text-[17px] text-gray-900] font-semibold mb-[1.5rem]">
            My Account
          </h1>
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Press inquiries
          </Link>
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Social Media
          </Link>{" "}
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Directories
          </Link>{" "}
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Images & B-roll
          </Link>{" "}
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Permissions
          </Link>
        </div>
        <div className="md:mx-auto mx-0 flex flex-col">
          <h1 className="text-[17px] text-gray-900] font-semibold mb-[1.5rem]">
            Our Information
          </h1>
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Return Policies
          </Link>
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Privacy Policy
          </Link>{" "}
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Terms & Conditions
          </Link>{" "}
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Site Map
          </Link>{" "}
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Store Hours
          </Link>
        </div>
        <div className="md:mx-auto mx-0 flex flex-col">
          <h1 className="text-[17px] text-gray-900] font-semibold mb-[1.5rem]">
            About Us
          </h1>
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Support Center
          </Link>
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Customer Support
          </Link>{" "}
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            About Us
          </Link>{" "}
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Copyright
          </Link>{" "}
          <Link
            href="/"
            className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600"
          >
            Popular Campaign
          </Link>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-[1rem] text-[15px] opacity-75">
        Copyright © 2024 by Wisdom Obigho
      </div>
    </div>
  );
};

export default Footer;

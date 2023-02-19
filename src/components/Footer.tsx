import React from "react";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <div className="flex sm:justify-between gap-4 sm:gap-3 md:gap-3 items-center w-[100%] bg-white box-border h-[50px] rounded-[10px] py-[10px] px-5">
      <h1 className="text-[#ABA5A2] text-[13px]">Made by Talabat Menu &copy; 2023</h1>
    </div>
  );
};

export default Footer;

import React from "react";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div className="flex justify-evenly sm:justify-between gap-5 sm:gap-0 items-center w-[100%] bg-white box-border mt-[20px] rounded-[10px] py-[10px] px-5 h-[60px]">
      <h1 className="text-[#393230] font-bold">Dashboard</h1>
    </div>
  );
};

export default Home;

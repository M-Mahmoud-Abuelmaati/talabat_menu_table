import React from "react";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <div className="flex gap-5">
      <div className="w-[180px] h-[60px] rounded-[10px] bg-white sm:block hidden">
        <div className="bg-[url('/public/img/logo.svg')] w-[180px] h-[60px] bg-center bg-no-repeat" />
      </div>
      <div className="flex justify-evenly sm:justify-between gap-5 sm:gap-0 items-center w-[100%] bg-white box-border rounded-[10px] py-[10px] px-5 h-[60px]">
        <div>
          <h1 className="font-bold lg:text-sm md:text-xs sm:text-[12px] text-[10px] whitespace-nowrap">Welcome Back, Ahmed!</h1>
          <h5 className="text-[#ABA5A2] lg:text-[11px] md:text-[9px] sm:text-[9px] text-[8px] sm:whitespace-nowrap">
            You have <span className="text-[#C02328]">9 Orders</span> to
            complete
          </h5>
        </div>
        <div className="flex justify-center items-center gap-1 md:gap-2 lg:gap-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              className="block p-1 pl-10 text-sm text-gray-900 w-28 md:w-40 lg:w-72 sm:w-32 sm:h-8 h-max rounded-[23px] bg-[#F5F5F5]"
              placeholder="Search ..."
              required
            />
          </div>
          <hr className="bg-[#3D57AA] w-7 sm:w-7 rotate-90" />
          <img src="/img/SA_logo.svg" alt="logo"  className="w-6" />
          <hr className="bg-[#3D57AA] w-7 sm:w-7 rotate-90" />
          <img src="/img/notification.svg" alt="logo" className="w-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

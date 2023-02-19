import { Disclosure } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Links } from "../constants/Sidebar";
import Icon from "./Icon";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  const [activePage, setActivePage] = useState<string>("Dashboard");
  const [activeNestedPage, setActiveNestedPage] = useState<string>("");
  const router = useNavigate();

  const handlePage = (page?: string, nestedPage?: string) => {
    if (page) setActivePage(page);
    else setActivePage("");
    if (nestedPage) setActiveNestedPage(nestedPage);
    else setActiveNestedPage("");
  };

  useEffect(() => {
    if (window.location.pathname.includes("tables")) setActivePage("Tables");
  }, []);

  return (
    <div className="w-[180px] mt-5 bg-white rounded-[10px] hidden sm:block">
      <div className="flex flex-col items-start pt-5 pl-[22px]">
        {Links.map((link) => (
          <Disclosure key={link.id}>
            <Disclosure.Button
              className={`py-2 flex gap-2 whitespace-nowrap text-xs w-full ${
                activePage !== link.name
                  ? "text-[#ABA5A2] border-r-2 border-r-transparent"
                  : `text-[#C02328] ${
                      !link.items && "border-r-2 border-r-[#C02328]"
                    }`
              }`}
              onClick={() => {
                if (link.items) {
                  handlePage(link.name, link.items[0].name);
                } else {
                  handlePage(link.name, "");
                }
                router(link.path);
              }}
            >
              <Icon
                name={link.icon}
                color={activePage !== link.name ? "#ABA5A2" : "#C02328"}
              />

              <span className="w-full text-left">{link.name}</span>
            </Disclosure.Button>
            <Disclosure.Panel className={"flex flex-col items-start w-full"}>
              {link.items?.map((item) => (
                <div
                  key={item.id}
                  className={`pl-2 py-1 flex gap-2 whitespace-nowrap text-xs w-full ${
                    activeNestedPage !== item.name
                      ? "text-[#ABA5A2] pl-5 border-r-2 border-r-transparent"
                      : "text-[#C02328] border-r-2 border-r-[#C02328]"
                  }`}
                >
                  {activeNestedPage === item.name && <span>-</span>}
                  <Link
                    to={item.path}
                    className="w-full"
                    onClick={() => handlePage("", item.name)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </Disclosure.Panel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

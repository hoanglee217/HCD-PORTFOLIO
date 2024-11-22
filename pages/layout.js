import Intro from "../components/Common/Intro";
import Nav from "../components/Common/Nav/Nav";
import Footer from "../components/Footer";
import { FaBars, FaHandshake, FaMousePointer } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { MdArrowBackIosNew } from "react-icons/md";
import { useState } from "react";
import NavItem from "../components/Common/Nav/NavItem";
import { ImHome } from "react-icons/im";
import { HiIdentification } from "react-icons/hi";
import { FiAward } from "react-icons/fi";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);

  return (
    <div
      className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}
    >
      <div className="lg:hidden">
        <div className=" bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative">
          <div
            className="icon flex items-center gap-x-2"
            onClick={(e) => setIntro(!intro)}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              <SlOptionsVertical />
            </span>
            <div className="text-Snow absolute -right-1 -bottom-1">
              <FaMousePointer />
            </div>
          </div>
          <div
            className="icon flex items-center gap-x-2"
            onClick={(e) => setIsOpen(!isOpen)}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              {" "}
              <FaBars />
            </span>
          </div>
        </div>
      </div>
      <div className="flex relative h-full justify-between gap-x-3">
        {/* left most side */}
        <div
          className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col lg:relative ${
            intro ? "flex absolute" : "hidden"
          }`}
        >
          <Intro isOpen={intro} setIsOpen={setIntro} />
        </div>
        {/* overlay */}
        {intro && (
          <div
            onClick={(e) => setIntro(false)}
            className="fixed top-0 left-0  w-full h-full bg-black/50 backdrop-blur-[2px] z-40"
          ></div>
        )}

        {/* middle of screen */}
        <div className="relative w-full h-auto mb-10 pb-7 lg:w-9/12 shadow-2xl bg-DeepNightBlack relative overflow-x-hidden overflow-y-scroll">
          {children}
          <Footer />
        </div>

        {/* right side */}
        {/* right side */}
        <div
          className={`hidden lg:block absolute lg:w-20 lg:relative bg-DeepNightBlack shadow-2xl rounded-xl overflow-hidden`}
        >
          <div
            onClick={(e) => setIsOpen(!isOpen)}
            className="bg-MidNightBlack text-Green hidden lg:flex items-center h-16 justify-center text-2xl "
          >
            <span className="icon border-2 border-Green p-2 rounded-xl">
              {" "}
              <div className="hidden xs:block">
                <FaBars />
              </div>
              <div className="xs:hidden">
                <MdArrowBackIosNew />
              </div>
            </span>
          </div>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center text-xl text-gray-600 font-extrabold tracking-widest">
          <div className="flex flex-col gap-y-2 px-6 w-full transition">
            <NavItem
              setIsOpen={setIsOpen}
              NavRoute={"/"}
              NavIcon={<ImHome />}
              NavText={"Home"}
            />
            <NavItem
              setIsOpen={setIsOpen}
              NavRoute={"/contact"}
              NavIcon={<FaHandshake />}
              NavText={"Contact"}
            />
            <NavItem
              setIsOpen={setIsOpen}
              NavRoute={"/background"}
              NavIcon={<HiIdentification />}
              NavText={"Background"}
            />
            <NavItem
              setIsOpen={setIsOpen}
              NavRoute={"/portfolio"}
              NavIcon={<FiAward />}
              NavText={"Portfolio"}
            />
        </div>
          </span>
        </div>
        {<Nav isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}

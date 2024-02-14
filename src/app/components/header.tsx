import unmsa_logo from "../assets/logo/unmsa_logo.png";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Menu from "./menu";
import { useState } from "react";

export default function Header() {
  const [display, setDisplay] = useState(false);
  return (
    <nav className="flex relative flex-col w-full gap-2 md:gap-4 md:px-8 px-4 py-4 shadow-lg">
      <div className="flex justify-between md:mt-6">
        <div className="flex md:gap-4 gap-2">
          <div>
            <img
              className="w-10 md:w-16 my-auto"
              src={unmsa_logo}
              alt="University Of Nigeria Medical Students Association Logo"
            />
          </div>
          <div className="flex gap-1 flex-col">
            <div className="flex flex-col font-agrandir_grandheavy font-extrabold md:text-[1rem] text-[0.75rem] text-black leading-tight">
              <span className="tracking-[0.65rem] text-light_green">UNMSA</span>
              <span className="tracking-[0.05rem]">MARKETPLACE</span>
            </div>
            <span className="font-calibri_italic md:text-[0.875rem] text-[0.5rem] leading-tight">
              Bringing the best of UNMSA together through market...
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-end font-calibri">
          <div className="md:hidden flex gap-4 text-green text-[1.5rem] my-auto">
            <span>
              <MdSearch />
            </span>
            <span onClick={() => setDisplay(!display)} className="">
              <HiMenu />
              <Menu display={display} setDisplay={setDisplay} />
            </span>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="flex bg-dark_green justify-between rounded-md gap-4 px-3">
              <span className="text-white my-auto">Cart</span>
              <span className="my-auto text-white ">
                <AiOutlineShoppingCart className="w-6 h-6" />
              </span>
            </button>
            <button className="flex bg-dark_green justify-between rounded-md gap-4 px-3">
              <span className="text-white my-auto">Login</span>
              <span className="text-white flex rounded-full w-6 h-6 bg-ash my-2">
                <FaRegUser className="justify-center my-auto mx-auto" />
              </span>
            </button>
          </div>

          <div className="hidden md:flex w-full">
            <div className="flex border border-black border-2 rounded-md p-[0.15rem] ">
              <input
                className="border-none outline-none w-80 text-[0.875rem]"
                placeholder="Search anything"
              />
              <button className="flex px-3 py-2 text-white bg-dark_ash rounded-md">
                <span>
                  <MdSearch className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex font-agrandir w-full justify-center gap-10 font-semibold text-green">
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8 decoration-2" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8 decoration-2" : ""
          }
          to={"/blog"}
        >
          UNMSA Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8 decoration-2" : ""
          }
          to={"/shop"}
        >
          Buy & Sell
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8 decoration-2" : ""
          }
          to={"/cbt-demo"}
        >
          CBT (Beta)
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8 decoration-2" : ""
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8 decoration-2" : ""
          }
          to={"/about"}
        >
          About Us
        </NavLink>
      </div>
    </nav>
  );
}

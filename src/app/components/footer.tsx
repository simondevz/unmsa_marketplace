import { Link, NavLink } from "react-router-dom";
import { blogData } from "../utils/blogStuff";

export default function Footer() {
  function Divider() {
    return <div className="w-full bg-white flex h-[0.1rem]"></div>;
  }
  return (
    <footer className="flex flex-col gap-4 p-4 md:p-8 bg-green ">
      <div className="flex flex-col justify-center w-full">
        <div className="flex gap-4 flex-col md:flex-row mx-auto">
          {/* <div className="flex flex-col md:flex-row gap-4">
            <img
              className="w-10 md:w-12 h-14 md:h-16 my-auto mx-auto"
              src={unn_logo}
              alt="University Of Nigeria, Nsukka Logo"
            />
            <div className="flex gap-4 mx-auto">
              <img
                className="w-10 md:w-12 h-10 md:h-12 my-auto"
                src={unmsa_logo}
                alt="University Of Nigeria Medical Students Association Logo"
              />
              <div className="w-48">
                <div className="flex flex-col font-agrandir_grandheavy font-extrabold text-[0.875remrem] text-black leading-tight">
                  <span className="tracking-[0.65rem] text-light_green">
                    UNMSA
                  </span>
                  <span className="tracking-[0.05rem]">MARKETPLACE</span>
                </div>
                <span className="font-calibri_italic text-[0.75rem]">
                  Bringing the best of UNMSA together through market...
                </span>
              </div>
            </div>
          </div> */}
          <div className="md:w-full">
            <span className="font-calibri leading-tight md:text-[1.5rem] flex text-center md:text-left text-white">
              University of Nigeria Medical Students’ Association (UNMSA)
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap font-agrandir w-full justify-center gap-3 md:gap-10 text-[0.875rem] my-8 text-white">
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
        </div>
      </div>
      <Divider />
      <div className="flex md:flex-row flex-col gap-4 justify-center">
        <div>
          <h2 className="font-agrandir_grandheavy tracking-wide text-white m-4">
            Top Articles from UNMSA
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 font-agrandir text-white text-[0.875rem]">
            {blogData.map((data, index: number) => {
              return (
                <Link
                  className="mb-4 px-4 w-64"
                  key={index}
                  to={"/blog/" + index}
                >
                  {data.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="font-agrandir_grandheavy tracking-wide text-white m-4">
            Find us on Socials:
          </h2>
          <div className="flex flex-wrap font-agrandir w-full justify-center gap-3 md:gap-10 text-[0.875rem] my-8 text-white">
            <Link to={"https://twitter.com/unmsa_official"}>Twitter</Link>
            <Link to={"https://www.instagram.com/unmsa_official/"}>
              Instagram
            </Link>
            <Link to={"https://youtube.com/@unmsaofficial4573"}>YouTube</Link>
            <Link to={"https://facebook.com/groups/1434472103438354/"}>
              Facebook
            </Link>
            {/* <Link to={"#"}>Email</Link> */}
          </div>
        </div>
      </div>
      <Divider />
    </footer>
  );
}

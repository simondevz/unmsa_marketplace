import { NavLink } from "react-router-dom";
import unmsaLogo from "../../assets/logo/unmsa_logo.png";
import unnLogo from "../../assets/logo/unn_logo.png";

export default function AuthFooter() {
  const Divider = () => <div className="h-px bg-ash w-full"></div>;
  return (
    <footer className="px-10">
      <Divider />
      <div className="py-8 flex gap-8 text-darker_lemon font-agrandir_bold justify-center">
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
      <Divider />
      <div className="gap-2 flex  justify-center py-8">
        <div
          className="flex w-10 h-10 my-auto bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${unmsaLogo})` }}
        ></div>
        <div
          className="flex w-10 h-10 my-auto bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${unnLogo})` }}
        ></div>
      </div>
    </footer>
  );
}

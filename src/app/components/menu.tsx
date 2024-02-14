import { NavLink } from "react-router-dom";

export default function Menu({
  display,
  setDisplay,
}: {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={
        (display ? " flex " : " hidden ") +
        "flex-col absolute bg-white right-4 top-16 shadow-lg text-center z-50 text-black text-[0.875rem]"
      }
    >
      <NavLink
        onClick={() => setDisplay(false)}
        className={({ isActive }) =>
          (isActive ? "text-green" : "") + " px-10 py-4 border-b border-b-green"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setDisplay(false)}
        className={({ isActive }) =>
          (isActive ? "text-green" : "") + " px-10 py-4 border-b border-b-green"
        }
        to={"/blog"}
      >
        UNMSA Blog
      </NavLink>
      <NavLink
        onClick={() => setDisplay(false)}
        className={({ isActive }) =>
          (isActive ? "text-green" : "") + " px-10 py-4 border-b border-b-green"
        }
        to={"/shop"}
      >
        Buy & Sell
      </NavLink>
      <NavLink
        onClick={() => setDisplay(false)}
        className={({ isActive }) =>
          (isActive ? "text-green" : "") + " px-10 py-4 border-b border-b-green"
        }
        to={"/cbt-demo"}
      >
        CBT (Beta)
      </NavLink>
      <NavLink
        onClick={() => setDisplay(false)}
        className={({ isActive }) =>
          (isActive ? "text-green" : "") + " px-10 py-4 border-b border-b-green"
        }
        to={"/contact"}
      >
        Contact
      </NavLink>
      <NavLink
        onClick={() => setDisplay(false)}
        className={({ isActive }) =>
          (isActive ? "text-green" : "") + " px-10 py-4 border-b border-b-green"
        }
        to={"/about"}
      >
        About Us
      </NavLink>
    </div>
  );
}

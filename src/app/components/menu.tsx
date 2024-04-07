import { NavLink, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export default function Menu({
  display,
  setDisplay,
}: {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const userId = useAppSelector((state) => state.auth._id);
  const location = useLocation();

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
      <NavLink
        onClick={() => setDisplay(false)}
        className={
          "font-semibold text-white bg-green px-10 py-4 border-b border-b-green"
        }
        to={userId ? `/profile/${userId}` : `/auth/login`}
        state={{ redirectUrl: location.pathname }}
      >
        {userId ? "Profile" : "Login"}
      </NavLink>
    </div>
  );
}

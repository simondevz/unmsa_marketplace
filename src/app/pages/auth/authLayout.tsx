import { Outlet, useLocation } from "react-router-dom";
import AuthFooter from "../../components/authComponents/authFooter";
import AuthHeader from "../../components/authComponents/authHeader";
import AuthCard from "../../components/authComponents/authCard";

export default function AuthLayout() {
  const location = useLocation();
  return (
    <section className="flex flex-col justify-between">
      <AuthHeader />
      <div className="flex md:flex-row flex-col-reverse h-full lg:p-12 p-4 gap-4 justify-center md:justify-around lg:justify-center">
        {(location.pathname.includes("/auth/signup") ||
          location.pathname.includes("/auth/login")) && <AuthCard />}
        <Outlet />
      </div>
      <AuthFooter />
    </section>
  );
}

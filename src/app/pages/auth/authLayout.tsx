import { Outlet, useLocation } from "react-router-dom";
import AuthFooter from "../../components/authComponents/authFooter";
import AuthHeader from "../../components/authComponents/authHeader";
import AuthCard from "../../components/authComponents/authCard";

export default function AuthLayout() {
  const location = useLocation();
  return (
    <section className="flex flex-col justify-between">
      <AuthHeader />
      <div className="flex h-full p-12 justify-center">
        {(location.pathname.includes("/auth/signup") ||
          location.pathname.includes("/auth/login")) && <AuthCard />}
        <Outlet />
      </div>
      <AuthFooter />
    </section>
  );
}

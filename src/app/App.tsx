import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import AuthLayout from "./pages/auth/authLayout";
import { useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { getAuthDetailsKey, getToken } from "./utils/localStorage";
import { useDispatch } from "react-redux";
import { updateToken } from "./redux/slice/authSlice";
import AuthHeader from "./components/authComponents/authHeader";
import AuthFooter from "./components/authComponents/authFooter";
import { isTokenValid } from "./utils/token";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  // useEffect(() => {
  //   // Scroll to top
  //   const scrollToTop = () => {
  //     console.log("to the top...");
  //     console.log(document);
  //     document.body.scrollTop = 0;
  //   };
  //   scrollToTop();
  // }, [location.pathname]);

  // If the accesstoken is not in the global state or is expired attempt to get it from localStorage
  useEffect(() => {
    (async () => {
      if (!accessToken || !(await isTokenValid(accessToken))) {
        console.log("update token.....");
        const authDetailsKey = await getAuthDetailsKey();
        const authDetails = await getToken(authDetailsKey);
        if (authDetails) dispatch(updateToken(authDetails));
      }
    })();
  }, [accessToken, dispatch]);

  return (
    <div>
      {location.pathname.includes("/auth/") ? (
        <AuthLayout />
      ) : location.pathname.includes("/profile") && // This cases is specifically for create profile page
        location.pathname.includes("/create") ? (
        <>
          <AuthHeader />
          <Outlet />
          <AuthFooter />
        </>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

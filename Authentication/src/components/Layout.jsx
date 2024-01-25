import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import NavBar from "./NavBar";

const Layout = () => {
  const { currentUser } = useAuth();

  if (Object.keys(currentUser).length === 0) {
    return <Navigate to={"/login"} />; //auto click link
  }

  return (
    <>
      <NavBar />
      <Outlet />
      <h4>Footer</h4>
    </>
  );
};

export default Layout;

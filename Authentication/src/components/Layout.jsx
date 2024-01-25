import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import { useEffect } from "react";
// import NavBar from "./NavBar";

const Layout = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  if (Object.keys(currentUser).length === 0) {
    return <Navigate to={"/login"} />; //auto click link
  }
  console.log(Object.keys(currentUser).length);

  useEffect(() => {
    if (Object.keys(currentUser).length !== 0) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      <h4>Header</h4>
      <Outlet />
      <h4>Footer</h4>
    </>
  );
};

export default Layout;

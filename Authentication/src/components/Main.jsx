import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
import DashBoard from "./DashBoard";
import Profile from "./Profile";
import Layout from "./Layout";

const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <DashBoard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default Main;

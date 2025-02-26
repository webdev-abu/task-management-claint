import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import AboutUs from "../components/AboutUs";
import Dashboard from "../pages/Dashboard";
import TaskBoard from "../components/Tasks/TaskBoard";
import PrivateRoute from "./PrivateRoute";
// import ViewTasks from "../components/ViewTasks";
// import TaskBoard from "../components/Tasks/TaskBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);

export default router;

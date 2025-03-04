import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Credentials from "./components/Credentials/Credentials";
import Additional from "./Pages/Additional";
import Dashboard from "./Pages/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/signup",
      element: <Credentials />,
    },
    {
      path: "/Additional-content",
      element: <Additional />,
    },

    {
      path:"/signup/Landing",
      element: <Dashboard />
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

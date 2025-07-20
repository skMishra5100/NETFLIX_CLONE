
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Login from "./assets/netflix/login.jsx";
import HomePage from "./assets/netflix/HomePage.jsx";


const router = createBrowserRouter([
  {
path:"/",element:<App/>
  },{
    path:"/Login",element:<Login/>
  },{
    path:"/Homepage",element:<HomePage/>
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);


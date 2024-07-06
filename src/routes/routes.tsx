import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import About from "../pages/About";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path:'contact',
          element:<Contact />
        },
    
        {
          path:"about",
          element:<About />
        }
      ]
    },

    {
      path: "/admin",
      element: <App />,
      children:[
        {
         index: true,
          element:<AdminDashboard />
        },
    
        {
         path:'dashboard',
          element:<CreateStudent />
        },
        {
          path:'create-student',
           element:<CreateStudent />
         },
         {
          path:"create-faculty",
         element: <CreateFaculty />
         },
         {
          path:"create-admin",
         element: <CreateAdmin />
         }
        
      ]
    },

    {
      path : "/login",
      element: <Login />
    },
    {
      path:"/register",
      element: <Register />

    },
 
    
  ]);

  export default router
import {  ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
 
import CreateMember from "../pages/admin/CreateMember";




export const adminPaths =[
    {
        name:'Dashboard',
        path:'dashboard',
        element:<AdminDashboard />
    },
    {
        name:'User Management',
        children:[
            {
                name:'Create Admin',
                path:'create-admin',
                element:<CreateAdmin />
            },
            {
                name:'Create Faculty',
                path:'create-faculty',
                element:<CreateFaculty />
            },
            {
                name:'Create Student',
                path:'create-student',
                element:<CreateStudent />
            },
            {
                name:'Create Member',
                path:'create-member',
                element:<CreateMember />
            },
        ]
    }
]


// create a 
// export const adminSidebar = adminPaths.reduce((acc:TSidebarItem[] , item)=>{
//     if(item.path && item.name){
//       acc.push({
//           key: item.name,
//           label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//       })
//     }

//     if(item.children){
//        acc.push({
//         key:item.name,
//         label: item.name,
//         children:item.children.map((child) =>({
//             key:child.name,
//             label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//         }))
//        });
//     }
   
      
    
//       return acc
//   },[])
  




  /// admin routing create a 

// export const adminRoutes = adminPaths.reduce((acc:TRoute[] , item)=>{
//     if(item.path && item.element){
//       acc.push({
//           path: item.path,
//           element:item.element
//       })
//     }
  
//     if(item.children){
//       item.children.forEach((child)=>{
//           acc.push({
//               path: child.path,
//               element:child.element
//           })
//       })
          
      
//     }
//       return acc
//   },[])
  











// export const adminPaths =[
//     {
//      index: "dashboard",
//       element:<AdminDashboard />
//     },

//      {
//       path:"create-faculty",
//      element: <CreateFaculty />
//      },
//      {
//         path:'create-student',
//          element:<CreateStudent/>
//        },
      
//      {
//       path:"create-admin",
//      element: <CreateAdmin />
//      }
    
//   ]

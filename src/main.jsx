import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'




import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layot from './Layot.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx';
import Contact from "./Components/ContactUs/Contact.jsx";
import Github from "./Components/GitHub/Github.jsx";
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layot/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'Contact',
        element:<Contact/>
      },
         {
        path:'Github',
        element:<Github/>
      },
    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
 { <RouterProvider router={router}/>/* it is like a wraper  */}

  </React.StrictMode>,
)

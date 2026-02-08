import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Product from "./pages/product/Product";

const router=createBrowserRouter([

    {
        path:'/',
        element: <Mainlayout/>,
        children:[
            {
            index:true,
            element:<Home/>
         },
         {
             path: "about", element: <About/>

          },
      { 
        path: "contact", element: <Contact />
     },
      {
         path: "login", element: <Login /> 
        },
      {
         path: "register", element: <Register />
         },
           { 
            path: "cart", element: <Cart />

            },
      { 
        path: "checkout", element: <Checkout />
     },
       { 
        path: "product", element: <Product />
     },
        ]
    }
])

export default router;
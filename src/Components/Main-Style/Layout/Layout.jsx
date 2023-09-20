import {
      createBrowserRouter
    } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import HomeDisplay from "../../Pages/Home/HomeDisplay";
import ProductDetails from "../../Pages/Product/ProductDetails/ProductDetails";
import About from "../../Pages/Header/About";
import Contact from "../../Pages/Header/Contact";
import Service from "../../Pages/Header/Service";
    



    const router = createBrowserRouter([
      {
        path:'/',
        element:<Home></Home>,
        children:[
            {
                  path:'/',
                  loader:()=> fetch('https://dummyjson.com/products'),
                  element:<HomeDisplay></HomeDisplay>
            },
            {
                  path:'/products/:id',
                  loader:({params})=> fetch(`https://dummyjson.com/products/${params.id}`),
                  element:<ProductDetails></ProductDetails>
            },
            {
                  path:'/about',
                  element:<About></About>
            },
            {
                  path:'/contact',
                  element:<Contact></Contact>
            },
            {
                  path:'/service',
                  element:<Service></Service>
            },
        ]
      }
    ])

export default router
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'
import Home from "./pages/Home";
import ProductsByCategory from "./pages/ProductsByCategory";
import {productsByCategoryLoader} from "./loader/ProductsByCategoryLoader";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
        path: '*',
        element: <Error/>
    },
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/products',
        element: <p>WIP</p>
    },
    {
        path: '/products/search',
        element: <p>WIP</p>
    },
    {
        path: '/products/:id',
        element: <p>WIP</p>
    },
    {
        path: '/products/:id',
        element: <p>WIP</p>
    },
    {
        path: '/category/:id',
        element: <ProductsByCategory/>,
        loader: productsByCategoryLoader
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App>
            <RouterProvider router={router}/>
        </App>
    </React.StrictMode>,
)

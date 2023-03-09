import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import './index.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'
import Home from "./pages/Home";
import ProductsByCategory from "./pages/ProductsByCategory";
import {productsByCategoryLoader} from "./loader/ProductsByCategoryLoader";
import Error from "./pages/Error";
import Product from "./pages/Product";
import {productLoader} from "./loader/ProductLoader";
import {Provider} from "react-redux";
import authStore from "./store/AuthStore";
import Login from "./pages/Login";
import ProtectedPath from "./components/ProtectedPath";

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
        element: <Product/>,
        loader: productLoader
    },
    {
        path: '/category/:id',
        element: <ProductsByCategory/>,
        loader: productsByCategoryLoader
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/',
        element: <ProtectedPath><Outlet/></ProtectedPath>,
        children: [
            {
                path: '/admin',
                element: <p>ADMINISTRATIONNNNN</p>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={authStore}>
            <App>
                <RouterProvider router={router}/>
            </App>
        </Provider>
    </React.StrictMode>,
)

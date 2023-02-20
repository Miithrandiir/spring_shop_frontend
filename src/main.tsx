import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import './index.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App>
            <RouterProvider router={router}/>
        </App>
    </React.StrictMode>,
)

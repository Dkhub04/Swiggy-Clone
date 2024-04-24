import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from '../src/components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestMenu from "./components/RestMenu";

const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restraunt/:Resid",
                element: <RestMenu />,
            }
        ],
        errorElement: <Error />,
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />)
import {
    createBrowserRouter,
} from "react-router";
import Root from "../root/Root";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        hydrateFallbackElement: <div className="min-h-screen flex justify-center items-center flex-col">
            Wait...
            <progress className="progress w-56"></progress>
        </div>,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
            },

        ]
    },
    {
        path: "/*",
        Component: <div>error</div>,
    }
]);
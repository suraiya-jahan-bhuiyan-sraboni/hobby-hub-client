import {
    createBrowserRouter,
} from "react-router";
import Root from "../root/Root";
import Home from "../pages/home/Home";
import AllGroups from "../pages/All groups/AllGroups";
import MyGroups from "../pages/protected/MyGroups";
import CreateGroup from "../pages/protected/CreateGroup";
import Login from './../pages/auth/Login';
import Register from './../pages/auth/Register';
import Error404 from "../pages/error/Error404";
import GroupDetails from "../pages/group details/GroupDetails";
import UpdateGroups from "../pages/protected/UpdateGroups";
import Contact from "../pages/contact/Contact";

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
            {
                path: "all-groups",
                Component: AllGroups,
            },
            {
                path: "my-groups",
                Component: MyGroups,
            },
            {
                path: "create-group",
                Component: CreateGroup,
            },
            {
                path: "login",
                Component:Login
                
            },
            {
                path: "register",
                Component:Register
            },
            {
                path: "group-details/:id",
                Component: GroupDetails
            }, {
                path: "update-group/:id",
                Component: UpdateGroups
            },
            {
                path: "/contact",
                Component: Contact,
            },

        ]
    },
    {
        path: "/*",
        Component: Error404,
    }
]);
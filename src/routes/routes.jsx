import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../layout/dashboard/Dashboard";
import AllUsers from "../pages/dashboard/admin/allUsers/AllUsers";
import UserCart from "../pages/dashboard/user/userCart/UserCart";
import UserHome from "../pages/dashboard/user/userHome/UserHome";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import OurMenu from "../pages/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/our-menu',
                element: <OurMenu/>
            },
            {
                path: '/our-shop/:category',
                element: <OurShop/>
            },
           
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            {
                path: 'userHome',
                element: <UserHome/>
            },
            {
                path: 'cart',
                element: <UserCart/>
            },
            {
                path: 'allUsers',
                element: <AllUsers/>
            },

        ]
    },
])

export default router
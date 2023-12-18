import About from "./components/components/about";
import CartDelivery from "./components/components/cartDelivery";
import CartStore from "./components/components/cartStore";
import Contact from "./components/components/contact";
import Dashboard from "./components/components/dashboard";
import Home from "./components/components/home";
import RouteNotFind from "./components/components/routeNotFind";
 
export const routesJson = [
    {
        name: "Not Found",
        key: "notfound",
        path: "/notfound",
        icon: "",
        component: <RouteNotFind />,
    },
    {
        name: "Home",
        key: "home",
        path: "/home",
        icon: "",
        component: <Home />,
    },
    {
        name: "About",
        key: "about",
        path: "/about",
        icon: "",
        component: <About />,
    },
    {
        name: "Contact",
        key: "contact",
        path: "/contact",
        icon: "",
        component: <Contact />,
    },
    {
        name: "DashBoard",
        key: "dashboard",
        path: "/dashboard",
        icon: "",
        component: <Dashboard />,
    },
    {
        name: "Cart Store",
        key: "cart store",
        path: "/cart/store",
        icon: "",
        component: <CartStore />,
    },
    {
        name: "Cart Delivery",
        key: "cart delivery",
        path: "/cart/delivery",
        icon: "",
        component: <CartDelivery />,
    },
]
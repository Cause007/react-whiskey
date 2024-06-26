import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
        protected: false
    },
    {
        path: "/Dashboard",
        component: Dashboard,
        name: "Dashboard",
        protected: true,
    },
    {
        path: "/About",
        component: About,
        name: "About",
        protected: false
    },
];

export default routes
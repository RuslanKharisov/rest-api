import { ADMIN_ROUTE, FAVORITE_LIST_ROUTE, LOGIN_ROUTE, PROJECTS_ROUTE, PROJECT_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import Admin from "./pages/Admin"
import FavouriteList from "./pages/FavouriteList"
import Projects from "./pages/Shop/Shop" 
import ProjectPage from "./pages/ProductPage"
import Auth from "./pages/Auth"


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: FAVORITE_LIST_ROUTE,
        element: <FavouriteList/>
    }
]

export const publicRoutes = [
    {
        path: PROJECTS_ROUTE,
        element: <Projects/>
    },
    {
        path: PROJECT_ROUTE + '/:id',
        element: <ProjectPage/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    }
]
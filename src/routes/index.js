import AdminPage from "containers/admin/AdminPage"
import MovieManagement from "containers/admin/movie-management/MovieManagement"
import ShowMovieManagement from "containers/admin/show-movie-management/ShowMovieManagement"
import UserManagement from "containers/admin/user-management/UserManagement"
import HomePage from "containers/home-module/HomePage"
import MovieDetail from "containers/home-module/MovieDetail/MovieDetail"
import LoginPage from "containers/auth/login/LoginPage"
import SeatPlan from "containers/home-module/SeatPlan/SeatPlan"

export const clientRoutes = [
    {
        path: '/login',
        component: LoginPage,
        exact: true,
    },
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
    {
        path: '/movie-detail/:movieId',
        component: MovieDetail,
        exact: false,
    },  
    {
        path: '/seat-plan/:showTimeId',
        component: SeatPlan,
        exact: false,
    },  
    
    
]

export const adminRoutes = [
    {
        path: '/admin',
        component: AdminPage,
        exact: true,
    },
    {
        path: '/admin/user-management',
        component: UserManagement,
        exact: true,
    },
    {
        path: '/admin/movie-management',
        component: MovieManagement,
        exact: true,
    },
    {
        path: '/admin/show-movie-management',
        component: ShowMovieManagement,
        exact: true,
    },
]
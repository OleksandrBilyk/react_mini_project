import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {HomePage} from "./pages/HomePage";
import {MovieListPage} from "./pages/MovieListPage"


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'home'}/>},
            {path: 'home', element: <HomePage/>},
            {path: 'movie', element: <MovieListPage/>},

        ]
    }
]);

export {
    router
}
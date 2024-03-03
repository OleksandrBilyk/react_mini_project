import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {HomePage} from "./pages/HomePage";
import {MovieListPage} from "./pages/MovieListPage"
import {MoviePage} from "./pages/MoviePage";
import {MovieSearchPage} from "./pages/MovieSearchPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'home'}/>},
            {path: 'home', element: <HomePage/>},
            {path: 'movie_list', element: <MovieListPage/>},
            {path: 'search', element: <MovieSearchPage/>},
            {path: 'movie/:id', element: <MoviePage/>}

        ]
    }
]);

export {
    router
}
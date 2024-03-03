import {Outlet} from "react-router-dom";

import {MovieList} from "../components/MovieContainer/MovieList";

const MovieListPage = () => {

    return (
        <div>
            <Outlet/>
            <MovieList/>
        </div>
    );
};

export {MovieListPage};
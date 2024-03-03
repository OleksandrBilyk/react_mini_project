import {SearchGenresForm} from "../components/MovieGanreContainer/SearchGenresForm";
import {Outlet} from "react-router-dom";

import style from "../components/MovieGanreContainer/MovieGanreList.module.css"
const MovieGenresPage = () => {
    return (
        <div className={style.Movie_genre_page}>
            <SearchGenresForm/>
            <Outlet/>
        </div>
    );
};

export {MovieGenresPage};
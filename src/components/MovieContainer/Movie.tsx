import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {ISetState} from "../../types/ISetState";

import {urls} from "../../constants/urls";
import {IMovie} from "../../interfaces/movieInterface";
import style from "./Movie.module.css"

interface IProps {
    movie: IMovie,

}

const Movie: FC<IProps> = ({movie}) => {
    const {id, original_title, title, poster_path, backdrop_path} = movie;

    const navigate = useNavigate();

    return (
        <div className={style.Movie_block}>
            <div className={style.img_block}><img className={style.img_poster} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`} alt="poster"/></div>
            <div className={style.title}>{title}</div>
        </div>
    );
};

export {Movie};
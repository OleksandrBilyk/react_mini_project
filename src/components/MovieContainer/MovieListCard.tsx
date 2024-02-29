import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {ISetState} from "../../types/ISetState";

import {StarRating} from '../StarRating';
import {IMovie} from "../../interfaces/movieInterface";
import style from "./Movie.module.css"
import {PosterPreview} from "./PosterPreview";
import {MoviePage} from "../../pages/MoviePage";

interface IProps {
    movie: IMovie,

}

const MovieListCard: FC<IProps> = ({movie}) => {
    const {id, original_title, title, poster_path, backdrop_path, vote_average} = movie;

    const navigate = useNavigate();
    const toMovie = () => {
        navigate(`/movie`)
    };

    return (
        <div onClick={toMovie} className={style.Movie_block}>
            <PosterPreview img_url={poster_path}/>
            <div className={style.title}>{title}</div>
            <StarRating rating={vote_average}/>
        </div>
    );
};

export {MovieListCard};
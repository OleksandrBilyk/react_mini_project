import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {ISetState} from "../../types/ISetState";

import {StarRating} from '../StarRating';
import {IMovie_details} from "../../interfaces/movieInterface";
import style from "./Movie.module.css"
import {PosterPreview} from "../PosterPreview";


interface IProps {
    movie_detail: IMovie_details,

}

const Movie: FC<IProps> = ({movie_detail}) => {
    const {id, original_title, title, poster_path, backdrop_path, vote_average} = movie_detail;

    // const navigate = useNavigate();

    return (
        <div className={style.Movie_info}>
            <div className={style.image_block_poster}>
                <PosterPreview img_url={backdrop_path}/>
            </div>

            <div className={style.title}>{title}</div>
            <StarRating rating={vote_average}/>
        </div>
    );
};

export {Movie};
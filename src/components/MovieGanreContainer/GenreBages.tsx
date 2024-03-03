import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {ISetState} from "../../types/ISetState";


import {IGenre, IMovie} from "../../interfaces/movieInterface";
import style from "./Movie.module.css"
import {PosterPreview} from "../PosterPreview";


interface IProps {
    genre: IGenre,

}

const GenreBages: FC<IProps> = ({genre}) => {
    const {id, name} = genre;

    const navigate = useNavigate();
    const toMovie = () => {
        navigate(`/movie/${id}`)

    };

    return (
        <div onClick={toMovie} className={style.Movie_block}>

        </div>
    );
};

export {GenreBages};
import {FC} from "react";
import {useNavigate} from "react-router-dom";

// @ts-ignore
import BtnBadgesReactjs from 'btn-badge-reactjs'
import {IGenre} from "../interfaces/movieInterface";
 import style from "./MovieGanreContainer/MovieGanreList.module.css"


interface IProps {
    genre: IGenre,

}

const GenreBadges: FC<IProps> = ({genre}) => {
    const {id, name} = genre;

    const navigate = useNavigate();
    const toMovie = () => {
        navigate(`/genre/${id}`)

    };

    return (
        <div onClick={toMovie} className={style.Genres_badge}>
            <BtnBadgesReactjs
                btnText={`${name}`}
                badgeText ={`${id}`}
                badgeWidth={1}
                badgeOffsetY={0.2}
                badgeOffsetX={-1}
                badgeBackground={'#0d6efd'}
                btnBackground={'#3d15e0'}
                btnFontSize={1.2}
            />

        </div>
    );
};

export {GenreBadges};
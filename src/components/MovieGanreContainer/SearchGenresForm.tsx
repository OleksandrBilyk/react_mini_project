import React, {useEffect, useState} from 'react';
import {genreService} from "../../services/genreService";
import {IGenre, IMovie} from "../../interfaces/movieInterface";
import style from "../MovieContainer/Movie.module.css";
import {MovieListCard} from "../MovieContainer/MovieListCard";
import {GenreBages} from "./GenreBages";

const SearchGenresForm = () => {
    const [genresList,  setGenresList] = useState<IGenre[]>([]);

    useEffect(() => {
        genreService.getAll().then(({data}) => {
            setGenresList(data.genres)
        })
    }, [])
    console.log(genresList)
    return (
        <div>
            <div className={style.Genres_block}>
                {genresList.map(genre => <GenreBages key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {SearchGenresForm};
import {useEffect, useState} from "react";

import {IMovie} from "../../interfaces/movieInterface";

import {movieService} from "../../services/movieService";
import {Movie} from "./Movie";
import {useSearchParams} from "react-router-dom";
import style from "./Movie.module.css"


const Movies = () => {
    const [movies,  setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState<number>(0);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        movieService.getAll(query.get('page')).then(({data}) => {
            setMovies(data.results)
        })
    }, [query.get('page')])

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page')! - 1}`)
            setPage(page - 1)
            return prev

        })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page')! + 1}`)
            setPage(page + 1)
            return prev
        })
    }
    return (
        <div>
            <div className={style.Movies_block}>{movies.map(movie => <Movie key={movie.id}  movie={movie} />)}</div>
            <div>
                <button disabled={(page <=0 )} onClick={prev}>prev</button>
                <button disabled={(page >= 500)} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Movies};
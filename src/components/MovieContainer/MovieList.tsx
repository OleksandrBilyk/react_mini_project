import {useEffect, useState} from "react";

import {IMovie} from "../../interfaces/movieInterface";

import {movieService} from "../../services/movieService";
import {MovieListCard} from "./MovieListCard";
import style from "./Movie.module.css"
import {usePageQuery} from "../../hooks/usePageQuery";




const MovieList = () => {
    const [movies,  setMovies] = useState<IMovie[]>([]);
    // const [page, setPage] = useState<number>(0);
    // const [query, setQuery] = useSearchParams({page: '1'});
    const {page, next, prev} = usePageQuery();
    // const [black_theme,] = useAppContext();

    useEffect(() => {
        movieService.getAll(page).then(({data}) => {
            setMovies(data.results)
        })
    }, [page])


    return (
        <div>
            <div className={style.Movies_block}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie} />)}
            </div>
            <div>
                <button disabled={(+page <=1 )} onClick={prev}>prev</button>
                <button disabled={(+page >= 500)} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {MovieList};
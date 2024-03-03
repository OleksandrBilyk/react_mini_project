import {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {IMovie, IRequest, ISearchRes} from "../../interfaces/movieInterface";

import {movieService} from "../../services/movieService";
import {MovieFindCard} from "./MovieFindCard";
import style from "../MovieContainer/Movie.module.css"
import {usePageQuery} from "../../hooks/usePageQuery";
import {useSearchParams} from "react-router-dom";


const SearchFilmsForm = () => {
    const [search_res,  setSearchRes] = useState<ISearchRes>({results: [], total_pages:0});
    const {reset, handleSubmit, register} = useForm();
    const [query, setQuery] = useState<string>(null);
    const {page, next, prev, default_page} = usePageQuery();
    // const [black_theme,] = useAppContext();

console.log(page)
    useEffect(() => {
        movieService.findFilms(query, +page).then(({data}) => {
            setSearchRes(data)
        })
    }, [page, query])

    const find: SubmitHandler<IRequest> = (keyword) => {
         setQuery(keyword.keyword)
        default_page()
        reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(find)}>
                <input type="text" placeholder={'keyword'} {...register('keyword', {required:true})}/>
                <button>Find</button>
            </form>
            <div className={style.Movies_block}>
                {search_res.results.map(movie_find => <MovieFindCard key={movie_find.id} movie_find={movie_find} />)}
            </div>
            {search_res.total_pages<=1 ? <div></div> :
            <div>
                <button disabled={(+page <=1 )} onClick={prev}>prev</button>
                <button disabled={(+page >= search_res.total_pages)} onClick={next}>next</button>
            </div>}
        </div>


    );
};
export {SearchFilmsForm};
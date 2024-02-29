import {IRes} from "../types/IResType";
import {IMovies} from "../interfaces/movieInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const movieService = {
    getAll: (page: any): IRes<IMovies> => apiService.get(urls.movie.base, {params:{page}}),
}

export {
    movieService
}
import {IRes} from "../types/IResType";
import {IMovies} from "../interfaces/movieInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const movieService = {
    getAll: (page: any): IRes<IMovies> => axiosService.get(urls.movie.base, {params:{page}}),

}

export {
    movieService
}
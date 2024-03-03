import {IRes} from "../types/IResType";
import {IGenres} from "../interfaces/movieInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const genreService = {
    getAll: (): IRes<IGenres> => apiService.get(urls.genre.base),

}

export {
    genreService
}
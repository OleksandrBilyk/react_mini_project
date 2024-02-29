import axios from "axios";

import {urls} from "../constants/urls";

const baseURL:string = 'https://image.tmdb.org/'

const postService = axios.create({baseURL})

const posterService = {
    getPoster: (img_url: string) => postService.get(urls.poster.base, {params: img_url}),
}

export {posterService}
const baseURL:string = 'https://api.themoviedb.org/'

const movies = '3/discover/movie'
const movie = "3/movie"
const genre = '/genre'


const urls = {
    movie: {
        base: movies,
        movie_info: {
            byIds: (id:number) => `${movie}/${id}`
        }

    }
}

export {
    baseURL,
    urls
}
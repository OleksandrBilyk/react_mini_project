const baseURL:string = 'https://api.themoviedb.org/'

const movie = '3/discover/movie'
const genre = '/genre'
const poster = 't/p/w220_and_h330_face'

const urls = {
    movie: {
        base: movie,
        genre: genre
    },
    poster: {
        base: poster
    }
}

export {
    baseURL,
    urls
}
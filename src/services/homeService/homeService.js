import { url_constants as consts } from '../../constants'
import { add_query_params } from '../serviceUtils'

const API_KEY = process.env.REACT_APP_TMDB_API_KEY

// Find more about the movie db endpoints in the below link
// https://developers.themoviedb.org/3/getting-started/introduction

// Fetches the Popular movies by given params
// Returns a promise that resolves to a response object
export const getPopularMovies = ( page) => {

    let query_params = [
        {
            key: "api_key",
            value: API_KEY
        },
        {
            key: "page",
            value: page
        },
    ]

    let url = consts.API_BASE+consts.API_POPULAR_PATH
    url = add_query_params(url, query_params)
    
    return fetch(url)
}

export const getTrendingMovies = ( page, timeWindow=consts.TRENDING_TIME_WINDOW_DAY ) => {

    let query_params = [
        {
            key: "api_key",
            value: API_KEY
        },
        {
            key: "page",
            value: page
        }
    ]

    let url = consts.API_BASE+consts.API_TRENDING+consts.TRENDING_MEDIA_TYPE_MOVIE_PATH+"/"+timeWindow
    url = add_query_params(url, query_params)
    
    return fetch(url)
}

export const getSearchMovies = ( keyword, page ) => {

    let query_params = [
        {
            key: "api_key",
            value: API_KEY
        },
        {  
            key: "query",
            value: keyword

        },
        {
            key: "page",
            value: page
        }
    ]

    let url = consts.API_BASE+consts.API_SEARCH_MOVIE
    url = add_query_params(url, query_params)
    
    return fetch(url)
}



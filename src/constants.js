
const constants = {
    tabs: {
        POPULAR: "POPULAR",
        TRENDING: "TRENDING",
        SEARCH: "SEARCH"

    },

    stringConstants: {
        SITE_HEADER: "Movies & Chill",
        BROWSE: "Browse",
        CONTENT_HEADERS: {
            POPULAR: "Popular",
            TRENDING: "Trending",
            SEARCH: "Search"
        },
        PAGINATION_API_LIMIT: 500
    },

    posterSizes: {
        SMALL: "w185/",
        MEDIUM: "w342/",
        LARGE: "w500/",
        XLARGE: "w780/",
        ORIGINAL: "original/"
    },

    profileSizes: {
        XSMALL: "w92/",
        SMALL: "w185/",
        MEDIUM: "h632/",
        ORIGINAL: "original/"

    },

    backdropSizes: {
        SMALL: "w300",
        LARGE: "w780",
        XLARGE: "w1280",
        ORIGINAL: "original"
    }

}

export const action_constants = {
    CHANGE_TAB: "home/CHANGE_TAB",
    SEARCH: "home/SEARCH",
    GET_POPULAR_MOVIES: "home/GET_POPULAR_MOVIES",
    GET_TRENDING_MOVIES: "home/GET_TRENDING_MOVIES",
    GET_POPULAR_MOVIES_SUCCESS: "home/GET_POPULAR_MOVIES_SUCCESS",
    GET_POPULAR_MOVIES_FAILURE: "home/GET_POPULAR_MOVIES_FAILURE",
    GET_TRENDING_MOVIES_SUCCESS: "home/GET_TRENDING_MOVIES_SUCCESS",
    GET_TRENDING_MOVIES_FAILURE: "home/GET_TRENDING_MOVIES_FAILURE",
    SEARCH_KEYWORD_CHANGED: "home/SEARCH_KEYWORD_CHANGED",
    GET_SEARCH_MOVIES: "home/GET_SEARCH_MOVIES",
    GET_SEARCH_MOVIES_SUCCESS: "home/GET_SEARCH_MOVIES_SUCCESS",
    GET_SEARCH_MOVIES_FAILURE: "home/GET_SEARCH_MOVIES_FAILURE",
    GET_MOVIE_DETAILS: "movie/GET_MOVIE_DETAILS",
    GET_MOVIE_DETAILS_SUCCESS: "movie/GET_MOVIE_DETAILS_SUCCESS",
    GET_MOVIE_DETAILS_FAILURE: "movie/GET_MOVIE_DETAILS_FAILURE",
    GET_CAST_OF_MOVIE: "movie/GET_CAST_OF_MOVIE",
    GET_CAST_OF_MOVIE_SUCCESS: "movie/GET_CAST_OF_MOVIE_SUCCESS",
    GET_CAST_OF_MOVIE_FAILURE: "movie/GET_CAST_OF_MOVIE_FAILURE",
    CLEAR_MOVIE_AND_CAST_OF_MOVIE: "movie/CLEAR_MOVIE_AND_CAST_OF_MOVIE",
    GET_CAST_DETAILS: "cast/GET_CAST_DETAILS",
    GET_CAST_DETAILS_SUCCESS: "cast/GET_CAST_DETAILS_SUCCESS",
    GET_CAST_DETAILS_FAILURE: "cast/GET_CAST_DETAILS_FAILURE",
    GET_MOVIES_OF_CAST: "cast/GET_MOVIES_OF_CAST",
    GET_MOVIES_OF_CAST_SUCCESS: "cast/GET_MOVIES_OF_CAST_SUCCESS",
    GET_MOVIES_OF_CAST_FAILURE: "cast/GET_MOVIES_OF_CAST_FAILURE",
    CLEAR_CAST_AND_MOVIES_OF_CAST: "movie/CLEAR_CAST_AND_MOVIES_OF_CAST",

}

export const url_constants = {
    API_BASE: "https://api.themoviedb.org/3",
    API_POPULAR_PATH: "/movie/popular",
    API_TRENDING: "/trending",
    API_MOVIE_DETAILS: "/movie/",
    API_MOVIE_CAST: "/credits",
    TRENDING_MEDIA_TYPE_MOVIE_PATH: "/movie",
    TRENDING_TIME_WINDOW_DAY: "day",
    TRENDING_TIME_WINDOW_WEEK: "week",
    API_CAST_DETAILS: "/person/",
    API_CAST_MOVIE_CREDITS: "/movie_credits",
    API_SEARCH_MOVIE: "/search/movie",
    IMAGE_BASE: "https://image.tmdb.org/t/p/"

}

export default constants;
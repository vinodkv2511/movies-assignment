
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
        }
    },
    
}

export const action_constants = {
    CHANGE_TAB : "home/CHANGE_TAB",
    SEARCH : "home/SEARCH",
    GET_POPULAR_MOVIES: "home/GET_POPULAR_MOVIES",
    GET_TRENDING_MOVIES: "home/GET_TRENDING_MOVIES",
    GET_POPULAR_MOVIES_SUCCESS: "home/GET_POPULAR_MOVIES_SUCCESS",
    GET_POPULAR_MOVIES_FAILURE: "home/GET_POPULAR_MOVIES_FAILURE",
    GET_TRENDING_MOVIES_SUCCESS: "home/GET_TRENDING_MOVIES_SUCCESS",
    GET_TRENDING_MOVIES_FAILURE: "home/GET_TRENDING_MOVIES_FAILURE",
}

export const url_constants = {
    API_BASE : "https://api.themoviedb.org/3",
    API_POPULAR_PATH : "/movie/popular",
    API_TRENDING : "/trending",
    API_MOVIE_DETAILS : "/movie/",
    TRENDING_MEDIA_TYPE_MOVIE_PATH: "/movie",
    TRENDING_TIME_WINDOW_DAY: "day",
    TRENDING_TIME_WINDOW_WEEK: "week",

}

export default constants;
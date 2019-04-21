import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './castActions'
import fetchMock from 'fetch-mock'
import {url_constants as consts, action_constants} from '../constants'


const mockStore = configureMockStore([thunk])   

describe('Cast Actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })

    let url = "https://api.themoviedb.org/3/person/287?api_key="+process.env.REACT_APP_TMDB_API_KEY
    let dummyCast = {
        "birthday": "1963-12-18",
        "known_for_department": "Acting",
        "deathday": null,
        "id": 287,
        "name": "Brad Pitt",
        "also_known_as": [
          "برد پیت",
          "Бред Питт",
          "Бред Пітт",
          "Buratto Pitto",
          "Брэд Питт",
          "畢·彼特",
          "ブラッド・ピット",
          "브래드 피트",
          "براد بيت",
          "แบรด พิตต์"
        ],
        "gender": 2,
        "biography": "William Bradley \"Brad\" Pitt (born December 18, 1963) is an American actor and film producer. Pitt has received two Academy Award nominations and four Golden Globe Award nominations, winning one. He has been described as one of the world's most attractive men, a label for which he has received substantial media attention. Pitt began his acting career with television guest appearances, including a role on the CBS prime-time soap opera Dallas in 1987. He later gained recognition as the cowboy hitchhiker who seduces Geena Davis's character in the 1991 road movie Thelma & Louise. Pitt's first leading roles in big-budget productions came with A River Runs Through It (1992) and Interview with the Vampire (1994). He was cast opposite Anthony Hopkins in the 1994 drama Legends of the Fall, which earned him his first Golden Globe nomination. In 1995 he gave critically acclaimed performances in the crime thriller Seven and the science fiction film 12 Monkeys, the latter securing him a Golden Globe Award for Best Supporting Actor and an Academy Award nomination.\n\nFour years later, in 1999, Pitt starred in the cult hit Fight Club. He then starred in the major international hit as Rusty Ryan in Ocean's Eleven (2001) and its sequels, Ocean's Twelve (2004) and Ocean's Thirteen (2007). His greatest commercial successes have been Troy (2004) and Mr. & Mrs. Smith (2005).\n\nPitt received his second Academy Award nomination for his title role performance in the 2008 film The Curious Case of Benjamin Button. Following a high-profile relationship with actress Gwyneth Paltrow, Pitt was married to actress Jennifer Aniston for five years. Pitt lives with actress Angelina Jolie in a relationship that has generated wide publicity. He and Jolie have six children—Maddox, Pax, Zahara, Shiloh, Knox, and Vivienne.\n\nSince beginning his relationship with Jolie, he has become increasingly involved in social issues both in the United States and internationally. Pitt owns a production company named Plan B Entertainment, whose productions include the 2007 Academy Award winning Best Picture, The Departed.",
        "popularity": 10.647,
        "place_of_birth": "Shawnee, Oklahoma, USA",
        "profile_path": "/kU3B75TyRiCgE270EyZnHjfivoq.jpg",
        "adult": false,
        "imdb_id": "nm0000093",
        "homepage": null
      }


    it(" Should return GET_CAST_DETAILS_SUCCESS with payload", ()=> {
        fetchMock.getOnce(url, {
            body : dummyCast
        })

        const store = mockStore({ cast: { cast: {}, movies: []}})

        store.dispatch(actions.getCastDetails(287)).then(()=>{
            expect(store.getActions()).toEqual([{
                type: action_constants.GET_CAST_DETAILS_SUCCESS,
                payload: dummyCast
            }])
        })

    })

    it("Should return a GET_CAST_DETAILS_SUCCESS action",()=> {
        expect(actions.getCastDetailsSuccess("DUMMY")).toEqual({
            type: action_constants.GET_CAST_DETAILS_SUCCESS,
            payload: "DUMMY"
        })
    })


    it("Should return GET_CAST_DETAILS_FAILURE", ()=> {
        expect(actions.getCastDetailsFailure("ERROR")).toEqual({
            type: action_constants.GET_CAST_DETAILS_FAILURE,
            payload: "ERROR"
        })
    })

    
    it(" Should return GET_MOVIES_OF_CAST_SUCCESS with payload", ()=> {

        let url = "https://api.themoviedb.org/3/person/287/movie_credits?api_key="+process.env.REACT_APP_TMDB_API_KEY
        let dummyMoviesOfCast = {
            "cast": [
              {
                "character": "Tristan Ludlow",
                "credit_id": "52fe43c4c3a36847f806e20d",
                "release_date": "1994-12-16",
                "vote_count": 568,
                "video": false,
                "adult": false,
                "vote_average": 7.2,
                "title": "Legends of the Fall",
                "genre_ids": [
                  12,
                  18,
                  10749,
                  10752
                ],
                "original_language": "en",
                "original_title": "Legends of the Fall",
                "popularity": 2.356929,
                "id": 4476,
                "backdrop_path": "/jet7PQMY8aVzxBvkpG4P0eQI2n6.jpg",
                "overview": "An epic tale of three brothers and their father living in the remote wilderness of 1900s USA and how their lives are affected by nature, history, war, and love.",
                "poster_path": "/uh0sJcx3SLtclJSuKAXl6Tt6AV0.jpg"
              },
              {
                "character": "Jesse James",
                "credit_id": "52fe43c7c3a36847f806eed5",
                "release_date": "2007-09-02",
                "vote_count": 717,
                "video": false,
                "adult": false,
                "vote_average": 7,
                "title": "The Assassination of Jesse James by the Coward Robert Ford",
                "genre_ids": [
                  28,
                  18,
                  37
                ],
                "original_language": "en",
                "original_title": "The Assassination of Jesse James by the Coward Robert Ford",
                "popularity": 3.294203,
                "id": 4512,
                "backdrop_path": "/zAh7HC8Tk2D0q3VdMOP6boqNG9N.jpg",
                "overview": "Outlaw Jesse James is rumored be the 'fastest gun in the West'. An eager recruit into James' notorious gang, Robert Ford eventually grows jealous of the famed outlaw and, when Robert and his brother sense an opportunity to kill James, their murderous action elevates their target to near mythical status.",
                "poster_path": "/lSFYLoaL4eW7Q5VQ7SZQP4EHRCt.jpg"
              }
            ],
            "id": 287
          }

        fetchMock.getOnce(url, {
            body : dummyMoviesOfCast
        })

        const store = mockStore({ cast: { cast: {}, movies: []}})

        store.dispatch(actions.getMoviesOfCast(287)).then(()=>{
            expect(store.getActions()).toEqual([{
                type: action_constants.GET_MOVIES_OF_CAST_SUCCESS,
                payload: dummyMoviesOfCast
            }])
        })

    })


    it("Should return GET_MOVIES_OF_CAST_SUCCESS", ()=> {
        expect(actions.getMoviesOfCastSuccess("DUMMY CAST")).toEqual({
            type: action_constants.GET_MOVIES_OF_CAST_SUCCESS,
            payload: "DUMMY CAST"
        })
    })

    it("Should return GET_MOVIES_OF_CAST_FAILURE", ()=> {
        expect(actions.getMoviesOfCastFailure("error")).toEqual({
            type: action_constants.GET_MOVIES_OF_CAST_FAILURE,
            payload: "error"
        })
    })

    it("Should return CLEAR_CAST_AND_MOVIES_OF_CAST", () => {
        expect(actions.clearCastAndMoviesOfCast()).toEqual({
            type: action_constants.CLEAR_CAST_AND_MOVIES_OF_CAST
        })
    })


    
})


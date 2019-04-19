import React from 'react'
import { shallow } from 'enzyme'
import ISO6391 from 'iso-639-1'

import MovieCard from './MovieCard'


describe('Rendering .. ', () => {


    const dummyProps = {
        movie : {
            "vote_count": 545,
            "id": 512196,
            "video": false,
            "vote_average": 6.1,
            "title": "Happy Death Day 2U",
            "popularity": 83.495,
            "poster_path": "/4tdnePOkOOzwuGPEOAHp8UA4vqx.jpg",
            "original_language": "en",
            "original_title": "Happy Death Day 2U",
            "genre_ids": [
                27,
                9648,
                53,
                878,
                35
            ],
            "backdrop_path": "/dhNJHBDacrZjSPtwaiwp3idpzxU.jpg",
            "adult": false,
            "overview": "Collegian Tree Gelbman wakes up in horror to learn that she's stuck in a parallel universe. Her boyfriend Carter is now with someone else, and her friends and fellow students seem to be completely different versions of themselves. When Tree discovers that Carter's roommate has been altering time, she finds herself once again the target of a masked killer. When the psychopath starts to go after her inner circle, Tree soon realizes that she must die over and over again to save everyone.",
            "release_date": "2019-02-13"
        }
    }

    let wrapper

    beforeEach(()=>{
        wrapper = shallow(<MovieCard {...dummyProps} />)
    })
    it("Should render movie poster image ", () => {
        expect(wrapper.find('.movie_card_poster')).toHaveLength(1)
    })
    it ("Should render movie name year and language", () => {
        expect(wrapper.find('.movie_card_title')).toHaveLength(1)
        expect(wrapper.find('.movie_card_title').text()).toEqual(dummyProps.movie.title)
        expect(wrapper.find('.movie_card_year')).toHaveLength(1)
        expect(wrapper.find('.movie_card_year').text()).toEqual(new Date(dummyProps.movie.release_date).getFullYear().toString())
        expect(wrapper.find('.movie_card_language')).toHaveLength(1)
        expect(wrapper.find('.movie_card_language').text()).toEqual(ISO6391.getName(dummyProps.movie.original_language))
    })
    it("Should render user score as percentage", ()=>{
        expect(wrapper.find('.movie_card_details_container').find('p').first().text()).toEqual(dummyProps.movie.vote_average*10+"%")
    })

})
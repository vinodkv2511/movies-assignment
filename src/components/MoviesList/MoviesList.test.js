import React from 'react'
import { shallow } from 'enzyme'

import MovieList from './MoviesList'
import MovieCard from '../MovieCard/MovieCard';

describe('Movie list..', () => {
    const dummyMovies = [
        {
            "vote_count": 164,
            "id": 456740,
            "video": false,
            "vote_average": 5.2,
            "title": "Hellboy",
            "popularity": 373.147,
            "poster_path": "/nUXCJMnAiwCpNPZuJH2n6h5hGtF.jpg",
            "original_language": "en",
            "original_title": "Hellboy",
            "genre_ids": [
                28,
                12,
                14
            ],
            "backdrop_path": "/5BkSkNtfrnTuKOtTaZhl8avn4wU.jpg",
            "adult": false,
            "overview": "Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
            "release_date": "2019-04-10"
        },
        {
            "vote_count": 1041,
            "id": 287947,
            "video": false,
            "vote_average": 7.3,
            "title": "Shazam!",
            "popularity": 325.111,
            "poster_path": "/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
            "original_language": "en",
            "original_title": "Shazam!",
            "genre_ids": [
                35,
                12,
                14
            ],
            "backdrop_path": "/bi4jh0Kt0uuZGsGJoUUfqmbrjQg.jpg",
            "adult": false,
            "overview": "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
            "release_date": "2019-03-23"
        },
        {
            "vote_count": 348,
            "id": 537915,
            "video": false,
            "vote_average": 6.5,
            "title": "After",
            "popularity": 299.895,
            "poster_path": "/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
            "original_language": "en",
            "original_title": "After",
            "genre_ids": [
                18,
                10749
            ],
            "backdrop_path": "/8lESY7UGpOsbL2caib9Qe4bOebF.jpg",
            "adult": false,
            "overview": "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship.",
            "release_date": "2019-04-11"
        },
        {
            "vote_count": 3921,
            "id": 299537,
            "video": false,
            "vote_average": 7.2,
            "title": "Captain Marvel",
            "popularity": 243.105,
            "poster_path": "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
            "original_language": "en",
            "original_title": "Captain Marvel",
            "genre_ids": [
                28,
                12,
                878
            ],
            "backdrop_path": "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
            "adult": false,
            "overview": "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
            "release_date": "2019-03-06"
        },
        {
            "vote_count": 11,
            "id": 495925,
            "video": false,
            "vote_average": 6.4,
            "title": "Doraemon the Movie: Nobita's Treasure Island",
            "popularity": 207.592,
            "poster_path": "/cmJ71gdZxCqkMUvGwWgSg3MK7pC.jpg",
            "original_language": "ja",
            "original_title": "Doraemon en la misteriosa isla del tesoro",
            "genre_ids": [
                16
            ],
            "backdrop_path": "/8OamoIWfC9zmhwhh1PPaBcDoQaH.jpg",
            "adult": false,
            "overview": "The story is based on Robert Louis Stevenson's Treasure Island novel.",
            "release_date": "2018-03-03"
        },
        {
            "vote_count": 1502,
            "id": 166428,
            "video": false,
            "vote_average": 7.6,
            "title": "How to Train Your Dragon: The Hidden World",
            "popularity": 204.182,
            "poster_path": "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
            "original_language": "en",
            "original_title": "How to Train Your Dragon: The Hidden World",
            "genre_ids": [
                16,
                10751,
                12
            ],
            "backdrop_path": "/h3KN24PrOheHVYs9ypuOIdFBEpX.jpg",
            "adult": false,
            "overview": "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
            "release_date": "2019-01-03"
        },
        {
            "vote_count": 2280,
            "id": 450465,
            "video": false,
            "vote_average": 6.5,
            "title": "Glass",
            "popularity": 185.46,
            "poster_path": "/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
            "original_language": "en",
            "original_title": "Glass",
            "genre_ids": [
                53,
                9648,
                18,
                14,
                878
            ],
            "backdrop_path": "/lvjscO8wmpEbIfOEZi92Je8Ktlg.jpg",
            "adult": false,
            "overview": "In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",
            "release_date": "2019-01-16"
        },
        {
            "vote_count": 0,
            "id": 299534,
            "video": false,
            "vote_average": 0,
            "title": "Avengers: Endgame",
            "popularity": 168.315,
            "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
            "original_language": "en",
            "original_title": "Avengers: Endgame",
            "genre_ids": [
                12,
                878,
                28
            ],
            "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
            "adult": false,
            "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
            "release_date": "2019-04-24"
        },
        {
            "vote_count": 12704,
            "id": 299536,
            "video": false,
            "vote_average": 8.3,
            "title": "Avengers: Infinity War",
            "popularity": 140.069,
            "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            "original_language": "en",
            "original_title": "Avengers: Infinity War",
            "genre_ids": [
                12,
                28,
                14
            ],
            "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
            "adult": false,
            "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
            "release_date": "2018-04-25"
        },
        {
            "vote_count": 841,
            "id": 522681,
            "video": false,
            "vote_average": 6.3,
            "title": "Escape Room",
            "popularity": 125.242,
            "poster_path": "/8yZAx7tlKRZIg7pJfaPhl00yHIQ.jpg",
            "original_language": "en",
            "original_title": "Escape Room",
            "genre_ids": [
                53
            ],
            "backdrop_path": "/mWLljCmpqlcYQh7uh51BBMwCZwN.jpg",
            "adult": false,
            "overview": "Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.",
            "release_date": "2019-01-03"
        },
        {
            "vote_count": 883,
            "id": 329996,
            "video": false,
            "vote_average": 6.7,
            "title": "Dumbo",
            "popularity": 118.361,
            "poster_path": "/279PwJAcelI4VuBtdzrZASqDPQr.jpg",
            "original_language": "en",
            "original_title": "Dumbo",
            "genre_ids": [
                12,
                10751,
                14
            ],
            "backdrop_path": "/5tFt6iuGnKapHl5tw0X0cKcnuVo.jpg",
            "adult": false,
            "overview": "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.",
            "release_date": "2019-03-27"
        },
        {
            "vote_count": 1083,
            "id": 458723,
            "video": false,
            "vote_average": 7.2,
            "title": "Us",
            "popularity": 114.238,
            "poster_path": "/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
            "original_language": "en",
            "original_title": "Us",
            "genre_ids": [
                53,
                27
            ],
            "backdrop_path": "/jNUCddkM1fjYcFIcEwFjc7s2H4V.jpg",
            "adult": false,
            "overview": "Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.",
            "release_date": "2019-03-14"
        },
        {
            "vote_count": 8,
            "id": 543103,
            "video": false,
            "vote_average": 4.8,
            "title": "Kamen Rider Heisei Generations FOREVER",
            "popularity": 106.49,
            "poster_path": "/6sOFQDlkY6El1B2P5gklzJfVdsT.jpg",
            "original_language": "ja",
            "original_title": "仮面ライダー平成ジェネレーションズFOREVER",
            "genre_ids": [
                28,
                12,
                878
            ],
            "backdrop_path": "/uufTqD2CSn1NqL3cXEl4Vp3bCav.jpg",
            "adult": false,
            "overview": "In the world of Sougo Tokiwa and Sento Kiryu, their \"companions\" are losing their memories one after the other as they're replaced by other people. The Super Time Jacker, Tid , appears before them. He orders his powerful underlings, Another Double and Another Den-O, to pursue a young boy called Shingo. While fighting to protect Shingo, Sougo meets Ataru, a young man who loves Riders, but Ataru says that Kamen Riders aren't real. What is the meaning of those words? While the mystery deepens, the true enemy that Sougo and Sento must defeat appears in the Kuriogatake mountain...",
            "release_date": "2018-12-22"
        },
        {
            "vote_count": 22,
            "id": 485811,
            "video": false,
            "vote_average": 4.2,
            "title": "Redcon-1",
            "popularity": 106.404,
            "poster_path": "/jOYUbe61DQiY628inVkR1KERS30.jpg",
            "original_language": "en",
            "original_title": "Redcon-1",
            "genre_ids": [
                28,
                27
            ],
            "backdrop_path": "/palbhPOSYf2g1p18vWd91dDhZLM.jpg",
            "adult": false,
            "overview": "After a zombie apocalypse spreads from a London prison, the UK is brought to its knees. The spread of the virus is temporarily contained but, without a cure, it’s only a matter of time before it breaks its boundaries and the biggest problem of all… any zombies with combat skills are now enhanced. With the South East of England quarantined from the rest of the world using fortified borders, intelligence finds that the scientist responsible for the outbreak is alive and well in London. With his recovery being the only hope of a cure, a squad of eight Special Forces soldiers is sent on a suicide mission to the city, now ruled by the undead, with a single task: get him out alive within 72 hours by any means necessary. What emerges is an unlikely pairing on a course to save humanity against ever-rising odds.",
            "release_date": "2018-09-28"
        },
        {
            "vote_count": 11610,
            "id": 284054,
            "video": false,
            "vote_average": 7.4,
            "title": "Black Panther",
            "popularity": 104.434,
            "poster_path": "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
            "original_language": "en",
            "original_title": "Black Panther",
            "genre_ids": [
                28,
                12,
                14,
                878
            ],
            "backdrop_path": "/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg",
            "adult": false,
            "overview": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
            "release_date": "2018-02-13"
        },
        {
            "vote_count": 53,
            "id": 411728,
            "video": false,
            "vote_average": 7.4,
            "title": "The Professor and the Madman",
            "popularity": 103.657,
            "poster_path": "/yBaf5WjUqTQbc6mzPQBUcBiauDI.jpg",
            "original_language": "en",
            "original_title": "The Professor and the Madman",
            "genre_ids": [
                18,
                36,
                9648
            ],
            "backdrop_path": "/5Zjh2jPZyN0tuXmKXKuLEWy0k2S.jpg",
            "adult": false,
            "overview": "Professor James Murray begins work compiling words for the first edition of the Oxford English Dictionary in the mid 19th century and receives over 10,000 entries from a patient at Broadmoor Criminal Lunatic Asylum , Dr William Minor.",
            "release_date": "2019-03-07"
        },
        {
            "vote_count": 3309,
            "id": 324857,
            "video": false,
            "vote_average": 8.4,
            "title": "Spider-Man: Into the Spider-Verse",
            "popularity": 102.022,
            "poster_path": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
            "original_language": "en",
            "original_title": "Spider-Man: Into the Spider-Verse",
            "genre_ids": [
                28,
                12,
                16,
                878,
                35
            ],
            "backdrop_path": "/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg",
            "adult": false,
            "overview": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
            "release_date": "2018-12-07"
        },
        {
            "vote_count": 1967,
            "id": 424783,
            "video": false,
            "vote_average": 6.4,
            "title": "Bumblebee",
            "popularity": 97.621,
            "poster_path": "/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",
            "original_language": "en",
            "original_title": "Bumblebee",
            "genre_ids": [
                28,
                12,
                878
            ],
            "backdrop_path": "/wtZj5nn6hVwgakPdg6y6gm3eFXU.jpg",
            "adult": false,
            "overview": "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.",
            "release_date": "2018-12-15"
        },
        {
            "vote_count": 291,
            "id": 464504,
            "video": false,
            "vote_average": 5.5,
            "title": "A Madea Family Funeral",
            "popularity": 94.793,
            "poster_path": "/sFvOTUlZrIxCLdmz1fC16wK0lme.jpg",
            "original_language": "en",
            "original_title": "A Madea Family Funeral",
            "genre_ids": [
                35
            ],
            "backdrop_path": "/piGjUloiaq6qTpaDLisyDyEsx9i.jpg",
            "adult": false,
            "overview": "A joyous family reunion becomes a hilarious nightmare as Madea and the crew travel to backwoods Georgia, where they find themselves unexpectedly planning a funeral that might unveil unpleasant family secrets.",
            "release_date": "2019-03-01"
        },
        {
            "vote_count": 11905,
            "id": 283995,
            "video": false,
            "vote_average": 7.7,
            "title": "Guardians of the Galaxy Vol. 2",
            "popularity": 89.655,
            "poster_path": "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
            "original_language": "en",
            "original_title": "Guardians of the Galaxy Vol. 2",
            "genre_ids": [
                28,
                12,
                35,
                878
            ],
            "backdrop_path": "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
            "adult": false,
            "overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
            "release_date": "2017-04-19"
        }
    ]


    let wrapper
    beforeEach(()=>{
        wrapper = shallow(<MovieList movies={dummyMovies}/>)
    })

    it("Should create movie card objects for all movies", ()=>{
        expect(wrapper.find(MovieCard)).toHaveLength(dummyMovies.length)
    })



})
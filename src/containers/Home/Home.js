import React, { Component } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import Button from '../../components/Button/Button';
import constants from '../../constants';
import { connect } from 'react-redux';
import { changeTab } from '../../actions/homeActions'
import './Home.css'

const dummyMovies = [
    {
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
    },
    {
        "vote_count": 41,
        "id": 390634,
        "video": false,
        "vote_average": 4.9,
        "title": "Fate/stay night: Heaven’s Feel II. lost butterfly",
        "popularity": 82.177,
        "poster_path": "/4tS0iyKQBDFqVpVcH21MSJwXZdq.jpg",
        "original_language": "ja",
        "original_title": "劇場版「Fate/stay night [Heaven's Feel] ⅠⅠ. lost butterfly」",
        "genre_ids": [
            16,
            28,
            14,
            12
        ],
        "backdrop_path": "/2zKusjJZd8b2Cdk2C5K9dGFNWiJ.jpg",
        "adult": false,
        "overview": "Theatrical-release adaptation of the visual novel \"Fate/stay night\", following the third and final route. (Part 2 of a trilogy.)",
        "release_date": "2019-01-12"
    },
    {
        "vote_count": 310,
        "id": 500682,
        "video": false,
        "vote_average": 6.8,
        "title": "The Highwaymen",
        "popularity": 81.897,
        "poster_path": "/4bRYg4l12yDuJvAfqvUOPnBrxno.jpg",
        "original_language": "en",
        "original_title": "The Highwaymen",
        "genre_ids": [
            80,
            18,
            53
        ],
        "backdrop_path": "/pZ78ksjPlXf3q2EeONN8WdHE03Y.jpg",
        "adult": false,
        "overview": "In 1934, Frank Hamer and Manny Gault, two former Texas Rangers, are commissioned to put an end to the wave of vicious crimes perpetrated by Bonnie Parker and Clyde Barrow, a notorious duo of infamous robbers and cold-blooded killers who nevertheless are worshiped by the public.",
        "release_date": "2019-03-15"
    },
    {
        "vote_count": 98,
        "id": 454294,
        "video": false,
        "vote_average": 5.9,
        "title": "The Kid Who Would Be King",
        "popularity": 81.034,
        "poster_path": "/kBuvLX6zynQP0sjyqbXV4jNaZ4E.jpg",
        "original_language": "en",
        "original_title": "The Kid Who Would Be King",
        "genre_ids": [
            28,
            12,
            14,
            10751
        ],
        "backdrop_path": "/jmbgxBd86MshzQQvv5laKvOKoMm.jpg",
        "adult": false,
        "overview": "Old-school magic meets the modern world when young Alex stumbles upon the mythical sword Excalibur. He soon unites his friends and enemies, and they become knights who join forces with the legendary wizard Merlin. Together, they must save mankind from the wicked enchantress Morgana and her army of supernatural warriors.",
        "release_date": "2019-01-16"
    },
    {
        "vote_count": 8,
        "id": 543103,
        "video": false,
        "vote_average": 4.8,
        "title": "Kamen Rider Heisei Generations FOREVER",
        "popularity": 73.984,
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
        "vote_count": 2187,
        "id": 404368,
        "video": false,
        "vote_average": 7.2,
        "title": "Ralph Breaks the Internet",
        "popularity": 71.776,
        "poster_path": "/lvfIaThG5HA8THf76nghKinjjji.jpg",
        "original_language": "en",
        "original_title": "Ralph Breaks the Internet",
        "genre_ids": [
            10751,
            16,
            35,
            14
        ],
        "backdrop_path": "/88poTBTafMXaz73vYi3c74g0y2k.jpg",
        "adult": false,
        "overview": "Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope's video game, \"Sugar Rush.\" In way over their heads, Ralph and Vanellope rely on the citizens of the internet -- the netizens -- to help navigate their way, including an entrepreneur named Yesss, who is the head algorithm and the heart and soul of trend-making site BuzzzTube.",
        "release_date": "2018-11-23"
    },
    {
        "vote_count": 4323,
        "id": 338952,
        "video": false,
        "vote_average": 6.9,
        "title": "Fantastic Beasts: The Crimes of Grindelwald",
        "popularity": 70.024,
        "poster_path": "/fMMrl8fD9gRCFJvsx0SuFwkEOop.jpg",
        "original_language": "en",
        "original_title": "Fantastic Beasts: The Crimes of Grindelwald",
        "genre_ids": [
            10751,
            14,
            12
        ],
        "backdrop_path": "/wDN3FIcQQ1HI7mz1OOKYHSQtaiE.jpg",
        "adult": false,
        "overview": "Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",
        "release_date": "2018-11-16"
    },
    {
        "vote_count": 1830,
        "id": 399579,
        "video": false,
        "vote_average": 6.6,
        "title": "Alita: Battle Angel",
        "popularity": 69.716,
        "poster_path": "/xRWht48C2V8XNfzvPehyClOvDni.jpg",
        "original_language": "en",
        "original_title": "Alita: Battle Angel",
        "genre_ids": [
            28,
            878,
            53,
            12
        ],
        "backdrop_path": "/aQXTw3wIWuFMy0beXRiZ1xVKtcf.jpg",
        "adult": false,
        "overview": "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
        "release_date": "2019-02-08"
    },
    {
        "vote_count": 119,
        "id": 450001,
        "video": false,
        "vote_average": 5.1,
        "title": "Master Z: Ip Man Legacy",
        "popularity": 68.097,
        "poster_path": "/nkCoAik5I4j3Gkd2upj9xv4F0QN.jpg",
        "original_language": "cn",
        "original_title": "葉問外傳：張天志",
        "genre_ids": [
            28
        ],
        "backdrop_path": "/grtVFGJ4ts0nDAPpc1JWbBoVKTu.jpg",
        "adult": false,
        "overview": "After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going about his business, he gets into a fight with a foreigner by the name of Davidson, who is a big boss behind the bar district. Tin Chi fights hard with Wing Chun and earns respect.",
        "release_date": "2018-12-20"
    },
    {
        "vote_count": 1188,
        "id": 504172,
        "video": false,
        "vote_average": 6.4,
        "title": "The Mule",
        "popularity": 67.937,
        "poster_path": "/oeZh7yEz3PMnZLgBPhrafFHRbVz.jpg",
        "original_language": "en",
        "original_title": "The Mule",
        "genre_ids": [
            80,
            18,
            53
        ],
        "backdrop_path": "/bTeRgkAavyw1eCtSkaww18wLYNP.jpg",
        "adult": false,
        "overview": "Earl Stone, a man in his 80s who is broke, alone, and facing foreclosure of his business when he is offered a job that simply requires him to drive. Easy enough, but, unbeknownst to Earl, he’s just signed on as a drug courier for a Mexican cartel. He does so well that his cargo increases exponentially, and Earl hit the radar of hard-charging DEA agent Colin Bates.",
        "release_date": "2018-12-14"
    },
    {
        "vote_count": 274,
        "id": 527729,
        "video": false,
        "vote_average": 7,
        "title": "Asterix: The Secret of the Magic Potion",
        "popularity": 67.284,
        "poster_path": "/wmMq5ypRNJbWpdhC9aPjpdx1MMp.jpg",
        "original_language": "fr",
        "original_title": "Astérix - Le Secret de la Potion Magique",
        "genre_ids": [
            16,
            10751,
            35,
            12
        ],
        "backdrop_path": "/9cPMIuB2tv4IP0LbeNhrK5OyDy5.jpg",
        "adult": false,
        "overview": "Following a fall during mistletoe picking, Druid Getafix decides that it is time to secure the future of the village. Accompanied by Asterix and Obelix, he undertakes to travel the Gallic world in search of a talented young druid to transmit the Secret of the Magic Potion.",
        "release_date": "2018-12-05"
    },
    {
        "vote_count": 17220,
        "id": 118340,
        "video": false,
        "vote_average": 7.9,
        "title": "Guardians of the Galaxy",
        "popularity": 64.021,
        "poster_path": "/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
        "original_language": "en",
        "original_title": "Guardians of the Galaxy",
        "genre_ids": [
            28,
            878,
            12
        ],
        "backdrop_path": "/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
        "adult": false,
        "overview": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
        "release_date": "2014-08-08"
    },
    {
        "vote_count": 41,
        "id": 411728,
        "video": false,
        "vote_average": 8,
        "title": "The Professor and the Madman",
        "popularity": 63.672,
        "poster_path": "/yBaf5WjUqTQbc6mzPQBUcBiauDI.jpg",
        "original_language": "en",
        "original_title": "The Professor and the Madman",
        "genre_ids": [
            18,
            36
        ],
        "backdrop_path": "/5Zjh2jPZyN0tuXmKXKuLEWy0k2S.jpg",
        "adult": false,
        "overview": "Professor James Murray begins work compiling words for the first edition of the Oxford English Dictionary in the mid 19th century and receives over 10,000 entries from a patient at Broadmoor Criminal Lunatic Asylum , Dr William Minor.",
        "release_date": "2019-03-07"
    },
    {
        "vote_count": 333,
        "id": 527641,
        "video": false,
        "vote_average": 8.2,
        "title": "Five Feet Apart",
        "popularity": 63.478,
        "poster_path": "/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg",
        "original_language": "en",
        "original_title": "Five Feet Apart",
        "genre_ids": [
            10749,
            18
        ],
        "backdrop_path": "/d7wa3VpUpKDQ7GG9EMw8zSJCFoI.jpg",
        "adult": false,
        "overview": "Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control -- all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness.",
        "release_date": "2019-03-15"
    },
    {
        "vote_count": 15,
        "id": 576071,
        "video": false,
        "vote_average": 6.4,
        "title": "Unplanned",
        "popularity": 63.085,
        "poster_path": "/hQvf3RHgmp4XXXl2y6zhMe4G4kg.jpg",
        "original_language": "en",
        "original_title": "Unplanned",
        "genre_ids": [
            18
        ],
        "backdrop_path": "/tgjwS3oh53biNsNuzRKUjUVdXAE.jpg",
        "adult": false,
        "overview": "As one of the youngest Planned Parenthood clinic directors in the nation, Abby Johnson was involved in upwards of 22,000 abortions and counseled countless women on their reproductive choices. Her passion surrounding a woman's right to choose led her to become a spokesperson for Planned Parenthood, fighting to enact legislation for the cause she so deeply believed in. Until the day she saw something that changed everything.",
        "release_date": "2019-03-21"
    },
    {
        "vote_count": 11833,
        "id": 283995,
        "video": false,
        "vote_average": 7.7,
        "title": "Guardians of the Galaxy Vol. 2",
        "popularity": 63.064,
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
        "release_date": "2017-05-05"
    },
    {
        "vote_count": 265,
        "id": 464504,
        "video": false,
        "vote_average": 5.5,
        "title": "A Madea Family Funeral",
        "popularity": 62.34,
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
        "vote_count": 1391,
        "id": 428078,
        "video": false,
        "vote_average": 6,
        "title": "Mortal Engines",
        "popularity": 61.678,
        "poster_path": "/uXJVpPXxZO4L8Rz3IG1Y8XvZJcg.jpg",
        "original_language": "en",
        "original_title": "Mortal Engines",
        "genre_ids": [
            878,
            28,
            12,
            14,
            53
        ],
        "backdrop_path": "/jnOuttTfG9KKpmOZtprC4pA1AlZ.jpg",
        "adult": false,
        "overview": "Many thousands of years in the future, Earth’s cities roam the globe on huge wheels, devouring each other in a struggle for ever diminishing resources. On one of these massive traction cities, the old London, Tom Natsworthy has an unexpected encounter with a mysterious young woman from the wastelands who will change the course of his life forever.",
        "release_date": "2018-11-27"
    },
    {
        "vote_count": 0,
        "id": 460539,
        "video": false,
        "vote_average": 0,
        "title": "Kuppathu Raja",
        "popularity": 61.523,
        "poster_path": "/wzLde7keWQqWA0CJYVz0X5RVKjd.jpg",
        "original_language": "ta",
        "original_title": "குப்பத்து ராஜா",
        "genre_ids": [
            28,
            35,
            18
        ],
        "backdrop_path": null,
        "adult": false,
        "overview": "Kuppathu Raja is an upcoming Tamil comedy drama film directed by Baba Bhaskar. The film features G. V. Prakash Kumar and Parthiban in the lead roles.",
        "release_date": "2019-04-05"
    },
    {
        "vote_count": 18741,
        "id": 24428,
        "video": false,
        "vote_average": 7.6,
        "title": "The Avengers",
        "popularity": 59.954,
        "poster_path": "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
        "original_language": "en",
        "original_title": "The Avengers",
        "genre_ids": [
            878,
            28,
            12
        ],
        "backdrop_path": "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
        "adult": false,
        "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
        "release_date": "2012-04-27"
    }
]


class Home extends Component {
    render() {
        return (
            <div>
                <div className="content-header">
                    <div className="content-header-inner-container">
                        <h3>Browse</h3>
                        <Button text="Popular" onClick={() => { this.props.setActiveTab(constants.tabs.POPULAR) }} isActive={constants.tabs.POPULAR == this.props.activeTab} />
                        <Button text="Trending" onClick={() => { this.props.setActiveTab(constants.tabs.TRENDING) }} isActive={constants.tabs.TRENDING == this.props.activeTab} />
                        {console.log(this.props)}
                    </div>
                </div>
                <div className="content-container">
                    <MoviesList movies={dummyMovies} />
                </div>
                

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeTab : state.home.activeTab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveTab: (tabName) => {
            dispatch(changeTab(tabName))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
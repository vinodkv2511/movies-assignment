import React from 'react'
import PropTypes from 'prop-types'
import ISO6391 from 'iso-639-1'
import CircularProgress from 'react-circular-progressbar'

import './MovieCard.css'

const MovieCard = (props) => {
    return (
        <div className="movie_card">
            <img className="movie_card_poster" src={"https://image.tmdb.org/t/p/w500" + props.movie['poster_path']} />
            <div className="movie_card_details_container">
                <CircularProgress className='movie_card_user_score' percentage={50} text={50} />
                <div className="movie_card_details_text_container">
                    <p className="movie_card_title">{props.movie['title']}</p>
                    <div>
                        <p className="movie_card_year">{new Date(props.movie['release_date']).getFullYear()}</p>
                        <p className="movie_card_language">{ISO6391.getName(props.movie['original_language'])}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
}

export default MovieCard;
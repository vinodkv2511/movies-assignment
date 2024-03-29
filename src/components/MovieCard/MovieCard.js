import React from 'react'
import PropTypes from 'prop-types'
import ISO6391 from 'iso-639-1'
import constants, { url_constants } from '../../constants'

import './MovieCard.css'
import PercentageIndicator from '../PercentageIndicator/PecentageIndicator'

const MovieCard = (props) => {
    return (
        <div className="movie_card">
            <img alt={props.movie.title} className="movie_card_poster" src={url_constants.IMAGE_BASE + constants.posterSizes.MEDIUM + props.movie['poster_path']} />
            <div className="movie_card_details_container">
                <PercentageIndicator percentage={(props.movie.vote_average*10)} />
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
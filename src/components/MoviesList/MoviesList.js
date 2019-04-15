import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css'

const MoviesList = (props) => {
    let movieCards = []
    props.movies.forEach(movie => {
        movieCards.push(<MovieCard movie={movie} key={movie.id}/>)
    })
    return (
        <div className="movies-list-container">
            {movieCards}
        </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
};

MoviesList.defaultProps = {
    movies : []
}

export default MoviesList;
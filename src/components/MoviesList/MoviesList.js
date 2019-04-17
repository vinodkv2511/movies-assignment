import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css'

const MoviesList = (props) => {
    let movieCards = []
    props.movies.forEach(movie => {
        movieCards.push(<Link to={"/movie/"+movie.id}><MovieCard movie={movie} key={movie.id}/> </Link>)
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
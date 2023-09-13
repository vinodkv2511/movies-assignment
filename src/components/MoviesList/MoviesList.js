
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css'

const MoviesList = (props) => {
    let movieCards = []
    props.movies.forEach(movie => {
        movieCards.push(<Link to={"/movie/"+movie.id} key={movie.id}><MovieCard movie={movie} /> </Link>)
    })

    return (
        <div className="movies-list-container">
            {movieCards.length ? movieCards : 'No items to show.'}
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
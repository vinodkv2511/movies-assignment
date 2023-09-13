import {  useEffect } from 'react';
import { connect } from 'react-redux';
import ISOLang from 'iso-639-1';

import { getMovie, getCast, clearMovieAndCast } from '../../actions/movieActions'
import './MovieDetails.css'
import SmallCard from '../../components/SmallCard/SmallCard';
import constants, { url_constants } from '../../constants'
import { useNavigate, useParams } from 'react-router-dom';


const  MovieDetails = (props) => {

    const {movie_id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        props.getMovieDetails(movie_id)
        props.getMovieCast(movie_id)

        return () => {
            props.clearMovieDetails()
        }
    }, [movie_id])



    const getGenreText = () => {
        let genres = ""
        for (let index in props.movie.genres) {
            genres = genres.concat(props.movie.genres[index].name)
            if (index < props.movie.genres.length - 1) {
                genres = genres.concat(", ")
            }
        }

        return genres
    }

    const getCastCards = () => {
        let actors = props.cast;
        let actorCards = []
        actors.forEach(actor => {
            actorCards.push(
                <SmallCard key={actor.id + actor.character} linkTo={"/cast/" + actor.id} posterPath={actor.profile_path} mainText={actor.name} subText={actor.character} />
            )

        });

        return actorCards;
    }

    if(!props.movie?.title) {
        return 'loading...';
    }

    return (
        <div>
            <div className="movie-details-back-button" onClick={() => navigate(-1)} ><i className="fas fa-arrow-left"></i> Back</div>
            <div className="movie-details-container">
                <img className="main-movie-details-backdrop" alt="poster" src={url_constants.IMAGE_BASE + constants.backdropSizes.LARGE + props.movie['backdrop_path']} />
                <div className="main-movie-details-container">
                    <img className="main-movie-details-poster" alt="poster" src={url_constants.IMAGE_BASE + constants.posterSizes.MEDIUM + props.movie['poster_path']} />
                    <div className="movie-details-side-container">
                        <h1 className="movie-details-title">{props.movie.title}</h1>
                        <div className="movie-details-year-runtime">
                            <p><span className="movie-details-sub-head">Year: </span>{new Date(props.movie.release_date).getFullYear()}</p>
                            <p><span className="movie-details-sub-head">Runtime: </span>{props.movie.runtime} <span> minutes</span></p>
                        </div>
                        <p><span className="movie-details-sub-head">Language: </span>{ISOLang.getName(props.movie.original_language)}</p>
                        <p><span className="movie-details-sub-head">User Score: </span>{props.movie.vote_average * 10 + "%"}</p>
                        <p>
                            <span className="movie-details-sub-head">Genres: </span>
                            {getGenreText()}
                        </p>
                        <p>
                            <span className="movie-details-sub-head">Overview: </span>
                            {props.movie.overview}
                        </p>

                    </div>
                </div>
                <h2 className="movie-details-side-header">Cast</h2>
                <div className="movie-details-cast-container">
                    {getCastCards()}
                </div>

            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        movie: state.movie.movie,
        cast: state.movie.cast
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: (movie_id) => {
            dispatch(getMovie(movie_id))
        },
        getMovieCast: (movie_id) => {
            dispatch(getCast(movie_id))
        },
        clearMovieDetails: () => {
            dispatch(clearMovieAndCast())
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
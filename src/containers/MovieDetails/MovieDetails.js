import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ISOLang from 'iso-639-1';

import { getMovie, getCast, clearMovieAndCast } from '../../actions/movieActions'
import './MovieDetails.css'


class MovieDetails extends Component {

    componentDidMount() {
        this.props.getMovieDetails(this.props.match.params.movie_id)
        this.props.getMovieCast(this.props.match.params.movie_id)
    }


    getGenreText = () => {
        let genres = ""
        for (let index in this.props.movie.genres) {
            genres = genres.concat(this.props.movie.genres[index].name)
            if (index < this.props.movie.genres.length - 1) {
                genres = genres.concat(", ")
            }
        }

        return genres
    }

    getCastCards = () => {
        let actors = this.props.cast;
        let actorCards = []
        actors.forEach(actor => {
            actorCards.push(
                <div className="movie-details-cast-card" key={actor.id}>
                    <div className="movie-details-image-container">
                        <img src={"https://image.tmdb.org/t/p/w500" + actor['profile_path']} />
                    </div>
                    
                    <p className="cast-card-name">{actor.name}</p>
                    <p className="cast-card-character-name" >{actor.character}</p>
                </div>
            )

        });

        return actorCards;
    }


    render() {
        if (this.props.movie.title) {
            return ([

                <div className="movie-details-back-button"><Link to="/home"><i class="fas fa-arrow-left"></i> Back</Link></div>,
                <div className="movie-details-container">
                    <img className="main-movie-details-backdrop" alt="poster" src={"https://image.tmdb.org/t/p/w500" + this.props.movie['backdrop_path']} />
                    <div className="main-movie-details-container">
                        <img className="main-movie-details-poster" alt="poster" src={"https://image.tmdb.org/t/p/w500" + this.props.movie['poster_path']} />
                        <div className="movie-details-side-container">
                            <h1 className="movie-details-title">{this.props.movie.title}</h1>
                            <div className="movie-details-year-runtime">
                                <p><span className="movie-details-sub-head">Year: </span>{new Date(this.props.movie.release_date).getFullYear()}</p>
                                <p><span className="movie-details-sub-head">Runtime: </span>{this.props.movie.runtime} <span> minutes</span></p>
                            </div>
                            <p><span className="movie-details-sub-head">Language: </span>{ISOLang.getName(this.props.movie.original_language)}</p>
                            <p><span className="movie-details-sub-head">User Score: </span>{this.props.movie.vote_average*10+"%"}</p>
                            <p>
                                <span className="movie-details-sub-head">Genres: </span>
                                {this.getGenreText()}
                            </p>
                            <p>
                                <span className="movie-details-sub-head">Overview: </span>
                                {this.props.movie.overview}
                            </p>

                        </div>
                    </div>
                    <h2 className="movie-details-side-header">Cast</h2>
                    <div className="movie-details-cast-container">
                        {this.getCastCards()}
                    </div>

                </div>
            ]);
        }
        else {
            return ""
        }

    }

    componentWillUnmount(){
        this.props.clearMovieDetails()
    }
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
        clearMovieDetails:() => {
            dispatch(clearMovieAndCast())
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
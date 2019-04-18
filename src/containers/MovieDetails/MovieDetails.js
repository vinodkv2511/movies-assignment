import React, { Component } from 'react';
import { connect } from 'react-redux';
import ISOLang from 'iso-639-1';

import { getMovie, getCast, clearMovieAndCast } from '../../actions/movieActions'
import './MovieDetails.css'
import SmallCard from '../../components/SmallCard/SmallCard';
import constants, { url_constants } from '../../constants'


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
                <SmallCard key={actor.id + actor.character} linkTo={"/cast/" + actor.id} posterPath={actor.profile_path} mainText={actor.name} subText={actor.character} />
            )

        });

        return actorCards;
    }


    render() {
        window.scrollTo(0, 0)
        if (this.props.movie.title) {
            return (
                <div>
                    <div className="movie-details-back-button" onClick={() => this.props.history.goBack()} ><i className="fas fa-arrow-left"></i> Back</div>
                    <div className="movie-details-container">
                        <img className="main-movie-details-backdrop" alt="poster" src={url_constants.IMAGE_BASE + constants.backdropSizes.LARGE + this.props.movie['backdrop_path']} />
                        <div className="main-movie-details-container">
                            <img className="main-movie-details-poster" alt="poster" src={url_constants.IMAGE_BASE + constants.posterSizes.MEDIUM + this.props.movie['poster_path']} />
                            <div className="movie-details-side-container">
                                <h1 className="movie-details-title">{this.props.movie.title}</h1>
                                <div className="movie-details-year-runtime">
                                    <p><span className="movie-details-sub-head">Year: </span>{new Date(this.props.movie.release_date).getFullYear()}</p>
                                    <p><span className="movie-details-sub-head">Runtime: </span>{this.props.movie.runtime} <span> minutes</span></p>
                                </div>
                                <p><span className="movie-details-sub-head">Language: </span>{ISOLang.getName(this.props.movie.original_language)}</p>
                                <p><span className="movie-details-sub-head">User Score: </span>{this.props.movie.vote_average * 10 + "%"}</p>
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
                </div>
            );
        }
        else {
            return "loading..."
        }

    }

    componentWillUnmount() {
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
        clearMovieDetails: () => {
            dispatch(clearMovieAndCast())
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
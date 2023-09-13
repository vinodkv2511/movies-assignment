import { useEffect } from 'react';
import { connect } from 'react-redux';

import './CastDetails.css';
import { getCastDetails, getMoviesOfCast, clearCastAndMoviesOfCast } from '../../actions/castActions'
import SmallCard from '../../components/SmallCard/SmallCard';
import constants, { url_constants } from '../../constants'
import { useNavigate, useParams } from 'react-router-dom';

const CastDetails = (props) => {

    
    const {cast_id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        props.fetchCastDetails(cast_id)
        props.fetchMoviesOfCast(cast_id)
    }, [cast_id])


    const getMoviesOfCastCards = () => {
        let movies = props.movies
        let movieCards = []
        movies.forEach(movie => {
            movieCards.push(
                <SmallCard className="cast-details-movie-card" key={movie.id} linkTo={"/movie/"+movie.id} posterPath={movie.poster_path} mainText={movie.title} subText={movie.character} />
            )
            
        });

        return movieCards;
    }


    
    
        return (
            <div>
                <div className="cast-details-back-button" onClick={()=> navigate(-1)}><i className="fas fa-arrow-left"></i> Back</div>,
                <div className="cast-details-container">
                    <div className="main-cast-details-container">
                        <img className="main-cast-details-poster" alt="poster" src={ url_constants.IMAGE_BASE+ constants.profileSizes.MEDIUM + props.cast['profile_path']} />
                        <div className="cast-details-side-container">
                            <h1 className="cast-details-title">{props.cast.name}</h1>
                            <div className="cast-details-year-runtime">
                                <p><span className="cast-details-sub-head">Birthday: </span>{props.cast.birthday}</p>
                                <p><span className="cast-details-sub-head">Place of birth: </span>{props.cast.place_of_birth}</p>
                            </div>
                            <p><span className="cast-details-sub-head">popularity: </span>{props.cast.popularity}</p>
                            <p>
                                <span className="cast-details-sub-head">Bio: </span>
                                {props.cast.biography}
                            </p>

                        </div>
                    </div>
                    <h2 className="cast-details-side-header">Movies </h2>
                    <div className="cast-details-movies-container">
                        {getMoviesOfCastCards()}
                    </div>

                </div>
            </div>
        );
}



const mapStateToProps = (state) => {
    return {
        movies: state.cast.movies,
        cast: state.cast.cast
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCastDetails: (cast_id) => {
            dispatch(getCastDetails(cast_id))
        },
        fetchMoviesOfCast: (cast_id) => {
            dispatch(getMoviesOfCast(cast_id))
        },
        clearCastAndMovies:() => {
            dispatch(clearCastAndMoviesOfCast())
        }
    }

}

export default  connect(mapStateToProps, mapDispatchToProps)(CastDetails);
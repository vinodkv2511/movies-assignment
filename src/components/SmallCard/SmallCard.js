import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './SmallCard.css';

const SmallCard = (props) => {
    return (
        <Link to={props.linkTo}>
            <div className={"small-card-container"+" "+props.className}>
                <div className="small-card-image-container">
                    <img src={"https://image.tmdb.org/t/p/w500/" + props.posterPath} />
                </div>

                <p className="small-card-main-text">{props.mainText}</p>
                <p className="small-card-sub-text" >{props.subText}</p>
            </div>
        </Link>
    );
};

SmallCard.propTypes = {
    linkTo: PropTypes.string,
    posterPath: PropTypes.string,
    mainText: PropTypes.string,
    subText: PropTypes.string
}

export default SmallCard;
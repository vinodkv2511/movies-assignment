import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import constants, {url_constants} from '../../constants'

import './SmallCard.css';

const SmallCard = (props) => {
    return (
        <Link to={props.linkTo}>
            <div className={"small-card-container "+props.className}>
                <div className="small-card-image-container">
                    <img alt={props.mainText} src={url_constants.IMAGE_BASE+ constants.posterSizes.SMALL + props.posterPath} />
                </div>

                <p className="small-card-main-text">{props.mainText}</p>
                <p className="small-card-sub-text" title={props.subText}>{props.subText}</p>
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
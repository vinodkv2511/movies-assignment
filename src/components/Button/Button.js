
import PropTypes from 'prop-types'

import './Button.css'

const Button = (props) => {
    return (
        <div className={"tab_button".concat(props.isActive ? " button_active" : "")} onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}

Button.defaultProps = {
    isActive: false
}

export default Button;
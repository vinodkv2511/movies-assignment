import React, { useMemo } from 'react'
import PropTypes from 'prop-types';

import "./PercentageIndicator.css";

const PercentageIndicator = ({percentage}) => {
  
  const colorStyle = useMemo(()=>{
    let color;
    let trackColor;
    if(percentage < 40) {
      color = 'red';
      trackColor = '#ffd7d7'
    } else if (percentage < 70) {
      color = 'orange';
      trackColor = '#f5e3c0';
    } else {
      color = 'green';
      trackColor = '#c7e9c7';
    }

    return `conic-gradient(${color} ${percentage}%, ${trackColor} 0)`
  }, [percentage])

  return <div className={"percentage-indicator"} style={{background: colorStyle}}>
    <div className='pi-inner-circle'>
      <span>{percentage.toFixed(0)}</span>
    </div>
  </div>
}

PercentageIndicator.prototype = {
  percentage: PropTypes.number,
}
export default PercentageIndicator;
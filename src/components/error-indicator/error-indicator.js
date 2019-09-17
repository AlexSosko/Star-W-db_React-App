import React, { Component } from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error image" />
            <span className="boom">
                BOOM !
            </span>
            <span>
                somthing has gone terribly wrong
            </span>
            <span>
                (but we already send droids to fix ErrorIndicator )
            </span>

        </div>
       
    );
  };
  
  export default ErrorIndicator;
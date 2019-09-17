import React, { Component } from 'react';

import './error-button.css';


export default class ErrorButton extends Component {
    state = {
        renderError: false
    };

    render () {

        if (this.state.renderError) {
            this.foo.a = 0;

        }

        
        return (
            <button type="button" className="btn btn-danger"
                    onClick={() => this.setState({renderError: true })}>
                Throw Error ! 
            </button>

        );

    };


}
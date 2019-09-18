import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';

import './app.css';


export default class App extends Component {

    state = {
        showRandomPlanet: true,        
        hasError: false

    }

    onToggleRandomPlanet = () => {
        this.setState(
            {showRandomPlanet: !this.state.showRandomPlanet}
        );

    }    

    componentDidUpdate () {
        console.log(this.state.selectedPerson);
    }

    componentDidCatch () {
       this.setState({hasError: true})
    }

    render () {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <div>
                <Header />
                {planet}
                <button  type="button" className="btn-toggle btn btn-primary"
                        onClick={this.onToggleRandomPlanet}  >
                    Toggle Random Planet
                </button>
                <ErrorButton />
    
                <PeoplePage />

                <PeoplePage />

                <PeoplePage />
    
            </div>
    
        ); 
    }
}



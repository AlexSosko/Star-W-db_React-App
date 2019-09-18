import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner/spiner';
import ErrorIndicator from '../error-indicator/error-indicator';

import './random-planet.css';
export default class RandomPlanet extends Component {

  swapiService = new SwapiService()
  
  state = {
    planet: {},
    loading: true,
    error: false
  }

  constructor () {
    super();
    console.log('constructor ()');   
  }

  componentDidMount () {
    console.log('componentDidMount ()');

    this.updatePlanet();
    this.planetUpdatingInterval  = 
      setInterval(this.updatePlanet, 5000 );
  }

  componentWillMount() {
    console.log('componentWillMount()');
  }

  componentWillUnmount() {
    clearInterval(this.planetUpdatingInterval);
    console.log('componentWillUnmount()!!')
  }  

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  }

  updatePlanet = () => {
    console.log('update planet')
    const id = Math.floor(Math.random()*25 + 1);
    // const id = 1200;
    this.swapiService.getPlanet(id)
      .then( this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {

    console.log('render()');

    const {planet, loading, error} = this.state;  

    // if (loading) 
    //   return (
    //     <div className="random-planet jumbotron rounded">
    //       <Spiner />
    //     </div>
    //   );
    const hasData = !( loading || error );

    const errorMassege = error ? <ErrorIndicator /> : null;
    const spiner = loading ? <Spiner /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;


    return (
      <div className="random-planet jumbotron rounded">
        {errorMassege}
        {spiner}
        {content}
      </div>

    );
  }
}

const PlanetView = ({planet}) => {

  const {id, name, population, rotationPeriod,
    diameter} = planet; 

   return (
    <React.Fragment>
        <img className="planet-image"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name} (id - {id})</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>    
  );
}
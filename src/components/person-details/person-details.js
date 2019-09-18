import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner/spiner';
import ErrorButton from '../error-button';

import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService()

  state = {
    person: null
  }

  personUpdate () {
    const {personId} = this.props;

    if (!personId) {
      return;
    }
      
    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({ person: person });
      });    
  }

  componentDidMount() {
    this.personUpdate();
  }

  componentDidUpdate (prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.personUpdate();  
    };
    
  }

  render() {

    if (!this.state.person) {
      return (
        <div className="person-details card">
          select a person from the list
        </div>
      ) 
    }
    
    const isPersonLoading = (this.state.person.id != this.props.personId);
    if (isPersonLoading) {
      return (
        <div className="person-details card">
          <Spiner />
        </div>
      )      
    }

    const  {id, name, gender, birthYear, eyeColor} =
            this.state.person;    

    return (      
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
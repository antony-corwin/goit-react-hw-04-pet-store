import React, { Component } from 'react';
import petsData from '../bd/pets.json';
import PetsList from '../component/PetsList/PetsList';

export default class Pets extends Component {
  state = { pets: petsData };

  render() {
    const { pets } = this.state;

    return (
      <>
        <h1>Available Pets</h1>
        <PetsList items={pets} />
      </>
    );
  }
}

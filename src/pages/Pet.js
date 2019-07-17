import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PetProfile from '../component/PetProfile/PetProfile';
import pets from '../bd/pets.json';

const getIdFromProps = props => props.match.params.id;

const findById = (allPets, id) => allPets.find(pet => pet.id === id);

export default class Pet extends Component {
  state = { pet: null };

  static propTypes = {
    history: PropTypes.arrayOf.isRequired,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    const pet = findById(pets, id);
    this.setState({ pet });
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    return pet && <PetProfile {...pet} onBack={this.handleGoBack} />;
  }
}

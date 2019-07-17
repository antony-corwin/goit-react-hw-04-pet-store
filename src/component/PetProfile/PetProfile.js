import React from '../../../node_modules/react';
import PropTypes from '../../../node_modules/prop-types';
import styles from './PetProfile.module.css';

const PetProfile = ({
  name,
  image,
  age,
  gender,
  color,
  breed,
  description,
  onBack,
}) => (
  <>
    <button className={styles.button} type="button" onClick={onBack}>
      <i className="material-icons md-18">arrow_back</i>Return
    </button>
    <p className={styles.about}>All about {name}</p>
    <div className={styles.container}>
      <img src={image} alt="Pet" />
      <div className={styles.stats}>
        <p>
          <b>Age: </b>
          {age}
        </p>
        <p>
          <b>Gender: </b>
          {gender}
        </p>
        <p>
          <b>Color: </b>
          {color}
        </p>
        <p>
          <b>Breed: </b>
          {breed}
        </p>
      </div>
    </div>
    <p className={styles.description}>{description}</p>
  </>
);

PetProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default PetProfile;

import React from '../../../node_modules/react';
import { Link, withRouter } from '../../../node_modules/react-router-dom';
import PropTypes from '../../../node_modules/prop-types';
import styles from './PetsListItem.module.css';

const Pet = ({ id, name, image, match }) => (
  <Link className={styles.link} to={`${match.path}/${id}`}>
    <img className={styles.img} src={image} alt="pet" />
    <p>{name}</p>
  </Link>
);

Pet.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  match: PropTypes.objectOf.isRequired,
};

export default withRouter(Pet);

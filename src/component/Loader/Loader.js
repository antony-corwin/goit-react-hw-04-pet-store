import React from '../../../node_modules/react';
import Spinner from '../../../node_modules/react-spinkit/dist';
import styles from './Loader.module.css';

const MySpinner = () => (
  <Spinner
    className={styles.spinner}
    name="ball-spin-fade-loader"
    color="blue"
    fadeIn="none"
  />
);

export default MySpinner;

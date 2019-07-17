import React from '../../../node_modules/react';
import { NavLink } from '../../../node_modules/react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <ul className={styles.navList}>
    <li className={styles.navItem}>
      <NavLink
        className={styles.navLink}
        to="/"
        exact
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        className={styles.navLink}
        to="/pets"
        activeClassName={styles.activeLink}
      >
        Pets
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        className={styles.navLink}
        to="/about"
        activeClassName={styles.activeLink}
      >
        About
      </NavLink>
    </li>
  </ul>
);

export default Nav;

import React from "react";
import styles from "./linksstyle.module.css";
import {Link} from 'react-router-dom'

export default function HomePageNavigationButtons({ valueFromParent, link }) {
  return (
    <Link to={link} className={styles.linkWrapper}>
      <p className={styles.links}>{valueFromParent}</p>
    </Link>
  );
}

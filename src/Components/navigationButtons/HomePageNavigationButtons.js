import React from "react";
import styles from "./linksstyle.module.css";

export default function HomePageNavigationButtons({ valueFromParent }) {
  return (
    <a href='#' className={styles.linkWrapper}>
      <p className={styles.links}>{valueFromParent}</p>
    </a>
  );
}

import React from "react";
import styles from "./logo.module.css";
import logo from './logo.png'

export default function Logo(props) {
  return (
    <div className={styles.logoWrapper}>
      <img src={logo} style={{ height: props.height, width: props.width }} />
    </div>
  );
}

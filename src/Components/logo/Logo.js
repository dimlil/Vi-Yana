import React from "react";
import styles from "./logo.module.css";
import logo from './logo.png'

export default function Logo({size,position,marginTop}) {
  return (
    <div className={styles.logoWrapper}>
      <img src={logo}/>
    </div>
  );
}

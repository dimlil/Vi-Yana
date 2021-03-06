import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import styles from "./footer.module.css";

// const divStyle = {
//   color: "blue",

// };
export default function Footer() {
  return (
    <footer>
      <Link to="/">
        <Logo width='150px' height='150px' />
      </Link>
      <div>
        <ul className={styles.noTextDec}>
          <strong>Links:</strong>
          <Link to="/services">
            <li>Услуги</li>
          </Link>
          <Link to="/Why-is-early-intervention-important">
            <li>Защо ранната интервенция е важна?</li>
          </Link>
          <Link to="/posts">
            <li>Полезно</li>
          </Link>
          <Link to="/contacts">
            <li>Контакти</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}

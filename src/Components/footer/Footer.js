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
        <Logo size="50px" />
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
          <li>Link3</li>
          <li>Link3</li>
        </ul>
      </div>
    </footer>
  );
}

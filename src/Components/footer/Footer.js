import React from "react";
import Logo from "../logo/Logo";
import styles from "./footer.module.css";

// const divStyle = {
//   color: "blue",

// };
export default function Footer() {
  return (
    <footer>
      <Logo size="50px" />
      <div>
        <ul>
          <strong>Links:</strong>
          <li>Link1</li>
          <li>Link2</li>
          <li>Link3</li>
          <li>Link3</li>
          <li>Link3</li>
        </ul>
      </div>
    </footer>
  );
}

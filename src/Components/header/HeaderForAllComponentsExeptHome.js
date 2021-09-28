import React from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";

function HeaderForAllComponentsExeptHome() {
  return (
    <div className={styles.headerWrapper}>
      <Link to="/" style={{ "text-decoration": "none" }}>
        <Logo size="50px" position="left" marginTop="15px"/>
      </Link>
      <div className={styles.headerLinksWrapper}>
        <HomePageNavigationButtons
          valueFromParent={"Услуги"}
          link={"/services"}
        />
        <HomePageNavigationButtons
          valueFromParent={"Защо ранната интервенция е важна?"}
          link={"/Why-is-early-intervention-important"}
        />
        <HomePageNavigationButtons
          valueFromParent={"Полезно"}
          link={"/useful"}
        />
        <HomePageNavigationButtons
          valueFromParent={"Контакти"}
          link={"/contacts"}
        />
      </div>
    </div>
  );
}

export default HeaderForAllComponentsExeptHome;

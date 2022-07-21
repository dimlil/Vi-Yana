import React from "react";
import Logo from "../logo/Logo";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import HomePageNavigationButtons from "../navigationButtons/HomePageNavigationButtons";

function HeaderForHome() {
  return (
    <header className={styles.mainDiv}>
      <div className={styles.logoDiv}>
        {/* <p className={styles.viyana}>ВиЯна</p> */}
        <Logo size="100px" position="center" />
        <p className={styles.moto}>Център за ранно детско развитие</p>
        <div className={styles.linkswrapper}>
          <HomePageNavigationButtons
            valueFromParent={"Услуги"}
            link={"/services"}
            parentName={"home"}
          />
          <HomePageNavigationButtons
            valueFromParent={"Защо ранната интервенция е важна?"}
            link={"/Why-is-early-intervention-important"}
            parentName={"home"}
          />
          <HomePageNavigationButtons
            valueFromParent={"Полезно"}
            parentName={"home"}
            link={"/posts"}
          />
          <HomePageNavigationButtons
            valueFromParent={"Контакти"}
            parentName={"home"}
            link={"/contacts"}
          />
        </div>
      </div>
    </header>
  );
}

export default HeaderForHome;

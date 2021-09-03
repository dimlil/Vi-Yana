import React from "react";
import styles from "./Home.module.css";
import HomePageNavigationButtons from "../../Components/navigationButtons/HomePageNavigationButtons";
import Logo from "../../Components/logo/Logo";
import AboutUs from "../../Components/aboutUs/AboutUs";

export default function Home() {
  return (
    <div>
      <header className={styles.mainDiv}>
        <div className={styles.logoDiv}>
          {/* <p className={styles.viyana}>ВиЯна</p> */}
          <Logo size="100px" />
          <p className={styles.moto}>Детски терапевтичен и игрови център</p>
          <div className={styles.linkswrapper}>
            {/* <HomePageNavigationButtons valueFromParent={'Информация'} /> */}
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
      </header>
      <AboutUs />
    </div>
  );
}

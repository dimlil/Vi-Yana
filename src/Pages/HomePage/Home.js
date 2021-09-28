import React from "react";
import styles from "./Home.module.css";
import HomePageNavigationButtons from "../../Components/navigationButtons/HomePageNavigationButtons";
import Logo from "../../Components/logo/Logo";
import AboutUs from "../../Components/aboutUs/AboutUs";
import Header from "../../Components/header/Header";

export default function Home() {
  return (
    <div>
      <header className={styles.mainDiv}>
        <Header />
      </header>
      <AboutUs />
    </div>
  );
}

import React from "react";
import styles from "../../styles/box.module.css";

export default function AboutUs() {
  return (
    <div className={styles.mainDiv}>
      <p className={styles.outsideBoxText}>
        Добре дошли на страницата на Детски терапевтичен и игрови център ВиЯна!
        Ние сме Веси и Кати – логопед и ерготерапевт и специалисти ранно детско
        развитие, с богат опит с бебета и деца с и без затруднения. Работим
        приоритетно с деца от 0 до 5 години, които имат изоставане и нарушения в
        развитието или заболявания, възпрепятстващи оптималното функциониране на
        детето.
      </p>
      <div className={styles.textHolder}>
        <div className={styles.insideBoxText}>
          Под формата на игри, двигателни и сензорни занимания и различни
          дейности от познавателен характер ще помогнем на Вашето дете да развие
          пълния си потенциал.
        </div>
        <div className={styles.insideBoxText}>
          Вярваме че всяко дете заслужава, както щастливо и изпълнено с игри
          детство, така и възможност да развие пълния си потенциал.
        </div>
      </div>
    </div>
  );
}

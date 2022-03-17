import React from "react";
import styles from "./contactUs.module.css";
import locationPic from "./location-removebg-preview.png";
import telephonPic from "./telephone-removebg-preview.png";

function ContactUs() {
  return (
    <div className={styles.mainContactsWrapper}>
      <div className={styles.contactWrapper}>
        <img src={telephonPic} className={styles.pic} />
        <h3>080...</h3>
      </div>
      <div className={styles.contactWrapper}>
        <img src={locationPic} className={styles.pic} />
        <h3>ул. Цар Борис III 2, 5800 Плевен Център, Плевен</h3>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d724.6009916942772!2d24.617235229200165!3d43.41038587294141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40abf5bd8be428bb%3A0x3e61d757c6813ce7!2sKindyRoo%20Pleven!5e0!3m2!1sbg!2sbg!4v1647548234986!5m2!1sbg!2sbg"
        className={styles.map}
        allowFullScreen="on"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default ContactUs;

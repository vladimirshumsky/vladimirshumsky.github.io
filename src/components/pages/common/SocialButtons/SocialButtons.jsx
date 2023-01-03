import React from "react";
import facebookLogo from "@/assets/img/facebook.svg";
import googleLogo from "@/assets/img/google.svg";
import styles from "./SocialButtons.module.scss";

const SocialButtons = () => (
  <div className={styles.root}>
    <button className={styles.button}>
      <img src={facebookLogo} alt="facebook" />
      Войти через Facebook
    </button>
    <button className={styles.button}>
      <img src={googleLogo} alt="google" />
      Войти через Google
    </button>
  </div>
);

export default SocialButtons;

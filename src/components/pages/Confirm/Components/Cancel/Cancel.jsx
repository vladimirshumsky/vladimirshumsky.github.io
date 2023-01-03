import React from "react";
import styles from "./Cancel.module.scss";
import { Link } from "react-router-dom";

const Cancel = () => (
  <Link to="/not_mail">
    <div className={styles.root}>Мне не пришло письмо</div>
  </Link>
);

export default Cancel;

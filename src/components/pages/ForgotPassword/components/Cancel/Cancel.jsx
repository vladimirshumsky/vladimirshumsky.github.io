import React from "react";
import styles from "./Cancel.module.scss";
import { Link } from "react-router-dom";

const Cancel = () => (
  <div>
    <Link to="/">
      <div className={styles.cancel}>Отменить</div>
    </Link>
  </div>
);

export default Cancel;

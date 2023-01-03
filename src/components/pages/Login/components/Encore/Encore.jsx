import React from "react";
import styles from "./Encore.module.scss";
import { Link } from "react-router-dom";

const Encore = () => (
  <div className={styles.root}>
    <Link to="/forgot">
      <div className={styles.forgot}> Забыли пароль? </div>
    </Link>
  </div>
);

export default Encore;

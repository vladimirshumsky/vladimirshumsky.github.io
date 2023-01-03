import React from "react";
import styles from "./SeparatorText.module.scss";

const SeparatorText = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

export default SeparatorText;

import React from "react";
import styles from "./InputWrappers.module.scss";

const InputsWrapper = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

export default InputsWrapper;

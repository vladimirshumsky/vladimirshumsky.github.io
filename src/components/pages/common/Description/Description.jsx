import React from "react";
import styles from "./Description.module.scss";
import cn from "classnames";

const Description = ({ children, styleType }) => (
  <h2
    className={cn(styles.root, {
      [styles.root_register]: styleType === "register",
      [styles.root]: styleType === "login",
      [styles.root_notMail]: styleType === "notMail",
      [styles.root_confirm]: styleType === "confirm",
      [styles.root_forgotPassword]: styleType === "forgotPassword",
      [styles.root_sendPassword]: styleType === "sendPassword",
    })}
  >
    {children}
  </h2>
);

export default Description;

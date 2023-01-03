import React from "react";
import styles from "./Title.module.scss";
import cn from "classnames";

const Title = ({ children, styleType }) => (
  <h1
    className={cn(styles.root, {
      [styles.root_confirm]: styleType === "confirm" || styleType === "notMail",
      [styles.root_forgotPassword]:
        styleType === "forgotPassword" || styleType === "sendPassword",
    })}
  >
    {children}
  </h1>
);

export default Title;

import React from "react";
import styles from "./Container.module.scss";
import cn from "classnames";

const Container = ({ children, styleType }) => (
  <div
    className={cn(styles.container, {
      [styles.container_confirm]: styleType === "confirm",
      [styles.container_notMail]: styleType === "notMail",
      [styles.container_forgotPassword]: styleType === "forgotPassword",
      [styles.container_sendPassword]: styleType === "sendPassword",
    })}
  >
    {children}
  </div>
);

export default Container;

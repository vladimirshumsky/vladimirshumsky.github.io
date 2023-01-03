import React from "react";
import styles from "./ActionButton.module.scss";
import Button from "@/components/common/Button/Button";
import cn from "classnames";

const ActionButton = ({ children, onClick, success, styleType }) => (
  <Button
    className={cn(styles.root, {
      [styles.confirm]: styleType === "confirm",
      [styles.notMail]: styleType === "notMail",
    })}
    click={onClick}
    success={success}
  >
    {children}
  </Button>
);

export default ActionButton;

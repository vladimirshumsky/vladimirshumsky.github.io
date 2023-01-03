import React from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

const Button = ({
  children,
  onClick,
  success,
  className,
  styleType,
  isLoading,
  LoadingComponent,
}) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={cn(styles.btn, className, {
        [styles.btn_success]: success,
        [styles.btn_loader]: styleType === "loader",
      })}
    >
      <span className={styles.text}>
        {isLoading && LoadingComponent}
        {children}
      </span>
    </button>
  );
};
export default Button;

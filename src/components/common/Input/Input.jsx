import React, { forwardRef } from "react";
import styles from "./Input.module.scss";
import cn from "classnames";

const Input = (
  {
    placeholder,
    type,
    name,
    focus,
    value,
    success,
    error,
    errorMessage,
    onChange,
    styleType,
    loading,
  },
  ref
) => (
  <>
    <input
      ref={ref}
      type={type}
      name={name}
      placeholder={placeholder}
      onFocus={focus}
      value={value}
      className={cn(styles.input, {
        [styles.input_success]: success,
        [styles.input_error]: error,
        [styles.notMail]: styleType === "notMail",
        [styles.forgotPassword]: styleType === "forgotPassword",
        [styles.forgotPassword_loading]: loading,
      })}
      onChange={(e) => onChange && onChange(e)}
    />
    {error && errorMessage && (
      <div className={styles.errorMessage}>{errorMessage}</div>
    )}
  </>
);

export default forwardRef(Input);

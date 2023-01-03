import React from "react";
import styles from "./LoginForm.module.scss";
import LoginInputName from "@/components/pages/Login/components/LoginInputEmail";
import LoginInputEmail from "@/components/pages/Login/components/LoginInputPassword";

import InputsWrapper from "@/components/pages/common/InputsWrapper/InputsWrapper";
import ActionButton from "@/components/pages/common/ActionButton/ActionButton";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setEmail,
  setPassword,
  setSuccess,
} from "@/redux/store/login-page/login-pahe-slice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const mailState = useSelector((state) => state.login.emailSignIn);
  const passwordState = useSelector((state) => state.login.passwordSignIn);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setError(false));
    if (
      mailState === "example@example.com" &&
      passwordState === "password2021"
    ) {
      dispatch(setSuccess(true));
      setTimeout(() => dispatch(setSuccess(false)), 3000);
      setTimeout(() => dispatch(setEmail("")), 3000);
      setTimeout(() => dispatch(setPassword("")), 3000);
    } else {
      dispatch(setError(true));
      // dispatch(setEmail(""));
      // dispatch(setPassword(""));
    }
  };

  return (
    <form className={styles.root} onSubmit={onSubmit}>
      <InputsWrapper>
        <LoginInputName />
        <LoginInputEmail />
      </InputsWrapper>

      <ActionButton>Войти в аккаунт</ActionButton>
    </form>
  );
};

export default LoginForm;

import React from "react";
import {
  setEmail,
  setError,
  setSuccess,
} from "@/redux/store/login-page/login-pahe-slice";
import Input from "@/components/common/Input/Input";
import { useDispatch, useSelector } from "react-redux";

const LoginInputName = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.login.emailSignIn);
  const error = useSelector((state) => state.login.error);
  const success = useSelector((state) => state.login.success);

  return (
    <Input
      error={error}
      success={success}
      errorMessage={"Неверный еmail или пароль"}
      type={"email"}
      name={"email"}
      placeholder={"Email"}
      value={value}
      onChange={(e) => {
        dispatch(setEmail(e.target.value));
        dispatch(setError(false));
        dispatch(setSuccess(false));
      }}
    />
  );
};
export default LoginInputName;

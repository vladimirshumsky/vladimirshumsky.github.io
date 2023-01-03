import React from "react";
import {
  setError,
  setPassword,
} from "@/redux/store/login-page/login-pahe-slice";
import Input from "@/components/common/Input/Input";
import { useDispatch, useSelector } from "react-redux";

const LoginInputName = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.login.passwordSignIn);
  const error = useSelector((state) => state.login.error);
  const success = useSelector((state) => state.login.success);

  return (
    <Input
      success={success}
      error={error}
      value={value}
      type={"password"}
      name={"password"}
      placeholder={"Пароль"}
      onChange={(e) => {
        dispatch(setPassword(e.target.value));
        dispatch(setError(false));
      }}
    />
  );
};
export default LoginInputName;

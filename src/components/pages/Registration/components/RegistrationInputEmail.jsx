import React from "react";
import {
  setEmailError,
  setEmailReg,
} from "@/redux/store/registration-page/registration-page.slice";
import Input from "@/components/common/Input/Input";
import { useDispatch, useSelector } from "react-redux";

const RegistrationInputName = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.auth.emailRegistration);
  const errorState = useSelector((state) => state.auth.error);

  return (
    <Input
      error={errorState.email}
      errorMessage={"Возможно вы ошиблись в указании почтового сервиса"}
      type={"email"}
      name={"email"}
      placeholder={"Email"}
      value={value}
      onChange={(e) => {
        dispatch(setEmailError(false));
        dispatch(setEmailReg(e.target.value));
      }}
    />
  );
};
export default RegistrationInputName;

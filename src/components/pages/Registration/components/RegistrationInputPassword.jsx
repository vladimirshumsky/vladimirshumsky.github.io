import React from "react";
import { setPasswordReg } from "@/redux/store/registration-page/registration-page.slice";
import Input from "@/components/common/Input/Input";
import { useDispatch, useSelector } from "react-redux";

const RegistrationInputName = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.auth.passwordRegistration);
  // const errorState = useSelector((state) => state.auth.error);

  return (
    <Input
      value={value}
      type={"password"}
      name={"password"}
      placeholder={"Пароль"}
      onChange={(e) => dispatch(setPasswordReg(e.target.value))}
    />
  );
};
export default RegistrationInputName;

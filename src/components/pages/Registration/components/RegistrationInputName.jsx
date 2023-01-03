import React from "react";
import { setNameReg } from "@/redux/store/registration-page/registration-page.slice";
import Input from "@/components/common/Input/Input";
import { useDispatch, useSelector } from "react-redux";

const RegistrationInputName = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.auth.nameRegistration);
  const errorState = useSelector((state) => state.auth.error);

  return (
    <Input
      error={errorState.name}
      errorMessage={"Обязательное поле для заполнения"}
      placeholder={"Имя"}
      value={value}
      name={"name"}
      onChange={(e) => dispatch(setNameReg(e.target.value))}
    />
  );
};
export default RegistrationInputName;

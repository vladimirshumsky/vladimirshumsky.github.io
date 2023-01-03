import React from "react";
import styles from "./RegistrationForm.module.scss";
import RegistrationInputName from "@/components/pages/Registration/components/RegistrationInputName";
import RegistrationInputEmail from "@/components/pages/Registration/components/RegistrationInputEmail";
import RegistrationInputPassword from "@/components/pages/Registration/components/RegistrationInputPassword";
import RegistrationInputPromoCode from "@/components/pages/Registration/components/RegistrationInputPromoCode";
import InputsWrapper from "@/components/pages/common/InputsWrapper/InputsWrapper";
import ActionButton from "@/components/pages/common/ActionButton/ActionButton";
import { isValidEmail } from "@/helpers/utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmailError } from "@/redux/store/registration-page/registration-page.slice";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmailError(false));
    if (isValidEmail(e.target.email.value)) {
      navigate("/confirm");
    } else {
      dispatch(setEmailError(true));
    }
  };

  return (
    <form className={styles.root} onSubmit={onSubmit}>
      <InputsWrapper>
        <RegistrationInputName />
        <RegistrationInputEmail />
        <RegistrationInputPassword />
        <RegistrationInputPromoCode />
      </InputsWrapper>

      <ActionButton>Создать аккаунт</ActionButton>
    </form>
  );
};

export default RegistrationForm;

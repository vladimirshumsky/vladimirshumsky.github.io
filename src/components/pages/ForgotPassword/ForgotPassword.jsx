import React, { useState } from "react";
import Container from "@/components/pages/common/Container/Container";
import Title from "@/components/pages/common/Title/Title";
import Description from "@/components/pages/common/Description/Description";
import Cancel from "@/components/pages/ForgotPassword/components/Cancel/Cancel";
import lock from "@/assets/img/lock.svg";
import Input from "@/components/common/Input/Input";
import Button from "@/components/common/Button/Button";
import styles from "./Forgot.module.scss";
import Spinner from "@/components/common/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [deleteImg, setDeleteImg] = useState(false);
  const [valueMail, setValueMail] = useState("");
  const [error, setError] = useState(false);
  const inputHandler = (e) => {
    setValueMail(e.target.value);
  };

  const loaderHandler = () => {
    if (valueMail === "example@example.com") {
      setError(false);
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 3000);
      setTimeout(() => setIsLoading(false), 3000);
      setTimeout(() => navigate("/email_send"), 3000);
    } else {
      setError(true);
    }
  };

  const focus = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    ) {
      setDeleteImg(true);
      setError(false);
    } else {
      setError(false);
    }

  };
  return (
    <Container styleType={"forgotPassword"}>
      <img
        className={deleteImg ? styles.deleted : styles.img}
        src={lock}
        alt="logo"
      />
      <Title styleType={"forgotPassword"}>Восстановить пароль</Title>

      <Description styleType={"forgotPassword"}>
        Введите e-mail, на который регистрировались ранее
      </Description>
      <div className={styles.formWrapper}>
        <Input
          value={valueMail}
          setValueMail={setValueMail}
          focus={focus}
          loading={isLoading}
          styleType={"forgotPassword"}
          placeholder={"Email"}
          onChange={(e) => inputHandler(e)}
          error={error}
          errorMessage={"Email введен некорректно"}
        />

        <div className={styles.btn_wrapper}>
          <Button
            isLoading={isLoading}
            LoadingComponent={<Spinner />}
            onClick={loaderHandler}
          >
            Отправить
          </Button>
        </div>
      </div>

      <Cancel />
    </Container>
  );
};
export default Login;

import React from "react";
import Container from "@/components/pages/common/Container/Container";
import Title from "@/components/pages/common/Title/Title";
import Description from "@/components/pages/common/Description/Description";
import successSend from "@/assets/img/succesSend.svg";
import Button from "@/components/common/Button/Button";
import styles from "./sendMail.module.scss";
import { Link } from "react-router-dom";

const SendMail = () => {
  return (
    <Container styleType={"sendPassword"}>
      <img className={styles.img} src={successSend} alt="logo" />
      <Title styleType={"sendPassword"}>Письмо отправлено</Title>
      <Description styleType={"sendPassword"}>
        На указанный вами e-mail было отправлено письмо для смены пароля
      </Description>
      <Link to="/">
        <div className={styles.btn_wrapper}>
          <Button>Вернуться на главную</Button>
        </div>
      </Link>
    </Container>
  );
};
export default SendMail;

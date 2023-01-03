import React from "react";
import Container from "@/components/pages/common/Container/Container";
import Title from "@/components/pages/common/Title/Title";
import Description from "@/components/pages/common/Description/Description";
import Cancel from "@/components/pages/Confirm/Components/Cancel/Cancel";
import ActionButton from "@/components/pages/common/ActionButton/ActionButton";
import { useSelector } from "react-redux";

const Confirm = () => {
  const nameState = useSelector((state) => state.auth.nameRegistration);

  return (
    <Container styleType={"confirm"}>
      <Title styleType={"confirm"}>Подтвердите ваш e-mail</Title>
      <Description styleType={"confirm"}>
        {nameState}, на ваш E-mail отправлено письмо со ссылкой для
        подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись
        и получить 7 дней бесплатного доступа.{" "}
      </Description>

      <ActionButton styleType={"confirm"}>Перейти к почте</ActionButton>

      <Cancel />
    </Container>
  );
};
export default Confirm;

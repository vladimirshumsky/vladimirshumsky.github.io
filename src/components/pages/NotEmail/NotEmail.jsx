import React from "react";
import Container from "@/components/pages/common/Container/Container";
import Title from "@/components/pages/common/Title/Title";
import Description from "@/components/pages/common/Description/Description";
import Cancel from "@/components/pages/NotEmail/components/Cancel/Cancel";
import ActionButton from "@/components/pages/common/ActionButton/ActionButton";
import Input from "@/components/common/Input/Input";

const NotMail = () => {
  return (
    <Container styleType={"notMail"}>
      <Title styleType={"notMail"}>Мне не пришло письмо</Title>
      <Description styleType={"notMail"}>
        Письмо может прийти с задержкой в 5-10 минут.
        <br /> Также проверьте разные папки почтового ящика (актуально для
        gmail.com) и папку "Спам".Если письмо все же не пришло, повторите
        попытку или напишите об этом в тех.поддержку{" "}
        <a href={"/support"}>@livedune.ru</a> и мы активируем ваш аккаунт.
      </Description>
      <Input styleType={"notMail"} placeholder={"Email"} />
      <ActionButton styleType={"notMail"}>Отправить заново</ActionButton>

      <Cancel />
    </Container>
  );
};
export default NotMail;

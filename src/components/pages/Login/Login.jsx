import React, { useEffect } from "react";
import SocialButtons from "@/components/pages/common/SocialButtons/SocialButtons";
import { reset } from "@/redux/store/login-page/login-pahe-slice";
import { useDispatch } from "react-redux";
import Container from "@/components/pages/common/Container/Container";
import SeparatorText from "@/components/pages/common/SeparatorText/SeparatorText";
import Title from "@/components/pages/common/Title/Title";
import Description from "@/components/pages/common/Description/Description";
import Encore from "@/components/pages/Login/components/Encore/Encore";
import LoginForm from "@/components/pages/Login/components/LoginForm/LoginForm";

const Login = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => dispatch(reset()), []);

  return (
    <Container>
      <Title>Войти</Title>

      <Description styleType={"login"}>
        Добро пожаловать, рады видеть вас снова 👋
      </Description>

      <SocialButtons />

      <SeparatorText>или</SeparatorText>

      <LoginForm />

      <Encore />
    </Container>
  );
};
export default Login;

import React from "react";
import SocialButtons from "@/components/pages/common/SocialButtons/SocialButtons";
import { reset } from "@/redux/store/registration-page/registration-page.slice";
import Container from "@/components/pages/common/Container/Container";
import SeparatorText from "@/components/pages/common/SeparatorText/SeparatorText";
import Title from "@/components/pages/common/Title/Title";
import Description from "@/components/pages/common/Description/Description";
import AgreementTerms from "@/components/pages/Registration/components/AgreementTerms/AgreementTerms";
import RegistrationForm from "@/components/pages/Registration/components/RegistrationForm/RegistrationForm";

const Registration = () => {
  // const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => () => dispatch(reset()), []);

  return (
    <Container>
      <Title>Регистрация</Title>

      <Description styleType={"register"}>
        Зарегистрируйся и получи доступ к аналитике аккаунтов.
      </Description>

      <SocialButtons />

      <SeparatorText>или</SeparatorText>

      <RegistrationForm />

      <AgreementTerms />
    </Container>
  );
};
export default Registration;

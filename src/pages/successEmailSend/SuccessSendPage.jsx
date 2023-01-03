import React, { useEffect } from "react";
import SendMail from "@/components/pages/ForgotPasswordSuccess/sendMail";

const SuccessSendPage = () => {
  useEffect(() => {
    document.title = "Письмо отправлено — LiveDune";
  }, []);

  return <SendMail />;
};
export default SuccessSendPage;

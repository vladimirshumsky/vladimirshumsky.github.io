import React, { useEffect } from "react";
import ForgotPassword from "@/components/pages/ForgotPassword/ForgotPassword";

const ForgotPasswordPage = () => {
  useEffect(() => {
    document.title = "Восстановить пароль — LiveDune";
  }, []);

  return <ForgotPassword />;
};
export default ForgotPasswordPage;

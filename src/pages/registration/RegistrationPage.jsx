import React, { useEffect } from "react";
import Registration from "@/components/pages/Registration/Registration";

const RegistrationPage = () => {
  useEffect(() => {
    document.title = "Регистрация — LiveDune";
  }, []);

  return <Registration />;
};
export default RegistrationPage;

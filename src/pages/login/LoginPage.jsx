import React, { useEffect } from "react";
import Login from "@/components/pages/Login/Login";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Войти — LiveDune";
  }, []);

  return <Login />;
};
export default LoginPage;

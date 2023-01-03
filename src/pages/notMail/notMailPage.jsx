import React, { useEffect } from "react";
import NotEmail from "@/components/pages/NotEmail/NotEmail";

const NotMailPage = () => {
  useEffect(() => {
    document.title = "Не пришло письмо — LiveDune";
  }, []);

  return <NotEmail />;
};
export default NotMailPage;

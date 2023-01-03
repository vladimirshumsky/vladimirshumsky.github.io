import React, { useEffect } from "react";
import Confirm from "@/components/pages/Confirm/Confirm";

const ConfirmPages = () => {
  useEffect(() => {
    document.title = "Подтвердите почту — LiveDune";
  }, []);

  return <Confirm />;
};
export default ConfirmPages;

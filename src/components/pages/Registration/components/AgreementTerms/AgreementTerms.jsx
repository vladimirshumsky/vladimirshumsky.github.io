import React from "react";
import styles from "./AgreementTerms.module.scss";

const AgreementTerms = () => (
  <div className={styles.root}>
    Создавая аккаунт, я согласен с{" "}
    <a href={"/offer-conditions"} onClick={(e) => e.preventDefault()}>
      условиями оферты
    </a>
  </div>
);

export default AgreementTerms;

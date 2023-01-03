import React from "react";
import { Oval } from "react-loader-spinner";
import styles from "./spinner.module.scss";
const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Oval
        height={25}
        width={25}
        color="white"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4e74f5"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
};
export default Spinner;

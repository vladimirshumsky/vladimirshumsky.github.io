import React, { useRef, useState } from "react";
import { setPromoReg } from "@/redux/store/registration-page/registration-page.slice";
import Input from "@/components/common/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/components/pages/Registration/Registration.module.scss";
import useSetInputFocus from "@/components/hooks/useSetInputFocus";

const RegistrationInputName = () => {
  const [isShowPromoCodeInput, setIsShowPromoCodeInput] = useState(false);
  const promoCodeInputRef = useRef(null);

  const value = useSelector((state) => state.auth.promoRegistration);
  const dispatch = useDispatch();

  useSetInputFocus(isShowPromoCodeInput, promoCodeInputRef);

  return (
    <>
      {isShowPromoCodeInput ? (
        <Input
          ref={promoCodeInputRef}
          type={"text"}
          name={"promoCode"}
          placeholder={"Промокод"}
          value={value}
          onChange={(e) => dispatch(setPromoReg(e.target.value))}
        />
      ) : (
        <div
          onClick={() => setIsShowPromoCodeInput(true)}
          className={styles.promo}
        >
          У меня есть промокод
        </div>
      )}
    </>
  );
};
export default RegistrationInputName;

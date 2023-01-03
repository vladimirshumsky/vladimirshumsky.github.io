import React from "react";
import styles from "./Header.module.scss";
import Button from "@/components/common/Button/Button";
import svg from "@/assets/img/LiveDune.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <img className={styles.logo} src={svg} alt="" />
      </Link>
      {location.pathname === "/confirm" || location.pathname === "/not_mail" ? (
        <div className={styles.flexWrap}>
          {" "}
          <Link to="/registration">
            {" "}
            <div className={styles.exit}>Выйти</div>{" "}
          </Link>
        </div>
      ) : location.pathname === "/registration" ? (
        <div className={styles.flexWrap}>
          <Link to="/">
            <div className={styles.notAccount}>Уже есть аккаунт?</div>
          </Link>
          <div className={styles.btnWrapper}>
            <Link to="/">
              <Button>Войти</Button>
            </Link>{" "}
          </div>{" "}
        </div>
      ) : location.pathname === "/forgot" ? (
        <> </>
      ) : location.pathname === "/email_send" ? (
        <> </>
      ) : (
        <div className={styles.flexWrap}>
          <Link to="/registration">
            <div className={styles.notAccount}>У вас нет акканута?</div>
          </Link>
          <div className={styles.btnWrapper}>
            <Link to="/registration">
              <Button>Регистрация</Button>
            </Link>{" "}
          </div>{" "}
        </div>
      )}
    </div>
  );
};
export default Header;

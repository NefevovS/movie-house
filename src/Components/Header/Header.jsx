import React from "react";
import s from "./Header.module.css";
import { ReactComponent as Glass } from "../../assets/image/glass.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header__wrapper}>
      <img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="YIFY" />
      <div className={s.input__wrapper}>
        <Glass className={s.glass} />
        <input
          type="text"
          style={{ color: "#919191" }}
          placeholder="Поиск..."
        />
      </div>

      <ul className={s.nav__wrapper}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <a href="#!">4K</a>
        </li>
        <li>
          <a href="#!">Trending</a>
        </li>
        <li>
          {" "}
          <a href="#!">Browse movies</a>{" "}
        </li>
      </ul>
      <ul className={s.login_wrapper}>
        <li>
          <a href="#!">Login</a>
        </li>
        <li>
          <a href="#!">Register</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

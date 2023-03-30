import React from "react";
import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header__wrapper}>
      <img
        src="https://yts.mx/assets/images/website/logo-YTS.svg"
        alt="YIFY"
      ></img>
      <div className={s.input__wrapper}>
        <input
          type="text"
          style={{ color: "#919191" }}
          placeholder="Поиск..."
        />
      </div>

      <ul className={s.nav__wrapper}>
        <li>
          <a href="#!">Home</a>
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

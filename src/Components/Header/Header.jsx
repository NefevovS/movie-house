import React, { useState } from "react";
import s from "./Header.module.css";
import { ReactComponent as Glass } from "../../assets/image/glass.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header__wrapper}>
      <img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="YIFY" />

      <ul className={s.nav__wrapper}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/browse-movies">Browse movies</Link>
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

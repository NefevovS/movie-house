import React from "react";
import s from "./FilmButton.module.css";
const FilmButton = ({ child, ...props }) => {
  return (
    <button {...props} className={s.btn}>
      {child}
    </button>
  );
};

export default FilmButton;

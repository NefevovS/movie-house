import React, { useState } from "react";
import s from "./FilmCard.module.css";

const FilmCard = ({ imgSrc, movieTitle, movieYear }) => {
  return (
    <div className={s.movieWrapper}>
      <div className={s.movieCover__wrapper}>
        <img src={imgSrc} alt="image" className={s.movieCover} />
        <div className={s.overlay}>
          <div>звездочка</div>
          <div>рейтинг</div>
          <div>жанры</div>
          <div>кнопка</div>
        </div>
      </div>
      <div className={s.movieTitle}>{movieTitle}</div>
      <div className={s.movieYear}> {movieYear}</div>
    </div>
  );
};

export default FilmCard;

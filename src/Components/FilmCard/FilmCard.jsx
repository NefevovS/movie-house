import React from "react";
import s from "./FilmCard.module.css";

const FilmCard = ({ imgSrc, movieTitle, movieYear }) => {
  return (
    <div className={s.movieWrapper}>
      <img src={imgSrc} alt="image" className={s.movieCover} />
      <div className={s.movieTitle}>{movieTitle}</div>
      <div className={s.movieYear}> {movieYear}</div>
    </div>
  );
};

export default FilmCard;

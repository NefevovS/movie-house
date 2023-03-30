import React, { useState } from "react";
import s from "./FilmCard.module.css";

const FilmCard = ({ imgSrc, movieTitle, movieYear }) => {
  const [mouseOntheCard, setMouseOnTheCard] = useState(false);
  return (
    <div className={s.movieWrapper}>
      <div
        className={s.movieCover__wrapper}
        onMouseEnter={() => setMouseOnTheCard(true)}
        onMouseLeave={() => setMouseOnTheCard(false)}
      >
        <img src={imgSrc} alt="image" className={s.movieCover} />
        <div
          className={
            mouseOntheCard
              ? [s.overlay, s.active].join(" ")
              : [s.overlay].join(" ")
          }
        >
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

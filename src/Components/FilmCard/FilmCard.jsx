import React, { useState } from "react";
import s from "./FilmCard.module.css";
import FilmButton from "../../UI/Button/FilmButton/FilmButton";

const FilmCard = ({ film }) => {
  const [mouseOntheCard, setMouseOnTheCard] = useState(false);

  return (
    <div className={s.movieWrapper}>
      <div
        className={s.movieCover__wrapper}
        onMouseEnter={() => setMouseOnTheCard(true)}
        onMouseLeave={() => setMouseOnTheCard(false)}
      >
        <img
          src={film.medium_cover_image}
          alt="image"
          className={s.movieCover}
        />
        <div
          className={
            mouseOntheCard
              ? [s.overlay, s.active].join(" ")
              : [s.overlay].join(" ")
          }
        >
          <div>
            <img src="../../assets/image/star.png" alt="star" />
          </div>
          <div>{film.rating}/10</div>
          <div>
            {film.genres.map((genre) => (
              <div style={{ paddingBottom: "10px" }}>{genre}</div>
            ))}
          </div>
          <span className={s.btn}>Подробнее</span>
        </div>
      </div>
      <div className={s.movieTitle}>{film.title}</div>
      <div className={s.movieYear}>{film.year}</div>
    </div>
  );
};

export default FilmCard;

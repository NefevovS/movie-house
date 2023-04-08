import React, { useState } from "react";
import s from "./FilmCard.module.css";
import star from "../../assets/image/star.png";
import { useNavigate } from "react-router-dom";

const FilmCard = ({ film }) => {
  const [mouseOntheCard, setMouseOnTheCard] = useState(false);
  const router = useNavigate();
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
          <div className={s.star}>
            <img src={star} alt="star" />
          </div>
          <div>{film.rating}/10</div>
          <div className={s.genre}>
            {film.genres?.map((genre) => (
              <div key={genre} style={{ paddingBottom: "10px" }}>
                {genre}
              </div>
            ))}
          </div>
          <span className={s.btn} onClick={() => router(`/movies/${film.id}`)}>
            Подробнее
          </span>
        </div>
      </div>
      <div className={s.movieTitle}>{film.title}</div>
      <div className={s.movieYear}>{film.year}</div>
    </div>
  );
};

export default FilmCard;

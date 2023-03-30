import React from "react";
import FilmCard from "../FilmCard/FilmCard";
import s from "./FilmList.module.css";

const FilmList = ({ films }) => {
  return (
    <div className={s.filmsContainer}>
      {films.map((film) => (
        <FilmCard
          imgSrc={film.medium_cover_image}
          movieTitle={film.title}
          movieYear={film.year}
        />
      ))}
    </div>
  );
};

export default FilmList;

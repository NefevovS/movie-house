import React from "react";
import FilmCard from "../FilmCard/FilmCard";
import s from "./FilmList.module.css";

const FilmList = ({ films }) => {
  return (
    <div className={s.filmsContainer}>
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};

export default FilmList;

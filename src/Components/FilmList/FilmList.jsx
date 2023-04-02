import React, { useEffect, useState } from "react";
import FilmCard from "../FilmCard/FilmCard";
import s from "./FilmList.module.css";
import { FilmServise } from "../../servise/FilmServise";

const FilmList = () => {
  const [films, setFilms] = useState([]);

  const fetchFilm = async () => {
    const response = await FilmServise.getAll();
    setFilms(response.data.data.movies);
  };
  useEffect(() => {
    fetchFilm();
  }, []);

  return (
    <div className={s.filmsContainer}>
      {films?.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};

export default FilmList;

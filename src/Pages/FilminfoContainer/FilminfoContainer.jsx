import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FilmServise } from "../../API/FilmServise";
import Loader from "../../Components/Loader/Loader";
import { useFetching } from "../../hooks/useFetching";
import s from "./FilminfoContainer.module.css";
import FilmInfoContent from "../FilminfoContent/FilmInfoContent";

const FilminfoContainer = () => {
  const params = useParams();
  const [film, setFilm] = useState({});

  const fetchFilm = async (id) => {
    const response = await FilmServise.getFilmByID(id);
    setFilm(response.data.data.movie);
  };
  const [fetching, isLoading, error] = useFetching(fetchFilm);
  useEffect(() => {
    fetching(params.id);
  }, []);

  return (
    <div className={s.filminfo}>
      {isLoading ? <Loader /> : <FilmInfoContent film={film} />}
    </div>
  );
};

export default FilminfoContainer;

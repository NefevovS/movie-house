import React, { useEffect, useState } from "react";
import FilmCard from "../FilmCard/FilmCard";
import s from "./FilmList.module.css";
import { FilmServise } from "../../servise/FilmServise";
import {getPages} from "../../Utils/getPages";
import Paggination from "../Paggination/Paggination";
import {usePagination} from "../../hooks/usePaggination";
import {useFetching} from "../../hooks/useFetching";

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [page,setPage]=useState(1);
  const [filmsLimit,setFilmsLimit]=useState(12);
  const [totalCountPages,setTotalCountPages]=useState(0);

  const pageArray=usePagination(totalCountPages);
  const fetchFilm = async () => {
    const response = await FilmServise.getAll(page,filmsLimit);
    setFilms(response.data.data.movies);
      setTotalCountPages(getPages(response.data.data.movie_count,filmsLimit));
    };

  useEffect(() => {
      fetchFilm();
  }, [totalCountPages,page]);

  return (
      <>
        <div className={s.filmsContainer}>
          {films?.map((film) => (
              <FilmCard key={film.id} film={film} />
          ))}
        </div>
        <Paggination setPage={setPage} page={page} pageArray={pageArray}/>
      </>

  );
};

export default FilmList;

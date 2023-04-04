import React, {useEffect, useMemo, useState} from "react";
import FilmCard from "../FilmCard/FilmCard";
import s from "./FilmList.module.css";
import { FilmServise } from "../../servise/FilmServise";
import { getPages } from "../../Utils/getPages";
import Paggination from "../Paggination/Paggination";
import { usePagination } from "../../hooks/usePaggination";
import { ReactComponent as Glass } from "../../assets/image/glass.svg";

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [filmsLimit, setFilmsLimit] = useState(12)
  const [totalCountPages, setTotalCountPages] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const fetchFilm = async (page, filmsLimit, searchQuery) => {
    const response = await FilmServise.getAll(page, filmsLimit, searchQuery);
    setFilms(response.data.data.movies);
    setTotalCountPages(getPages(response.data.data.movie_count, filmsLimit));
      console.log(filmsLimit)
  };

  useEffect(() => {
    fetchFilm(page, filmsLimit, searchQuery);
  }, [page]);


  return (
    <div style={{ marginTop: "90px", marginBottom: "50px" }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          fetchFilm(page, filmsLimit, searchQuery);
        }}
      >
        <div className={s.input__wrapper}>
          <Glass className={s.glass} />
          <input
            type="text"
            style={{ color: "#919191" }}
            placeholder="Поиск..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </div>
      </form>

      <Paggination setPage={setPage} page={page} totalCountPages={totalCountPages} />

      <div className={s.filmsContainer}>
        {films?.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
      <Paggination setPage={setPage} page={page}  totalCountPages={totalCountPages} />
    </div>
  );
};

export default FilmList;

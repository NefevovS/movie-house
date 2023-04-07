import React, {useEffect, useMemo, useState} from "react";
import FilmCard from "../FilmCard/FilmCard";
import s from "./FilmList.module.css";
import { FilmServise } from "../../servise/FilmServise";
import { getPages } from "../../Utils/getPages";
import Pagination from "../Pagination/Pagination";
import { usePagination } from "../../hooks/usePaggination";
import { ReactComponent as Glass } from "../../assets/image/glass.svg";
import SearchInput from "../../UI/Input/SearchInput/SearchInput";

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
        <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      </form>

      <Pagination setPage={setPage} page={page} totalCountPages={totalCountPages} />

      <div className={s.filmsContainer}>
        {films?.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
      <Pagination setPage={setPage} page={page} totalCountPages={totalCountPages} />
    </div>
  );
};

export default FilmList;

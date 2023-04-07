import React, { useEffect, useState } from "react";
import SearchInput from "../../UI/Input/SearchInput/SearchInput";
import s from "./BrowseMovies.module.css";
import { genreFilter } from "../../UI/Select/SelectFilter/SelectOptions/genreFilter";
import { qualityFilter } from "../../UI/Select/SelectFilter/SelectOptions/qualityFilter";
import { ratingFilter } from "../../UI/Select/SelectFilter/SelectOptions/ratingFilter";
import SelectFilter from "../../UI/Select/SelectFilter/SelectFilter";
import Pagination from "../Pagination/Pagination";
import FilmCard from "../FilmCard/FilmCard";
import { FilmServise } from "../../servise/FilmServise";
import { getPages } from "../../Utils/getPages";
const BrowseMovies = () => {
  const [filters, setFilters] = useState({
    searchQuery: "",
    genre: "",
    quality: "",
    rating: "",
    year: "",
  });

  const setSearchQueryInBrowseMovies = (query) => {
    setFilters({ ...filters, searchQuery: query });
  };
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [filmsLimit, setFilmsLimit] = useState(12);
  const [totalCountPages, setTotalCountPages] = useState(0);

  const fetchFilm = async (page, filmsLimit, filters) => {
    const response = await FilmServise.getFilmsByFIlters(
      page,
      filmsLimit,
      filters.searchQuery,
      filters.genre,
      filters.quality,
      filters.rating,
      filters.year
    );
    setFilms(response.data.data.movies);
    setTotalCountPages(getPages(response.data.data.movie_count, filmsLimit));
  };

  // useEffect(() => {
  //   fetchFilm(page, filmsLimit, filters);
  // }, [page]);

  return (
    <div className={s.browseMoviesWrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchFilm(page, filmsLimit, filters);
        }}
      >
        <SearchInput
          searchQuery={filters.searchQuery}
          setSearchQuery={setSearchQueryInBrowseMovies}
        />
        <div
          style={{
            display: "flex",
            columnGap: "15px",
            justifyContent: "center",
          }}
        >
          <SelectFilter
            options={qualityFilter}
            value={filters.quality}
            onChange={(e) => {
              setFilters({ ...filters, quality: e.target.value });
            }}
          />
          <SelectFilter
            options={genreFilter}
            value={filters.genre}
            onChange={(e) => {
              setFilters({ ...filters, genre: e.target.value });
            }}
          />
          <SelectFilter
            options={ratingFilter}
            value={filters.rating}
            onChange={(e) => {
              setFilters({ ...filters, rating: e.target.value });
            }}
          />
          {/*<SelectFilter*/}
          {/*  options={yearFilter}*/}
          {/*  value={filters.year}*/}
          {/*  onChange={(e) => {*/}
          {/*    setFilters({ ...filters, year: e.target.value });*/}
          {/*  }}*/}
          {/*/>*/}
        </div>
      </form>

      <div style={{ marginTop: "90px", marginBottom: "50px" }}>
        <Pagination
          setPage={setPage}
          page={page}
          totalCountPages={totalCountPages}
        />

        <div className={s.filmsContainer}>
          {films?.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
        <Pagination
          setPage={setPage}
          page={page}
          totalCountPages={totalCountPages}
        />
      </div>
    </div>
  );
};

export default BrowseMovies;

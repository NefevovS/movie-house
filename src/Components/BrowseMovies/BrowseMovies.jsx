import React, { useState } from "react";
import SearchInput from "../../UI/Input/SearchInput/SearchInput";
import s from "./BrowseMovies.module.css";
import { genreFilter } from "../../UI/Select/SelectFilter/SelectOptions/genreFilter";
import { qualityFilter } from "../../UI/Select/SelectFilter/SelectOptions/qualityFilter";
import { ratingFilter } from "../../UI/Select/SelectFilter/SelectOptions/ratingFilter";
import { yearFilter } from "../../UI/Select/SelectFilter/SelectOptions/yearFilter";
import SelectFilter from "../../UI/Select/SelectFilter/SelectFilter";
const BrowseMovies = () => {
  const [filters, setFilters] = useState({
    genre: "",
    quality: "",
    rating: "",
    year: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={s.browseMoviesWrapper}>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div
        style={{ display: "flex", columnGap: "15px", justifyContent: "center" }}
      >
        <SelectFilter
          options={qualityFilter}
          value={filters.quality}
          onChange={(e) => {
            setFilters({ ...filters, quality: e.target.value });
          }}
        />
        <SelectFilter options={genreFilter} value={filters.genre} onChange={(e) => {
            setFilters({ ...filters, genre: e.target.value });
        }}/>
        <SelectFilter options={ratingFilter} value={filters.rating} onChange={(e) => {
            setFilters({ ...filters, rating: e.target.value });
        }}/>
        <SelectFilter options={yearFilter} value={filters.year} onChange={(e) => {
            setFilters({ ...filters, year: e.target.value });
        }}/>
      </div>
    </div>
  );
};

export default BrowseMovies;

import React, { useState } from "react";
import SearchInput from "../../UI/Input/SearchInput/SearchInput";
import s from "./BrowseMovies.module.css";
const BrowseMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={s.browseMoviesWrapper}>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div style={{display:"flex",columnGap:"15px",justifyContent:"center"}}>  <select name="1" id="1">
            <option value="12">12</option>


        </select>
            <select name="2" id="2">
                <option value="12">12</option>
            </select>
            <select name="3" id="3">
                <option value="12">12</option>
            </select>
            <select name="4" id="4">
                <option value="12">12</option>
            </select>
            <select name="5" id="4">
                <option value="12">12</option>
            </select>
            <select name="6" id="4">
                <option value="12">12</option>
            </select>
        </div>

    </div>
  );
};

export default BrowseMovies;
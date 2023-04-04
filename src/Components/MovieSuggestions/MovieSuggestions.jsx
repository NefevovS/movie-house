import React, { useEffect, useState } from "react";
import { FilmServise } from "../../servise/FilmServise";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import s from "./MovieSuggestions.module.css";

const MovieSuggestions = ({ id }) => {
  const [films, setFilms] = useState([]);
  const router = useNavigate();

  const fetchFilms = async (id) => {
    const response = await FilmServise.getSuggestionsFilmByID(id);
    setFilms(response.data.data.movies);
  };
  const [fetching, isLoading, error] = useFetching(fetchFilms);
  useEffect(() => {
    fetching(id);
  }, []);

  return (
    <div>
      Similar Movies
      <div>
       {isLoading ? (
          <Loader />
        ) : (
          <div className={s.movieWrapper} >
            {films.map((film) => (
              <div key={film.id}>
                <div className={s.movieImg}>
                  <img
                    src={film.medium_cover_image}
                    alt="cover"
                    onClick={() => router(`/movies/${film.id}`)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSuggestions;
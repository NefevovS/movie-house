import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FilmServise } from "../../API/FilmServise";
import Loader from "../../Components/Loader/Loader";
import { useFetching } from "../../hooks/useFetching";

const Filminfo = () => {
  const params = useParams();
  const [film, setFilm] = useState([]);

  const fetchFilm = async () => {
    const response = await FilmServise.getFilmByID(params.id);
    setFilm(response.data.data.movie);
  };
  const [fetching, isLoading, error] = useFetching(fetchFilm);
  useEffect(() => {
    fetching();
  }, []);

  return (
    <div style={{ paddingTop: "200px", color: "white" }}>
      {isLoading ? <Loader /> : <div>{film.id}</div>}
    </div>
  );
};

export default Filminfo;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FilmServise } from "../../API/FilmServise";

const Filminfo = () => {
  const params = useParams();
  const [film, setFilm] = useState();
  const fetchFilm = async () => {
    const response = await FilmServise.getFilmByID(params.id);
    setFilm(response.data.data.movie);
    console.log(response.data.data.movie);
  };
  useEffect(() => {
    fetchFilm();
  }, []);

  return (
    <div style={{ paddingTop: "200px", color: "white" }}>
      <span>{film.id}</span>
    </div>
  );
};

export default Filminfo;

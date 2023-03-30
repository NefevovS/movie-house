import "./App.css";
import { FilmServise } from "./API/FilmServise";
import { useEffect, useState } from "react";
import FilmCard from "./Components/FilmCard/FilmCard";
function App() {
  const [films, setFilms] = useState([]);
  const fetchFilm = async () => {
    const response = await FilmServise.getAll();
    setFilms(response.data.data.movies);
    console.log(response.data.data.movies);
  };
  useEffect(() => {
    fetchFilm();
  }, []);

  return (
    <div className="app">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: "15px",
          rowGap: "15px",
          justifyContent: "center",
          padding: "30px 30px",
        }}
      >
        {films.map((film) => (
          <FilmCard
            imgSrc={film.medium_cover_image}
            movieTitle={film.title}
            movieYear={film.year}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

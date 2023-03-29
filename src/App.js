import "./App.css";
import { FilmServise } from "./API/FilmServise";
import { useEffect, useState } from "react";
import FilmCard from "./Components/FilmCard/FilmCard";
function App() {
  const [films, setFilms] = useState([]);
  const fetchFilm = async () => {
    const response = await FilmServise.getAll();
    setFilms(response.data.data.films);
  };
  useEffect(() => {
    fetchFilm();
    console.log(films);
  }, [films]);

  return (
    <div className="App">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {films.map((film) => (
          <FilmCard
            key={film.id}
            imgSrc={film["small_cover_image"]}
            movieTitle={film.title}
            movieYear={film.year}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { FilmServise } from "./API/FilmServise";
import { useEffect, useState } from "react";
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
    <div className="App">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {films.map((film) => (
          <div style={{ width: "400px" }}>
            <div>{film.title}</div>
            <img src={film.medium_cover_image} />
            <div>{film.synopsis}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

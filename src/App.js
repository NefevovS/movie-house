import "./App.css";
import { FilmServise } from "./API/FilmServise";
import { useEffect, useState } from "react";
import FilmList from "./Components/FilmList/FilmList";
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
      <FilmList films={films} />
    </div>
  );
}

export default App;

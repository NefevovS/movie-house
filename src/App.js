import "./App.css";
import { FilmServise } from "./API/FilmServise";
import { useEffect, useState } from "react";
import FilmList from "./Components/FilmList/FilmList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
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
      <Header />
      <FilmList films={films} />
      <Footer />
    </div>
  );
}

export default App;

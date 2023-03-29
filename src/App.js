import "./App.css";
import { FilmServise } from "./API/FilmServise";
function App() {
  const fetchFilm = async () => {
    const response = await FilmServise.getAll();
    console.log(response.data);
  };

  fetchFilm();
  return <div className="App"></div>;
}

export default App;

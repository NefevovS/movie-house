import "./App.css";
import FilmList from "./Components/FilmList/FilmList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Filminfo from "./Pages/FilminfoContainer/Filminfo";
function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/movie-house" element={<FilmList/>} />
        <Route path="/movie-house/movies/:id" element={<Filminfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

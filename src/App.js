import "./App.css";
import FilmList from "./Components/FilmList/FilmList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Filminfo from "./Pages/FilminfoContainer/Filminfo";
import {useState} from "react";
function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/movie-house" element={<FilmList/>} />
        <Route path="/movies/:id" element={<Filminfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

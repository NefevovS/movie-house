import "./App.css";
import FilmList from "./Components/FilmList/FilmList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import FilminfoContainer from "./Pages/FilminfoContainer/FilminfoContainer";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<FilmList />} />
        <Route path="/home" element={<FilmList />} />
        <Route path="/movies/:id" element={<FilminfoContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

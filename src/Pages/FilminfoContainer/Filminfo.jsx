import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FilmServise } from "../../servise/FilmServise";
import Loader from "../../Components/Loader/Loader";
import { useFetching } from "../../hooks/useFetching";
import s from "./Filminfo.module.css";
import FilmInfoButton from "../../UI/Button/FilmInfoButtons/FilmInfoButton";
import heart from "../../assets/image/heart.png";
import imdb from "../../assets/image/logo-imdb.svg";
import star from "../../assets/image/star.png";
import MovieSuggestions from "../../Components/MovieSuggestions/MovieSuggestions";
import Modal from "../../Components/Modal/Modal";

const Filminfo = () => {
  const params = useParams();
  const [film, setFilm] = useState({});
  const [modalVisible,setModalVisible]=useState(false)
  const fetchFilm = async (id) => {
    const response = await FilmServise.getFilmByID(id);
    setFilm(response.data.data.movie);
  };
  console.log(params)
  const [fetching, isLoading, error] = useFetching(fetchFilm);
  useEffect(() => {
    fetching(params.id);
  }, [params.id]);


  return (
    <div className={s.filminfo}>
      {isLoading ? <Loader /> : (<div className={s.wrapper}>
        <div className={s.leftColumnWrapper}>
          <div className={s.cover__wrapper}>
            <img src={film.large_cover_image} alt="film" />
          </div>
          <FilmInfoButton className={[s.btn, s.btnGreen].join(" ")} onClick={()=>setModalVisible(true)}>
            Download
          </FilmInfoButton>
        </div>
        <div className={s.contentInfo}>
          <h1>{film.title}</h1>
          <h2>{film.year}</h2>
          <h3>
            {film.genres?.map((genre) => (
                <div key={genre}>{genre}</div>
            ))}
          </h3>
          <div className={s.linkAlight}>
            <p className={s.pullLeft}>Available in: &nbsp;</p>
            <div>
              {film.torrents?.map((torrent) => (
                  <a
                      key={torrent.quality}
                      className={s.torrentLink}
                      href={torrent.url}
                      title={"Download " + film.title + torrent.quality + " Torrent"}
                  >
                    {torrent.quality}
                  </a>
              ))}
            </div>
            <br />
          </div>

          <div className={s.raitingWrapper}>
            <img
                style={{ height: "32px", width: "32px" }}
                src={heart}
                alt="heart"
            />
            {film.like_count}
          </div>
          <div className={s.raitingWrapper}>
            <img src={imdb} alt="imdb" />
            {film.rating}
            <img src={star} alt="star" />
          </div>
        </div>
        <div><MovieSuggestions id={film.id}/></div>
        <Modal torrents={film.torrents} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </div>)}
    </div>
  );
};

export default Filminfo;

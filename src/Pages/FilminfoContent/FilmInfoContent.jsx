import React, {useState} from "react";
import s from "./FilmInfoContent.module.css";
import FilmInfoButton from "../../UI/Button/FilmInfoButtons/FilmInfoButton";
import star from "../../assets/image/star.png";
import heart from "../../assets/image/heart.png";
import imdb from "../../assets/image/logo-imdb.svg";
import Modal from "../../Components/Modal/Modal";
const FilmInfoContent = ({ film }) => {
  console.log(film)
  const [modalVisible,setModalVisible]=useState(false)
  return (
    <div className={s.wrapper}>
      <div className={s.leftColumnWrapper}>
        <div className={s.cover__wrapper}>
          <img src={film.large_cover_image} alt="film" />
        </div>
        <FilmInfoButton className={[s.btn, s.btnGreen].join(" ")} onClick={()=>setModalVisible(true)}>
          Download
        </FilmInfoButton>

        {/*<FilmInfoButton className={[s.btn, s.btnBlue].join(" ")}>*/}
        {/*  Watch Now*/}
        {/*</FilmInfoButton>*/}
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
                title={"Dowload " + film.title + torrent.quality + " Torrent"}
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
      <Modal torrents={film.torrents} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </div>
  );
};

export default FilmInfoContent;

import React from "react";
import s from "./FilmInfoContent.module.css";
import FilmInfoButton from "../../UI/Button/FilmInfoButtons/FilmInfoButton";
const FilmInfoContent = ({ film }) => {

  return (
    <div className={s.wrapper}>
      <div className={s.leftColumnWrapper}>
        <div className={s.cover__wrapper}>
          <img src={film.large_cover_image} alt="film" />
        </div>
        <FilmInfoButton className={[s.btn, s.btnGreen].join(" ")}>
          Download
        </FilmInfoButton>
        <FilmInfoButton className={[s.btn, s.btnBlue].join(" ")}>
          Watch Now
        </FilmInfoButton>
      </div>
      <div>
        <h1>{film.title}</h1>
        <div>{film.year}</div>
        <div>
          {film.genres?.map((genre) => (
            <div key={genre}>{genre}</div>
          ))}
        </div>
        <div>
          Available in:
          <div>
            {film.torrents?.map((torrent) => (
              <div key={torrent.quality}>{torrent.quality}</div>
            ))}
          </div>
        </div>
        <div>Likes {film.like_count}</div>
        <div>Rotten Critick</div>
        <div>Rotten Audience</div>
        <div>IMDB</div>
        <div>maping keywords</div>
      </div>
      <div>
        ряд 3<div>Similar Movies</div>
      </div>
    </div>
  );
};

export default FilmInfoContent;

import React from "react";
import useMovies from "../hooks/useMovies";
import imageURLGenerator from "../services/url-generator";
import "./banner.css";

const Banner = () => {
  const { data, isError, isLoading } = useMovies("/trending/all/week");
  const movie = data?.results[Math.floor(Math.random() * data.results.length)];
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${imageURLGenerator(movie?.backdrop_path!)}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.original_title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
    // <div className="banner">
    //   <img
    //     className="banner__image"
    //     src={imageURLGenerator(movie?.backdrop_path!)}
    //     alt=""
    //   />
    // </div>
  );
};

export default Banner;

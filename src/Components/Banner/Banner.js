import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageURL } from "../../constants/constants";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[getRandomInt(21)]);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        {/* <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>   
                </div>  */}
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;

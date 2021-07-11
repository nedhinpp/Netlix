import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageURL } from "../../constants/constants";
import YouTube from "react-youtube";
import { useHistory } from "react-router";

function RowPost(props) {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  // const handleMovie = (id) => {
  //   axios
  //     .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
  //     .then((response) => {
  //       if (response.data.results.length !== 0) {
  //         setUrlId(response.data.results[0]);
  //       }
  //     });
  // };
  const history = useHistory();

  const handleMovie = (obj) => {
    history.push("/viewPage", { obj });
  };

  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState();
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("401 Error occured");
      });
  }, []);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <div className="posterContainer">
            <img
              onClick={() => handleMovie(obj)}
              className={props.isSmall ? "smallPoster" : "poster"}
              src={`${imageURL + obj.backdrop_path}`}
              alt="Posters"
            />
            <div className="posterTitle">{obj.title}</div>
          </div>
        ))}
      </div>
      {/* {urlId && <YouTube opts={opts} videoId={urlId.key} />} */}
    </div>
  );
}

export default RowPost;

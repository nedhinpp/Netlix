import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./ViewPage.css";
import { API_KEY, imageURL } from "../../constants/constants";
import axios from "../../axios";
import YouTube from "react-youtube";
function ViewPage(props) {
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }
      });
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const [urlId, setUrlId] = useState();
  return (
    <div>
      <NavBar />
      <div className="viewContent">
        <div
          style={{
            backgroundImage: `url(${
              imageURL + props.location.state.obj.backdrop_path
            })`,
          }}
          className="banner"
        >
          <div className="content">
            <h1 className="title">{props.location.state.obj.title}</h1>
            <p>
              Rating: {props.location.state.obj.vote_average} &nbsp;&nbsp;&nbsp;
              Rating Count : {props.location.state.obj.vote_count}
            </p>
            <p style={{ width: "50%" }}>
              Released on :&nbsp; {props.location.state.obj.release_date}
            </p>
            <div className="banner_buttons">
              <button
                className="button"
                onClick={() => handleMovie(props.location.state.obj.id)}
              >
                Play
              </button>
              {/* <button className="button">My List</button> */}
            </div>

            <p style={{ width: "50%" }} className="description">
              {props.location.state.obj.overview}
            </p>
          </div>
          <div className="fade_bottom"></div>
        </div>
      </div>
      <div className="youtubeContainer">
        {urlId && <YouTube opts={opts} videoId={urlId.key} />}
      </div>
    </div>
  );
}

export default ViewPage;

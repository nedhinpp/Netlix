import React from "react";
import { useHistory } from "react-router-dom";
import "./Startup.css";
import image from "./image.png";

function Startup() {
  const history = useHistory();
  return (
    <div
      style={{
        backgroundImage: `url("${image}")`,
      }}
      className="fullBanner"
    >
      <h4 className="adLine">Unlimited movies, TV shows and more. </h4>
      <h2 className="adLine2">Watch anywhere. Cancel anytime.</h2>
      <div className="ad_buttons">
        <button
          className="sgbutton"
          onClick={() => {
            history.push("/login");
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Startup;

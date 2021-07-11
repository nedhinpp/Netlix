import React, { useState, useContext } from "react";
import "./Login.css";
import firebase from "../../firebase/config";
import { Link, useHistory } from "react-router-dom";
import { FirebaseContext } from "../../store/FirebaseContext/context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        e.preventDefault();
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <div>
      <div id="container">
        <form onSubmit={handleLogin}>
          <div className="label-container"></div>

          <div className="box-container" id="email-container">
            <input
              className="field"
              id="email-field"
              name="email"
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label" id="email-label"></label>
          </div>
          <div className="inputError" id="email-inputError"></div>
          <div className="box-container" id="pwd-container">
            <input
              className="field"
              id="pwd-field"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label" id="pwd-label"></label>
          </div>
          <div className="inputError" id="pwd-inputError"></div>
          <div className="box-container" id="login-button-container">
            <input id="login-button" type="submit" value="Log In" />
          </div>
          <div className="sign-up">
            <span id="sign-up"></span>
            <Link className="sign-up-link" id="sign-up-link" to="./signup">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

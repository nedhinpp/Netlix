import React, { useState, useContext } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../store/FirebaseContext/context";
import { useHistory } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: email });
      })
      .then(() => {
        history.push("/login");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <div>
      <div id="container">
        <form onSubmit={handleSubmit}>
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
            <input id="login-button" type="submit" value="Sign Up" />
          </div>
          <div className="sign-up">
            <span id="sign-up"></span>
            <Link className="sign-up-link" id="sign-up-link" to="./login">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

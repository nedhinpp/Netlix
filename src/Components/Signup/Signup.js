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

  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});
  const [signupError, setSignUpError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = doValidation();
    if (isValid) {
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

          setSignUpError(errorMessage);
        });
    }
  };

  const doValidation = () => {
    const emailError = {};
    const passwordError = {};
    let isValid = true;

    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!pattern.test(email)) {
      emailError.emailErrorText = "Please enter a valid email Id";
      isValid = false;
    }
    if (password.trim().length < 8) {
      passwordError.passwordErrorText =
        "Please enter a password which is having minimum 8 characters.";
      isValid = false;
    }
    setEmailError(emailError);
    setPasswordError(passwordError);
    return isValid;
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
              // onChange={handleChange.bind(this, "email")}
              // value={state.fields["email"]}
            />
            <label className="label" id="email-label"></label>
          </div>
          <span style={{ color: "red" }}>{emailError.emailErrorText}</span>
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
              // onChange={this.handleChange.bind(this, "password")}
              // value={this.state.fields["password"]}
            />
            <label className="label" id="pwd-label"></label>
            <span style={{ color: "red" }}>
              {passwordError.passwordErrorText}
            </span>
          </div>

          <div className="inputError" id="pwd-inputError">
            <span style={{ color: "red" }}>{signupError}</span>
          </div>
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

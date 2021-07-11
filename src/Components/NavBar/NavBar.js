import React, { useEffect, useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import firebase from "../../firebase/config";
import { useHistory } from "react-router-dom";
import {
  AuthContext,
  FirebaseContext,
} from "../../store/FirebaseContext/context";

function NavBar() {
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <span className="loginName">
        {" "}
        {user ? (
          user.displayName
        ) : (
          <Link className="sign-up-link" to="./login">
            Log In
          </Link>
        )}
      </span>
      <span className="logout">
        {user && (
          <img
            onClick={() => {
              firebase.auth().signOut();
              history.push("/");
            }}
            className="avatar dropbtn"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Avatar"
          />
        )}
      </span>
    </div>
  );
}

export default NavBar;

import React, { useEffect, useContext } from "react";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import Index from "../Index/Index";
import Startup from "../Startup/Startup";

import {
  AuthContext,
  FirebaseContext,
} from "../../store/FirebaseContext/context";

function Home() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <NavBar />
      {user ? <Index /> : <Startup />}
    </div>
  );
}

export default Home;

import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import ViewPage from "./Components/ViewPage/ViewPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/viewPage" component={ViewPage}></Route>
      </Router>
    </div>
  );
}

export default App;

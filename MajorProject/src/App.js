import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./component/Chat";
import "./App.css";
import MainHeader from "./component/Navigation/MainHeader";
import Login from "./component/Authentication/Login";
import SignUp from "./component/Authentication/SignUp";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import About from "./component/About";
import Feature from "./component/Feature";
import firebase from "./firebase";
import Privacy from "./component/Privacy";
import Post from "./component/Post";
import MemeGen from "./component/memeGen/Components/MemeGen";
import SideNav from "./component/Navigation/SideNav/Index";
import Index from "./component/HomePage/Index";

const App = () => {
  const [user, setUser] = useState(null);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  if (user) {
    return (
      <div>
        <Router>
          <SideNav />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route exact path="/rooms/:roomId/:postId">
              <Post />
            </Route>
            <Route exact path="/meme" component={MemeGen} />
          </Switch>
        </Router>
      </div>
    );
  } else {
    return (
      <div>
        <Router>
          <MainHeader />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/features" component={Feature} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
};

export default App;

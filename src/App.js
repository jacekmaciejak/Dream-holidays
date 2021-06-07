import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ArticleContainer from "./components/Article/ArticleContainer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wycieczki" component={Rooms} />
        <Route exact path="/wycieczki/:slug" component={SingleRoom} />
        <Route exact path="/blog" component={ArticleContainer} />
        <Route exact path="/kontakt" component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

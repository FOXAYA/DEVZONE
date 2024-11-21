import React, { Component } from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";


import "./App.css";
class App extends Component {
  render() {
    return (
      <>
       <Header />
       <Home />
            <Footer />
      </>
    );
  }
}

export default App;

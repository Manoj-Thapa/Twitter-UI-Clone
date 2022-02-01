import React from "react";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Right from "./components/right/Right";
import "./App.css";

const App = () => {
  return (
    <div id="container">
      <div id="nav-box">
        <Navbar />
      </div>
      <Main />
      <Right />
    </div>
  );
};

export default App;

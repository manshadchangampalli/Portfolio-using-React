import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <Navbar />
      </div>

      <div className="mainContent">
        <div className="content">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;

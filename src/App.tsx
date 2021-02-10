import React from "react";
import "./App.css";
import Control from "./components/Control";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="container-fluid my-4">
      <div className="col-sm col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
        <h1>Game of Life</h1>
        <p>A simulation of Conway's Game of Life using React & Redux</p>
        <p>
          <a href="https://github.com/mojaouhari/game-of-life">Check out the source code on Github</a>
        </p>
        <Control />
        <Grid />
      </div>
    </div>
  );
}

export default App;

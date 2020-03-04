import React from "react";
import "./App.css";
import PlayerInfo from "../PlayerInfo";

function App({ players }) {
  const [p1, p2] = players;
  return (
    <div className="App">
      <header className="App-header">Eurosport Test</header>
      <div className="container">
        {p1 ? <PlayerInfo {...p1} /> : null}
        <div className="vs">VERSUS</div>
        {p2 ? <PlayerInfo {...p2} /> : null}
      </div>
    </div>
  );
}

export default App;

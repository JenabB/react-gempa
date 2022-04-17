import React from "react";

import "./App.css";
import { Quake } from "./features/quake/Quake";

function App() {
  return (
    <div className="App">
      <header className="bg-blue-800 p-4 text-white">
        <h1 className="text-xl">Gempa Terkini</h1>
      </header>
      <Quake />
    </div>
  );
}

export default App;

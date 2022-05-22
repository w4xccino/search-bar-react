import "./App.css";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";
function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Book Name... " data={BookData} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const APP_ID = "35c5953e";
  const APP_KEY = "ea5f3acad8cebe26da2702ae3bcc5271";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, SetCounter] = useState(0);

  useEffect(() => {
    console.log("Effect has been run");
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button className="search-bar" type="submit">
          Search
        </button>
      </form>
      <h1 onClick={() => SetCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const APP_ID = "11265b5a";
  const APP_KEY = "ebdcf96444e3dfcacb68a3d92c393425";
  
  const [counter, SetCounter] = useState(0);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

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

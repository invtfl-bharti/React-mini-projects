import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setData] = useState({
    firstname: "name",
    
  })

  function changeHandler(event) {


  };
  return (
    <div className="App">
      <form>
        <input type="text" name = "firstname" placeholder="First Name"/>
      </form>
    </div>
  );
}

export default App;

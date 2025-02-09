import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  
  async function fetchData() {
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output);
    }
    catch (err) {
      
    }
    }
  
  
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <Navbar />
      <Filter filterData = {filterData}/>
      <Cards/>
    </div>
  );
}

export default App;

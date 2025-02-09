import logo from "./logo.svg";
import "./App.css";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something went wrong");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>
      
        <div className="bg-bgDark2">
          <div>
            <Filter filterData={filterData} />
          </div>
          <div className="flex flex-wrap justify-center items-center w-11/12 mx-auto max-w-[1200px] min-h-[50vh]">
            {loading ? <Spinner /> : <Cards courses={courses} />}
          </div>
        </div>

    </div>
  );
}

export default App;

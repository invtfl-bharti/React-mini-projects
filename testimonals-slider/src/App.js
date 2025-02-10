import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div>
        <h1 className="font-bold text-4xl">Our Testimonals</h1>
        <div className="bg-violet-400 h-[10px] w-[1/5] mt-1"></div>
        <Testimonial reviews={reviews}/>
       </div>
    </div>
  );
};

export default App;

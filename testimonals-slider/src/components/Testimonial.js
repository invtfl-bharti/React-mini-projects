import React from "react";
import Card from "./Card";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-300 hover:shadow-lg">
      <Card review={reviews[index]}></Card>

      <div className="flex gap-3 text-3xl mt-10 text-violet-400 mx-auto font-bold">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>

      <div>
        <button
          onClick={surpriseHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 text-white rounded-md px-12 py-4 mt-9 text-2xl font-bold cursor-pointer hover:shadow-lg"
        >
          Suprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;

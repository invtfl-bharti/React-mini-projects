import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  let courses = props.courses;
  const [likedCourses, setLikedCourses] = useState([]);
  let category = props.category;

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4 text-white mt-4">
      {getCourses().map((course) => (
        <Card
          className=""
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;

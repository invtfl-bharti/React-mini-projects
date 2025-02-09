import React from 'react'
import Card from './Card';

const Cards = ({ courses }) => {
    let allCourses = [];

    // returns you a list of all courses recieved from the api response 
    const getCourses = () => {
        Object.values(courses).forEach((coursesCategory) => {
            coursesCategory.forEach((courses) => {
                allCourses.push(courses);
               })
        })
        return allCourses;
    }
  return (
    <div>
          {
              getCourses().map((course) => {
                 return <Card key={course.id} course = {course}/>
              })
      }
    </div>
  )
}

export default Cards

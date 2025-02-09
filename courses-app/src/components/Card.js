import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler() {
    // logic
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        // it is non-empty
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="bg-bgDark w-[320px] rounded-md overflow-hidden bg-opacity-80">
      <div className="relative">
        <img src={course.image.url} />

        <div className="w-[40px] h-[40px] rounded-full  grid place-items-center bg-white absolute bottom-3 right-2">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLikePlaceholder fontSize="1.75rem" />
            ) : (
              <FcLike fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-xl font-bold leading-6">{course.title}</p>
              <p className="mt-2 font-semibold">{
                  course.description.length > 100 ? (course.description.substr(0, 100)) + "..." : (course.description)
              }</p>
      </div>
    </div>
  );
};

export default Card;

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event) {
  //   // console.log("Printing First Name");
  //   // console.log(event.target);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   // console.log("Printing Last Name");
  //   // console.log(event.target);

  //   setLastName(event.target.value);
  // }
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
    isVisible: true,
  });
  console.log(formData);

  function changeHandler(event) {
    setFormData((prevFromData) => {
      return {
        ...prevFromData,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <div className="App">
      <form>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={changeHandler}
          value={formData.firstname}
        />

        <br></br>
        <br></br>
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={changeHandler}
          value={formData.lastname}
        />

        <br></br>
        <br></br>
        <input
          type="email"
          placeholder="Enter your email here"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br></br>
        <br></br>
        <textarea
          placeholder="Enter your comments here"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br></br>
        <br></br>
        <input type="checkbox" onChange={changeHandler} name="isVisible" id="isVisible" />

        <label htmlFor='isVisible'>Am I visible?</label>
      </form>
    </div>
  );
}

export default App;

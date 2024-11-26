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
    isVisible: false,
    mode: "",
    unmode: "",
    favCar: "",
  });
  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFromData) => {
      return {
        ...prevFromData,
        [name]: type === "checkbox" ? checked : value,
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
          checked={formData.isVisible}
        />
        <br></br>
        <br></br>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />

        <label htmlFor="isVisible">Am I visible?</label>

        <br></br>
        <br></br>

        {/* Radio */}

        {/* Drop Down */}

        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />

          <label htmlFor="Online-Mode">Online Mode </label>

          <br></br>
          <br></br>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />

          <label htmlFor="Offline-Mode">Offline Mode </label>
        </fieldset>

        <select
          name="favCar"
          id="favCar"
          onChange={changeHandler}
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Range Rover">Range Rover</option>
        </select>

        <label htmlFor="'favCar"> Tell me your favourite car?</label>

        <br></br>
        <br></br>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

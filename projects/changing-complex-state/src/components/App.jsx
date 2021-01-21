import React, { useState } from "react";

function App() {

  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");
  const [name, setName] = useState({
    fName: '',
    lName: ''
  });

  const handleSubmit = (event) => {
    console.log("Submit Success!");
    event.preventDefault()
  }

  const handleChange = (event) => {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    const {value, name} = event.target;

    // Allows you to access the previous state
    // by using a banana var, which can then
    // be used to keep the shape of the object
    // by filling in parts that don't change.
    setName(prevValue => {
      if ( name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if ( name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    })

  }

  return (
    <div className="container">
      <h1>Hello {name.fName} {name.lName}</h1>
      <form onSubmit={handleSubmit}>
        <input name="fName" onChange={handleChange} placeholder="First Name" />
        <input name="lName" onChange={handleChange} placeholder="Last Name"  />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

import React, {useState} from "react";

function App() {

  const [name, setName] = useState();
  const [header, setHeader] = useState("");

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    setHeader(name)
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1> Hello {header}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="What's your name?" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

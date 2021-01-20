import React, { useState } from "react";

function App() {

  const [heading, setHeading] = useState("Hello")
  const [isMousedOver, setMousedOver] = useState(false);

  const clickHandler = () => {
    setHeading("Submitted")
  }

  const handleMouseOver = () => {
    setMousedOver(true)
  }

  const handleMouseOut = () => {
    setMousedOver(false);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
        style={{ backgroundColor: isMousedOver?'black':'white' }}
        onClick={clickHandler} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
          Submit
      </button>
    </div>
  );
}

export default App;

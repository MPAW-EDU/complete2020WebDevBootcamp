import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count => ++count);
  }

  const decrement = () => {
    setCount(count => --count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )

}

export default App;

import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(null);

  const getCurrentTime = () => {
    setInterval(updateTime, 1000)
    let time = new Date().toLocaleTimeString('en-GB');
    return time;
  }

  const updateTime = () => {
    setTime(getCurrentTime)
    
  }

  return (
    <div className="container">
      <h1>{time||"00:00:00 AM"}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

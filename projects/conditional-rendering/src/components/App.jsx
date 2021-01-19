
import React from "react";
import Login from './Login';
import Success from './Success';

let isLoggedIn = false;


const checkLoggedIn = () => {
  return isLoggedIn?<Success/>:<Login/>;
}

function App() {
  return (
    <div className="container">
      {checkLoggedIn()}
    </div>
  );
}

export default App;

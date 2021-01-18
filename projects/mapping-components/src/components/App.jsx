import React from "react";
import Deck from './Deck';
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Deck contacts={contacts}/>

    </div>
  );
}

export default App;

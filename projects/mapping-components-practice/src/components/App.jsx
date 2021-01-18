import React from "react";
import emojipedia from '../emojipedia';
import Dictionary from './Dictionary';

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <Dictionary page={emojipedia} />
    </div>
  );
}

export default App;

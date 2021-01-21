import React, { useState } from "react";

function App() {

  const [list, setList] = useState([]);
  const [entry, setEntry] = useState("");
  let isEmpty = () => {
    return (
      entry===undefined||entry===null||entry[0]===" "
    )
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setEntry(value)
    // console.log(list);
  }

  const handleSubmit = (event) => {
    if(isEmpty) {
      setList(prevList => ([...prevList, entry]))
    }
    setEntry("");
    // console.log(entry);
    // event.preventDefault();
  }

//  const testList = ['apple', 'orange', 'grapefruit']

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input minLength="1" type="text" onChange={handleChange} value={entry}/>
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            list.map(listItem => {
              return (
                <li key={listItem}>{listItem}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;

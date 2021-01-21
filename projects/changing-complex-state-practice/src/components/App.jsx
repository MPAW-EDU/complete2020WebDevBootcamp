import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleChange = (event) => {
    const {value, name} = event.target;

    setContact(prevState => {
      if(name === 'fName'){
        return {
          fName: value,
          lName: prevState.lName,
          email: prevState.email
        };
      } else if(name === 'lName'){
        return {
          fName: prevState.fName,
          lName: value,
          email: prevState.email
        };
      } else if(name === 'email'){
        return {
          fName: prevState.fName,
          lName: prevState.lName,
          email: value
        }
      }
    })

  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handleChange} value={contact.fName} placeholder="First Name" />
        <input name="lName" onChange={handleChange} value={contact.lName} placeholder="Last Name" />
        <input name="email" onChange={handleChange} value={contact.email} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

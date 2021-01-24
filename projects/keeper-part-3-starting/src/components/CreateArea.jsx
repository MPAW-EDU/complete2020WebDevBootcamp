import React, { useState } from "react";

function CreateArea(props) {

  const [ note, setNote ] = useState({
    title:"",
    content:""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]:value
      };
    }) ;
  }

  const submitNote = (event) => {
    props.addNote(note);
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

import React, { useState } from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded ] = useState(false);

  const expandBox = () => {
    setExpanded(true)
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {
          isExpanded&&
          <input
          name="title"
          onChange={handleChange}
          onClick={expandBox}
          value={note.title}
          placeholder="Title"
          autoFocus={true}
        />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expandBox}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?"3":"1"}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <NoteAddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

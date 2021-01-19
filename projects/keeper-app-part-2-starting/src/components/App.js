import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from '../notes';

// Helper Functions
const createNote = (note) => {
  return <Note note={note} key={note.id} />
}

function App() {
  return (
    <div>
      <Header />
        {
          notes.map(createNote)
        }
      <Footer />
    </div>
  );
}

export default App;

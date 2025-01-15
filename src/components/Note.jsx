import React from "react";
import Entry from "./Entry";
import notes from "../notes";

function createNote(note){
  return (
    <Entry 
      key={note.id}
      title={note.title}
      content={note.content}
    />
  )
}

function Note() {
  return (
    <div>
      {notes.map(createNote)}
    </div>
  );
}

export default Note;

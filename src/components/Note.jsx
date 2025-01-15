import React from "react";
import Entry from "./Entry";

function noteEntry(note){
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
    <div className="note">
      
    </div>
  );
}

export default Note;

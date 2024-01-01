import React from "react";
import { MdDelete } from "react-icons/md";
import "./SideBar.css";

const SideBar = ({ notes, setCurrNote, currNote, onDeleteNote, newNotes }) => {
  return (
    <>
      <section className="sideBar">
        <div className="sideBarHeader">
          <h1>Notes</h1>
          <button className="sideBarBtn" onClick={newNotes}>
            +
          </button>
        </div>

        <ul className="sideBarNotes">
          {notes.map((note, i) => {
            return (
              <li
                className={
                  "title " + (note.id === currNote.id ? "selectedNotes" : "")
                }
                key={i}
                onClick={() => setCurrNote(note.id)}
              >
                <span>{note.body.split(`\n`)[0]}</span>
                <button
                  className="deleteBtn"
                  onClick={(e) => onDeleteNote(e, note.id)}
                >
                  <MdDelete />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default SideBar;

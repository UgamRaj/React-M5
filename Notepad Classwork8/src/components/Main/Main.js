import { useState, useEffect } from "react";
import "./Main.css";
import SideBar from "../SideBar/SideBar";
import Edit from "../Editer/Edit";
import Split from "react-split";
import LandingPage from "../LandingPage";

const Main = () => {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currNoteId, setCurrNoteId] = useState((notes[0] && notes[0].id) || "");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //! Create new notes
  const onCreateNotesHandler = (inputText) => {
    const newNote = {
      id: Math.floor(Math.random() * 10000),
      body: `# Enter title here \n\n`,
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrNoteId(newNote.id);
  };

  //! Delete Function
  const onDeleteNote = (event, noteId) => {
    event.stopPropagation();
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  const findCurrentNote = () => {
    return (
      notes.find((note) => {
        return note.id === currNoteId;
      }) || notes[0]
    );
  };

  //! Update notes form editer
  const updateNoteFromEditor = (notesFromEditer, id) => {
    setNotes((oldNotes) => {
      let arr = [];
      for (let i = 0; i < oldNotes.length; i++) {
        if (oldNotes[i].id === currNoteId) {
          arr.unshift({ ...oldNotes[i], body: notesFromEditer });
        } else {
          arr.push(oldNotes[i]);
        }
      }
      return arr;
    });
    // const newNotes = [...notes];
    // const indx = notes.findIndex((note) => note.id === id);

    // newNotes[indx].body = notesFromEditer;

    // setNotes(newNotes);
  };

  return (
    <main className="main">
      {notes.length <= 0 ? (
        <LandingPage
          // setUserInfo={setUserId}
          onCreateNotesHandler={onCreateNotesHandler}
        />
      ) : (
        <div className="mainIntroPage">
          <Split sizes={[15, 85]} direction="horizontal" className="split">
            <SideBar
              notes={notes}
              onDeleteNote={onDeleteNote}
              newNotes={onCreateNotesHandler}
              setCurrNote={setCurrNoteId}
              currNote={findCurrentNote()}
            />
            {currNoteId && notes.length > 0 && (
              <Edit
                updateNote={updateNoteFromEditor}
                currNote={findCurrentNote()}
                notes={notes}
              />
            )}
          </Split>
        </div>
      )}
    </main>
  );
};

export default Main;

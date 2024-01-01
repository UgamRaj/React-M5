import { useEffect, useState } from "react";
import "./Editer.css";
import Markdown from "../Markdown";

const Edit = ({ updateNote, currNote, notes }) => {
  // const [textContent, setTextContent] = useState("# Enter title here");
  const [newText, setNewText] = useState(currNote.body || "# Enter title here");
  const [ismarkdown, setIsMarkDown] = useState(false);

  const onCreateNotes = (e) => {
    // setTextContent(e.target.value);
    setNewText(e.target.value);
    updateNote(e.target.value, currNote.id);
    // (e) => seTextContent(e.target.value)
  };

  const insertText = (type) => {
    if (type === "h") {
      // setTextContent((prevstate) => `***${prevstate}***`);
      setNewText((prevstate) => `***${prevstate}***`);
    } else if (type === "b") {
      // setTextContent((prevstate) => `**${prevstate}**`);
      setNewText((prevstate) => `**${prevstate}**`);
    } else if (type === "i") {
      // setTextContent((prevstate) => `*${prevstate}*`);
      setNewText((prevstate) => `*${prevstate}*`);
    } else if (type === "strikeThrough") {
      // setTextContent((prevstate) => `*${prevstate}*`);
      setNewText((prevstate) => `[${prevstate}](http://)`);
    }
  };

  const newPageRander = () => {
    setIsMarkDown(true);
  };

  return (
    <>
      {!ismarkdown ? (
        <div className="editor">
          <div className="editionHeader">
            <button className={"WriteBtn " + (!ismarkdown ? "borderBtn" : "")}>
              write
            </button>
            <button className="previewBtn" onClick={newPageRander}>
              Preview
            </button>
            <div className="iconContainer">
              <img src="/h.svg" alt="H" onClick={() => insertText("h")} />
            </div>
            <div className="iconContainer">
              <img src="/b.svg" alt="b" onClick={() => insertText("b")} />
            </div>
            <div className="iconContainer">
              <img src="/i.svg" alt="i" onClick={() => insertText("i")} />
            </div>
            <div className="iconContainer">
              <img
                src="/strikeThrough.svg"
                alt="strikethrough"
                onClick={() => insertText("strikeThrough")}
              />
            </div>
            <div className="iconContainer">
              <img
                src="/link.svg"
                alt="link"
                onClick={() => insertText("link")}
              />
            </div>
            <div className="iconContainer">
              <img
                src="/quote.svg"
                alt="quote"
                onClick={() => insertText("quote")}
              />
            </div>
            <div className="iconContainer">
              <img
                src="/code.svg"
                alt="code"
                onClick={() => insertText("code")}
              />
            </div>
            <div className="iconContainer">
              <img
                src="/image.svg"
                alt="images"
                onClick={() => insertText("image")}
              />
            </div>
            <div className="iconContainer">
              <img
                src="/listul.svg"
                alt="listul"
                onClick={() => insertText("listul")}
              />
            </div>
            <div className="iconContainer">
              <img
                src="/listol.svg"
                alt="listol"
                onClick={() => insertText("listol")}
              />
            </div>
            <div className="iconContainer">
              <img
                src="/task.svg"
                alt="task"
                onClick={() => insertText("task")}
              />
            </div>
          </div>
          <div className="editorBox">
            <textarea
              onChange={onCreateNotes}
              value={newText}
              name=""
            ></textarea>
          </div>
        </div>
      ) : (
        <Markdown
          textContent={newText}
          setIsMarkDown={setIsMarkDown}
          ismarkdownTrue={ismarkdown}
        />
      )}
    </>
  );
};

export default Edit;

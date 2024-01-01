import React from "react";
import ReactMarkdown from "react-markdown";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const Markdown = ({ textContent, setIsMarkDown, ismarkdownTrue }) => {
  const pageHandler = () => {
    setIsMarkDown(false);
  };
  return (
    <div className="editor">
      <div className="editionHeader">
        <button className="WriteBtn" onClick={pageHandler}>
          write
        </button>
        <button className={"previewBtn " + (ismarkdownTrue ? "borderBtn" : "")}>
          Preview
        </button>
      </div>
      <div className="editorBox">
        <ReactMarkdown>{textContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Markdown;

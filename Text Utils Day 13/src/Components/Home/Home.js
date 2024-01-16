import "./Home.css";
import TextEditor from "../TextEditor/TextEditor";
import { useReducer, useState } from "react";

const Home = () => {
  const [isCopied, setIsCopied] = useState(false);

  const initialState = {
    content: "",
  };

  const reducefun = (initialState, { type, payload }) => {
    switch (type) {
      case "UPDATE_CONTENT":
        return { ...initialState, content: payload };
      case "CLEAR_ALL":
        return { ...initialState, content: "" };
      case "UPPERCASE":
        return { ...initialState, content: initialState.content.toUpperCase() };
      case "LOWERCASE":
        return { ...initialState, content: initialState.content.toLowerCase() };
      case "COPYTOCLIPBOARD":
        //! Copied clipboard
        navigator.clipboard.writeText(initialState.content);
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
          console.log(isCopied);
        }, 2000);

        return { ...initialState, content: initialState.content };
      case "REMOVEEXTRASPACES":
        return {
          ...initialState,
          content: initialState.content.replace(/\s+/g, " ").trim(),
        };
      default:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducefun, initialState);
  console.log(isCopied);
  return (
    <>
      <div className="alertContainer">
        {isCopied && (
          <div className="alertBox">
            <p>
              <b>Success : </b>Copied the text : {state.content}
            </p>
          </div>
        )}
      </div>

      <div className="home">
        <TextEditor state={state} dispatch={dispatch} />
      </div>
    </>
  );
};

export default Home;

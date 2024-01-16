import Button from "../Button/Button";
import "./TextEditor.css";

const TextEditor = ({ state, dispatch }) => {
  const handleContentChange = (e) => {
    dispatch({ type: "UPDATE_CONTENT", payload: e.target.value });
  };

  return (
    <>
      <div className="textEditorConatiner">
        <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
        <div>
          <h4>Enter Your Text Here:</h4>
          <textarea
            className="textinput"
            onChange={handleContentChange}
            value={state.content}
            cols="30"
            rows="10"
          ></textarea>
          <div className="btnContainer">
            <Button
              title={"Convert UpperCase"}
              contentType="UPPERCASE"
              dispatch={dispatch}
              state={state}
              btnClass="blueBtn"
            />
            <Button
              title={"Convert LowerCase"}
              contentType="LOWERCASE"
              dispatch={dispatch}
              state={state}
              btnClass="blueBtn"
            />
            <Button
              title={"Clear Text"}
              contentType="CLEAR_ALL"
              dispatch={dispatch}
              state={state}
              btnClass="clearBtn"
            />
            <Button
              title={"Copy To Clipboard"}
              contentType="COPYTOCLIPBOARD"
              dispatch={dispatch}
              state={state}
              btnClass="copyBtn"
            />
            <Button
              title={"Remove Extra Spaces"}
              contentType="REMOVEEXTRASPACES"
              dispatch={dispatch}
              state={state}
              btnClass="blueBtn"
            />
          </div>

          <div className="summeryContainer">
            <h2>Summery Of Your Text</h2>
            <p>
              Nummber of words :
              {state.content.split(/\s+/).filter((word) => word !== "").length}
            </p>
            <p>Number of charecters : {state.content.length}</p>
            <p>
              Reading Time:{" "}
              {state.content.split(/\s+/).filter((word) => word !== "").length *
                0.008}
            </p>
          </div>
          <div className="previewDoc">
            <h3>Preview Document</h3>
            <textarea
              value={state.content}
              name=""
              id=""
              cols="30"
              rows="8"
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextEditor;

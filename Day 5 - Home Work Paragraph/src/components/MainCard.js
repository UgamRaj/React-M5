import "./Main.css";
import Paragraph from "./Paragraph";
import paragraph from "../paragraph.json";
import { useState } from "react";

const MainCard = () => {
  const [inputCount, setInputCount] = useState(0);
  const [changeCount, setChangeCount] = useState(0);

  const onInputChange = (e) => {
    // console.log(e.target.value);
    const searchKey = e.target.value;
    setInputCount(searchKey);
  };

  const onClickHandler = () => {
    console.log(inputCount);
    if (inputCount < 0) {
      alert("Ayyo ! you know that you wrote negative input 😵");
      setChangeCount(1);
    } else if (+inputCount === 0) {
      alert("Ayyo ! you know that you wrote zero input 😵");
      setChangeCount(1);
    } else if (inputCount > 8) {
      alert(
        " Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀"
      );
      setChangeCount(1);
    } else {
      setChangeCount(inputCount);
    }
  };

  const onClearHandler = () => {
    setChangeCount(0);
    setInputCount(0);
  };

  return (
    <div className="main">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <div className="input-container">
        <h4>Paragraphs:</h4>
        <input type="number" value={inputCount} onChange={onInputChange} />
        <button onClick={onClickHandler}>GENERATE</button>
        <button className="clearBtn" onClick={onClearHandler}>
          CLEAR ALL
        </button>
      </div>
      <Paragraph paragraph={paragraph} inputNum={changeCount} />
    </div>
  );
};

export default MainCard;

import { useEffect, useState } from "react";
import axios from "axios";
import Textarea from "./Textarea";
import AllLanguage from "./AllLanguage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TextToTranslator = () => {
  const [languages, setLanguages] = useState("");
  const [fromLanguage, setFromLanguage] = useState("");
  const [toLanguage, setToLanguage] = useState("");
  const [translated, setTranslated] = useState("");
  const [textToTranslate, setTextToTranslate] = useState("");

  const getAllLanguages = async () => {
    const options = {
      method: "GET",
      url: "https://text-translator2.p.rapidapi.com/getLanguages",
      headers: {
        "X-RapidAPI-Key": "ebc555d38fmshcb1ee9462426945p189df0jsn9bdb9e3dbcb1",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setLanguages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllLanguages();
  }, []);

  //   ! translate api
  const translate = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", fromLanguage);
    encodedParams.set("target_language", toLanguage);
    encodedParams.set("text", textToTranslate);

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",

      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "f16670ae6dmsh97918584da006b1p1cf458jsn1585689ea44c",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      setTranslated(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fromHandler = (value) => {
    setFromLanguage(value);
  };
  const toHandler = (value) => {
    setToLanguage(value);
  };
  const changeHandler = (value) => {
    setTextToTranslate(value);
  };

  return (
    <div>
      <h1 className="mainHeading">Text Translator</h1>

      <AllLanguage
        data={languages}
        from={fromLanguage}
        to={toLanguage}
        fromHandler={fromHandler}
        toHandler={toHandler}
      />
      <div className="textAreaContainer">
        <Textarea changeHandler={changeHandler} change={textToTranslate} />
        <div>
          <p className="">
            {translated && translated.data && translated.data.translatedText ? (
              <p className="translated">{translated.data.translatedText}</p>
            ) : (
              <p className="translated">Result</p>
            )}
          </p>
        </div>
      </div>
      <div className="btnContainer">
        <button onClick={translate} className="">
          Translate
        </button>
      </div>

      <div className="">
        {!fromLanguage || !toLanguage ? (
          <>
            <p className="warningText">Please Select Both Langauges</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TextToTranslator;

import { useEffect, useState } from "react";
import "./App.css";
import Progressbar from "./components/Progressbar";

function App() {
  const [progressValue, setProgressValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setProgressValue((preValue) => preValue + 1);
    }, 100);
  }, []);

  return (
    <div className="App">
      <h1 className="colorText">Progress Bar</h1>
      <Progressbar
        value={progressValue}
        onCompleteHandler={() => setSuccess(true)}
      />
      <p className="colorText">{success ? "complete !" : "loading ..."}</p>
    </div>
  );
}

export default App;

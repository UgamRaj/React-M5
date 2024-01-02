import { useEffect, useState } from "react";

const Card = ({
  quNo,
  question,
  incorrect_answers = [],
  correct_answer,
  onNextQue,
}) => {
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  // const allQues = ["...incorrect_answers", "correct_answer"];
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setTimer((prevCounter) =>
        prevCounter > 0 ? prevCounter - 1 : prevCounter
      );
    }, 1000);
    // console.log(timer);

    return () => clearTimeout(timerID);
  }, [timer, quNo]);

  const allQues = [...incorrect_answers, correct_answer];
  const QuestionHandler = (indx = 0) => {
    onNextQue();
    if (correct_answer === allQues[indx]) {
      setCorrectAnsCount(correctAnsCount + 1);
    }
    setTimer(5);
    console.log(correctAnsCount, correct_answer);
  };
  return (
    <>
      {quNo <= 10 ? (
        <div className="CardMain">
          <h1>Quiz App</h1>
          <h2>Question {quNo}</h2>
          <p>{question}</p>

          <ul>
            {allQues.map((ques, i) => (
              <li key={i}>
                <button onClick={() => QuestionHandler(i)}> {ques}</button>
              </li>
            ))}
          </ul>

          <p>Time left {timer} seconds</p>
          <button onClick={() => QuestionHandler()}>Skip Question</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Ended</h2>
          <p>Your Score: {correctAnsCount}/10</p>
        </div>
      )}
    </>
  );
};

export default Card;

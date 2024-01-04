import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ allQuestions }) => {
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [timer, setTimer] = useState(5);
  const [indx, setIndex] = useState(0);
  const [isEndQuiz, setIsEndQuiz] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const currQuestion = allQuestions[indx];

  //! Countdown function
  useEffect(() => {
    const timerID = setTimeout(() => {
      setTimer((prevCounter) =>
        prevCounter > 0 ? prevCounter - 1 : prevCounter
      );
    }, 1000);
    // console.log(timer);

    return () => clearTimeout(timerID);
  }, [timer, indx]);

  const nextQuestion = () => {
    if (indx < allQuestions.length - 1) {
      setIndex(indx + 1);
      setTimer(5);
    } else {
      setIsEndQuiz(true);
      toast.success(`You attempted a total of ${attempt} questions`);
    }
  };

  const CorrectAnswer = () => {
    if (indx < 10) {
      setCorrectAnsCount(correctAnsCount + 1);
      nextQuestion();
      setAttempt(attempt + 1);
    } else {
      setIsEndQuiz(true);
      toast.success(`You attempted a total of ${attempt} questions`);
    }
  };

  const IncorrectAnswer = () => {
    if (indx < 10) {
      nextQuestion();
      setAttempt(attempt + 1);
    } else {
      setIsEndQuiz(true);
      toast.success(`You attempted a total of ${attempt} questions`);
    }
  };

  if (!currQuestion) {
    return <img src="/loader.svg" alt="Loading..." />;
  }

  return (
    <>
      {!isEndQuiz ? (
        <div className="CardMain">
          <h1>Quiz App</h1>
          <h2>Question {indx + 1}</h2>
          <div className="questionContainer">
            <p>{currQuestion.question}</p>
          </div>

          <ul>
            {currQuestion.incorrect_answers.map((ques, i) => (
              <li key={i}>
                <button onClick={IncorrectAnswer}> {ques}</button>
              </li>
            ))}
            <li>
              <button onClick={CorrectAnswer}>
                {currQuestion.correct_answer}
              </button>
            </li>
          </ul>

          <p>
            Time left <span className="timer"> {timer}</span> seconds
          </p>
          <button
            style={{ backgroundColor: "GrayText" }}
            onClick={nextQuestion}
          >
            Skip Question
          </button>
        </div>
      ) : (
        <div>
          <h2>Quiz Ended</h2>
          <p>Your Score: {correctAnsCount}/10</p>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Card;

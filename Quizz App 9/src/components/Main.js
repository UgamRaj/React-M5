import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Main = () => {
  const [quetion, setQuestions] = useState([
    {
      question:
        "The HBO series &quot;Game of Thrones&quot; is based on which series of books?",
      incorrect_answers: ["Aztecs", "Incas", "Toltecs"],
      correct_answer: "Mayans",
    },
  ]);
  const [indx, setIndex] = useState(0);
  const [newQuestion, setNewQuestions] = useState({});
  const [isLoding, setIsLoading] = useState(false);

  const onGetNewQuestion = () => {
    console.log(quetion);
    setNewQuestions(quetion[indx]);
  };
  useEffect(() => {
    onGetNewQuestion();
  }, [indx]);

  useEffect(() => {
    questionApi();
  }, []);

  const questionApi = async () => {
    try {
      const res = await axios.get(
        `https://opentdb.com/api.php?amount=10&type=multiple`
      );
      console.log(res.data.results);
      setQuestions(res.data.results);
      setIsLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.log("Rate limit exceeded. Waiting and retrying...");
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds (adjust as needed)
        return questionApi(); // Retry the request
      } else {
        console.log(error.message);
        setIsLoading(false);
      }
    }
  };

  const onNextQues = () => {
    // setIndex((prevState) => prevState + 1);
    setIndex(indx + 1);
    console.log(indx);
  };

  return (
    <div className="main">
      {isLoding ? (
        <img src="/loader.svg" alt="Loading..." />
      ) : (
        <div className="mainContent">
          <Card quNo={indx + 1} {...newQuestion} onNextQue={onNextQues} />
        </div>
      )}
    </div>
  );
};

export default Main;

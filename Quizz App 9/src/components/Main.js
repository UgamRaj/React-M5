import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Main = () => {
  const [questions, setQuestions] = useState([]);

  // const res = [
  //   {
  //     type: "multiple",
  //     difficulty: "hard",
  //     category: "Entertainment: Video Games",
  //     question:
  //       "What device allows Tracer to manipulate her own time in the game &quot;Overwatch&quot;?",
  //     correct_answer: "Chronal Accelerator",
  //     incorrect_answers: [
  //       "B.L.I.N.K",
  //       "Spacial Displacement Manipulator",
  //       "TMD (Time Manipulation Device)",
  //     ],
  //   },
  //   {
  //     type: "multiple",
  //     difficulty: "medium",
  //     category: "Geography",
  //     question:
  //       "Colchester Overpass, otherwise known as &quot;Bunny Man Bridge&quot;, is located where?",
  //     correct_answer: "Fairfax County, Virginia",
  //     incorrect_answers: [
  //       "Medford, Oregon",
  //       "Braxton County, Virgina",
  //       "Lemon Grove, California",
  //     ],
  //   },
  //   {
  //     type: "multiple",
  //     difficulty: "medium",
  //     category: "Entertainment: Film",
  //     question: "Who directed the 1973 film &quot;American Graffiti&quot;?",
  //     correct_answer: "George Lucas",
  //     incorrect_answers: [
  //       "Ron Howard",
  //       "Francis Ford Coppola",
  //       "Steven Spielberg",
  //     ],
  //   },
  //   {
  //     type: "multiple",
  //     difficulty: "hard",
  //     category: "Science &amp; Nature",
  //     question:
  //       "A comet&#039;s gaseous envelope (which creates the tail) is called what?",
  //     correct_answer: "The coma",
  //     incorrect_answers: ["The wake", "The backwash", "The ablative"],
  //   },
  //   {
  //     type: "multiple",
  //     difficulty: "medium",
  //     category: "Entertainment: Film",
  //     question:
  //       "Which director directed the movie &quot;Pan&#039;s Labyrinth&quot;?",
  //     correct_answer: "Guillermo Del Toro",
  //     incorrect_answers: [
  //       "Alfonso Cuar&oacute;n",
  //       "Alejandro Gonz&aacute;lez I&ntilde;&aacute;rritu",
  //       " Alejandro Jodorowsky",
  //     ],
  //   },
  //   {
  //     type: "multiple",
  //     difficulty: "easy",
  //     category: "Entertainment: Japanese Anime &amp; Manga",
  //     question: "Who is the author of the manga series &quot;Astro Boy&quot;?",
  //     correct_answer: "Osamu Tezuka",
  //     incorrect_answers: [
  //       "Mitsuteri Yokoyama",
  //       "Takao Saito",
  //       "Yoshihiro Tatsumi",
  //     ],
  //   },
  //   {
  //     type: "multiple",
  //     difficulty: "medium",
  //     category: "Geography",
  //     question:
  //       "The Principality of Sealand is an unrecognized micronation off the coast of what country?",
  //     correct_answer: "The United Kingdom",
  //     incorrect_answers: ["Japan", "Austrailia", "Argentina"],
  //   },
  //   {
  //     type: "multiple",
  //     difficulty: "medium",
  //     category: "Science: Computers",
  //     question: "What is the number of keys on a standard Windows Keyboard?",
  //     correct_answer: "104",
  //     incorrect_answers: ["64", "94", "76"],
  //   },
  //   {
  //     type: "multiple",
  //     difficulty: "medium",
  //     category: "Entertainment: Comics",
  //     question:
  //       "Who was the inspiration for Cuthbert Calculus in the Tintin series?",
  //     correct_answer: "Auguste Picard",
  //     incorrect_answers: ["Jacques Piccard", "Will Morris", "J. Cecil Maby"],
  //   },
  //   {
  //     type: "multiple",
  //     difficulty: "medium",
  //     category: "Entertainment: Japanese Anime &amp; Manga",
  //     question:
  //       "In &quot;To Love-Ru: Darkness&quot;, which of the girls attempt making a harem for Rito Yuuki?",
  //     correct_answer: "Momo Deviluke",
  //     incorrect_answers: [
  //       "Yami (Golden Darkness)",
  //       "Haruna Sairenji",
  //       "Mea Kurosaki",
  //     ],
  //   },
  // ];

  useEffect(() => {
    questionApi();
  }, []);

  const questionApi = async () => {
    try {
      const res = await axios.get(
        `https://opentdb.com/api.php?amount=10&type=multiple`
      );
      // console.log(res.data.results);
      const data = res.data.results;
      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="mainContent">
        <Card allQuestions={questions} />
      </div>
    </div>
  );
};

export default Main;

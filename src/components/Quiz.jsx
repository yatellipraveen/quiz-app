import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  function updateUserAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  let view;

  if (activeQuestionIndex === QUESTIONS.length) {
    view = <p>Congratulations!!! Finished Quiz!</p>;
  } else {
    view = (
      <>
        <div id="quiz">
          <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
              {QUESTIONS[activeQuestionIndex].answers.map((ans) => (
                <li key={ans} className="answer">
                  <button onClick={() => updateUserAnswer(ans)}>{ans}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }

  return view;
}

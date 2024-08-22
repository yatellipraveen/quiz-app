import { useState } from "react";
import QUESTIONS from "../questions";
import { QuestionTImer } from "./QuestionTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  let points = 0;
  let options;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  let correctAnswer;

  if(!quizIsComplete){
    options = [...QUESTIONS[activeQuestionIndex].answers].sort((option) => Math.random() - 0.5);
    correctAnswer = QUESTIONS[activeQuestionIndex].answers[0];
  }


  function updateUserAnswer(selectedAnswer) {
    if (!quizIsComplete && selectedAnswer === correctAnswer){
        points++;
    }
    setUserAnswers((prevAnswers) => { 
      return [...prevAnswers, selectedAnswer];
    });
  }

  let view;

  if (quizIsComplete) {
    view = <p>Congratulations!!! You scored {points * 10} points!</p>;
  } else {
    view = (
      <>
        <div id="quiz">
          <div id="question">
            <QuestionTImer setUserAnswer={updateUserAnswer}/>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
              {options.map((ans) => (
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

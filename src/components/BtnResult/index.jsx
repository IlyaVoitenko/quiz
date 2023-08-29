import React from "react";
import { quiz, handleResultQuiz } from "../../utils/helpers/quiz";

const BtnResult = () => {
  return <button onClick={() => handleResultQuiz(quiz)}>BtnResult</button>;
};

export default BtnResult;

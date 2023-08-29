import React from "react";
import QuizItem from "../QuizItem";
import { quiz } from "../../utils/helpers/quiz";

const Quiz = () => {
  return (
    <div>
      {quiz.map((item) => (
        <QuizItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Quiz;

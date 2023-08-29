import React from "react";
import VariantsQuiz from "./VariantsQuiz";

const QuizItem = ({ item }) => {
  return (
    <article key={item.id}>
      <span>{item.question}</span>
      <VariantsQuiz variants={item.variants} nameGroup={item.nameGroup} />
    </article>
  );
};

export default QuizItem;

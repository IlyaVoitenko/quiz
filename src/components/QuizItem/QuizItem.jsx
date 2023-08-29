import React from "react";
import VariantsQuiz from "./VariantsQuiz";

const QuizItem = ({ item }) => {
  return (
    <article key={item.id}>
      <span>{item.question}</span>
      <VariantsQuiz item={item} nameGroup={item.nameGroup} />
    </article>
  );
};

export default QuizItem;

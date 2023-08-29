import React from "react";
import { handleAnswer } from "../../../utils/helpers/quiz";

const VariantsQuiz = ({ item, nameGroup }) => {
  return (
    <>
      {item.variants.map((variant, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              id={variant.idVariant}
              name={nameGroup}
              value={variant.text}
              onChange={({ target }) => handleAnswer(target, item)}
            />
            <label htmlFor={variant.idVariant}>{variant.text}</label>
          </div>
        );
      })}
    </>
  );
};
export default VariantsQuiz;

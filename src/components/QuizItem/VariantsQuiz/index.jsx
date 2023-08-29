import React from "react";

const VariantsQuiz = ({ variants, nameGroup }) => {
  return (
    <>
      {variants.map((variant, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              id={index}
              name={nameGroup}
              value={variant.text}
              onChange={() => {}}
            />
            <label htmlFor={index}>{variant.text}</label>
          </div>
        );
      })}
    </>
  );
};
export default VariantsQuiz;

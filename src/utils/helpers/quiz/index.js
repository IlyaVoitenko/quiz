export const quiz = [
  {
    id: 1,
    nameGroup: "q-1",
    question: "is there a color blue?",
    variants: [
      {
        text: "yellow",
        isTrue: false,
        idVariant: 1,
      },
      { text: "blue", isTrue: true, idVariant: 2 },
      { text: "black", isTrue: false, idVariant: 3 },
      { text: "white", isTrue: false, idVariant: 4 },
    ],
    answer: {},
  },
  {
    id: 2,
    nameGroup: "q-2",
    question: "is there a color yellow?",
    variants: [
      {
        text: "yellow",
        isTrue: true,
        idVariant: 5,
      },
      { text: "blue", isTrue: false, idVariant: 6 },
      { text: "black", isTrue: false, idVariant: 7 },
      { text: "white", isTrue: false, idVariant: 8 },
    ],
    answer: {},
  },
];

export const handleAnswer = (target, item) => {
  const selected = item.variants.filter((item) => item.text === target.value);
  item.answer = selected[0];
  console.log(item);
};
export const handleResultQuiz = (quiz) => {
  const result = quiz.filter((item) => item.answer.isTrue === true);
  console.log(result);

  console.log(result.length, "/", quiz.length);
  console.log("quiz :", quiz);
};

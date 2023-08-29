import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEndQuiz: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setisEndQuiz: (state) => {
      state.isEndQuiz = true;
    },
  },
});

export const { setisEndQuiz } = quizSlice.actions;

export default quizSlice.reducer;

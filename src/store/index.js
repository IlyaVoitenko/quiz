import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./reducer/quiz";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;

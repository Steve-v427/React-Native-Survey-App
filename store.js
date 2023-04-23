import { configureStore } from "@reduxjs/toolkit";

import questionReducer from "./Slices/questionSlice";

const store = configureStore({
  reducer: {
    questionData: questionReducer,
  },
});

export default store;

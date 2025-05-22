import { configureStore } from "@reduxjs/toolkit";
import { studentSlice } from "./slises";

export const store = configureStore({
  reducer: {
    student: studentSlice.reducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { studentSlice, loadingSlice } from "./slises";

export const store = configureStore({
  reducer: {
    student: studentSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

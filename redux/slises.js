import { createSlice } from "@reduxjs/toolkit";
import { signInOperation, logoutOperation, refreshInfo } from "./operations";
import { deleteToken, setTokenToLocalStorage } from "../service/storage";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    value: null,
    loading: false,
    error: null,
  },

  reducers: {
    clearStudent: (state) => {
      state.value = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInOperation.pending, (state) => {
      state.loading = true;
      state.value = null;
      state.error = null;
      deleteToken();
    });
    builder.addCase(signInOperation.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.value = payload;
      setTokenToLocalStorage(payload.token);
      state.error = null;
    });
    builder.addCase(signInOperation.rejected, (state, { payload }) => {
      state.loading = false;
      state.value = null;
      state.error = payload;
      deleteToken();
    });
    builder.addCase(logoutOperation.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logoutOperation.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.value = null;
      state.error = null;
      deleteToken();
    });
    builder.addCase(logoutOperation.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(refreshInfo.pending, (state) => {
      state.loading = true;
      state.value = null;
      state.error = null;
    });
    builder.addCase(refreshInfo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.value = payload;
      state.error = null;
    });
    builder.addCase(refreshInfo.rejected, (state, { payload }) => {
      state.loading = false;
      state.value = null;
      state.error = payload;
      deleteToken();
    });
  },
});

export const { setToken, clearStudent } = studentSlice.actions;

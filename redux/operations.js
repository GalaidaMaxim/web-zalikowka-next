import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, logout, getStudent } from "../service/api";

export const signInOperation = createAsyncThunk(
  "student/signin",
  async (data, { rejectWithValue }) => {
    try {
      const result = await signIn(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logoutOperation = createAsyncThunk(
  "student/logout",
  async (data, { rejectWithValue }) => {
    try {
      const result = await logout(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const refreshInfo = createAsyncThunk(
  "refresh/student",
  async (data, { rejectWithValue }) => {
    try {
      const result = await getStudent(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

import axios from "axios";

// const baseURLRenderer = "https://webdecanatserver.onrender.com";
// const localBaseUrl = "http://localhost:3001/";

axios.defaults.baseURL = "/api";

export const signIn = async (ticketCode) => {
  const student = await axios.post("/students/auth", { ticketCode });
  return student.data;
};

export const getStudent = async (token) => {
  const data = await axios.get("/students/", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};

export const logout = async (token) => {
  const data = await axios.patch(
    "/students/logout",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data.data;
};

export const getSubjectsByPlan = async (token) => {
  const data = await axios.get("/subjects/department", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};

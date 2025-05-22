import { Header } from "../Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "@/service/storage";
import { refreshInfo } from "@/redux/operations";
import { useStudent } from "@/redux/selectors";

export const Outlet = ({ children }) => {
  const dispatch = useDispatch();
  const student = useStudent();
  useEffect(() => {
    const token = getToken();
    if (!token || student) {
      return;
    }
    dispatch(refreshInfo(token));
  }, [student]);
  return (
    <>
      <Header />
      {children}
    </>
  );
};

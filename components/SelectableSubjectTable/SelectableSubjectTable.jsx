import {
  Box,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Typography,
  Checkbox,
} from "@mui/material";

import { Fragment } from "react";
import { addSubject, removeSubject } from "@/redux/slises";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";

const StyledTableCell = styled(TableCell)`
  padding: 0px 16px 0px 16px;
`;

const semestersFilter = (semesters = []) => {
  const arr = [];
  semesters.forEach((sem, index) => {
    if (sem.include) {
      arr.push(index + 1);
    }
  });
  return arr.join(" ");
};

export const SelectableSubjectTable = ({
  title,
  planSubjects = [],
  studentStudjects = [],
  addSpec = false,
  disabled = false,
}) => {
  const dispatch = useDispatch();
  const specs = planSubjects.reduce((acc, item) => {
    if (acc.includes(item.aditionalSpecialityName)) {
      return acc;
    }
    acc.push(item.aditionalSpecialityName);
    return acc;
  }, []);
  const subArr = [];
  specs.forEach((spec) => {
    const subjArr = planSubjects.filter(
      (item) => item.aditionalSpecialityName === spec
    );
    subArr.push(subjArr);
  });

  const onClick = (subject) => {
    return ({ target }) => {
      if (target.checked) {
        dispatch(addSubject(subject));
      } else {
        dispatch(removeSubject(subject));
      }
    };
  };

  return (
    <Box marginTop={4}>
      <Typography variant="h3">{title}</Typography>
      {!addSpec ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Назва</TableCell>
              <TableCell>Кількість кредитів</TableCell>
              <TableCell>Семестри вивчення</TableCell>
              <TableCell>Вибір</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {planSubjects.map((subject) => (
              <TableRow key={subject._id}>
                <StyledTableCell sx={{ width: "400px" }}>
                  {subject.name}
                </StyledTableCell>
                <StyledTableCell sx={{ width: "200px" }}>
                  {subject.credits}
                </StyledTableCell>
                <StyledTableCell sx={{ width: "200px" }}>
                  {semestersFilter(subject.semesters)}
                </StyledTableCell>
                <StyledTableCell>
                  <Checkbox
                    onChange={onClick(subject)}
                    checked={studentStudjects.some(
                      (item) => item._id === subject._id
                    )}
                    disabled={disabled}
                  />
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <>
          {specs.map((item, index) => (
            <Fragment key={item}>
              <Typography sx={{ marginTop: "60px" }} variant="body2">
                {item}
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Назва</TableCell>
                    <TableCell>Кількість кредитів</TableCell>
                    <TableCell>Семестри вивчення</TableCell>
                    <TableCell>Вибір</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subArr[index].map((subject) => (
                    <TableRow key={subject._id}>
                      <StyledTableCell sx={{ width: "400px" }}>
                        {subject.name}
                      </StyledTableCell>
                      <StyledTableCell sx={{ width: "200px" }}>
                        {subject.credits}
                      </StyledTableCell>
                      <StyledTableCell sx={{ width: "200px" }}>
                        {semestersFilter(subject.semesters)}
                      </StyledTableCell>
                      <StyledTableCell>
                        <Checkbox
                          onChange={onClick(subject)}
                          checked={studentStudjects.some(
                            (item) => item._id === subject._id
                          )}
                          disabled={disabled}
                        />
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Fragment>
          ))}
        </>
      )}
    </Box>
  );
};

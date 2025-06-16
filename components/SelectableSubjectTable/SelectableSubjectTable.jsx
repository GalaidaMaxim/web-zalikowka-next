import {
  Box,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Typography,
} from "@mui/material";

const semestersFilter = (semesters = []) => {
  const arr = [];
  semesters.forEach((sem, index) => {
    if (sem.include) {
      arr.push(index + 1);
    }
  });
  return arr.join(" ");
};

export const SelectableSubjectTable = ({ title, planSubjects }) => {
  return (
    <Box marginTop={4}>
      <Typography variant="h3">{title}</Typography>
      <Table>
        <TableHead>
          <TableCell>Назва</TableCell>
          <TableCell>Кількість кредитів</TableCell>
          <TableCell>Семестри вивчення</TableCell>
        </TableHead>
        <TableBody>
          {planSubjects.map((subject) => (
            <TableRow key={subject._id}>
              <TableCell>{subject.name}</TableCell>
              <TableCell>{subject.credits}</TableCell>
              <TableCell>{semestersFilter(subject.semesters)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

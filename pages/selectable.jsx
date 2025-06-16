import { useStudent } from "../redux/selectors";
import { ContainerCustom } from "../components/Container/Container";
import { StudentHead } from "../components/StudentHead/StudentHead";
import { Outlet } from "@/components/Outlet/Outlet";
import { useEffect, useState } from "react";
import { getToken } from "@/service/storage";
import { useRouter } from "next/router";
import { getSubjectsByPlan, getEducationPlan } from "@/service/api";

import { Box, Paper, Typography, Button } from "@mui/material";
import { SelectableSubjectTable } from "@/components/SelectableSubjectTable/SelectableSubjectTable";

export default function Selectable() {
  const router = useRouter();
  const student = useStudent();
  const [planSubjects, setPlanSubjects] = useState([]);
  const [plan, setPlan] = useState({});
  useEffect(() => {
    if (!student && !getToken()) {
      router.push("/");
      return;
    }
    (async () => {
      const planSubjects = await getSubjectsByPlan(getToken());
      setPlanSubjects(planSubjects);
      if (!student) {
        return;
      }
      const plan = await getEducationPlan(student.educationPlan);
      setPlan(plan);
    })();
  }, [student, router, setPlan]);

  const credits = student
    ? student.subjects.reduce((acc, item) => {
        return acc + item.credits;
      }, 0)
    : 0;

  return (
    <Outlet>
      <ContainerCustom>
        {student && (
          <Paper>
            <Box padding={2}>
              <StudentHead student={student} />
              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <Typography variant="body1">Кредити</Typography>
                <Typography
                  sx={{ fontWeight: 700, fontSize: "40px" }}
                  variant="h3"
                >
                  {credits}
                </Typography>
                <Typography variant="body1">необхідно</Typography>
                <Typography
                  sx={{ fontWeight: 700, fontSize: "40px" }}
                  variant="h3"
                >
                  {plan && plan.credits}
                </Typography>
              </Box>
              <SelectableSubjectTable
                title="Обов'зкові дисципліни"
                planSubjects={planSubjects.filter(
                  (sub) => sub.code.charAt(0) === "1"
                )}
                studentStudjects={student.subjects}
                disabled
              />
              <SelectableSubjectTable
                title="Профільні дисципліни"
                planSubjects={planSubjects.filter(
                  (sub) => sub.code.charAt(0) === "2"
                )}
                studentStudjects={student.subjects}
                disabled
              />

              <SelectableSubjectTable
                title="Дисципліни додаткових кваліфікацій"
                planSubjects={planSubjects.filter(
                  (sub) => sub.code.charAt(0) === "3"
                )}
                addSpec
                studentStudjects={student.subjects}
              />
              <SelectableSubjectTable
                title="Вибіркові дисципліни"
                planSubjects={planSubjects.filter(
                  (sub) => sub.code.charAt(0) === "4"
                )}
                studentStudjects={student.subjects}
              />
              <Box sx={{ marginTop: "20px" }}>
                <Button variant="contained">Зберегти план</Button>
              </Box>
            </Box>
          </Paper>
        )}
      </ContainerCustom>
    </Outlet>
  );
}

import { useStudent } from "../redux/selectors";
import { ContainerCustom } from "../components/Container/Container";
import { StudentHead } from "../components/StudentHead/StudentHead";
import { Outlet } from "@/components/Outlet/Outlet";
import { useEffect, useState } from "react";
import { getToken } from "@/service/storage";
import { useRouter } from "next/router";
import { getSubjectsByPlan } from "@/service/api";

import { Box, Paper } from "@mui/material";
import { SelectableSubjectTable } from "@/components/SelectableSubjectTable/SelectableSubjectTable";

export default function Selectable() {
  const router = useRouter();
  const student = useStudent();
  const [planSubjects, setPlanSubjects] = useState([]);
  useEffect(() => {
    if (!student && !getToken()) {
      router.push("/");
      return;
    }
    (async () => {
      const planSubjects = await getSubjectsByPlan(getToken());
      setPlanSubjects(planSubjects);
    })();
  }, [student, router]);

  return (
    <Outlet>
      <ContainerCustom>
        {student && (
          <Paper>
            <Box padding={2}>
              <StudentHead student={student} />
              <SelectableSubjectTable
                title="Обов'зкові дисципліни"
                planSubjects={planSubjects.filter(
                  (sub) => sub.code.charAt(0) === "1"
                )}
              />
              <SelectableSubjectTable
                title="Профільні дисципліни"
                planSubjects={planSubjects.filter(
                  (sub) => sub.code.charAt(0) === "2"
                )}
              />

              <SelectableSubjectTable
                title="Дисципліни додаткових кваліфікацій"
                planSubjects={planSubjects.filter(
                  (sub) => sub.code.charAt(0) === "3"
                )}
              />
              <SelectableSubjectTable
                title="Вибіркові дисципліни"
                planSubjects={planSubjects.filter(
                  (sub) => sub.code.charAt(0) === "4"
                )}
              />
            </Box>
          </Paper>
        )}
      </ContainerCustom>
    </Outlet>
  );
}

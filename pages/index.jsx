import { Typography, Box, Paper } from "@mui/material";
import { ContainerCustom } from "../components/Container/Container";
import { Outlet } from "@/components/Outlet/Outlet";

export default function MainPage() {
  return (
    <Outlet>
      <ContainerCustom>
        <Paper>
          <Box padding={2} display={"flex"} flexDirection={"column"} gap={3}>
            <Typography variant="body1">
              <Typography component="span" variant="h2">
                {"Web заліковка "}
              </Typography>
              online сервіс, створений для контролю студентами КМАМ ім. Р. М.
              Глієра їх індивідуальних планів, робочих планів а також
              успішності.
            </Typography>
            <Typography variant="body2">
              Для отримання доступу до сервісу необхідно звернутись до деканату
              академії, де вам нададуть код доступу до вашої інформації
            </Typography>
            <Typography variant="body2">
              В особистому кабінеті ви можете ознайомитись з предметами, які
              були додані до вашого навчального плану і плануються до вашого
              вивчення протягом навчання.
            </Typography>
            <Typography variant="body2">
              На сторішки "оцінки" ви можете ознайомитись з переліком предметів,
              що будуть вивчатись протягом песного семестру. Також на цій
              сторінці будуть відображатись оцінки, отримані за песну
              дисципліну.
            </Typography>
            <Typography variant="body2">
              Звертаємо увагу, що актуальна інформація щодо оцінок починається з
              <Typography variant="h3" component={"span"}>
                {" літньої сесії 2024 року."}
              </Typography>
            </Typography>
            <Typography variant="body2">
              Також, оримання оцінки на заліку чи іспиті не є гарантією
              моментального її оновлення на сторінці. Основним джерелом вашої
              оцінки є документ затверджений викладачам або екзаменатором тобто
              відомість або залікова книжка. І обробка цієї інформації і її
              додавання в систему займає певний час.
            </Typography>
            <Typography variant="body2">
              У разі виявлення вами невідповідності в індивідуальному плані або
              оцінці (наприкіці сесії) просимо не зволікати і звернутись до
              деканату.
            </Typography>
            <Typography variant="body2"></Typography>
          </Box>
        </Paper>
      </ContainerCustom>
    </Outlet>
  );
}

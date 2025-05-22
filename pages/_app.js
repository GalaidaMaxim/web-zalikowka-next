import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/storage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from "@/theme/darkTheme";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

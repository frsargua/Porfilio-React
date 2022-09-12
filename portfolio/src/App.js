import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import "./App.css";
import PortfolioContainer from "./components/PortfolioContainer";

const theme = createTheme({
  typography: { fontFamily: ["Poppins"].join(",") },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PortfolioContainer></PortfolioContainer>
    </ThemeProvider>
  );
}

export default App;

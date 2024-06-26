import "./index.css";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Header1, Header2, Header3 } from "./components/header/index";
import { Hero, Main, Footer,ScrollToUP } from "./components/hero/index";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header1 />
          <Header2 />
          <Header3 />
          <Box bgcolor={theme.palette.bg.main}>
            <Hero />
            <Main />
          </Box>
          <Footer />
          <ScrollToUP/>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;

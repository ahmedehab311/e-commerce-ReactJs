import "./index.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header1 from "./components/header/Header1/Header1";
import Header2 from "./components/header/Header2/Header2";
import Header3 from "./components/Header3/Header3";
import Hero from "./components/hero/Hero";
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
          <Hero />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;

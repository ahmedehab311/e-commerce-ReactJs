import "./index.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header1, Header2, Header3 } from "./components/header/index";
import { Hero } from "./components/hero/index";
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

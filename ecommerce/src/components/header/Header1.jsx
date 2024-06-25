import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, useTheme } from "@mui/material";
// import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import {DarkModeOutlined,LightModeOutlined} from "@mui/icons-material"
function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
<Box sx={{
  bgcolor:"#283445"
}}>

      <div>
        {theme.palette.mode === "light" ? (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlined />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlined />
          </IconButton>
        )}
      </div>
      </Box>
  );
}

export default Header1;

import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@mui/material";

function ToggleFilter() {
  const [alignment, setAlignment] = useState("left");

  const theme = useTheme();
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <ToggleButtonGroup
      color="error"
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
        ".Mui-selected": {
          border: "1px solid rgba(233, 69, 96, 0.5) !important",
          color: "#e94560",
          backgroundColor: "initial",
        },
      }}
    >
      <ToggleButton
        sx={{ color: theme.palette.text.primary }}
        className="mybutton"
        value="left"
        aria-label="left aligned"
      >
        All Products
      </ToggleButton>

      <ToggleButton
      
        className="mybutton"
        value="center"
        aria-label="centered"
        sx={{ mx: "16px !important",  color: theme.palette.text.primary}}
      >
        MEN category
      </ToggleButton>
      <ToggleButton
          sx={{ color: theme.palette.text.primary }}
        className="mybutton"
        value="right"
        aria-label="right aligned"
      >
        Women category
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleFilter;

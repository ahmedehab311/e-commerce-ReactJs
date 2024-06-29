import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

function ScrollToUP() {
  return (
    <Zoom in={useScrollTrigger({ threshold: 100 })}>
      <Fab
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
}

export default ScrollToUP;

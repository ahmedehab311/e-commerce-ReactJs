import { Box, Container } from "@mui/material";
import { Slider, BoxImages, IconSection } from "./index";
import "./hero.css";
function Hero() {
  return (
    <Container>
      <Box
        sx={{ pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}
      >
        <Slider />
        <BoxImages />
      </Box>
      <IconSection />
    </Container>
  );
}

export default Hero;

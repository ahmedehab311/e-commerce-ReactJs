import { Container } from "@mui/material";
import Box2 from "./BoxImegs/BoxImages";
import Slider from "./Slider/Slider";
import "./hero.css"
function Hero() {
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center", gap:2 }}>
      <Slider />
      <Box2 />
    </Container>
  );
}

export default Hero;

import { Container } from "@mui/material";
import { Slider,BoxImages} from "./index"
import "./hero.css"
function Hero() {
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center", gap:2 }}>
      <Slider />
      <BoxImages />
    </Container>
 
  );
}

export default Hero;
